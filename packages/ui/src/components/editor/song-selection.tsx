"use client";

import { useState, useEffect, useRef } from "react";
import type { Song } from "@workspace/types";
import { useAuth } from "../context/authContext.js";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Plus, ChevronRight, Music, Calendar, FileText, MoreVertical, Trash2, AlertTriangle } from "lucide-react";


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

// Dropdown Menu Component
function DropdownMenu({ 
  songId, 
  songTitle, 
  onDelete, 
  isDeleting 
}: { 
  songId: string; 
  songTitle: string; 
  onDelete: (id: string) => void; 
  isDeleting: boolean; 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirmDialog(true);
    setIsOpen(false);
  };

  const handleConfirmDelete = () => {
    onDelete(songId);
    setShowConfirmDialog(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
          disabled={isDeleting}
        >
          <MoreVertical className="h-4 w-4" />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-1 w-48 rounded-lg bg-gray-800 border border-gray-700 shadow-lg z-50">
            <div className="py-1">
              <button
                onClick={handleDeleteClick}
                className="flex w-full items-center px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors"
                disabled={isDeleting}
              >
                <Trash2 className="mr-3 h-4 w-4" />
                Delete Song
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 border border-gray-700">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-white">Delete Song</h3>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-300">
                Are you sure you want to delete "{songTitle}"? This action cannot be undone.
              </p>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isDeleting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Deleting...
                  </>
                ) : (
                  'Delete'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function SongSelection({ onSongSelect }: SongSelectionProps) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingSongId, setDeletingSongId] = useState<string | null>(null);
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

  const handleDeleteSong = async (songId: string) => {
    try {
      setDeletingSongId(songId);

      const response = await fetch(`http://localhost:3306/songs/${songId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete song");
      }

      // Remove the song from the local state
      setSongs(prevSongs => prevSongs.filter(song => song.id !== songId));
    } catch (err) {
      console.error("Error deleting song:", err);
      setError(err instanceof Error ? err.message : "Failed to delete song");
    } finally {
      setDeletingSongId(null);
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
      <a
        href="/"
        className="inline-block mb-6 rounded-lg bg-gradient-to-r from-[#1e3a5f] to-[#64ffda] px-4 py-2 text-white font-semibold shadow hover:from-[#1a3456] hover:to-[#5ae6c4] transition-colors"
        >
        ← Back to Home
      </a>
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
                  <div
                    key={song.id}
                    className="group w-full rounded-lg bg-gray-800/50 transition-all duration-200 hover:bg-gray-700/50 hover:scale-[1.01] hover:shadow-lg animate-in fade-in-0 slide-in-from-bottom-4"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-start justify-between p-6">
                      <button
                        onClick={() => handleSongSelect(song)}
                        className="flex-1 text-left"
                      >
                        <div className="space-y-2">
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
                      </button>
                      
                      <div className="ml-4 flex items-center space-x-2">
                        <DropdownMenu
                          songId={song.id ?? ""}
                          songTitle={song.title}
                          onDelete={handleDeleteSong}
                          isDeleting={deletingSongId === song.id}
                        />
                        <div className="text-gray-400 group-hover:text-blue-300 transition-colors">
                          <ChevronRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}