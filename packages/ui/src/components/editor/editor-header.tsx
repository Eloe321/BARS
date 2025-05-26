import { ChevronDown } from "lucide-react";

interface EditorHeaderProps {
  fileName?: string;
}

export default function EditorHeader({
  fileName = "untitled",
}: EditorHeaderProps) {
  return (
    <div className="flex h-12 items-center justify-between border-b border-[#1e3a5f] bg-[#0a192f] px-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button className="rounded-full p-1 hover:bg-[#1e3a5f]-20">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] p-0.5">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a192f] text-white">
              <span className="text-[8px] font-bold">BARS</span>
            </div>
          </div>
          <span className="text-sm font-medium">BARS-Editor</span>
        </div>
      </div>
      <div className="flex-1 text-center ">
        <span className="text-sm font-medium text-gray-300">
          {fileName}.bars
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button className="rounded-full p-1 hover:bg-[#1e3a5f]-20">
          <span className="text-gray-400">−</span>
        </button>
        <button className="rounded-full p-1 hover:bg-[#1e3a5f]-20">
          <span className="text-gray-400">□</span>
        </button>
        <button className="rounded-full p-1 hover:bg-[#1e3a5f]-20">
          <span className="text-gray-400">×</span>
        </button>
      </div>
    </div>
  );
}
