import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';

interface LyricGeneratorProps {
    onGenerate: (result: string) => void;
}

export default function LyricGenerator({ onGenerate }: LyricGeneratorProps) {
  const [theme, setTheme] = useState("love");
  const [mood, setMood] = useState("happy");
  const [figurative, setFigurative] = useState("metaphor");
  const [isGenerating, setIsGenerating] = useState(false);

  async function generateFunction({ theme, mood, figurative }: { theme: string; mood: string; figurative: string }) {
    const result = `8 sylables min 13 sylables max, theme: ${theme}, mood: ${mood}, figurative: ${figurative}`;
    await onGenerate(result);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <button className="px-2 py-1 text-white rounded hover:bg-[#64ffda] hover:text-black">
          AI Options
      </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 space-y-3 p-3 z-10 rounded-md bg-[#112240] text-white shadow-lg border border-blue-900">
        <div>
          <label className="text-xs text-gray-300">Theme</label>
          <select
          className="w-full rounded-md bg-[#334155] text-sm px-2 py-1 text-white border border-blue-700 focus:outline-none"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          >
            <option value="love">Love</option>
            <option value="poverty">Poverty</option>
            <option value="wealth">Wealth</option>
            <option value="culture">Cebuano Culture</option>
          </select>
        </div>

        <div>
          <label className="text-xs text-gray-300">Mood</label>
          <select
          className="w-full rounded-md bg-[#334155] text-sm px-2 py-1 text-white border border-blue-700 focus:outline-none"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          >
            <option value="happy">Happy</option>
            <option value="sad">Sad</option>
            <option value="anger">Anger</option>
            <option value="Calm">Calm</option>
          </select>
        </div>

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
            <option value="none">None</option>
          </select>
        </div>

        <DropdownMenuItem
          className={`justify-center bg-blue-600 text-white hover:bg-blue-500 rounded-md px-3 py-2 text-sm font-medium` + (isGenerating
          ? "bg-gray-400 text-gray-200 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-500" 
          )}
            onClick={async () => {
              if (isGenerating) return;
              setIsGenerating(true);
              await generateFunction({ theme, mood, figurative });
              setIsGenerating(false);
            }}
        >
          {isGenerating ? "Generating..." : "Generate Lyrics with AI"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}