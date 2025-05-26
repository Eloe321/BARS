"use client";

import { useState, useEffect } from "react";
import type { Song } from "@workspace/types";
import { useAuth } from "../context/authContext.js";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Plus, ChevronRight, Music, Calendar, FileText } from "lucide-react";

interface SongSelectionProps {
  onSongSelect: (song: Song | null) => void; // null for new song
}

// Skeleton Components
function NewSongButtonSkeleton() {
  return (
    <div className="mb-8 w-full rounded-lg border-2 border-dashed border-muted bg-muted/30 p-6">
      <div className="flex items-center justify-center space-x-2">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-32" />
      </div>
    </div>
  );
}

function SongCardSkeleton() {
  return (
    <div className="w-full rounded-lg bg-muted/30 p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-3">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-32" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        <div className="ml-4 flex items-center">
          <Skeleton className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="flex h-screen flex-col bg-[#0a192f] text-white">
      <div className="flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-4xl">
          {/* Header Skeleton */}
          <div className="mb-8 flex items-center space-x-3">
            <Music className="h-8 w-8 text-blue-400" />
            <Skeleton className="h-8 w-48" />
          </div>

          {/* New Song Button Skeleton */}
          <NewSongButtonSkeleton />

          {/* Previous Songs Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-gray-400" />
              <Skeleton className="h-6 w-32" />
            </div>

            {/* Song Cards Skeletons */}
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <SongCardSkeleton key={index} />
              ))}
            </div>
          </div>

          {/* Loading indicator */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-gray-400">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
            <span className="text-sm">Loading your songs...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SongSelection({ onSongSelect }: SongSelectionProps) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { token } = useAuth();

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:3306/songs", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch songs");
      }

      const data = await response.json();
      setSongs(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleNewSong = () => {
    onSongSelect(null); // Pass null to indicate new song
  };

  const handleSongSelect = (song: Song) => {
    onSongSelect(song);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateContent = (jsonString: string, maxLength = 100): string => {
    try {
      const parsed = JSON.parse(jsonString);

      if (!Array.isArray(parsed)) return "";

      const firstLyric = parsed.find((item) => item.type === "lyric");

      if (!firstLyric || typeof firstLyric.content !== "string") return "";

      // Remove all <div> and </div> tags and replace with '/'
      let content = firstLyric.content.replace(/<\/?div>/g, "/");

      // Remove duplicate slashes that may result from consecutive divs
      content = content.replace(/\/+/g, "/ ").replace(/^\/|\/$/g, "");

      return content.length <= maxLength
        ? content
        : content.substring(0, maxLength) + "...";
    } catch (err) {
      console.error("Invalid JSON string passed to truncateContent");
      return "content could not be loaded";
    }
  };

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a192f]">
        <div className="text-center">
          <div className="mb-4 text-red-400">
            <svg
              className="mx-auto h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-white">
            Failed to load songs
          </h3>
          <p className="text-red-400">{error}</p>
          <button
            onClick={fetchSongs}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-[#0a192f] text-white">
      <div className="flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 flex items-center space-x-3">
            <Music className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Your Songs</h1>
          </div>

          {/* New Song Button */}
          <button
            onClick={handleNewSong}
            className="group mb-8 w-full rounded-lg border-2 border-dashed border-blue-400 bg-blue-400/10 p-6 text-blue-400 transition-all duration-200 hover:bg-blue-400/20 hover:border-blue-300 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="rounded-full bg-blue-400/20 p-2 transition-colors group-hover:bg-blue-400/30">
                <Plus className="h-6 w-6" />
              </div>
              <span className="text-lg font-semibold">Create New Song</span>
            </div>
          </button>

          {/* Previous Songs */}
          {songs.length === 0 ? (
            <div className="text-center py-12">
              <div className="mb-4 text-gray-400">
                <FileText className="mx-auto h-16 w-16" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-300">
                No songs yet
              </h3>
              <p className="text-gray-400">
                Create your first song to get started!
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-gray-400" />
                <h2 className="text-xl font-semibold text-gray-300">
                  Previous Songs
                </h2>
                <span className="rounded-full bg-gray-700 px-2 py-1 text-xs text-gray-300">
                  {songs.length}
                </span>
              </div>

              <div className="grid gap-4">
                {songs.map((song, index) => (
                  <button
                    key={song.id}
                    onClick={() => handleSongSelect(song)}
                    className="group w-full rounded-lg bg-gray-800/50 p-6 text-left transition-all duration-200 hover:bg-gray-700/50 hover:scale-[1.01] hover:shadow-lg animate-in fade-in-0 slide-in-from-bottom-4"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 space-y-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {song.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <Calendar className="h-4 w-4" />
                          <span>
                            Created: {formatDate(song.creation_date.toString())}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {truncateContent(song.content)}
                        </p>
                      </div>
                      <div className="ml-4 flex items-center text-gray-400 group-hover:text-blue-300 transition-colors">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
