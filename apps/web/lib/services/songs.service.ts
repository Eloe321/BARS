import axios from "axios";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3306";

export interface CreateSongDto {
  title?: string;
  artist?: string;
  source?: string;
  [key: string]: any;
}

export interface UpdateSongDto {
  title?: string;
  artist?: string;
  source?: string;
  [key: string]: any;
}

export interface SongResponse {
  id: string;
  title: string;
  artist: string;
  source: string;
  created_at: string;
  updated_at: string;
  [key: string]: any;
}

export class SongsService {
  /**
   * Create a new song
   */
  static async createSong(
    data: CreateSongDto,
    token: string
  ): Promise<SongResponse> {
    const response = await axios.post(`${BACKEND_URL}/songs`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return response.data;
  }

  /**
   * Get songs, optionally filtered by source
   */
  static async getSongs(
    token: string,
    source?: string
  ): Promise<SongResponse[]> {
    const params = source ? { source } : {};
    const response = await axios.get(`${BACKEND_URL}/songs`, {
      headers: {
        Authorization: token,
      },
      params,
    });
    return response.data;
  }

  /**
   * Update a song by ID
   */
  static async updateSong(
    id: string,
    data: UpdateSongDto,
    token: string
  ): Promise<SongResponse> {
    const response = await axios.put(`${BACKEND_URL}/songs/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return response.data;
  }

  /**
   * Delete a song by ID
   */
  static async deleteSong(id: string, token: string): Promise<void> {
    await axios.delete(`${BACKEND_URL}/songs/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  }
}
