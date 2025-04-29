"use client";

import { Play, Pause, SkipBack, SkipForward, Download } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Slider } from "@workspace/ui/components/slider";

interface MediaControlsProps {
  isPlaying: boolean;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
  progress: number;
  handleSliderChange: (value: number[]) => void;
}

export default function MediaControls({
  isPlaying,
  togglePlay,
  currentTime,
  duration,
  progress,
  handleSliderChange,
}: MediaControlsProps) {
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
              onClick={togglePlay}
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
          <div className="text-sm text-gray-300">track.mp4</div>
          <button className="rounded-full p-1 text-gray-300 hover:bg-[#1e3a5f]-20 hover:text-white">
            <Download className="h-5 w-5" />
          </button>
          <div className="rounded bg-[#1e3a5f] px-2 py-1 text-xs">110 BPM</div>
        </div>
        <div className="flex w-1/2 items-center space-x-4">
          <span className="text-xs text-gray-400">
            {formatTime(currentTime)}
          </span>
          <Slider
            value={[progress]}
            min={0}
            max={100}
            step={0.1}
            className="w-full"
            onValueChange={handleSliderChange}
          />
          <span className="text-xs text-gray-400">{formatTime(duration)}</span>
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
