"use client";

import { useState, useRef, useEffect } from "react";

export default function LyricsEditor() {
  const [content, setContent] = useState("");
  const editorRef = useRef<HTMLDivElement>(null);

  // Focus the editor when it mounts
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto bg-[#0a192f] p-4">
      <div
        ref={editorRef}
        className="min-h-full rounded-md border border-[#1e3a5f] bg-[#112240]-20 p-6 text-gray-200 outline-none"
        contentEditable
        suppressContentEditableWarning
        onInput={(e) => setContent(e.currentTarget.textContent || "")}
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
