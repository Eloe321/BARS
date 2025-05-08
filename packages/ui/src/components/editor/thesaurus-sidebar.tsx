"use client";
import { useState, useEffect  } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

interface ThesaurusSidebarProps {
  word: string | null;
}

export default function ThesaurusSidebar({ word }: ThesaurusSidebarProps) {
  const [headword, setHeadword] = useState<string[]>([word ?? "paningkamot", "verb", "to exert effort in order to do, make, or perform something."]);
  const [synonyms, setSynonyms] = useState<string[]>(["singkamot", "pag-usab", "proseso", "porma", "pagtrabaho", "agup-op", "pagtrabaho sa", "panday", "pagbag-o", "trabaho", "pagtrabaho usab", "sobra nga trabaho"]);
  const [metaphors, setMetaphors] = useState<string[]>(["paningkamotan nako nga musaka", "paningkamotan tika hangtod sa kahangturan", "paningkamotan nga di mapukan"]);

  useEffect(() => {
    // TO DO: Update the headword when the word prop changes (when API is ready)
    if (word) {
      setHeadword([word, "verb", "to exert effort in order to do, make, or perform something."]);
    }
  }, [word]);

  return (
    <div className="w-72 flex-shrink-0 overflow-y-auto border-l border-[#1e3a5f] bg-[#0a192f]">
      <div className="border-b border-[#1e3a5f] p-4">
        <h2 className="text-2xl font-bold">Thesaurus</h2>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-medium text-[#64ffda]">{headword[0]}</h3>
        <p className="text-sm text-gray-400">{headword[1]}</p>

        <p className="mt-4 text-sm text-gray-300">
          {headword[2]}
        </p>

        <div className="mt-6">
          <h4 className="mb-2 text-lg font-medium">Synonyms:</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            {synonyms.map((synonym, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2 text-[#64ffda]">•</span>
                <span>{synonym}</span>
              </div>
            ))}
          </ul>
        </div>

        <div className="mt-6">
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
        </div>
      </div>
    </div>
  );
}
