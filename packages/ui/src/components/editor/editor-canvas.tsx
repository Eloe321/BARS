"use client";

import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

interface LyricsEditorProps {
  lyricsContent: string;
}

export interface LyricsEditorRef {
  getContent: () => string;
}

const LyricsEditor = forwardRef<LyricsEditorRef, LyricsEditorProps>(
  ({ lyricsContent }, ref) => {
    const editorRef = useRef<HTMLDivElement>(null);

    // Expose getContent method to parent
    useImperativeHandle(ref, () => ({
      getContent: () => editorRef.current?.textContent || "",
    }));

    // Focus the editor when it mounts
    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    }, []);

    useEffect(() => {
      if (
        editorRef.current &&
        editorRef.current.textContent !== lyricsContent
      ) {
        editorRef.current.textContent = lyricsContent;
      }
    }, [lyricsContent]);

    return (
      <div className="flex-1 overflow-y-auto bg-[#0a192f] p-4">
        <div
          ref={editorRef}
          className="min-h-full rounded-md border border-[#1e3a5f] bg-[#112240]-20 p-6 text-gray-200 outline-none"
          contentEditable
          suppressContentEditableWarning
          style={{
            caretColor: "#64ffda",
            lineHeight: "1.8",
          }}
          data-placeholder="Start typing your lyrics here..."
        />

        <style>{`
          [contenteditable]:empty:before {
            content: attr(data-placeholder);
            color: #4a5568;
            font-style: italic;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
);

LyricsEditor.displayName = "LyricsEditor";

export default LyricsEditor;
