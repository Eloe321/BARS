"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Download } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

interface MediaControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
}

export default function MediaControls({
  isPlaying,
  currentTime,
  duration,
  setIsPlaying,
  setCurrentTime,
  setDuration,
}: MediaControlsProps) {
  const [file, setFile] = useState<File | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // TO DO: Handle file upload and playback when backend is ready
  const handleUpload = async () => {
    console.log('File to upload:', file);
  };

  useEffect(() => {
    // Static import of the audio file for now
    audioRef.current = new Audio('/music/test-beat.mp3');

    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [setDuration, setCurrentTime]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="border-b border-[#1e3a5f] bg-[#112240] px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button className="rounded-full p-1 text-gray-300 hover:bg-[#1e3a5f]-20 hover:text-white">
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              className="rounded-full bg-[#64ffda] p-2 text-[#0a192f] hover:bg-[#5ae6c4]"
              onClick={togglePlayPause}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>
            <button className="rounded-full p-1 text-gray-300 hover:bg-[#1e3a5f]-20 hover:text-white">
              <SkipForward className="h-5 w-5" />
            </button>
          </div>
          {file && (
            <span className="text-sm text-gray-300">{file.name}</span>
          )}
          <input id='file-upload' type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className='hidden' />
          <label htmlFor="file-upload" className="rounded-full p-1 text-gray-300 hover:bg-[#1e3a5f]-20 hover:text-white">
              <Download className="h-5 w-5" />
          </label>
          <div className="rounded bg-[#1e3a5f] px-2 py-1 text-xs">110 BPM</div>
        </div>
        <div className="flex w-1/2 items-center space-x-4">
          <span className="text-xs text-gray-400">
            {formatTime(Math.floor(currentTime))}
          </span>
          <input
            type="range"
            value={currentTime}
            max={duration || 0}
            onChange={handleSeek}
          />
          <span className="text-xs text-gray-400">
            {formatTime(Math.floor(duration))}
          </span>
          <Button
            variant="outline"
            size="sm"
            className="ml-4 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]-10"
          >
            Align Lyrics
          </Button>
        </div>
      </div>
    </div>
  );
}
