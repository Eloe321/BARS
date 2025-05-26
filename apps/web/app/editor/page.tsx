"use client";

import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
// import { useAudioPlayer } from "@workspace/ui/hooks/useAudioPlayer";
// import { useFileUpload } from "@workspace/ui/hooks/useFileUpload";
// import { useProgress } from "@workspace/ui/hooks/useProgress";
import { useSongAlign } from "@workspace/ui/hooks/useSongAlign";
import LyricsEditor from "@workspace/ui/components/editor/editor-canvas";
import EditorTopBar from "@workspace/ui/components/editor/editor-topbar";
import MediaControls from "@workspace/ui/components/editor/media-control";
import ThesaurusSidebar from "@workspace/ui/components/editor/thesaurus-sidebar";
import SongSelection from "@workspace/ui/components/editor/song-selection";
import ProtectedRoute from "@/components/auth/protected-route";
import SongNameModal from "@/components/modals/song-name-modal";
import { type Song, MusicSource } from "@workspace/types";
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

  // Modal state
  const [showSongNameModal, setShowSongNameModal] = useState(false);
  const [pendingSave, setPendingSave] = useState(false);

  //media controls
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [trackUrl, setTrackUrl] = useState<string | null>(null);
  const [trackName, setTrackName] = useState<string | null>(null);
  const [fullTrackName, setFullTrackName] = useState<string | null>(null);
  const [audioLoading, setAudioLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  //editor topbar
  const [fileName, setFileName] = useState("untitled.bar");
  const [showGrid, setShowGrid] = useState(false);
  const [showLayers, setShowLayers] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [MusicData, setMusicData] = useState<any>(null);
  const [ songLyrics, setSongLyrics ] = useState<string>("");

  //editor canvas
  const [analyzedVerses, setAnalyzedVerses] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const { contentJson, lyricsText, handleCellsUpdate } = useSongAlign();
  const [isAligning, setIsAligning] = useState<boolean>(false);

  // thesaurus
  const [thesaurusWord, setThesaurusWord] = useState<string>("");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const handleThesaurus = async (word: string) => {
    setShowSidebar(true);
    setThesaurusWord(word);
  }

  // Enhanced error handling utility
  const handleError = (error: any, context: string) => {
    console.error(`Error in ${context}:`, error);

    let userMessage = "An unexpected error occurred. Please try again.";

    if (error.message) {
      if (
        error.message.includes("Unauthorized") ||
        error.message.includes("401")
      ) {
        userMessage = "Your session has expired. Please log in again.";
      } else if (error.message.includes("Failed to fetch")) {
        userMessage =
          "Network error. Please check your connection and try again.";
      } else if (error.message.includes("Failed to save")) {
        userMessage =
          "Failed to save your song. Please try again or contact support.";
      } else if (error.message.includes("Failed to fetch music data")) {
        userMessage =
          "Could not load music data. Please try selecting the track again.";
      } else {
        userMessage = error.message;
      }
    }

    toast.error(userMessage, {
      duration: 5000,
      action: {
        label: "Dismiss",
        onClick: () => {},
      },
    });
  };

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

    // Get the current content from the editor
    const currentContent = contentJson || "";
    setSongLyrics(currentContent);

    try {
      setIsSaving(true);
      toast.loading("Preparing to save your song...", { id: "save-progress" });

      const currentFileName = fileName;

      // If it's a new file, show modal for name input
      if (fileName === "untitled.bar") {
        setPendingSave(true);
        setShowSongNameModal(true);
        toast.dismiss("save-progress");
        setIsSaving(false);
        return false; // Will continue in handleSongNameConfirm
      }

      return await performSave(currentFileName, currentContent);
    } catch (error) {
      handleError(error, "song save initialization");
      return false;
    } finally {
      if (!pendingSave) {
        setIsSaving(false);
        toast.dismiss("save-progress");
      }
    }
  };

  // Handle song name confirmation from modal
  const handleSongNameConfirm = async (newName: string) => {
    if (!newName.trim()) {
      toast.error("Song name cannot be empty");
      return;
    }

    setFileName(newName);
    setPendingSave(false);
    setIsSaving(true);

    const currentContent = contentJson || "";

    toast.loading("Saving your song...", { id: "save-progress" });

    const success = await performSave(newName, currentContent);

    setIsSaving(false);
    toast.dismiss("save-progress");

    if (success) {
      toast.success(`Song "${newName}" saved successfully!`, {
        duration: 3000,
      });
    }
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
        setMusicData(fetchedMusicData);
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
      setSavedSong(savedSongData);
      setSelectedSong(savedSongData);

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
      setSavedSong(updatedSongData);
      setSelectedSong(updatedSongData);

      return true;
    } catch (error) {
      handleError(error, "song update");
      return false;
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

        handleTrackChange(
          musicData.path,
          formatMusicName(formatQuotesFromMusicName(musicData.music_name)),
          formatQuotesFromMusicName(musicData.music_name)
        );

        toast.success("Song loaded successfully", { id: "song-load" });
      } catch (error) {
        handleError(error, "song selection");
        toast.dismiss("song-load");
      }
    } else {
      // New song - reset everything
      setFileName("untitled.bar");
      resetPlayer();
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
        }
        // Note: Error handling is now done within handleSongSave
        break;
      case "save-as":
        // Show save as dialog using the modal
        setShowSongNameModal(true);
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
        <div className="flex h-screen flex-col bg-[#2E3449] text-white">
          {showSongSelection ? (
            <SongSelection onSongSelect={handleSongSelect} />
          ) : (
          <div className="flex flex-1 overflow-hidden">
            <div className="flex flex-1 flex-col overflow-hidden">
              <EditorTopBar
                fileName={fileName}
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
                lyricsText={lyricsText}
                onAnalyzedVersesUpdate={(result) => {
                  setAnalyzedVerses(result);
                }}
                onSetIsAligning={(isAligning) => {
                  setIsAligning(isAligning);
                }}
              />

              {/* TODO: Potential issues may arise from currentTime not updating every frame */}
              <div className="relative h-screen overflow-y-auto">
                <LyricsEditor 
                  className={`${isAligning ? "pointer-events-none" : ""}`}
                  // className="pointer-events-none "
                  onWordSelect={handleThesaurus} 
                  currentTime={currentTime} 
                  onCellsUpdate={handleCellsUpdate}
                  analyzedVerses={analyzedVerses}
                  songLyrics = {songLyrics} />
                  {isAligning && (
                    <div className="absolute inset-0 bg-gray-900 mix-blend-multiply pointer-events-none z-10" style={{ opacity: 0.5 }} />
                  )}
              </div>
              
            </div>

            <button
              onClick={() => setShowSidebar(prev => !prev)}
              className="px-2 py-4 bg-[#0a192f] text-white"
            >
              <p>{showSidebar ? ">" : "<"}</p>
            </button>

            {showSidebar && (
              <div className="top-0 right-0 min-h-screen h-full overflow-y-auto z-1">
                <ThesaurusSidebar word={thesaurusWord} />
              </div>
            )}

            {/* Song Name Modal */}
            <SongNameModal
              isOpen={showSongNameModal}
              onClose={() => {
                setShowSongNameModal(false);
                setPendingSave(false);
                // Dismiss the loading toast if user cancels
                toast.dismiss("save-progress");
                setIsSaving(false);
              }}
              onConfirm={handleSongNameConfirm}
              defaultName={fileName === "untitled.bar" ? "" : fileName}
              title={
                fileName === "untitled.bar" ? "Save New Song" : "Save Song As"
              }
              description={
                fileName === "untitled.bar"
                  ? "Enter a name for your new song"
                  : "Enter a new name for your song"
              }
            />
          </div>
          )}

          {/* Audio element for playback */}
          <audio ref={audioRef} className="hidden" preload="metadata">
            Your browser does not support the audio element.
          </audio>

        </div>
      </ThemeProvider>
    </ProtectedRoute>
  )
}
