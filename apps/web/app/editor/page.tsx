"use client";

import { ThemeProvider } from "@workspace/ui/components/theme-provider";
import { useSongAlign } from "@workspace/ui/hooks/useSongAlign";
import SongSelection from "@workspace/ui/components/editor/song-selection";
import ProtectedRoute from "@/components/auth/protected-route";
import SongNameModal from "@/components/modals/song-name-modal";
import { type Song } from "@workspace/types";
import { toast } from "sonner";

// Import our new components
import { useEditorState } from "@/hooks/editor/use-editor-state";
import { useAudioPlayer } from "@/hooks/editor/use-audio-player";
import { useSongManager } from "@/components/editor/song-manager";
import { useEditorActions } from "@/components/editor/editor-actions";
import EditorLayout from "@/components/editor/editor-layout";

export default function EditorPage() {
  const { state, actions } = useEditorState();
  const { contentJson } = useSongAlign();

  // Setup audio player
  const audioPlayerState = {
    isPlaying: state.isPlaying,
    currentTime: state.currentTime,
    duration: state.duration,
    progress: state.progress,
    trackUrl: state.trackUrl,
    trackName: state.trackName,
    fullTrackName: state.fullTrackName,
    audioLoading: state.audioLoading,
  };

  const audioPlayerActions = {
    setIsPlaying: actions.setIsPlaying,
    setCurrentTime: actions.setCurrentTime,
    setDuration: actions.setDuration,
    setProgress: actions.setProgress,
    setTrackUrl: actions.setTrackUrl,
    setTrackName: actions.setTrackName,
    setFullTrackName: actions.setFullTrackName,
    setAudioLoading: actions.setAudioLoading,
  };

  const { audioRef, audioActions } = useAudioPlayer(
    audioPlayerState,
    audioPlayerActions
  );

  // Setup song manager
  const songManagerProps = {
    selectedSong: state.selectedSong,
    fileName: state.fileName,
    fullTrackName: state.fullTrackName,
    trackUrl: state.trackUrl,
    trackName: state.trackName,
    contentJson: contentJson || "",
    onSongUpdate: (song: Song) => {
      actions.setSavedSong(song);
      actions.setSelectedSong(song);
      if (song) {
        actions.setFileName(song.title);
        actions.setSongLyrics(song.content || "");
      }
    },
    onMusicDataUpdate: actions.setMusicData,
    onTrackChange: audioActions.handleTrackChange,
    onResetForNewSong: () => {
      actions.setFileName("untitled");
      actions.setSongLyrics("");
      actions.setSavedSong(null);
      actions.setAnalyzedVerses([]);
      actions.setMusicData(null);
      audioActions.resetPlayer();
      actions.setIsAligning(false);
      actions.setThesaurusWord("");
    },
  };

  const songManager = useSongManager(songManagerProps);

  // Setup editor actions
  const editorActionsProps = {
    fileName: state.fileName,
    zoom: state.zoom,
    showGrid: state.showGrid,
    showLayers: state.showLayers,
    isFullscreen: state.isFullscreen,
    onSave: songManager.handleSongSave,
    onShowSongNameModal: () => actions.setShowSongNameModal(true),
    onBackToSongSelection: () => {
      actions.setShowSongSelection(true);
      actions.setSelectedSong(null);
      audioActions.resetPlayer();
    },
    onFileNameChange: actions.setFileName,
    onZoomChange: actions.setZoom,
    onShowGridChange: actions.setShowGrid,
    onShowLayersChange: actions.setShowLayers,
    onFullscreenChange: actions.setIsFullscreen,
  };

  const editorActions = useEditorActions(editorActionsProps);

  // Handle song selection with improved logic
  const handleSongSelect = async (song: Song | null) => {
    actions.setSelectedSong(song);
    actions.setShowSongSelection(false);
    await songManager.handleSongSelect(song);
  };

  // Handle thesaurus word selection
  const handleThesaurus = (word: string) => {
    actions.setShowSidebar(true);
    actions.setThesaurusWord(word);
  };

  // Handle song name confirmation
  const handleSongNameConfirm = async (newName: string) => {
    const success = await songManager.handleSongNameConfirm(newName);
    if (success) {
      actions.setFileName(newName);
    }
    actions.setShowSongNameModal(false);
    actions.setPendingSave(false);
    actions.setIsSaving(false);
  };

  return (
    <ProtectedRoute>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="flex h-screen flex-col bg-[#2E3449] text-white">
          {state.showSongSelection ? (
            <SongSelection onSongSelect={handleSongSelect} />
          ) : (
            <EditorLayout
              fileName={state.fileName}
              isPlaying={state.isPlaying}
              currentTime={state.currentTime}
              duration={state.duration}
              progress={state.progress}
              audioLoading={state.audioLoading}
              trackName={state.trackName}
              fullTrackName={state.fullTrackName}
              analyzedVerses={state.analyzedVerses}
              isAligning={state.isAligning}
              toggleKaraoke={state.toggleKaraoke}
              thesaurusWord={state.thesaurusWord}
              showSidebar={state.showSidebar}
              songLyrics={state.songLyrics}
              onFileAction={editorActions.handleFileAction}
              onEditAction={editorActions.handleEditAction}
              onSelectAction={editorActions.handleSelectAction}
              onViewAction={editorActions.handleViewAction}
              onCollabAction={editorActions.handleCollabAction}
              onTogglePlay={audioActions.togglePlay}
              onSliderChange={audioActions.handleSliderChange}
              onTrackChange={audioActions.handleTrackChange}
              onResetPlayer={audioActions.resetPlayer}
              onAnalyzedVersesUpdate={actions.setAnalyzedVerses}
              onSetIsAligning={actions.setIsAligning}
              onSetKaraoke={actions.setToggleKaraoke}
              onWordSelect={handleThesaurus}
              onShowSidebarToggle={() =>
                actions.setShowSidebar(!state.showSidebar)
              }
            />
          )}

          {/* Song Name Modal */}
          <SongNameModal
            isOpen={state.showSongNameModal}
            onClose={() => {
              actions.setShowSongNameModal(false);
              actions.setPendingSave(false);
              toast.dismiss("save-progress");
              actions.setIsSaving(false);
            }}
            onConfirm={handleSongNameConfirm}
            defaultName={state.fileName === "untitled" ? "" : state.fileName}
            title={
              state.fileName === "untitled" ? "Save New Song" : "Save Song As"
            }
            description={
              state.fileName === "untitled"
                ? "Enter a name for your new song"
                : "Enter a new name for your song"
            }
          />

          {/* Audio element for playback */}
          <audio ref={audioRef} className="hidden" preload="metadata">
            Your browser does not support the audio element.
          </audio>
        </div>
      </ThemeProvider>
    </ProtectedRoute>
  );
}
