"use client";

import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import { useAudioPlayer } from "@workspace/ui/hooks/useAudioPlayer";
import { useFileUpload } from "@workspace/ui/hooks/useFileUpload";
import { useProgress } from "@workspace/ui/hooks/useProgress";
import { useSongAlign } from "@workspace/ui/hooks/useSongAlign";
import EditorTopBar from "@workspace/ui/components/editor/editor-topbar";
import MediaControls from "@workspace/ui/components/editor/media-control";
import LyricsEditor from "@workspace/ui/components/editor/editor-canvas";
import ThesaurusSidebar from "@workspace/ui/components/editor/thesaurus-sidebar";

export default function EditorPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  const { audioSrc } = useFileUpload("/beat/placeholder.mp3");
  const [analyzedVerses, setAnalyzedVerses] = useState<any[]>([]);
  const { isPlaying, togglePlay, setTime, handleAudioEnd, currentTime, duration, audioRef } = useAudioPlayer(audioSrc);
  const { progress, updateProgress } = useProgress(currentTime, duration);
  const { cells, lyricsText, handleCellsUpdate} = useSongAlign();

  const [thesaurusWord, setThesaurusWord] = useState<string>("");

  const [isAligning, setIsAligning] = useState<boolean>(false);

  const handleSliderChange = (value: number[]) => {
    const newTime = ((value[0] ?? 0) / 100) * duration;
    setTime(newTime);
    updateProgress(value[0] ?? 0);
  };

  const handleThesaurus = async (word: string) => {
    setShowSidebar(true);
    setThesaurusWord(word);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="flex h-screen flex-col bg-[#2E3449] text-white">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-1 flex-col overflow-hidden">
            <EditorTopBar />

            <MediaControls
              isPlaying={isPlaying}
              togglePlay={togglePlay}
              currentTime={currentTime}
              duration={duration}
              progress={progress}
              handleSliderChange={handleSliderChange}
              audioSrc={audioSrc}
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
                analyzedVerses={analyzedVerses} />
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
          
        </div>

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
