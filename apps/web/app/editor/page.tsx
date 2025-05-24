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
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Setup audio element event listeners
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    // Add event listeners
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", handleEnded);

    // Clean up
    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  // Effect to handle play/pause state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSliderChange = (value: number[]) => {
    const newTime = ((value[0] ?? 0) / 100) * duration;

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(value[0] ?? 0);
    }
  };

  const handleTrackChange = (newTrackUrl: string, newTrackName: string) => {
    setTrackUrl(newTrackUrl);
    setTrackName(newTrackName);

    // Reset state for new track
    setCurrentTime(0);
    setProgress(0);
    setIsPlaying(false);

    // Let the audio load metadata naturally and the event listeners
    // will update duration and other properties
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
              />

              <LyricsEditor />
            </div>

            <ThesaurusSidebar />
          </div>

          {/* Audio element for playback */}
          <audio ref={audioRef} className="hidden">
            {trackUrl && <source src={trackUrl} type="audio/mpeg" />}
            Your browser does not support the audio element.
          </audio>
        </div>
      </ThemeProvider>
    </ProtectedRoute>
  );
}
