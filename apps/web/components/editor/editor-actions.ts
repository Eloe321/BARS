"use client";

import { toast } from "sonner";

interface EditorActionsProps {
  fileName: string;
  zoom: number;
  showGrid: boolean;
  showLayers: boolean;
  isFullscreen: boolean;
  onSave: () => Promise<boolean>;
  onShowSongNameModal: () => void;
  onBackToSongSelection: () => void;
  onFileNameChange: (name: string) => void;
  onZoomChange: (zoom: number) => void;
  onShowGridChange: (show: boolean) => void;
  onShowLayersChange: (show: boolean) => void;
  onFullscreenChange: (fullscreen: boolean) => void;
}

export const useEditorActions = ({
  fileName,
  zoom,
  showGrid,
  showLayers,
  isFullscreen,
  onSave,
  onShowSongNameModal,
  onBackToSongSelection,
  onFileNameChange,
  onZoomChange,
  onShowGridChange,
  onShowLayersChange,
  onFullscreenChange,
}: EditorActionsProps) => {
  //for file actions
  const handleFileAction = async (action: string) => {
    console.log(`File action: ${action}`);

    switch (action) {
      case "new":
        // Reset to new file
        onFileNameChange("untitled");
        // Reset editor content, timeline, etc.
        // You can add more reset logic here
        break;
      case "open":
        onBackToSongSelection();
        // Open file dialog or show file picker
        // This would typically integrate with your file system or cloud storage
        break;
      case "save":
        // Save current file
        const saved = await onSave();
        if (!saved && fileName === "untitled") {
          onShowSongNameModal();
        } else if (saved) {
          toast.success("Song saved successfully");
        }
        // Note: Error handling is now done within handleSongSave
        break;
      case "save-as":
        // Show save as dialog using the modal
        onShowSongNameModal();
        break;
      case "export":
        // Export current project
        // This could export to different formats
        break;
      case "import":
        // Import file or project
        // This could trigger a file input dialog
        break;
      default:
        break;
    }
  };

  const handleEditAction = (action: string) => {
    console.log(`Edit action: ${action}`);

    switch (action) {
      case "undo":
        // Implement undo functionality
        // This would typically work with your editor's history state
        break;
      case "redo":
        // Implement redo functionality
        break;
      case "cut":
        // Cut selected content
        // This would work with the currently selected text/elements
        break;
      case "copy":
        // Copy selected content
        break;
      case "paste":
        // Paste from clipboard
        break;
      case "find":
        // Show find dialog or focus search
        // This could show a search overlay or focus a search input
        break;
      case "replace":
        // Show find and replace dialog
        break;
      default:
        break;
    }
  };

  const handleSelectAction = (action: string) => {
    console.log(`Select action: ${action}`);

    switch (action) {
      case "all":
        // Select all content in the editor
        break;
      case "none":
        // Clear all selections
        break;
      case "inverse":
        // Invert current selection
        break;
      case "move":
        // Switch to move tool
        break;
      case "rectangle":
        // Switch to rectangle select tool
        break;
      default:
        break;
    }
  };

  const handleViewAction = (action: string) => {
    console.log(`View action: ${action}`);

    switch (action) {
      case "zoom-in":
        onZoomChange(Math.min(zoom + 25, 500));
        break;
      case "zoom-out":
        onZoomChange(Math.max(zoom - 25, 25));
        break;
      case "fit-screen":
        onZoomChange(100);
        break;
      case "grid":
        onShowGridChange(!showGrid);
        break;
      case "layers":
        onShowLayersChange(!showLayers);
        break;
      case "fullscreen":
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
          onFullscreenChange(true);
        } else {
          document.exitFullscreen();
          onFullscreenChange(false);
        }
        break;
      default:
        break;
    }
  };

  const handleCollabAction = (action: string) => {
    console.log(`Collaboration action: ${action}`);

    switch (action) {
      case "invite":
        // Show invite users dialog
        // This would typically show a modal with user invitation form
        break;
      case "share":
        // Generate and show share link
        // This could copy a shareable link to clipboard
        break;
      case "comments":
        // Toggle comments panel or show comments
        // This could show/hide a comments sidebar
        break;
      case "history":
        // Show version history
        // This could show a timeline of changes
        break;
      case "permissions":
        // Show permissions settings
        // This could show a dialog for managing user permissions
        break;
      default:
        break;
    }
  };

  return {
    handleFileAction,
    handleEditAction,
    handleSelectAction,
    handleViewAction,
    handleCollabAction,
  };
};
