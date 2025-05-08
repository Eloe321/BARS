"use client";

import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import EditorHeader from "@workspace/ui/components/editor/editor-header";
import TimelineSidebar from "@workspace/ui/components/editor/timeline-sidebar";
import EditorTopBar from "@workspace/ui/components/editor/editor-topbar";
import MediaControls from "@workspace/ui/components/editor/media-control";
import Notebook from "@workspace/ui/components/editor/notebook-canvas";
import ThesaurusSidebar from "@workspace/ui/components/editor/thesaurus-sidebar";

export default function EditorPage() {
  // Sample lyric cells data
  const [lyricCells, setLyricCells] = useState<{ id: number; type: string; content: string; timeStart?: string; timeEnd?: string }[]>([]);

  // State variables for audio playback simulation
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); 
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // State variables for thesaurus sidebar
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

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
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value: number[]) => {
    const newTime = Math.floor(((value[0] ?? 0) / 100) * duration);
    setCurrentTime(newTime);
    setProgress(value[0] ?? 0);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleWordSelect = (word: string) => {
    setSelectedWord(word);
  };
  
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex h-screen flex-col bg-[#2E3449] text-white">
        <EditorTopBar />

        <div className="flex flex-1  overflow-hidden">

          <div className="flex flex-1 flex-col overflow-hidden">
          <MediaControls
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            setIsPlaying={setIsPlaying}
            setCurrentTime={setCurrentTime}
            setDuration={setDuration}
          />

            <div className="flex flex-row h-screen items-stretch overflow-auto">
              <TimelineSidebar lyricCells={lyricCells}/>

                <div className="flex-1 overflow-auto">
                  <Notebook onLyricCellsChange={setLyricCells} onWordSelect={handleWordSelect}/>
                </div>
            </div>
            
          </div>

          <ThesaurusSidebar word={selectedWord}/>
        </div>

        {/* Hidden audio element for playback simulation */}
        {/* <audio ref={audioRef} className="hidden">
          <source src="/placeholder.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}
      </div>
    </ThemeProvider>
  );
}
