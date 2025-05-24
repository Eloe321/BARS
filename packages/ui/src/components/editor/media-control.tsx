"use client";

import type React from "react";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Upload,
  Loader2,
  AlertCircle,
  RefreshCw,
  CheckCircle,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Button } from "@workspace/ui/components/button";
import { Slider } from "@workspace/ui/components/slider";
import { Progress } from "@workspace/ui/components/progress";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useAuth } from "@workspace/ui/components/context/authContext";
import { formatTime } from "./utils/utils.js";
import { mediaApi, type BlobMP3File } from "./mediaApi/mediaAccess.js";

interface MediaControlsProps {
  isPlaying: boolean;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
  progress: number;
  handleSliderChange: (value: number[]) => void;
  onTrackChange: (trackUrl: string, trackName: string) => void;
}

export default function MediaControls({
  isPlaying,
  togglePlay,
  currentTime,
  duration,
  progress,
  handleSliderChange,
  onTrackChange,
}: MediaControlsProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [trackName, setTrackName] = useState("Upload a mp3 file!");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [premadeTracks, setPremadeTracks] = useState<BlobMP3File[]>([]);
  const [uploadedTracks, setUploadedTracks] = useState<BlobMP3File[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const { token, user } = useAuth();

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    setLoadingFiles(true);
    try {
      const data = await mediaApi.fetchTracks();
      setPremadeTracks(data.premade);
      setUploadedTracks(data.uploaded);
    } catch (error) {
      console.error("Error fetching tracks:", error);
      toast.error("Failed to load tracks", {
        description: "Could not fetch tracks from server",
        icon: <AlertCircle className="h-4 w-4" />,
      });
    } finally {
      setLoadingFiles(false);
    }
  };

  const handleTrackSelect = (trackUrl: string, trackName: string) => {
    onTrackChange(trackUrl, trackName);
    setTrackName(trackName);
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setErrorMessage(null);
    setUploadProgress(0);
    setUploadSuccess(false);

    try {
      const data = await mediaApi.uploadFile(file, (progress) => {
        setUploadProgress(progress);
      });

      // Success
      setUploadSuccess(true);
      setTrackName(file.name);
      onTrackChange(data.url, file.name);

      toast.success("Upload Successful!", {
        description: `${file.name} has been uploaded successfully`,
        icon: <CheckCircle className="h-4 w-4" />,
      });

      // Refresh tracks
      fetchTracks();

      // Reset file input
      event.target.value = "";

      // Clear success state after 3 seconds
      setTimeout(() => {
        setUploadSuccess(false);
        setUploadProgress(0);
      }, 3000);
    } catch (err) {
      console.error("Upload error:", err);
      const errorMsg =
        err instanceof Error
          ? err.message
          : "Failed to upload file. Please try again.";
      setErrorMessage(errorMsg);
      setUploadProgress(0);

      toast.error("Upload Failed", {
        description: errorMsg,
        icon: <AlertCircle className="h-4 w-4" />,
      });
    } finally {
      setUploading(false);
    }
  };

  const renderTrackItems = (tracks: BlobMP3File[]) => {
    if (loadingFiles) {
      return (
        <SelectItem value="loading" disabled>
          <span className="flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading tracks...
          </span>
        </SelectItem>
      );
    }

    if (tracks.length === 0) {
      return (
        <SelectItem value="empty" disabled>
          No tracks found
        </SelectItem>
      );
    }

    return tracks.map((track) => (
      <SelectItem key={track.url} value={track.url}>
        <div className="flex flex-col">
          <span className="font-medium">{track.displayName}</span>
          <span className="text-xs text-gray-500">
            {mediaApi.formatFileSize(track.size)}
          </span>
        </div>
      </SelectItem>
    ));
  };

  return (
    <div className="border-b border-[#1e3a5f] bg-[#112240] px-4 py-3">
      {/* Top row with file info, upload and select elements */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-300">
            {uploading ? (
              <div className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Uploading... {Math.round(uploadProgress)}%</span>
              </div>
            ) : uploadSuccess ? (
              <div className="flex items-center text-[#64ffda]">
                <CheckCircle className="mr-2 h-4 w-4" />
                <span>Upload successful!</span>
              </div>
            ) : errorMessage ? (
              <div className="flex items-center text-red-400">
                <AlertCircle className="mr-2 h-4 w-4" />
                <span>{errorMessage}</span>
              </div>
            ) : (
              trackName
            )}
          </div>

          <div className="relative">
            <input
              type="file"
              accept=".mp3,audio/mpeg"
              onChange={handleFileUpload}
              className="absolute inset-0 cursor-pointer opacity-0"
              disabled={uploading}
            />
            <button
              className={`rounded-full p-1 ${
                uploading
                  ? "text-gray-500"
                  : uploadSuccess
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:bg-[#1e3a5f] hover:text-white"
              }`}
              disabled={uploading}
            >
              {uploading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : uploadSuccess ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <Upload className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="rounded bg-[#1e3a5f] px-2 py-1 text-xs">110 BPM</div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Premade Tracks */}
          <Select
            onValueChange={(value) => {
              const track = premadeTracks.find((track) => track.url === value);
              if (track) {
                handleTrackSelect(track.url, track.displayName);
              }
            }}
          >
            <SelectTrigger className="w-48 border-[#1e3a5f] bg-[#0a192f] text-gray-300">
              <SelectValue placeholder="Premade Tracks" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Premade Music</SelectLabel>
                {renderTrackItems(premadeTracks)}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Uploaded Tracks */}
          <Select
            onValueChange={(value) => {
              const track = uploadedTracks.find((track) => track.url === value);
              if (track) {
                handleTrackSelect(track.url, track.displayName);
              }
            }}
          >
            <SelectTrigger className="w-48 border-[#1e3a5f] bg-[#0a192f] text-gray-300">
              <SelectValue placeholder="Your Uploads" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="flex items-center justify-between">
                  Your Uploaded Music
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={fetchTracks}
                    disabled={loadingFiles}
                    className="h-4 w-4 p-0"
                  >
                    {loadingFiles ? (
                      <Loader2 className="h-3 w-3 animate-spin" />
                    ) : (
                      <RefreshCw className="h-3 w-3" />
                    )}
                  </Button>
                </SelectLabel>
                {renderTrackItems(uploadedTracks)}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
            className="border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]"
          >
            Align Lyrics
          </Button>
        </div>
      </div>

      {/* Upload Progress Bar */}
      {uploading && (
        <div className="mb-4">
          <div className="mb-1 flex justify-between text-xs text-gray-400">
            <span>Uploading to Cloud Storage...</span>
            <span>{Math.round(uploadProgress)}%</span>
          </div>
          <Progress
            value={uploadProgress}
            className="h-2 w-full bg-[#1e3a5f]"
          />
        </div>
      )}

      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <button className="rounded-full p-1 text-gray-300 hover:bg-[#1e3a5f] hover:text-white">
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
          <button className="rounded-full p-1 text-gray-300 hover:bg-[#1e3a5f] hover:text-white">
            <SkipForward className="h-5 w-5" />
          </button>
        </div>

        <div className="mx-auto flex w-1/2 items-center space-x-4">
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
        </div>

        <div className="w-20"></div>
      </div>
    </div>
  );
}
