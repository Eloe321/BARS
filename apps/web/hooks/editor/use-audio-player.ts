"use client";

import { useRef, useEffect } from "react";

interface AudioPlayerActions {
  togglePlay: () => void;
  handleSliderChange: (value: number[]) => void;
  resetPlayer: () => void;
  handleTrackChange: (
    newTrackUrl: string,
    newTrackName: string,
    newFullTrackName: string
  ) => void;
}

interface AudioPlayerState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progress: number;
  trackUrl: string | null;
  trackName: string | null;
  fullTrackName: string | null;
  audioLoading: boolean;
}

interface AudioPlayerStateActions {
  setIsPlaying: (value: boolean) => void;
  setCurrentTime: (value: number) => void;
  setDuration: (value: number) => void;
  setProgress: (value: number) => void;
  setTrackUrl: (value: string | null) => void;
  setTrackName: (value: string | null) => void;
  setFullTrackName: (value: string | null) => void;
  setAudioLoading: (value: boolean) => void;
}

export const useAudioPlayer = (
  state: AudioPlayerState,
  actions: AudioPlayerStateActions
): {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  audioActions: AudioPlayerActions;
} => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { isPlaying, duration, trackUrl, audioLoading } = state;

  const {
    setIsPlaying,
    setCurrentTime,
    setDuration,
    setProgress,
    setTrackUrl,
    setTrackName,
    setFullTrackName,
    setAudioLoading,
  } = actions;

  useEffect(() => {
    // Setup audio element event listeners
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      setDuration(audio.duration || 0);
      setAudioLoading(false); // Audio is ready
    };

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
    };

    const handleLoadStart = () => {
      setAudioLoading(true);
    };

    const handleCanPlay = () => {
      setAudioLoading(false);
    };

    const handleError = (e: Event) => {
      console.error("Audio error:", e);
      setAudioLoading(false);
      setIsPlaying(false);
    };

    // Add event listeners
    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    // Clean up
    return () => {
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, [setDuration, setCurrentTime, setProgress, setIsPlaying, setAudioLoading]);

  // Effect to handle play/pause state
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || audioLoading) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, audioLoading, setIsPlaying]);

  const togglePlay = () => {
    if (audioLoading || !trackUrl) return;
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (value: number[]) => {
    if (audioLoading) return;

    const newTime = ((value[0] ?? 0) / 100) * duration;

    if (audioRef.current && duration > 0) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(value[0] ?? 0);
    }
  };

  const resetPlayer = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Reset all state
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    setDuration(0);
    setAudioLoading(false);
    setTrackUrl(null);
    setTrackName(null);
    setFullTrackName(null);
  };

  const handleTrackChange = (
    newTrackUrl: string,
    newTrackName: string,
    newFullTrackName: string
  ) => {
    const audio = audioRef.current;
    if (!audio) return;

    setAudioLoading(true);

    setTrackUrl(newTrackUrl);
    setTrackName(newTrackName);
    setFullTrackName(newFullTrackName);
    // Reset player state
    setIsPlaying(false);
    setCurrentTime(0);
    setProgress(0);
    setDuration(0);

    // Pause current audio and reset
    audio.pause();
    audio.currentTime = 0;

    // Load new track
    audio.src = newTrackUrl;
    audio.load(); // Force reload of the audio element
  };

  const audioActions: AudioPlayerActions = {
    togglePlay,
    handleSliderChange,
    resetPlayer,
    handleTrackChange,
  };

  return { audioRef, audioActions };
};
