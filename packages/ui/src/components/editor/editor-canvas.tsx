"use client";

import '@workspace/ui/styles/canvas.css';
import { useState, useRef, useEffect } from "react";
import Cell from '@workspace/ui/components/editor/canvas-cell';

interface EditorProps {
  onWordSelect: (word: string) => void;
  currentTime: number;
}

export default function LyricsEditor({ onWordSelect, currentTime }: EditorProps) {
    const notebookRef = useRef<HTMLDivElement>(null);
  const [cells, setCells] = useState<{ id: number; type: "note" | "lyric"; content: string; timeStart?: number; timeEnd?: number }[]>([
    { id: 1, type: 'note', content: '', timeStart: -1, timeEnd: -1 }
  ]);
  const [nextId, setNextId] = useState(2);
  const [selectedCellId, setSelectedCellId] = useState<number | null>(null);

  // TODO: fix this at final week
  // Function to update the Thesaurus with the selected word
  // const handleKeyPress = (event: KeyboardEvent) => {
  //   if (event.ctrlKey && event.key === "Enter") {
  //     const selection = window.getSelection();
  //     if (selection && selection.toString().trim()) {
  //       const selectedText = selection.toString().trim();
  //       const firstWord = selectedText.split(/\s+/)[0];
  //       if (firstWord) {
  //         onWordSelect(firstWord);
  //       }
  //     }
  //   }
  // };

  // Handle key press to update the Thesaurus
  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyPress);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, []);

  // Handle click outside to deselect cell
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

  const createCell = (type: "note" | "lyric" = 'note') => {
    if (type == 'lyric') {
      const newCell = { id: nextId, type, content: '', timeStart: undefined, timeEnd: undefined };
      setNextId(nextId + 1);
      return newCell;
    } else {
      const newCell = { id: nextId, type, content: '', timeStart: -1, timeEnd: -1 };
      setNextId(nextId + 1);
      return newCell;
    }
  }
  
  const addCell = (type: "note" | "lyric") => {
    const newCell = createCell(type);
    setCells([...cells, newCell]);
  };  

  const insertCell = (index: number, type: "note" | "lyric") => {
    const newCell = createCell(type);
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

  return (
    <div className='flex flex-1 overflow-hidden'>
      {/* <TimelineSidebar/> */}
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
            {selectedCellId === cell.id && (
              <div>
                {/* <p>Current Time: {currentTime}</p> */}
                <button className="px-2" onClick={() => insertCell(index, 'lyric')}>Insert Lyrics</button>
                <button className="px-2" onClick={() => insertCell(index, 'note')}>Insert Notes</button>
                <button className="px-2" onClick={() => deleteCell(cell.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
  );

};
