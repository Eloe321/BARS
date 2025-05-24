// mediaApi.ts
export interface BlobMP3File {
  url: string;
  filename: string;
  displayName: string;
  size: number;
  uploadedAt: string;
}

export interface TracksResponse {
  premade: BlobMP3File[];
  uploaded: BlobMP3File[];
}

export interface UploadResponse {
  url: string;
  error?: string;
}

class MediaApiService {
  /**
   * Fetch all tracks (premade and uploaded) from the server
   */
  async fetchTracks(): Promise<TracksResponse> {
    const response = await fetch("/api/getFiles");

    if (!response.ok) {
      throw new Error(`Failed to fetch tracks: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      premade: data.premade || [],
      uploaded: data.uploaded || [],
    };
  }

  /**
   * Upload an MP3 file to the server
   */
  async uploadFile(
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<UploadResponse> {
    // Validate file type
    if (!file.type.includes("audio/mpeg") && !file.name.endsWith(".mp3")) {
      throw new Error("Please select a valid MP3 file");
    }

    // Check file size (100MB limit)
    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new Error("File too large. Maximum size is 100MB.");
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

  /**
   * Format file size in MB
   */
  formatFileSize(bytes: number): string {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  }
}

// Export singleton instance
export const mediaApi = new MediaApiService();
