import axios from "axios";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3306";

export interface UploadMusicDto {
  music_name: string;
  uploaded_by: string;
  path: string;
}

export interface MusicResponse {
  id: string;
  music_name: string;
  uploaded_by: string;
  path: string;
  created_at: string;
}

export class MusicService {
  /**
   * Upload music metadata to database
   */
  static async createUploadedMusic(
    data: UploadMusicDto,
    token: string
  ): Promise<MusicResponse> {
    const response = await axios.post(`${BACKEND_URL}/music/uploaded`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    return response.data;
  }

  /**
   * Get uploaded music by ID
   */
  static async getUploadedMusicById(
    id: string,
    token: string
  ): Promise<MusicResponse> {
    const response = await axios.get(`${BACKEND_URL}/music/uploaded/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  /**
   * Get uploaded music by name
   */
  static async getUploadedMusicByName(
    name: string,
    token: string
  ): Promise<MusicResponse> {
    const response = await axios.get(
      `${BACKEND_URL}/music/uploaded/name/${name}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  }

  /**
   * Get all uploaded music
   */
  static async getAllUploadedMusic(token: string): Promise<MusicResponse[]> {
    const response = await axios.get(`${BACKEND_URL}/music/uploaded`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  /**
   * Get premade music by ID
   */
  static async getPremadeMusicById(id: string): Promise<MusicResponse> {
    const response = await axios.get(`${BACKEND_URL}/music/premade/${id}`);
    return response.data;
  }

  /**
   * Get premade music by name
   */
  static async getPremadeMusicByName(name: string): Promise<MusicResponse> {
    const response = await axios.get(
      `${BACKEND_URL}/music/premade/name/${name}`
    );
    return response.data;
  }

  /**
   * Get all premade music
   */
  static async getAllPremadeMusic(): Promise<MusicResponse[]> {
    const response = await axios.get(`${BACKEND_URL}/music/premade`);
    return response.data;
  }

  /**
   * Delete uploaded music by ID
   */
  static async deleteUploadedMusic(id: string, token: string): Promise<void> {
    await axios.delete(`${BACKEND_URL}/music/uploaded/${id}`, {
      headers: {
        Authorization: token,
      },
    });
  }
}
