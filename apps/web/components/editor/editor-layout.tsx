"use client";

import LyricsEditor from "@workspace/ui/components/editor/editor-canvas";
import KaraokeViewer from "@workspace/ui/components/editor/karaoke-viewer";
import EditorTopBar from "@workspace/ui/components/editor/editor-topbar";
import MediaControls from "@workspace/ui/components/editor/media-control";
import ThesaurusSidebar from "@workspace/ui/components/editor/thesaurus-sidebar";
import { useSongAlign } from "@workspace/ui/hooks/useSongAlign";

interface EditorLayoutProps {
  fileName: string;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progress: number;
  audioLoading: boolean;
  trackName: string | null;
  fullTrackName: string | null;
  analyzedVerses: any[];
  isAligning: boolean;
  toggleKaraoke: boolean;
  thesaurusWord: string;
  showSidebar: boolean;
  songLyrics: string;
  onFileAction: (action: string) => void;
  onEditAction: (action: string) => void;
  onSelectAction: (action: string) => void;
  onViewAction: (action: string) => void;
  onCollabAction: (action: string) => void;
  onTogglePlay: () => void;
  onSliderChange: (value: number[]) => void;
  onTrackChange: (url: string, name: string, fullName: string) => void;
  onResetPlayer: () => void;
  onAnalyzedVersesUpdate: (result: any[]) => void;
  onSetIsAligning: (isAligning: boolean) => void;
  onSetKaraoke: (toggleKaraoke: boolean) => void;
  onWordSelect: (word: string) => void;
  onShowSidebarToggle: () => void;
}

export default function EditorLayout({
  fileName,
  isPlaying,
  currentTime,
  duration,
  progress,
  audioLoading,
  trackName,
  fullTrackName,
  analyzedVerses,
  isAligning,
  toggleKaraoke,
  thesaurusWord,
  showSidebar,
  songLyrics,
  onFileAction,
  onEditAction,
  onSelectAction,
  onViewAction,
  onCollabAction,
  onTogglePlay,
  onSliderChange,
  onTrackChange,
  onResetPlayer,
  onAnalyzedVersesUpdate,
  onSetIsAligning,
  onSetKaraoke,
  onWordSelect,
  onShowSidebarToggle,
}: EditorLayoutProps) {
  const { contentJson, lyricsText, handleCellsUpdate } = useSongAlign();

  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="flex flex-1 flex-col overflow-hidden">
        <EditorTopBar
          fileName={fileName}
          onFileAction={onFileAction}
          onEditAction={onEditAction}
          onSelectAction={onSelectAction}
          onViewAction={onViewAction}
          onCollabAction={onCollabAction}
        />

        <MediaControls
          isPlaying={isPlaying}
          togglePlay={onTogglePlay}
          currentTime={currentTime}
          duration={duration}
          progress={progress}
          handleSliderChange={onSliderChange}
          onTrackChange={onTrackChange}
          onResetPlayer={onResetPlayer}
          audioLoading={audioLoading}
          currentTrackName={trackName}
          currentFullTrackName={fullTrackName}
          lyricsText={lyricsText}
          onAnalyzedVersesUpdate={onAnalyzedVersesUpdate}
          onSetIsAligning={onSetIsAligning}
          onSetKaraoke={onSetKaraoke}
        />

        {/* TODO: Potential issues may arise from currentTime not updating every frame */}
        <div className="relative h-screen overflow-y-auto">
          <div className="relative">
            <LyricsEditor
              className={`${isAligning ? "pointer-events-none" : ""}`}
              onWordSelect={onWordSelect}
              currentTime={currentTime}
              onCellsUpdate={handleCellsUpdate}
              analyzedVerses={analyzedVerses}
              songLyrics={songLyrics}
            />

            {toggleKaraoke && (
              <KaraokeViewer
                analyzedVerses={analyzedVerses}
                currentTime={currentTime}
              />
            )}

            {isAligning && (
              <div className="lyrics-loading-overlay">
                <div className="lyrics-loading-spinner">
                  <svg
                    className="spinner-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="spinner-circle"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="spinner-path"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span className="loading-text">Analyzing lyrics...</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={onShowSidebarToggle}
        className="px-2 py-4 bg-[#0a192f] text-white"
      >
        <p>{showSidebar ? ">" : "<"}</p>
      </button>

      {showSidebar && (
        <div className="top-0 right-0 min-h-screen h-full overflow-y-auto z-1">
          <ThesaurusSidebar word={thesaurusWord} />
        </div>
      )}
    </div>
  );
}
