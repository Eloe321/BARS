import React, { useState, useEffect, useRef } from 'react';
import { AutocompleteTextbox } from 'react-ghost-text';

 function LyricTextbox({ value, onChange, className }) {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    handleInput();
  }, [value]);

  const getSuggestion = async (precedingText: string) => {
    console.log('Fetching suggestion for:', precedingText);
    // Fetch suggestion from a backend API
    return precedingText;
  };

  return (
    <AutocompleteTextbox
      className={className}
      getSuggestion={getSuggestion}
      value={value}
      onChange={onChange}
      onInput={handleInput}
      style={{ width: '100%', overflow: 'hidden', resize: 'none' }}/>
  );
}
  
  const NoteTextbox = ({ value, onChange, placeholder, className }) => {
    const textareaRef = useRef(null);
    
    const handleInput = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };
  
    useEffect(() => {
      handleInput();
    }, [value]);
  
    return (
      <textarea
        className={className}
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onInput={handleInput}
        placeholder={placeholder}
        style={{ width: '100%', overflow: 'hidden', resize: 'none' }}
        rows={1}
      />
    );
  };

const Cell = ({ cellType, content, onUpdateContent }) => {
  const [inputContent, setInputContent] = useState(content);

  const handleContentChange = (e) => {
    setInputContent(e.target.value);
    onUpdateContent(e.target.value);
  };

  return (
    <div className="cell">
      {cellType === 'lyric' && (
        <div>
          <LyricTextbox
            className='txt-lyric'
            value={inputContent} 
            onChange={handleContentChange}
          />
        </div>
      )}
      {cellType === 'note' && (
        <div>
          <NoteTextbox 
            className='txt-note'
            value={inputContent} 
            onChange={handleContentChange}
            placeholder="Write your notes here..."
          />
        </div>
      )}
    </div>
  );
};

export default Cell;