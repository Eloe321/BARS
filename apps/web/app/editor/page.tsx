"use client";

import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import EditorHeader from "@workspace/ui/components/editor/editor-header";
import TimelineSidebar from "@workspace/ui/components/editor/timeline-sidebar";
import EditorTopBar from "@workspace/ui/components/editor/editor-topbar";
import MediaControls from "@workspace/ui/components/editor/media-control";
import LyricsEditor, {
  LyricsEditorRef,
} from "@workspace/ui/components/editor/editor-canvas";
import ThesaurusSidebar from "@workspace/ui/components/editor/thesaurus-sidebar";
import SongSelection from "@workspace/ui/components/editor/song-selection";
import ProtectedRoute from "../../components/auth/protected-route";
import { Song, MusicSource } from "@workspace/types";
import { useAuth } from "@workspace/ui/components/context/authContext";
import {
  formatMusicName,
  formatQuotesFromMusicName,
} from "@/components/functions/formatMusicName";
import { toast } from "sonner";

export default function EditorPage() {
  const { user, token } = useAuth();
  // Song selection state
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [showSongSelection, setShowSongSelection] = useState(true);
  const [savedSong, setSavedSong] = useState<Song | null>(null);

  //media controls
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [trackUrl, setTrackUrl] = useState<string | null>(null);
  const [trackName, setTrackName] = useState<string | null>(null);
  const [fullTrackName, setFullTrackName] = useState<string | null>(null); // Add this state
  const [audioLoading, setAudioLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  //editor topbar
  const [fileName, setFileName] = useState("untitled.bar");
  const [showGrid, setShowGrid] = useState(false);
  const [showLayers, setShowLayers] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [MusicData, setMusicData] = useState<any>(null);

  //editor canvas
  const editorRef = useRef<LyricsEditorRef>(null);
  const [songLyrics, setSongLyrics] = useState<string>("");

  const [isSaving, setIsSaving] = useState(false);

  // Save song function
  const handleSongSave = async (): Promise<boolean> => {
    if (!user?.id) {
      console.error("User not authenticated");
      return false;
    }

    // Get the current content from the editor
    const currentContent = editorRef.current?.getContent() || "";
    setSongLyrics(currentContent);

    console.log("checking if all the variables is correct:");
    console.log("user id: ", user.id);
    console.log("selected song: ", selectedSong);
    console.log("file name: ", fileName);
    console.log("song lyrics: ", currentContent);
    console.log("track url: ", trackUrl);
    console.log("track name: ", trackName);
    console.log("full track name: ", fullTrackName);
    console.log("The content of the song: ", currentContent);
    try {
      setIsSaving(true);

      let currentFileName = fileName;

      // If it's a new file, prompt for name
      if (fileName === "untitled.bar") {
        const newName = prompt("Enter a name for your song:");
        if (!newName) return false; // User cancelled
        currentFileName = newName;
        setFileName(currentFileName);
      }

      let fetchedMusicData;
      try {
        const response = await fetch(
          `api/music?type=uploaded&name="${fullTrackName}"`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Check for 401 Unauthorized status
        if (response.status === 401) {
          throw new Error("Unauthorized access. Please log in.");
        }

        // Check for other response statuses
        if (!response.ok) {
          throw new Error(
            "Failed to fetch music data. Status: " + response.status
          );
        }

        fetchedMusicData = await response.json();
        setMusicData(fetchedMusicData);
      } catch (error: any) {
        console.error("Error fetching music:", error);
        toast.error(error.message);
      }

      if (!selectedSong) {
        const songData = {
          user_id: user.id,
          title: currentFileName,
          content: songLyrics,
          musicSource: MusicSource.UPLOADED,
          uploaded_music_id: fetchedMusicData.music_id,
          creation_date: new Date().toISOString(),
        };

        try {
          const response = await fetch("/api/songs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(songData),
          });
          if (!response.ok) {
            throw new Error("Failed to save song");
          }

          const savedSongData = await response.json();
          setSavedSong(savedSongData);
          setSelectedSong(savedSong);
        } catch (error: any) {
          console.error("Error saving song:", error);
          alert("Failed to save song. Please try again.");
          return false;
        }
      } else {
        const songData = {
          title: currentFileName,
          content: songLyrics,
          musicSource: MusicSource.UPLOADED,
          uploaded_music_id: fetchedMusicData.music.id,
        };

        try {
          const response = await fetch(`/api/songs?id=${selectedSong?.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(songData),
          });

          if (!response.ok) {
            throw new Error("Failed to save song");
          }

          const updatedSongData = await response.json();
          setSavedSong(updatedSongData);
          setSelectedSong(updatedSongData);
        } catch (error: any) {
          console.error("Error saving song: ", error);
        }
      }

      console.log("Song saved successfully:", savedSong);
      return true;
    } catch (error) {
      console.error("Error saving song:", error);
      alert("Failed to save song. Please try again.");
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const handleLyricsChange = (content: string) => {
    // This function is no longer needed but we'll keep it for now
    // in case we need to handle any other editor-related state changes
  };

  // Handle song selection
  const handleSongSelect = async (song: Song | null) => {
    setSelectedSong(song);
    setShowSongSelection(false);

    if (song) {
      setFileName(song.title);
      setSongLyrics(song.content || "");
      console.log("The song music id: ", song.uploaded_music_id);

      const response = await fetch(
        `/api/music?type=uploaded&id=${song.uploaded_music_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const musicData = await response.json();

      if (!response.ok) {
        throw new Error("Failed to fetch music data");
      }

      handleTrackChange(
        musicData.path,
        formatMusicName(formatQuotesFromMusicName(musicData.music_name)),
        formatQuotesFromMusicName(musicData.music_name)
      );

      // You can load other song data into the editor here
    } else {
      // New song - reset everything
      setFileName("untitled.bar");
      resetPlayer();
      // Reset other editor state as needed
    }
  };

  // Add a function to go back to song selection
  const handleBackToSongSelection = () => {
    setShowSongSelection(true);
    setSelectedSong(null);
    resetPlayer();
  };

  useEffect(() => {
    // Setup audio element event listeners
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      setDuration(audio.duration || 0);
      setAudioLoading(false); // Audio is ready
    };

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
    };

    const handleLoadStart = () => {
      setAudioLoading(true);
    };

    const handleCanPlay = () => {
      setAudioLoading(false);
    };

    const handleError = (e: Event) => {
      console.error("Audio error:", e);
      setAudioLoading(false);
      setIsPlaying(false);
    };

    // Add event listeners
    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    // Clean up
    return () => {
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  // Effect to handle play/pause state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || audioLoading) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, audioLoading]);

  const togglePlay = () => {
    if (audioLoading || !trackUrl) return;
    setIsPlaying((prev) => !prev);
  };

  const handleSliderChange = (value: number[]) => {
    if (audioLoading) return;

    const newTime = ((value[0] ?? 0) / 100) * duration;

    if (audioRef.current && duration > 0) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(value[0] ?? 0);
    }
  };

  const resetPlayer = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Reset all state
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    setDuration(0);
    setAudioLoading(false);
    setTrackUrl(null);
    setTrackName(null);
    setFullTrackName(null);
  };

  const handleTrackChange = (
    newTrackUrl: string,
    newTrackName: string,
    newFullTrackName: string
  ) => {
    const audio = audioRef.current;
    if (!audio) return;

    setAudioLoading(true);

    setTrackUrl(newTrackUrl);
    setTrackName(newTrackName);
    setFullTrackName(newFullTrackName);
    // Reset player state
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    setDuration(0);

    // Pause current audio and reset
    audio.pause();
    audio.currentTime = 0;

    // Load new track
    audio.src = newTrackUrl;
    audio.load(); // Force reload of the audio element
  };

  //for file actions
  const handleFileAction = async (action: string) => {
    console.log(`File action: ${action}`);

    switch (action) {
      case "new":
        // Reset to new file
        setFileName("untitled.bar");
        // Reset editor content, timeline, etc.
        // You can add more reset logic here
        break;
      case "open":
        handleBackToSongSelection();
        // Open file dialog or show file picker
        // This would typically integrate with your file system or cloud storage
        break;
      case "save":
        // Save current file
        const saved = await handleSongSave();
        if (saved) {
          toast.success("Song saved successfully");
        } else {
          toast.error("Failed to save song");
        }
        // Implement save logic here
        break;
      case "save-as":
        // Show save as dialog
        // This would typically show a dialog to choose new filename
        const newName = prompt("Enter filename:", fileName);
        if (newName) {
          setFileName(newName);
        }
        break;
      case "export":
        // Export current project
        // This could export to different formats
        break;
      case "import":
        // Import file or project
        // This could trigger a file input dialog
        break;
      default:
        break;
    }
  };

  const handleEditAction = (action: string) => {
    console.log(`Edit action: ${action}`);

    switch (action) {
      case "undo":
        // Implement undo functionality
        // This would typically work with your editor's history state
        break;
      case "redo":
        // Implement redo functionality
        break;
      case "cut":
        // Cut selected content
        // This would work with the currently selected text/elements
        break;
      case "copy":
        // Copy selected content
        break;
      case "paste":
        // Paste from clipboard
        break;
      case "find":
        // Show find dialog or focus search
        // This could show a search overlay or focus a search input
        break;
      case "replace":
        // Show find and replace dialog
        break;
      default:
        break;
    }
  };

  const handleSelectAction = (action: string) => {
    console.log(`Select action: ${action}`);

    switch (action) {
      case "all":
        // Select all content in the editor
        break;
      case "none":
        // Clear all selections
        break;
      case "inverse":
        // Invert current selection
        break;
      case "move":
        // Switch to move tool
        break;
      case "rectangle":
        // Switch to rectangle select tool
        break;
      default:
        break;
    }
  };

  const handleViewAction = (action: string) => {
    console.log(`View action: ${action}`);

    switch (action) {
      case "zoom-in":
        setZoom((prev) => Math.min(prev + 25, 500));
        break;
      case "zoom-out":
        setZoom((prev) => Math.max(prev - 25, 25));
        break;
      case "fit-screen":
        setZoom(100);
        break;
      case "grid":
        setShowGrid((prev) => !prev);
        break;
      case "layers":
        setShowLayers((prev) => !prev);
        break;
      case "fullscreen":
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
          setIsFullscreen(true);
        } else {
          document.exitFullscreen();
          setIsFullscreen(false);
        }
        break;
      default:
        break;
    }
  };

  const handleCollabAction = (action: string) => {
    console.log(`Collaboration action: ${action}`);

    switch (action) {
      case "invite":
        // Show invite users dialog
        // This would typically show a modal with user invitation form
        break;
      case "share":
        // Generate and show share link
        // This could copy a shareable link to clipboard
        break;
      case "comments":
        // Toggle comments panel or show comments
        // This could show/hide a comments sidebar
        break;
      case "history":
        // Show version history
        // This could show a timeline of changes
        break;
      case "permissions":
        // Show permissions settings
        // This could show a dialog for managing user permissions
        break;
      default:
        break;
    }
  };
  return (
    <ProtectedRoute>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="flex h-screen flex-col bg-[#0a192f] text-white">
          <EditorHeader />
          {showSongSelection ? (
            <SongSelection onSongSelect={handleSongSelect} />
          ) : (
            <div className="flex flex-1 overflow-hidden">
              <TimelineSidebar />

              <div className="flex flex-1 flex-col overflow-hidden">
                <EditorTopBar
                  onFileAction={handleFileAction}
                  onEditAction={handleEditAction}
                  onSelectAction={handleSelectAction}
                  onViewAction={handleViewAction}
                  onCollabAction={handleCollabAction}
                />

                <MediaControls
                  isPlaying={isPlaying}
                  togglePlay={togglePlay}
                  currentTime={currentTime}
                  duration={duration}
                  progress={progress}
                  handleSliderChange={handleSliderChange}
                  onTrackChange={handleTrackChange}
                  onResetPlayer={resetPlayer}
                  audioLoading={audioLoading}
                  currentTrackName={trackName}
                  currentFullTrackName={fullTrackName}
                />

                <LyricsEditor ref={editorRef} lyricsContent={songLyrics} />
              </div>

              <ThesaurusSidebar />
            </div>
          )}

          {/* Audio element for playback */}
          <audio ref={audioRef} className="hidden" preload="metadata">
            Your browser does not support the audio element.
          </audio>
        </div>
      </ThemeProvider>
    </ProtectedRoute>
  );
}
