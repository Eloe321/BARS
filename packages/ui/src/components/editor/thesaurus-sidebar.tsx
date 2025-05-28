"use client";
import { useState, useEffect, useRef } from "react";
import { BinisayaFoundCard, BinisayaSuggestions } from "@workspace/ui/components/editor/thesaurus-card";
import { searchBinisaya } from "@workspace/ui/components/utils/api.js";

interface ThesaurusSidebarProps {
  word: string | null;
}

export default function ThesaurusSidebar({ word }: ThesaurusSidebarProps) {
  const [thesaurusEntry, setThesaurusEntry] = useState<any>(null);
  const [isGettingEntry, setIsGettingEntry] = useState<boolean>(false);

  const [width, setWidth] = useState<number>(320); // Default width (e.g. 20rem)
  const isResizing = useRef(false);

  useEffect(() => {
    const fetchThesaurusEntry = async () => {
      if (word) {
        try {
          setIsGettingEntry(true);
          setThesaurusEntry(await searchBinisaya(word));
        } catch (error) {
          console.log("Error getting entry: ", error);
        }
        setIsGettingEntry(false);
      }
    };

    fetchThesaurusEntry();
  }, [word]);

  // Handlers for drag-to-resize
  const startResize = () => {
    isResizing.current = true;
    document.body.style.cursor = "ew-resize";
  };

  const stopResize = () => {
    isResizing.current = false;
    document.body.style.cursor = "default";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing.current) {
      const newWidth = window.innerWidth - e.clientX;
      setWidth(Math.max(200, Math.min(600, newWidth))); // min 200px, max 600px
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopResize);
    };
  }, []);

  return (
    <div
      className="flex-shrink-0 h-full overflow-y-auto border-l border-[#1e3a5f] bg-[#0a192f] relative"
      style={{ width }}
    >
      {/* Drag Handle */}
      <div
        className="absolute top-0 left-0 h-full w-2 cursor-ew-resize z-50"
        onMouseDown={startResize}
      ></div>

      {/* Sidebar Content */}
      <div className="border-b border-[#1e3a5f] p-4">
        <h2 className="text-2xl font-bold">Thesaurus</h2>
        <p className="text-xs text-gray-400">select a word then ctrl + enter to search</p>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium text-[#64ffda]">{word}</h3>

        {thesaurusEntry !== null && (
          <>
            {thesaurusEntry.status === "found" && (
              <BinisayaFoundCard entry={thesaurusEntry.result[0]} isGettingEntry={isGettingEntry} />
            )}
            {thesaurusEntry.status === "suggestions" && (
              <BinisayaSuggestions suggestions={thesaurusEntry.result} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
