import { useState, useEffect } from "react";
import { Song } from "@workspace/types"; // You'll need to create this type based on your entity
import { useAuth } from "../context/authContext.js";
interface SongSelectionProps {
  onSongSelect: (song: Song | null) => void; // null for new song
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

  const truncateContent = (content: string, maxLength: number = 100) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a192f]">
        <div className="text-white">Loading your songs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a192f]">
        <div className="text-red-400">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-[#0a192f] text-white">
      <div className="flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-3xl font-bold">Your Songs</h1>

          {/* New Song Button */}
          <button
            onClick={handleNewSong}
            className="mb-8 w-full rounded-lg border-2 border-dashed border-blue-400 bg-blue-400/10 p-6 text-blue-400 transition-colors hover:bg-blue-400/20"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="text-lg font-semibold">Create New Song</span>
            </div>
          </button>

          {/* Previous Songs */}
          {songs.length === 0 ? (
            <div className="text-center text-gray-400">
              <p>No songs found. Create your first song!</p>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-300">
                Previous Songs
              </h2>
              {songs.map((song) => (
                <button
                  key={song.id}
                  onClick={() => handleSongSelect(song)}
                  className="w-full rounded-lg bg-gray-800/50 p-6 text-left transition-colors hover:bg-gray-700/50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">
                        {song.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        Created: {formatDate(song.creation_date.toString())}
                      </p>
                      <p className="mt-2 text-gray-300">
                        {truncateContent(song.content)}
                      </p>
                    </div>
                    <div className="ml-4 flex items-center text-gray-400">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
