import { RefreshCw } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { useEffect, useState } from "react";
import { generateLyrics } from '@workspace/ui/components/utils/api.js';


type BinisayaFoundResult = {
  word: string;
  definition: string[];
  english_words: string[];
  ipa: string;
  pos: string;
  pronunciation: string;
  syllables: string[];
  synonyms: string[];
};

function BinisayaFoundCard({ entry, isGettingEntry }: { entry: BinisayaFoundResult, isGettingEntry: boolean }) {
  const [figurative, setFigurative] = useState<string>("metaphor");
  const [generatedVerse, setGeneratedVerse] = useState<string | null>(null);

  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  interface GenerateVerseFn {
    (): Promise<void>;
  }

  const generateVerse: GenerateVerseFn = async () => {
    const prompt = "8 syllables min 10 syllables max, make sure to include " + entry.word + " in the verse with the figurative language, " + figurative;

    try {
      setIsGenerating(true);
      const generated = await generateLyrics(prompt);
      setGeneratedVerse(generated.generated_text);
      console.log(generated.generated_text)
    } catch (error) {
      console.error("Failed to generate lyrics:", error);
    }
    setIsGenerating(false);
  };


  return (
    <div className="relative text-white rounded-md shadow-md">
      <p><strong>Pronunciation:</strong> {entry.pronunciation} ({entry.ipa})</p>
      <p><strong>Part of Speech:</strong> {entry.pos}</p>
      <p><strong>Definitions:</strong></p>
      <ul className="list-disc pl-5 mb-2">
        {entry.definition.map((def, i) => (
          <li key={i}>- {def}</li>
        ))}
      </ul>
      <p><strong>English Words:</strong> {entry.english_words.join(', ')}</p>
      <p><strong>Syllables:</strong> {entry.syllables.join('-')}</p><br></br>
      <p><strong>Synonyms:</strong></p>
      <ul className="grid grid-cols-2 gap-x-4 list-disc pl-5 mb-2">
        {entry.synonyms.map((def, i) => (
          <li key={i}><p>{def}</p></li>
        ))}
      </ul>

      <div>
        <label className="text-xs text-gray-300">Figurative Language</label>
        <select
          className="w-full rounded-md bg-[#334155] text-sm px-2 py-1 text-white border border-blue-700 focus:outline-none"
          value={figurative}
          onChange={(e) => setFigurative(e.target.value)}
        >
          <option value="metaphor">Metaphor</option>
          <option value="simile">Simile</option>
          <option value="personification">Personification</option>
          <option value="hyperbole">Hyperbole</option>
          <option value="alliteration">Alliteration</option>
        </select>

        { isGenerating ? (
          <Button
            className="mt-6 w-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4] cursor-not-allowed"
            size="sm"
            disabled
            onClick={generateVerse}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Waiting...
          </Button>
        ) : (
          <Button
            className="mt-6 w-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4]"
            size="sm"
            onClick={generateVerse}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Generate {figurative}
          </Button>
        ) }

        
        <div className="mt-4 text-sm text-gray-200 font-mono">
            {generatedVerse && (
              <>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Generated Verse</span>
                  <Button
                    className="bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] text-white hover:from-[#1a3456] hover:to-[#5ae6c4] text-white "
                    onClick={() => {
                      if (generatedVerse) {
                        navigator.clipboard.writeText(generatedVerse);
                      }
                    }}
                  >
                    Copy Verse
                  </Button>
                </div>
                {generatedVerse.split('\n').map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </>
            )}
        </div>
      </div>

      {isGenerating || isGettingEntry && (
        <div className="absolute inset-0 bg-gray-900 mix-blend-multiply pointer-events-none z-10" style={{ opacity: 0.5 }} />
      )}
    </div>
  );
}

function BinisayaSuggestions({ suggestions }: { suggestions: string[] }) {
  return (
    <div className="bg-slate-800 text-white p-4 rounded-md shadow-md">
      <p className="mb-2">Did you mean:</p>
      <ul className="list-disc pl-5">
        {suggestions.map((word, i) => (
          <li key={i}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export { BinisayaFoundCard, BinisayaSuggestions };