"use client";

import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import { useAudioPlayer } from "@workspace/ui/hooks/useAudioPlayer";
import { useFileUpload } from "@workspace/ui/hooks/useFileUpload";
import { useProgress } from "@workspace/ui/hooks/useProgress";
import EditorHeader from "@workspace/ui/components/editor/editor-header";
import EditorTopBar from "@workspace/ui/components/editor/editor-topbar";
import MediaControls from "@workspace/ui/components/editor/media-control";
import LyricsEditor from "@workspace/ui/components/editor/editor-canvas";
import ThesaurusSidebar from "@workspace/ui/components/editor/thesaurus-sidebar";
import { searchBinisaya } from "@workspace/ui/components/utils/api";

export default function EditorPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  const { audioSrc, handleFileUpload } = useFileUpload("/beat/placeholder.mp3");
  const { isPlaying, togglePlay, setTime, handleAudioEnd, currentTime, duration, audioRef } = useAudioPlayer(audioSrc);
  const { progress, updateProgress } = useProgress(currentTime, duration);

  const [thesaurusWord, setThesaurusWord] = useState<string>("");

  const handleSliderChange = (value: number[]) => {
    const newTime = ((value[0] ?? 0) / 100) * duration;
    setTime(newTime);
    updateProgress(value[0] ?? 0);
  };

  const handleThesaurus = async (word: string) => {
    setThesaurusWord(word);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex h-screen flex-col bg-[#2E3449] text-white">

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

            {/* TODO: Potential issues may arise from currentTime not updating every frame */}
            <div className="h-screen overflow-y-auto">
              <LyricsEditor onWordSelect={handleThesaurus} currentTime={currentTime} />
            </div>
            
          </div>

          <button
            onClick={() => setShowSidebar(prev => !prev)}
            className="fixed top-0 right-0 z-50 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            {showSidebar ? ">" : "<"}
          </button>

          {showSidebar && (
            <div className="top-0 right-0 min-h-screen h-full overflow-y-auto z-40">
              <ThesaurusSidebar word={thesaurusWord} />
            </div>
          )}
          
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
          onEnded={handleAudioEnd}
        >
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        
      </div>
    </ThemeProvider>
  );
}
