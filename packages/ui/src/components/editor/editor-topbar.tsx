"use client";

import {
  FileText,
  Edit,
  MousePointer,
  Eye,
  Users,
  ChevronDown,
  File,
  FolderOpen,
  Save,
  Download,
  Upload,
  Copy,
  ScissorsIcon as Cut,
  ClipboardPasteIcon as Paste,
  Undo,
  Redo,
  Search,
  Replace,
  Move,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Grid,
  Layers,
  Settings,
  UserPlus,
  Share2,
  MessageCircle,
  Clock,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@workspace/ui/components/dropdown-menu";

interface EditorTopBarProps {
  fileName?: string;
  onFileAction: (action: string) => void;
  onEditAction: (action: string) => void;
  onSelectAction: (action: string) => void;
  onViewAction: (action: string) => void;
  onCollabAction: (action: string) => void;
}

export default function EditorTopBar({
  onFileAction,
  onEditAction,
  onSelectAction,
  onViewAction,
  onCollabAction,
}: EditorTopBarProps) {
  return (
    <div className="flex items-center justify-between border-b border-[#1e3a5f] bg-[#0a192f] px-4 py-2">
      <div className="flex items-center space-x-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] p-0.5">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0a192f] text-white">
            <span className="text-[10px] font-bold">BARS</span>
          </div>
        </div>
        <span className="text-lg font-medium text-white">file.bar</span>
      </div>

      <div className="flex space-x-4">
        {/* File Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 rounded px-2 py-1 hover:bg-[#1e3a5f] transition-colors">
            <FileText className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">file</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-[#0a192f] border-[#1e3a5f] text-gray-300">
            <DropdownMenuItem
              onClick={() => onFileAction("new")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <File className="mr-2 h-4 w-4" />
              New File
              <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onFileAction("open")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <FolderOpen className="mr-2 h-4 w-4" />
              Open
              <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#1e3a5f]" />
            <DropdownMenuItem
              onClick={() => onFileAction("save")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Save className="mr-2 h-4 w-4" />
              Save
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onFileAction("save-as")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Save className="mr-2 h-4 w-4" />
              Save As...
              <DropdownMenuShortcut>⌘⇧S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#1e3a5f]" />
            <DropdownMenuItem
              onClick={() => onFileAction("export")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Download className="mr-2 h-4 w-4" />
              Export
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onFileAction("import")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Upload className="mr-2 h-4 w-4" />
              Import
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Edit Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 rounded px-2 py-1 hover:bg-[#1e3a5f] transition-colors">
            <Edit className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">edit</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-[#0a192f] border-[#1e3a5f] text-gray-300">
            <DropdownMenuItem
              onClick={() => onEditAction("undo")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Undo className="mr-2 h-4 w-4" />
              Undo
              <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onEditAction("redo")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Redo className="mr-2 h-4 w-4" />
              Redo
              <DropdownMenuShortcut>⌘⇧Z</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#1e3a5f]" />
            <DropdownMenuItem
              onClick={() => onEditAction("cut")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Cut className="mr-2 h-4 w-4" />
              Cut
              <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onEditAction("copy")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onEditAction("paste")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Paste className="mr-2 h-4 w-4" />
              Paste
              <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#1e3a5f]" />
            <DropdownMenuItem
              onClick={() => onEditAction("find")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Search className="mr-2 h-4 w-4" />
              Find
              <DropdownMenuShortcut>⌘F</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onEditAction("replace")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Replace className="mr-2 h-4 w-4" />
              Replace
              <DropdownMenuShortcut>⌘H</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Select Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 rounded px-2 py-1 hover:bg-[#1e3a5f] transition-colors">
            <MousePointer className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">select</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-[#0a192f] border-[#1e3a5f] text-gray-300">
            <DropdownMenuItem
              onClick={() => onSelectAction("all")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <MousePointer className="mr-2 h-4 w-4" />
              Select All
              <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onSelectAction("none")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <MousePointer className="mr-2 h-4 w-4" />
              Select None
              <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onSelectAction("inverse")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Inverse Selection
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#1e3a5f]" />
            <DropdownMenuItem
              onClick={() => onSelectAction("move")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Move className="mr-2 h-4 w-4" />
              Move Tool
              <DropdownMenuShortcut>V</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onSelectAction("rectangle")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <MousePointer className="mr-2 h-4 w-4" />
              Rectangle Select
              <DropdownMenuShortcut>M</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* View Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 rounded px-2 py-1 hover:bg-[#1e3a5f] transition-colors">
            <Eye className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">view</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-[#0a192f] border-[#1e3a5f] text-gray-300">
            <DropdownMenuItem
              onClick={() => onViewAction("zoom-in")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <ZoomIn className="mr-2 h-4 w-4" />
              Zoom In
              <DropdownMenuShortcut>⌘+</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onViewAction("zoom-out")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <ZoomOut className="mr-2 h-4 w-4" />
              Zoom Out
              <DropdownMenuShortcut>⌘-</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onViewAction("fit-screen")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Eye className="mr-2 h-4 w-4" />
              Fit to Screen
              <DropdownMenuShortcut>⌘0</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#1e3a5f]" />
            <DropdownMenuItem
              onClick={() => onViewAction("grid")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Grid className="mr-2 h-4 w-4" />
              Show Grid
              <DropdownMenuShortcut>⌘'</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onViewAction("layers")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Layers className="mr-2 h-4 w-4" />
              Show Layers
              <DropdownMenuShortcut>F7</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onViewAction("fullscreen")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Settings className="mr-2 h-4 w-4" />
              Fullscreen
              <DropdownMenuShortcut>F11</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Collaboration Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 rounded px-2 py-1 hover:bg-[#1e3a5f] transition-colors">
            <Users className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">collab</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-[#0a192f] border-[#1e3a5f] text-gray-300">
            <DropdownMenuItem
              onClick={() => onCollabAction("invite")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Invite Users
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onCollabAction("share")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share Link
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-[#1e3a5f]" />
            <DropdownMenuItem
              onClick={() => onCollabAction("comments")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Comments
              <DropdownMenuShortcut>⌘/</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onCollabAction("history")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Clock className="mr-2 h-4 w-4" />
              Version History
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onCollabAction("permissions")}
              className="hover:bg-[#1e3a5f] focus:bg-[#1e3a5f]"
            >
              <Settings className="mr-2 h-4 w-4" />
              Permissions
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
