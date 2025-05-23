"use client";

import { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import { useAudioPlayer } from "@workspace/ui/hooks/useAudioPlayer";
import { useFileUpload } from "@workspace/ui/hooks/useFileUpload";
import { useProgress } from "@workspace/ui/hooks/useProgress";
import EditorTopBar from "@workspace/ui/components/editor/editor-topbar";
import MediaControls from "@workspace/ui/components/editor/media-control";
import LyricsEditor from "@workspace/ui/components/editor/editor-canvas";
import ThesaurusSidebar from "@workspace/ui/components/editor/thesaurus-sidebar";

// Define the Cell type to match EditorCell
type Cell = {
  id: number;
  type: string;
  content: string;
  timeStart?: number;
  timeEnd?: number;
};

export default function EditorPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  const { audioSrc } = useFileUpload("/beat/placeholder.mp3");
  const [lyricsText, setLyricsText] = useState<any>();
  const [cells, setCells] = useState<Cell[]>([]);
  const [analyzedVerses, setAnalyzedVerses] = useState<any[]>([]);
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
  
  // automatically arranges cells into json format
  const handleCellsUpdate = (cells: Cell[]) => {
    // taking all the cells
    setCells(cells);

    const lyricCells = cells.filter(cell => cell.type === 'lyric');

  const lyricsText = lyricCells.map(cell => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cell.content;

    // Convert <div> and <br> to new lines explicitly
    tempDiv.querySelectorAll("br").forEach(br => br.replaceWith("\n"));
    tempDiv.querySelectorAll("div").forEach(div => {
      const textNode = document.createTextNode("\n" + div.textContent);
      div.replaceWith(textNode);
    });

    return tempDiv.textContent?.trim() || "";
  }).join('<VERSE>'); // Two newlines between each cell

  setLyricsText(lyricsText);

    // Save all cell info in clean array
    const jsonData = cells.map(cell => ({
      id: cell.id,
      type: cell.type,
      content: cell.content,
      timeStart: cell.timeStart,
      timeEnd: cell.timeEnd
    }));

    // console.log("Generated JSON (all cells):", JSON.stringify(jsonData, null, 2));
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
            />

            {/* TODO: Potential issues may arise from currentTime not updating every frame */}
            <div className="h-screen overflow-y-auto">
              <LyricsEditor 
                onWordSelect={handleThesaurus} 
                currentTime={currentTime} 
                onCellsUpdate={handleCellsUpdate}
                analyzedVerses={analyzedVerses} />
            </div>
            
          </div>

          <button
            onClick={() => setShowSidebar(prev => !prev)}
            className="px-2 py-4 bg-[#0a192f] text-white"
          >
            <p>{showSidebar ? ">" : "<"}</p>
          </button>

          {showSidebar && (
            <div className="top-0 right-0 min-h-screen h-full overflow-y-auto z-40">
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

