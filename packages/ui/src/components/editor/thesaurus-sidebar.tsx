"use client";
import { useState, useEffect  } from "react";
import { BinisayaFoundCard, BinisayaSuggestions } from "@workspace/ui/components/editor/thesaurus-card"
import { searchBinisaya } from '@workspace/ui/components/utils/api.js';

interface ThesaurusSidebarProps {
  word: string | null;
}

export default function ThesaurusSidebar({ word }: ThesaurusSidebarProps) {
  const [thesaurusEntry, setThesaurusEntry] = useState<any>(null);

  useEffect(() => {
    const fetchThesaurusEntry = async () => {
      if (word) {
        setThesaurusEntry(await searchBinisaya(word));
      }
    };

    fetchThesaurusEntry();
  }, [word]);

  return (
    <div className="w-72 flex-shrink-0 min-h-screen h-full overflow-y-auto border-l border-[#1e3a5f] bg-[#0a192f]">
      <div className="border-b border-[#1e3a5f] p-4">
        <h2 className="text-2xl font-bold">Thesaurus</h2>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium text-[#64ffda]"> {word} </h3>

        {thesaurusEntry !== null && (
          <>
            {thesaurusEntry.status === 'found' && (
              <BinisayaFoundCard entry={thesaurusEntry.result[0]} />
            )}
            {thesaurusEntry.status === 'suggestions' && (
              <BinisayaSuggestions suggestions={thesaurusEntry.result} />
            )}
          </>
        )}

        {/* <div className="mt-6">
          <h4 className="mb-2 text-lg font-medium">suggested metaphors:</h4>
          <ul className="space-y-2 text-sm">
            {metaphors.map((metaphor, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-[#64ffda]">•</span>
                <span>{metaphor}</span>
              </li>
            ))}
          </ul>

          <Button
            className="mt-6 w-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]"
            size="sm"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate metaphors
          </Button>
        </div> */}
      </div>
    </div>
  );
}
