import { useState, useRef, useEffect } from "react";

// This hook manages audio playback, including play/pause state, current time, and duration.
export function useAudioPlayer(audioSrc: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const setTime = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleAudioEnd = () => {
    setIsPlaying(false); // Reset play state when audio ends
  }

  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;

      const handleCanPlay = () => {
        const duration = audio.duration || 0;
        setDuration(duration);
      };

      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
      });

      audio.addEventListener("canplay", handleCanPlay);
      if (!isNaN(audio.duration)) {
        setDuration(audio.duration);
      }

      return () => {
        audio.removeEventListener("canplay", handleCanPlay);
      };
    }
  }, [audioSrc]);


  return { isPlaying, togglePlay, setTime, handleAudioEnd, currentTime, duration, audioRef };
}