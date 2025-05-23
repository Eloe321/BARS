import React, { useState, useEffect, useRef } from 'react';
import { AutocompleteTextbox } from 'react-ghost-text';
import { BigramModel } from '@workspace/ui/components/utils/bigram.js'

function LyricTextbox({ 
  className
 }: { 
  className?: string 
}) {
  const model = new BigramModel()

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
    console.log('User input:', content);
  };

  return (
    <AutocompleteTextbox
      className={className}
      getSuggestion={getSuggestion}
      onContentChange={handleContentChange}
      style={{ width: '100%', overflow: 'hidden', resize: 'none' }}
    />
  );
}

const NoteTextbox = ({
  value,
  onChange,
  onContentChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onContentChange?: (content: string) => void;
  placeholder?: string;
  className?: string;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    if (onContentChange) {
      onContentChange(e.target.value);
    }
    onChange(e);
  };

  useEffect(() => {
    console.log('User input:', value);
    handleInput({ target: { value } } as React.ChangeEvent<HTMLTextAreaElement>);
  }, [value]);

  return (
    <textarea
      className={className}
      ref={textareaRef}
      value={value}
      onChange={handleInput}
      placeholder={placeholder}
      style={{ width: '100%', overflow: 'hidden', resize: 'none' }}
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
}: {
  cellType: 'lyric' | 'note';
  content: string;
  onUpdateContent: (value: string) => void;
  timeStart?: number;
  timeEnd?: number;
  currentTime: number;  // Add currentTime prop
}) => {
  const [inputContent, setInputContent] = useState(content);
  const [startTime, setStartTime] = useState(timeStart);
  const [endTime, setEndTime] = useState(timeEnd);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time % 1) * 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
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
    <div className={`cell ${isHighlighted ? 'highlight' : ''}`} style={{ display: 'flex', alignItems: 'center' }}>
      {/* Display the times */}
      {cellType === 'lyric' && (
        <div className="time-info" style={{ marginRight: '10px', minWidth: '80px' }}>
          <div>Start: {timeStart !== undefined ? formatTime(timeStart) : '--:--:---'}</div>
          <div>End: {timeEnd !== undefined ? formatTime(timeEnd) : '--:--:---'}</div>
        </div>
      )}

      {/* Text input */}
      <div style={{ flexGrow: 1 }}>
        {cellType === 'lyric' && (
          <LyricTextbox className="txt-lyric" />
        )}
        {cellType === 'note' && (
          <NoteTextbox
            className="txt-note"
            value={content}
            onChange={(e) => onUpdateContent(e.target.value)}
            placeholder="Write your notes here..."
          />
        )}
      </div>
    </div>
  );
};

export default Cell;