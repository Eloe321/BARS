"use client";

import { type Song, MusicSource } from "@workspace/types";
import { useAuth } from "@workspace/ui/components/context/authContext";
import { toast } from "sonner";
import { useErrorHandler } from "../../hooks/editor/use-error-handler";
import {
  formatMusicName,
  formatQuotesFromMusicName,
} from "@/components/functions/formatMusicName";

interface SongManagerProps {
  selectedSong: Song | null;
  fileName: string;
  fullTrackName: string | null;
  trackUrl: string | null;
  trackName: string | null;
  contentJson: string;
  onSongUpdate: (song: Song) => void;
  onMusicDataUpdate: (data: any) => void;
  onTrackChange: (url: string, name: string, fullName: string) => void;
  onResetForNewSong: () => void;
}

export const useSongManager = ({
  selectedSong,
  fileName,
  fullTrackName,
  trackUrl,
  trackName,
  contentJson,
  onSongUpdate,
  onMusicDataUpdate,
  onTrackChange,
  onResetForNewSong,
}: SongManagerProps) => {
  const { user, token } = useAuth();
  const { handleError } = useErrorHandler();

  // Validation utility
  const validateSaveConditions = (): { isValid: boolean; error?: string } => {
    if (!user?.id) {
      return { isValid: false, error: "You must be logged in to save songs." };
    }

    if (!trackUrl || !trackName || !fullTrackName) {
      return {
        isValid: false,
        error: "Please select a track before saving your song.",
      };
    }

    const currentContent = contentJson || "";
    if (!currentContent.trim()) {
      return {
        isValid: false,
        error: "Cannot save an empty song. Please add some lyrics first.",
      };
    }

    return { isValid: true };
  };

  // Perform the actual save operation
  const performSave = async (
    songName: string,
    content: string
  ): Promise<boolean> => {
    try {
      // Fetch music data
      let fetchedMusicData;
      try {
        toast.loading("Loading music data...", { id: "save-progress" });

        const response = await fetch(
          `api/music?type=uploaded&name="${fullTrackName}"`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 401) {
          throw new Error("Your session has expired. Please log in again.");
        }

        if (response.status === 404) {
          throw new Error(
            "The selected music track could not be found. Please select a different track."
          );
        }

        if (!response.ok) {
          throw new Error(
            `Failed to load music data. Server responded with status ${response.status}.`
          );
        }

        fetchedMusicData = await response.json();
        onMusicDataUpdate(fetchedMusicData);
      } catch (error) {
        handleError(error, "music data fetch");
        return false;
      }

      // Save or update song
      if (!selectedSong) {
        return await createNewSong(songName, content, fetchedMusicData);
      } else {
        return await updateExistingSong(songName, content, fetchedMusicData);
      }
    } catch (error) {
      handleError(error, "song save operation");
      return false;
    }
  };

  // Create new song
  const createNewSong = async (
    songName: string,
    content: string,
    musicData: any
  ): Promise<boolean> => {
    try {
      toast.loading("Creating new song...", { id: "save-progress" });

      const songData = {
        user_id: user!.id,
        title: songName,
        content: content,
        musicSource: MusicSource.UPLOADED,
        uploaded_music_id: musicData.music_id,
        creation_date: new Date().toISOString(),
      };

      const response = await fetch("/api/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(songData),
      });

      if (response.status === 401) {
        throw new Error("Your session has expired. Please log in again.");
      }

      if (response.status === 409) {
        throw new Error(
          "A song with this name already exists. Please choose a different name."
        );
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `Failed to save song. Server error: ${response.status}`
        );
      }

      const savedSongData = await response.json();
      onSongUpdate(savedSongData);

      return true;
    } catch (error) {
      handleError(error, "new song creation");
      return false;
    }
  };

  // Update existing song
  const updateExistingSong = async (
    songName: string,
    content: string,
    musicData: any
  ): Promise<boolean> => {
    try {
      toast.loading("Updating song...", { id: "save-progress" });

      const songData = {
        title: songName,
        content: content,
        musicSource: MusicSource.UPLOADED,
        uploaded_music_id: musicData.music?.id || musicData.music_id,
      };

      const response = await fetch(`/api/songs?id=${selectedSong?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(songData),
      });

      if (response.status === 401) {
        throw new Error("Your session has expired. Please log in again.");
      }

      if (response.status === 404) {
        throw new Error("The song you're trying to update no longer exists.");
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            `Failed to update song. Server error: ${response.status}`
        );
      }

      const updatedSongData = await response.json();
      onSongUpdate(updatedSongData);

      return true;
    } catch (error) {
      handleError(error, "song update");
      return false;
    }
  };

  // Enhanced save song function with modal and better error handling
  const handleSongSave = async (): Promise<boolean> => {
    // Validate conditions before proceeding
    const validation = validateSaveConditions();
    if (!validation.isValid) {
      toast.error(validation.error!, {
        duration: 4000,
      });
      return false;
    }

    const currentContent = contentJson || "";

    try {
      toast.loading("Preparing to save your song...", { id: "save-progress" });

      const currentFileName = fileName;

      // If it's a new file, return false to trigger modal
      if (fileName === "untitled") {
        toast.dismiss("save-progress");
        return false; // Will continue in handleSongNameConfirm
      }

      return await performSave(currentFileName, currentContent);
    } catch (error) {
      handleError(error, "song save initialization");
      return false;
    } finally {
      toast.dismiss("save-progress");
    }
  };

  // Handle song name confirmation from modal
  const handleSongNameConfirm = async (newName: string): Promise<boolean> => {
    if (!newName.trim()) {
      toast.error("Song name cannot be empty");
      return false;
    }

    const currentContent = contentJson || "";

    toast.loading("Saving your song...", { id: "save-progress" });

    const success = await performSave(newName, currentContent);

    toast.dismiss("save-progress");

    if (success) {
      toast.success(`Song "${newName}" saved successfully!`, {
        duration: 3000,
      });
    }

    return success;
  };

  // Handle song selection
  const handleSongSelect = async (song: Song | null) => {
    if (song) {
      console.log("Selected song content:", song.content);

      try {
        toast.loading("Loading song data...", { id: "song-load" });

        const response = await fetch(
          `/api/music?type=uploaded&id=${song.uploaded_music_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load song's music data");
        }

        const musicData = await response.json();

        onTrackChange(
          musicData.path,
          formatMusicName(formatQuotesFromMusicName(musicData.music_name)),
          formatQuotesFromMusicName(musicData.music_name)
        );

        onSongUpdate(song);

        toast.success("Song loaded successfully", { id: "song-load" });
      } catch (error) {
        handleError(error, "song selection");
        toast.dismiss("song-load");
      }
    } else {
      // New song - reset everything to clean state
      console.log("Creating new song - resetting all state");
      onResetForNewSong();
    }
  };

  return {
    handleSongSave,
    handleSongNameConfirm,
    handleSongSelect,
    validateSaveConditions,
  };
};
