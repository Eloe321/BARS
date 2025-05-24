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
import { useState, useEffect, useRef } from "react";
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
  onResetPlayer: () => void;
  audioLoading: boolean;
}

export default function MediaControls({
  isPlaying,
  togglePlay,
  currentTime,
  duration,
  progress,
  handleSliderChange,
  onTrackChange,
  onResetPlayer,
  audioLoading,
}: MediaControlsProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [trackName, setTrackName] = useState("Upload a mp3 file!");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [premadeTracks, setPremadeTracks] = useState<BlobMP3File[]>([]);
  const [uploadedTracks, setUploadedTracks] = useState<BlobMP3File[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [loadingTrack, setLoadingTrack] = useState(false);
  const [selectedPremadeValue, setSelectedPremadeValue] = useState<string>("");
  const [selectedUploadedValue, setSelectedUploadedValue] =
    useState<string>("");
  const { token, user } = useAuth();
  // Ref to track the current track loading request
  const trackLoadingRef = useRef<AbortController | null>(null);
  const currentTrackRef = useRef<string>("");

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    setLoadingFiles(true);
    try {
      if (!user) {
        throw new Error("User not authenticated");
      }
      const data = await mediaApi.fetchTracks({ token, user });
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

  const resetPlayerAndLoadTrack = async (
    trackUrl: string,
    trackName: string
  ) => {
    // Cancel any ongoing track loading
    if (trackLoadingRef.current) {
      trackLoadingRef.current.abort();
    }

    // Create new abort controller for this request
    const abortController = mediaApi.createAbortController();
    trackLoadingRef.current = abortController;

    setLoadingTrack(true);
    setErrorMessage(null);

    try {
      // Reset player state immediately
      onResetPlayer();

      // Update track name immediately for user feedback
      setTrackName(`Loading: ${trackName}`);

      // Check if this request was cancelled
      if (abortController.signal.aborted) {
        return;
      }

      // Set the new track - this will trigger audio loading in parent
      currentTrackRef.current = trackUrl;
      onTrackChange(trackUrl, trackName);
      setTrackName(trackName);
    } catch (error) {
      if (error instanceof Error && !mediaApi.isAbortError(error)) {
        console.error("Error loading track:", error);
        setErrorMessage("Failed to load track");
        toast.error("Failed to load track", {
          description: "Could not load the selected track",
          icon: <AlertCircle className="h-4 w-4" />,
        });
      }
    } finally {
      // Only clear loading state if this request wasn't cancelled
      if (!abortController.signal.aborted) {
        setLoadingTrack(false);
        trackLoadingRef.current = null;
      }
    }
  };

  const handleTrackSelect = async (
    trackUrl: string,
    trackName: string,
    selectType: "premade" | "uploaded"
  ) => {
    // Clear the other select's value
    if (selectType === "premade") {
      setSelectedUploadedValue("");
    } else {
      setSelectedPremadeValue("");
    }

    await resetPlayerAndLoadTrack(trackUrl, trackName);
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
      // Validate file using API service
      mediaApi.validateFile(file);
      if (!user) {
        throw new Error("User not authenticated");
      }
      const data = await mediaApi.uploadFile(
        { token, user },
        file,
        (progress) => {
          setUploadProgress(progress);
        }
      );

      // Success - automatically load the uploaded track
      setUploadSuccess(true);

      toast.success("Upload Successful!", {
        description: `${file.name} has been uploaded successfully`,
        icon: <CheckCircle className="h-4 w-4" />,
      });

      // Reset select values and load the new track
      setSelectedPremadeValue("");
      setSelectedUploadedValue("");
      await resetPlayerAndLoadTrack(data.url, file.name);

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

  // Determine if controls should be disabled
  const controlsDisabled =
    uploading || loadingTrack || loadingFiles || audioLoading;

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
            ) : loadingTrack || audioLoading ? (
              <div className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>
                  {audioLoading ? "Loading audio..." : "Loading track..."}
                </span>
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
              disabled={controlsDisabled}
            />
            <button
              className={`rounded-full p-1 ${
                controlsDisabled
                  ? "text-gray-500"
                  : uploadSuccess
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:bg-[#1e3a5f] hover:text-white"
              }`}
              disabled={controlsDisabled}
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
            value={selectedPremadeValue}
            onValueChange={(value) => {
              setSelectedPremadeValue(value);
              const track = premadeTracks.find((track) => track.url === value);
              if (track) {
                handleTrackSelect(track.url, track.displayName, "premade");
              }
            }}
            disabled={controlsDisabled}
          >
            <SelectTrigger
              className={`w-48 border-[#1e3a5f] bg-[#0a192f] text-gray-300 ${controlsDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
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
            value={selectedUploadedValue}
            onValueChange={(value) => {
              setSelectedUploadedValue(value);
              const track = uploadedTracks.find((track) => track.url === value);
              if (track) {
                handleTrackSelect(track.url, track.displayName, "uploaded");
              }
            }}
            disabled={controlsDisabled}
          >
            <SelectTrigger
              className={`w-48 border-[#1e3a5f] bg-[#0a192f] text-gray-300 ${controlsDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            >
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
                    disabled={controlsDisabled}
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
            disabled={controlsDisabled}
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

      {/* Track Loading Progress */}
      {loadingTrack && (
        <div className="mb-4">
          <div className="mb-1 flex justify-between text-xs text-gray-400">
            <span>Loading track...</span>
          </div>
          <Progress
            value={100}
            className="h-2 w-full bg-[#1e3a5f] animate-pulse"
          />
        </div>
      )}

      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <button
            className={`rounded-full p-1 ${controlsDisabled ? "text-gray-500 cursor-not-allowed" : "text-gray-300 hover:bg-[#1e3a5f] hover:text-white"}`}
            disabled={controlsDisabled}
          >
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            className={`rounded-full p-2 ${controlsDisabled ? "bg-gray-500 cursor-not-allowed" : "bg-[#64ffda] hover:bg-[#5ae6c4]"} text-[#0a192f]`}
            onClick={togglePlay}
            disabled={controlsDisabled}
          >
            {loadingTrack ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>
          <button
            className={`rounded-full p-1 ${controlsDisabled ? "text-gray-500 cursor-not-allowed" : "text-gray-300 hover:bg-[#1e3a5f] hover:text-white"}`}
            disabled={controlsDisabled}
          >
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
            className={`w-full ${controlsDisabled ? "opacity-50 pointer-events-none" : ""}`}
            onValueChange={handleSliderChange}
            disabled={controlsDisabled}
          />
          <span className="text-xs text-gray-400">{formatTime(duration)}</span>
        </div>

        <div className="w-20"></div>
      </div>
    </div>
  );
}
