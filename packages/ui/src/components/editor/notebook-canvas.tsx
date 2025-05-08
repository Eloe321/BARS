"use client";
import '@workspace/ui/styles/notebook.css';
import React, { useState, useRef, useEffect } from 'react';
import Cell from '@workspace/ui/components/editor/notebook-cell';

interface NotebookProps {
  onWordSelect: (word: string) => void;
  onLyricCellsChange?: (lyricCells: { id: number; type: string; content: string; timeStart?: string; timeEnd?: string }[]) => void;
}

const Notebook: React.FC<NotebookProps> = ({ onLyricCellsChange, onWordSelect }) => {
  const notebookRef = useRef<HTMLDivElement>(null);
  const [cells, setCells] = useState([
    {id: 1, type: 'note', content: ''} 
  ]);
  const [nextId, setNextId] = useState(2);
  const [selectedCellId, setSelectedCellId] = useState<number | null>(null);

  // Function to update the Thesaurus with the selected word
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "Enter") {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        const selectedText = selection.toString().trim();
        const firstWord = selectedText.split(/\s+/)[0];
        if (firstWord) {
          onWordSelect(firstWord);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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

  // Notify parent component about lyric cells changes
  useEffect(() => {
    const lyricCells = cells.filter(cell => cell.type === 'lyric');
    onLyricCellsChange?.(lyricCells); 
  }, [cells, onLyricCellsChange]);

  const createCell = (type = 'note') => {
    const newCell = { id: nextId, type, content: '' };
    setNextId(nextId + 1);
    return newCell;
  }
  
  const addCell = (type: string) => {
    const newCell = createCell(type);
    setCells([...cells, newCell]);
  };  

  const insertCell = (index: number, type: string) => {
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
            cellType={cell.type}
            content={cell.content}
            onUpdateContent={(content: string) => updateCellContent(cell.id, content)}
          />
          {selectedCellId === cell.id && (
            <div>
              <button className="px-2" onClick={() => insertCell(index, 'lyric')}>Insert Lyrics</button>
              <button className="px-2" onClick={() => insertCell(index, 'note')}>Insert Notes</button>
              <button className="px-2" onClick={() => deleteCell(cell.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

};

export default Notebook;