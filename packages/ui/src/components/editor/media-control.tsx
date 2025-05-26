"use client";

import { useEffect, useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Play, Pause, SkipBack, SkipForward, Download } from "lucide-react";
import { Slider } from "@workspace/ui/components/slider";
import { analyzeLyrics } from "@workspace/ui/components/utils/api.js";
import { urlToFile } from "@workspace/ui/components/utils/helper.js"; 

interface MediaControlsProps {
  isPlaying: boolean;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
  progress: number;
  handleSliderChange: (value: number[]) => void;
  audioSrc: string;
  lyricsText: string;
  onAnalyzedVersesUpdate: (analyzedVerses: any) => void;
  onSetIsAligning: (isAligning: boolean) => void;
}

export default function MediaControls({
  isPlaying,
  togglePlay,
  currentTime,
  duration,
  progress,
  handleSliderChange,
  audioSrc,
  lyricsText,
  onAnalyzedVersesUpdate,
  onSetIsAligning,
}: MediaControlsProps) {
  const [analyzedLyrics, setAnalyzedLyrics] = useState<any>();
  const [analyzedVerses, setAnalyzedVerses] = useState<any>(); 
  const [tempo, setTempo] = useState<number>(0);

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isAligning, setIsAligning] = useState<boolean>(false);

  useEffect(() => {
    if (!audioSrc || !lyricsText)
      setIsDisabled(true);
    else
      setIsDisabled(false);

    if (isAligning){
      setIsDisabled(true);
    }

    onSetIsAligning(isAligning);
      
  }, [audioSrc, lyricsText, isAligning])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleAnalyze = async () => {
    try {
      if (!audioSrc || !lyricsText) {
        console.log("audio or lyrics doesn't exist");
        return;
      }

      // Convert the local URL to a File object
      const audioFile = await urlToFile(audioSrc, "placeholder.mp3", "audio/mpeg");

      // Now call the API with the lyrics and File
      setIsAligning(true);
      const result = await analyzeLyrics(lyricsText, audioFile);

      console.log("Analysis result:", result);
      onAnalyzedLyrics(result);
    } catch (err) {
      console.error("Error analyzing lyrics:", err);
    }
    setIsAligning(false);
  };

  const onAnalyzedLyrics = (result: any) => {
    setAnalyzedLyrics(result);
    setTempo(Number(result.rhythm_info.tempo.toFixed(2)));

    const verses = result.aligned_lyrics;
    setAnalyzedVerses(verses);

    onAnalyzedVersesUpdate(verses);
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
          <div className="rounded bg-[#1e3a5f] px-2 py-1 text-xs">{tempo} BPM</div>
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
          
          { isDisabled ? (
            <Button
              variant="outline"
              size="sm"
              disabled 
              className="mx-4 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]-10 cursor-not-allowed"
              onClick={handleAnalyze}
            >
              {isAligning ? (<p>Aligning...</p>) : (<p>Align Lyrics</p>)}
          </Button>
          ) : (
            <Button
              variant="outline"
              size="sm" 
              className="mx-4 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]-10"
              onClick={handleAnalyze}
            >
              Align Lyrics
            </Button>
          )}
          

        </div>
      </div>
    </div>
  );
}

