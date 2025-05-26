"use client";

import '@workspace/ui/styles/canvas.css';
import { useState, useRef, useEffect, use } from "react";
import Cell from '@workspace/ui/components/editor/canvas-cell';
import { generateLyrics } from '@workspace/ui/components/utils/api.js';
import LyricGenerator from './canvas-generator.js';
import TimelineSidebar from './timeline-sidebar.js';

interface EditorCell {
  id: number;
  type: "note" | "lyric";
  content: string;
  timeStart?: number;
  timeEnd?: number;
}

interface EditorProps {
  className?: string
  onWordSelect: (word: string) => void;
  currentTime: number;
  onCellsUpdate?: (cells: EditorCell[]) => void;
  analyzedVerses: any;
  songLyrics: string;
}

export default function LyricsEditor({ className, onWordSelect, currentTime, onCellsUpdate, analyzedVerses, songLyrics }: EditorProps) {
  const notebookRef = useRef<HTMLDivElement>(null);
  const [cells, setCells] = useState<{ id: number; type: "note" | "lyric"; content: string; timeStart?: number; timeEnd?: number }[]>([
    { id: 0, type: 'note', content: '', timeStart: -1, timeEnd: -1 }
  ]);
  const [nextId, setNextId] = useState(2);
  const [selectedCellId, setSelectedCellId] = useState<number | null>(null);

  // Lyric Generator
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    onCellsUpdate?.(cells); // Notify parent on any change
  }, [cells]);

  useEffect(() => {

    try{
      const lyricsJson = JSON.parse(songLyrics);

      if (lyricsJson && Array.isArray(lyricsJson)) {
        const initialCells = lyricsJson.map((cell: any, index: number) => ({
          id: index,
          type: cell.type || 'lyric',
          content: cell.content || '',
          timeStart: cell.timeStart,
          timeEnd: cell.timeEnd
        }));
        setCells(initialCells);
        setNextId(initialCells.length + 1);
      } else {
        console.error("Invalid lyrics JSON format");
      }
    } catch (error) {
      console.error("Error parsing lyrics JSON:", error);
      // Fallback to an empty cell if parsing fails
      setCells([{ id: 0, type: 'note', content: '', timeStart: -1, timeEnd: -1 }]);
      setNextId(1);
    }
  }, []);

  // Function to update the Thesaurus with the selected word
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "Enter") {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        const selectedText = selection.toString().trim();
        const firstWord = selectedText.split(/\s+/)[0];
        if (firstWord) {
          console.log(firstWord)
          onWordSelect(firstWord);
        }
      }
    }
  };

  // Handle key press to update the Thesaurus
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Handle click outside to deselect cell
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notebookRef.current &&
        !notebookRef.current.contains(event.target as Node)
      ) {
        setSelectedCellId(null);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const createCell = (type: "note" | "lyric" = 'note', content?: string) => {
    if (!content)
      content = '';

    if (type == 'lyric') {
      const newCell = { id: nextId, type, content: content, timeStart: undefined, timeEnd: undefined };
      setNextId(nextId + 1);
      return newCell;
    } else {
      const newCell = { id: nextId, type, content: content, timeStart: -1, timeEnd: -1 };
      setNextId(nextId + 1);
      return newCell;
    }
  }
  
  const addCell = (type: "note" | "lyric") => {
    const newCell = createCell(type);
    setCells([...cells, newCell]);
  };  

  const insertCell = (index: number, type: "note" | "lyric", content?: string ) => {
    const newCell = createCell(type, content);
    const newCells = [
      ...cells.slice(0, index+1),
      newCell,
      ...cells.slice(index+1)
    ];
    setCells(newCells);
  };

  const deleteCell = (id: number) => {
    setCells(cells.filter(cell => cell.id !== id));
    if (selectedCellId === id) {
      setSelectedCellId(null);
    }
  };

  const updateCellContent = (id: number, content: string) => {
    setCells(cells.map(cell => cell.id === id ? { ...cell, content } : cell));
  };

  const updateCellTime = (id: number, timeStart?: number, timeEnd?: number) => {

    setCells(prevCells =>
      prevCells.map(cell =>
        cell.id === id
          ? { ...cell, timeStart, timeEnd }
          : cell
      )
    );
  };

  const handleAnalyzedVersesUpdate = (result: any) => {
    // Extract verse start and end times from each group
    const verseTimes = result.map((group: any[]) => {
      const firstLine = group[0];
      const lastLine = group[group.length - 1];
      return {
        start_time: firstLine?.start_time,
        end_time: lastLine?.end_time,
      };
    });

    const lyricCellIds = cells.filter(cell => cell.type === 'lyric').map(cell => cell.id);

    // Now map verseTimes to lyricCellIds 1:1
    verseTimes.forEach((verse: { start_time: number | undefined; end_time: number | undefined; }, idx: number) => {
      const id = lyricCellIds[idx];
      if (id !== undefined) {
        updateCellTime(id, verse.start_time, verse.end_time);
      }
    });
  };

  useEffect(() => {
    if (analyzedVerses) {
      handleAnalyzedVersesUpdate(analyzedVerses);
    }
    console.log("UsedEffect Editor Canvas", analyzedVerses);

  }, [analyzedVerses]);

  return (
    <div className={`flex flex-1 overflow-hidden ${className}`}>
      <TimelineSidebar/>
      <div className="notebook" ref={notebookRef}>
        <button className="px-2" onClick={() => addCell('lyric')}>Add Lyrics</button>
        <button className="px-2" onClick={() => addCell('note')}>Add Notes</button>

        {cells.map((cell, index) => (
          <div 
            key={cell.id}
            className={`cell ${cell.id === selectedCellId ? 'selected' : ''}`}
            onClick={() => setSelectedCellId(cell.id)}
          >
              <Cell
                key={cell.id}
                cellType={cell.type}
                content={cell.content}
                onUpdateContent={(content) => updateCellContent(cell.id, content)}
                timeStart={cell.timeStart}
                timeEnd={cell.timeEnd}
                currentTime={currentTime}
              />

              { selectedCellId === cell.id && (
                <div className="flex justify-between">
                  <div>
                    {/* <p>Current Time: {formatTime(currentTime)}</p> */}
                    <button className="px-2 py-1 text-white rounded hover:bg-[#64ffda] hover:text-black" onClick={() => insertCell(index, 'lyric')}>Insert Lyrics</button>
                    <button className="px-2 py-1 text-white rounded hover:bg-[#64ffda] hover:text-black" onClick={() => insertCell(index, 'note')}>Insert Notes</button>
                    <button className="px-2 py-1 text-white rounded hover:bg-[#64ffda] hover:text-black" onClick={() => deleteCell(cell.id)}>Delete</button>
                  </div>
                  
                  { cell.type === 'lyric' && (
                    <LyricGenerator 
                      isGenerating={isGenerating}
                      setIsGenerating={setIsGenerating}
                      onGenerate={async (result: string) => {
                      try {
                        const generated = await generateLyrics(result);
                        console.log('Generated lyrics:', generated.generated_text);

                        // creating new cell with generated content
                        updateCellContent(cell.id, generated.generated_text );

                      } catch (error) {
                        console.error('Failed to generate lyrics:', error);
                      }
                    }} />
                )}
              
              </div>

            )}
          </div>
        ))}
      </div>
    </div>
    
  );

};
