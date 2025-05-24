"use client";

import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import EditorHeader from "@workspace/ui/components/editor/editor-header";
import TimelineSidebar from "@workspace/ui/components/editor/timeline-sidebar";
import EditorTopBar from "@workspace/ui/components/editor/editor-topbar";
import MediaControls from "@workspace/ui/components/editor/media-control";
import LyricsEditor from "@workspace/ui/components/editor/editor-canvas";
import ThesaurusSidebar from "@workspace/ui/components/editor/thesaurus-sidebar";
import ProtectedRoute from "../../components/auth/protected-route";

export default function EditorPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [trackUrl, setTrackUrl] = useState<string | null>(null);
  const [trackName, setTrackName] = useState<string>("No track loaded");
  const [audioLoading, setAudioLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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
      // Pause and reset current audio
      audio.pause();
      audio.currentTime = 0;
    }

    // Reset all state
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    setDuration(0);
    setAudioLoading(false);
  };

  const handleTrackChange = (newTrackUrl: string, newTrackName: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set loading state
    setAudioLoading(true);

    // Update track info
    setTrackUrl(newTrackUrl);
    setTrackName(newTrackName);

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

    // The loadedmetadata event will handle setting duration and clearing loading state
  };

  return (
    <ProtectedRoute>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="flex h-screen flex-col bg-[#0a192f] text-white">
          <EditorHeader />

          <div className="flex flex-1 overflow-hidden">
            <TimelineSidebar />

            <div className="flex flex-1 flex-col overflow-hidden">
              <EditorTopBar />

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
              />

              <LyricsEditor />
            </div>

            <ThesaurusSidebar />
          </div>

          {/* Audio element for playback */}
          <audio ref={audioRef} className="hidden" preload="metadata">
            Your browser does not support the audio element.
          </audio>
        </div>
      </ThemeProvider>
    </ProtectedRoute>
  );
}
