import React, { useState, useEffect, useRef, use } from 'react';
import { AutocompleteTextbox } from 'react-ghost-text';
import { BigramModel } from '@workspace/ui/components/utils/bigram.js'

function LyricTextbox({ 
  className,
  onContentChange,
  value,
  cellId,
  selectedCellId,
  isGenerating,
 }: { 
  className?: string;
  onContentChange?: (content: string) => void;
  value?: string;
  cellId: number;
  selectedCellId: number | null;
  isGenerating?: boolean;
}) {
  const model = new BigramModel()
  const [storedContent, setStoredContent] = useState(value || '');

  const getSuggestion = async (precedingText: string): Promise<string> => {
    const words = precedingText.trim().split(/\s+/);
    const precedingWord = words.length > 0 ? words[words.length - 1] : '';

    console.log('Fetching suggestion for:', precedingWord);

    const suggestions = model.getSuggestions(precedingWord || '');
    console.log(suggestions)
    // Always return a string, never undefined
    return (suggestions && suggestions.length > 0 ? suggestions[0] ?? '' : '');
  };

  const handleContentChange = (content: string) => {
    // console.log('User input:', content);
    if (onContentChange) {
      setStoredContent(content); // Notify parent
    }
  };

  useEffect(() => {
    if (!isGenerating && onContentChange) {
      console.log('Generating content for cell:', cellId);
      setStoredContent(value || '');
      onContentChange(value || '');
    }
  }, [isGenerating]);

  useEffect(() => {
    if (selectedCellId != cellId && onContentChange) {
      console.log('Selected cell changed:', selectedCellId, 'Current cell:', cellId);
      onContentChange(storedContent);
    }
  }, [selectedCellId]);

  const stripHtml = (input: string = ''): string => {
    // Replace <div> and </div> with newlines, then strip remaining HTML
    const withNewlines = input.replace(/<\/div>\s*<div>/g, '\n').replace(/<div>/g, '').replace(/<\/div>/g, '');
    const div = document.createElement('div');
    div.innerHTML = withNewlines;
    return div.textContent || div.innerText || '';
  };

  const sanitizedValue = value ? stripHtml(value) : '';

  return (
    <div style={{ whiteSpace: 'pre-wrap' }}>
    <AutocompleteTextbox
      onPaste={(event: React.ClipboardEvent<HTMLDivElement>) => {
        event.preventDefault();
        const text = event.clipboardData.getData('text/plain');
        document.execCommand('insertText', false, text);
      }}
      className={className}
      getSuggestion={getSuggestion}
      onContentChange={handleContentChange}
      value={sanitizedValue}
      style={{ width: '100%', overflow: 'hidden', resize: 'none' }}
    />
    </div>
  );
}

const NoteTextbox = ({
  value,
  onChange,
  onContentChange,
  placeholder,
  className,
  cellId,
  selectedCellId,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onContentChange?: (content: string) => void;
  placeholder?: string;
  className?: string;
  cellId: number;
  selectedCellId: number | null;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    if (onContentChange && selectedCellId === cellId) {
      onContentChange(e.target.value);
    }
    onChange(e);
  };

  useEffect(() => {
    // console.log('User input:', value);
    handleInput({ target: { value } } as React.ChangeEvent<HTMLTextAreaElement>);
  }, [value]);

  return (
    <textarea
      className={className}
      ref={textareaRef}
      value={value}
      onChange={handleInput}
      placeholder={placeholder}
      style={{ width: '100%', overflow: 'hidden', resize: 'none'}}
      rows={1}
    />
  );
};

const Cell = ({
  cellType,
  content,
  onUpdateContent,
  timeStart,
  timeEnd,
  currentTime,
  cellId,
  selectedCellId,
  isGenerating,
}: {
  cellType: 'lyric' | 'note';
  content: string;
  onUpdateContent: (value: string) => void;
  timeStart?: number;
  timeEnd?: number;
  currentTime: number;
  cellId: number;
  selectedCellId: number | null;
  isGenerating?: boolean;
}) => {
  const [inputContent, setInputContent] = useState(content);
  const [startTime, setStartTime] = useState(timeStart);
  const [endTime, setEndTime] = useState(timeEnd);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 1000);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
  };

  const isHighlighted = 
    timeStart != null && timeEnd != null &&
    currentTime >= Number(timeStart) && currentTime <= Number(timeEnd);

  // Update time if the props change
  useEffect(() => {
    setStartTime(timeStart);
    setEndTime(timeEnd);
  }, [timeStart, timeEnd]);

  return (
    <div className={`cell ${isHighlighted ? 'highlight' : ''}`} style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      {/* Display the times */}
      {cellType === 'lyric' && (
        <div className="time-info">
          <div>{timeStart !== undefined ? formatTime(timeStart) : '--:--.---'}</div>
          <div>{timeEnd !== undefined ? formatTime(timeEnd) : '--:--.---'}</div>
        </div>
      )}

      {/* Text input */}
      <div className="flex-1">
        {cellType === 'lyric' && (
          <LyricTextbox 
            className="txt-lyric" 
            onContentChange={(newContent) => onUpdateContent(newContent)}
            value={content}
            cellId={cellId}
            selectedCellId={selectedCellId}
            isGenerating={isGenerating}
            />
        )}
        {cellType === 'note' && (
          <NoteTextbox
            className="txt-note outline-none"
            value={content}
            onChange={(e) => onUpdateContent(e.target.value)}
            onContentChange={(newContent) => onUpdateContent(newContent)}
            placeholder="Write your notes here..."
            cellId={cellId}
            selectedCellId={selectedCellId}
          />
        )}
      </div>
    </div>
  );
};

export default Cell;