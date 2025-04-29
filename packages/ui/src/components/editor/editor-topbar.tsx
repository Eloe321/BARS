import {
  FileText,
  Edit,
  MousePointer,
  Eye,
  Users,
  ChevronDown,
} from "lucide-react";

export default function EditorTopBar() {
  return (
    <div className="flex items-center justify-between border-b border-[#1e3a5f] bg-[#0a192f] px-4 py-2">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] p-0.5">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a192f] text-white">
            <span className="text-[10px] font-bold">BARS</span>
          </div>
        </div>
        <span className="text-lg font-medium">file.bar</span>
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center space-x-1">
          <FileText className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-400">file</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center space-x-1">
          <Edit className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-400">edit</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center space-x-1">
          <MousePointer className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-400">select</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center space-x-1">
          <Eye className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-400">view</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center space-x-1">
          <Users className="h-4 w-4 text-gray-400" />
          <span className="text-sm text-gray-400">collab</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
