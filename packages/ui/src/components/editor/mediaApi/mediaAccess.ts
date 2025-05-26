import { UserEntity } from "@workspace/types";
import { useAuth } from "../../context/authContext.js";
export interface BlobMP3File {
  url: string;
  filename: string;
  displayName: string;
  originalFilename: string;
  size: number;
  uploadedAt: string;
}

export interface TracksResponse {
  premade: BlobMP3File[];
  uploaded: BlobMP3File[];
}

export interface UploadResponse {
  url: string;
  filename: string;
  error?: string;
}

export interface TrackLoadOptions {
  onProgress?: (progress: number) => void;
  abortSignal?: AbortSignal;
}
export interface AuthData {
  token: string | null;
  user: UserEntity;
}

class MediaApiService {
  async fetchTracks(authData: AuthData): Promise<TracksResponse> {
    const { token } = authData;
    const response = await fetch("/api/getFiles", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch tracks: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      premade: data.premade || [],
      uploaded: data.uploaded || [],
    };
  }

  async uploadFile(
    authData: AuthData,
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<UploadResponse> {
    const { token, user } = authData;
    // Validate file type
    if (!file.type.includes("audio/mpeg") && !file.name.endsWith(".mp3")) {
      throw new Error("Please select a valid MP3 file");
    }

    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new Error("File too large. Maximum size is 10MB.");
    }

    const formData = new FormData();
    formData.append("file", file);

    // Simulate progress for user feedback if callback provided
    let progressInterval: NodeJS.Timeout | null = null;
    if (onProgress) {
      let progress = 0;
      progressInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 90) {
          progress = 90;
          clearInterval(progressInterval!);
        }
        onProgress(progress);
      }, 500);
    }

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "user-id": `${user?.id}`,
        },
      });

      if (progressInterval) {
        clearInterval(progressInterval);
        onProgress?.(100);
      }

      // Handle response
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned invalid response. Please try again.");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      return data;
    } catch (error) {
      if (progressInterval) {
        clearInterval(progressInterval);
        onProgress?.(0);
      }
      throw error;
    }
  }

  validateFile(file: File): void {
    if (!file.type.includes("audio/mpeg") && !file.name.endsWith(".mp3")) {
      throw new Error("Please select a valid MP3 file");
    }

    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new Error("File too large. Maximum size is 100MB.");
    }
  }

  formatFileSize(bytes: number): string {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }

  createAbortController(): AbortController {
    return new AbortController();
  }

  isAbortError(error: Error): boolean {
    return (
      error.message === "Track loading cancelled" || error.name === "AbortError"
    );
  }
}

export const mediaApi = new MediaApiService();
