import axios from "axios";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3306";

export interface DatabaseFile {
  music_name: string;
  uploaded_by: string;
  path: string;
}

export interface DatabaseFilesResponse {
  uploaded: DatabaseFile[];
  premade: DatabaseFile[];
}

export class FilesService {
  /**
   * Fetch uploaded music files from database
   */
  static async getUploadedFiles(token: string): Promise<DatabaseFile[]> {
    const response = await axios.get(`${BACKEND_URL}/music/uploaded`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  /**
   * Fetch premade music files from database
   */
  static async getPremadeFiles(): Promise<DatabaseFile[]> {
    const response = await axios.get(`${BACKEND_URL}/music/premade`);
    return response.data;
  }

  /**
   * Fetch both uploaded and premade files in parallel
   */
  static async getAllDatabaseFiles(
    token: string
  ): Promise<DatabaseFilesResponse> {
    const [uploadedData, premadeData] = await Promise.all([
      this.getUploadedFiles(token),
      this.getPremadeFiles(),
    ]);

    return {
      uploaded: uploadedData,
      premade: premadeData,
    };
  }
}
