"use client";

import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import EditorHeader from "@workspace/ui/components/editor/editor-header";
import EditorTopBar from "@workspace/ui/components/editor/editor-topbar";
import MediaControls from "@workspace/ui/components/editor/media-control";
import LyricsEditor from "@workspace/ui/components/editor/editor-canvas";
import ThesaurusSidebar from "@workspace/ui/components/editor/thesaurus-sidebar";

export default function EditorPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Placeholder for the audio source
  const [audioSrc, setAudioSrc] = useState<string>('/beat/placeholder.mp3');

  // TODO: Add file upload functionality
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioSrc(url);
      
      audioRef.current?.addEventListener('ended', () => {
        URL.revokeObjectURL(url);
        setAudioSrc('/beat/placeholder.mp3');
      });
    }
  };


  // TODO: Add a function to highlight the current cell and syllables based on the current time
  // TODO: Format time to miliseconds as syllables tend to separate in miliseconds
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && currentTime < duration) {
        setCurrentTime((prev) => {
          const newTime = prev + 1;
          setProgress((newTime / duration) * 100);
          return newTime;
        });
      } else if (currentTime >= duration) {
        setIsPlaying(false);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const handleTimeUpdate = () => {
        const current = audio.currentTime;
        setCurrentTime(current);
        setProgress((current / audio.duration) * 100);
      };

      audio.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const handleMetadataLoaded = () => {
        setDuration(audio.duration || 0);
      };

      // Set duration immediately if already loaded
      if (audio.readyState >= 1) {
        setDuration(audio.duration || 0);
      }

      // Listen for metadata load
      audio.addEventListener("loadedmetadata", handleMetadataLoaded);

      return () => {
        audio.removeEventListener("loadedmetadata", handleMetadataLoaded);
      };
    }
  }, [audioSrc]);

  const handleSliderChange = (value: number[]) => {
    const newTime = Math.floor(((value[0] ?? 0) / 100) * duration);
    setCurrentTime(newTime);
    setProgress(value[0] ?? 0);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex h-screen flex-col bg-[#2E3449] text-white">
        <EditorHeader />

        <div className="flex flex-1 overflow-hidden">
          {/* <TimelineSidebar /> */}

          <div className="flex flex-1 flex-col overflow-hidden">
            <EditorTopBar />

            <MediaControls
              isPlaying={isPlaying}
              togglePlay={togglePlay}
              currentTime={currentTime}
              duration={duration}
              progress={progress}
              handleSliderChange={handleSliderChange}
            />

            <LyricsEditor currentTime={currentTime} />
          </div>

          <ThesaurusSidebar />
        </div>

        {/* Hidden audio element for playback simulation */}
        {/* <audio ref={audioRef} className="hidden">
          <source src="placeholder.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}

        <audio 
          ref={audioRef} 
          className="hidden" 
          controls 
          onEnded={() => setIsPlaying(false)}
        >
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        
      </div>
    </ThemeProvider>
  );
}
