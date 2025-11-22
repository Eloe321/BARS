"use client";

import { useState } from "react";
import { type Song } from "@workspace/types";

export interface EditorState {
  // Song selection state
  selectedSong: Song | null;
  showSongSelection: boolean;
  savedSong: Song | null;

  // Modal state
  showSongNameModal: boolean;
  pendingSave: boolean;

  // Media controls state
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progress: number;
  trackUrl: string | null;
  trackName: string | null;
  fullTrackName: string | null;
  audioLoading: boolean;

  // Editor topbar state
  fileName: string;
  showGrid: boolean;
  showLayers: boolean;
  isFullscreen: boolean;
  zoom: number;
  MusicData: any;
  songLyrics: string;

  // Editor canvas state
  analyzedVerses: any[];
  isSaving: boolean;
  isAligning: boolean;

  // Thesaurus state
  thesaurusWord: string;
  showSidebar: boolean;

  // Karaoke viewer state
  toggleKaraoke: boolean;
}

export const useEditorState = () => {
  // Song selection state
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [showSongSelection, setShowSongSelection] = useState(true);
  const [savedSong, setSavedSong] = useState<Song | null>(null);

  // Modal state
  const [showSongNameModal, setShowSongNameModal] = useState(false);
  const [pendingSave, setPendingSave] = useState(false);

  // Media controls
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [trackUrl, setTrackUrl] = useState<string | null>(null);
  const [trackName, setTrackName] = useState<string | null>(null);
  const [fullTrackName, setFullTrackName] = useState<string | null>(null);
  const [audioLoading, setAudioLoading] = useState(false);

  // Editor topbar
  const [fileName, setFileName] = useState("untitled");
  const [showGrid, setShowGrid] = useState(false);
  const [showLayers, setShowLayers] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [MusicData, setMusicData] = useState<any>(null);
  const [songLyrics, setSongLyrics] = useState<string>("");

  // Editor canvas
  const [analyzedVerses, setAnalyzedVerses] = useState<any[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isAligning, setIsAligning] = useState<boolean>(false);

  // Thesaurus
  const [thesaurusWord, setThesaurusWord] = useState<string>("");
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  // Karaoke viewer
  const [toggleKaraoke, setToggleKaraoke] = useState<boolean>(true);

  const state: EditorState = {
    selectedSong,
    showSongSelection,
    savedSong,
    showSongNameModal,
    pendingSave,
    isPlaying,
    currentTime,
    duration,
    progress,
    trackUrl,
    trackName,
    fullTrackName,
    audioLoading,
    fileName,
    showGrid,
    showLayers,
    isFullscreen,
    zoom,
    MusicData,
    songLyrics,
    analyzedVerses,
    isSaving,
    isAligning,
    thesaurusWord,
    showSidebar,
    toggleKaraoke,
  };

  const actions = {
    setSelectedSong,
    setShowSongSelection,
    setSavedSong,
    setShowSongNameModal,
    setPendingSave,
    setIsPlaying,
    setCurrentTime,
    setDuration,
    setProgress,
    setTrackUrl,
    setTrackName,
    setFullTrackName,
    setAudioLoading,
    setFileName,
    setShowGrid,
    setShowLayers,
    setIsFullscreen,
    setZoom,
    setMusicData,
    setSongLyrics,
    setAnalyzedVerses,
    setIsSaving,
    setIsAligning,
    setThesaurusWord,
    setShowSidebar,
    setToggleKaraoke,
  };

  return { state, actions };
};
