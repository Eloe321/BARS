/* eslint-disable @typescript-eslint/no-unsafe-call */
// filenAPI.ts
import filenInstance from './connect';
import { FSStats, FilenSDK } from '@filen/sdk';
import { Logger } from '@nestjs/common';

class FilenStorageAccess {
  private static readonly logger = new Logger('FilenStorageAccess');

  /**
   * Creates a directory at the specified path
   * @param path Directory path to create
   * @returns Promise that resolves when directory is created
   */
  public static async createDirectory(path: string): Promise<void> {
    try {
      const filen: FilenSDK = await filenInstance;
      await filen.fs().mkdir({
        path,
      });
    } catch (error) {
      this.logger.error(
        `Error creating directory: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new Error('Directory creation failed');
    }
  }

  /**
   * Uploads a file to Filen.io
   * @param remotePath Path on Filen.io where the file should be stored
   * @param localPath Local path of the file to upload
   * @returns Promise that resolves when upload is complete
   */
  public static async uploadFile(
    remotePath: string,
    localPath: string,
  ): Promise<void> {
    try {
      const filen: FilenSDK = await filenInstance;
      await filen.fs().upload({
        path: remotePath,
        source: localPath,
      });
    } catch (error) {
      this.logger.error(
        `Error uploading file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new Error('File upload failed');
    }
  }

  /**
   * Lists contents of a directory
   * @param path Directory path to read
   * @returns Promise that resolves with an array of file/directory names
   */
  public static async listDirectory(path: string): Promise<string[]> {
    try {
      const filen: FilenSDK = await filenInstance;
      return await filen.fs().readdir({
        path,
      });
    } catch (error) {
      this.logger.error(
        `Error reading directory: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new Error('Directory listing failed');
    }
  }

  /**
   * Gets information about a file or directory
   * @param path Path to the file or directory
   * @returns Promise that resolves with file stats
   */
  public static async getFileStats(path: string): Promise<FSStats> {
    try {
      const filen: FilenSDK = await filenInstance;
      return await filen.fs().stat({
        path,
      });
    } catch (error) {
      this.logger.error(
        `Error getting file stats: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new Error('Failed to get file stats');
    }
  }

  /**
   * Downloads a file from Filen.io
   * @param remotePath Path of the file on Filen.io
   * @param localPath Local path where the file should be downloaded
   * @returns Promise that resolves when download is complete
   */
  public static async downloadFile(
    remotePath: string,
    localPath: string,
  ): Promise<void> {
    try {
      const filen: FilenSDK = await filenInstance;
      await filen.fs().download({
        path: remotePath,
        destination: localPath,
      });
    } catch (error) {
      this.logger.error(
        `Error downloading file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new Error('File download failed');
    }
  }

  /**
   * Reads the contents of a file
   * @param path Path to the file on Filen.io
   * @returns Promise that resolves with file content as Buffer
   */
  public static async readFile(path: string): Promise<Buffer> {
    try {
      const filen: FilenSDK = await filenInstance;
      return await filen.fs().readFile({
        path,
      });
    } catch (error) {
      this.logger.error(
        `Error reading file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new Error('File reading failed');
    }
  }

  /**
   * Writes content to a file
   * @param path Path to the file on Filen.io
   * @param content Content to write (string or Buffer)
   * @returns Promise that resolves when write is complete
   */
  public static async writeFile(
    path: string,
    content: string | Buffer,
  ): Promise<void> {
    try {
      const filen: FilenSDK = await filenInstance;
      await filen.fs().writeFile({
        path,
        content:
          typeof content === 'string' ? Buffer.from(content, 'utf-8') : content,
      });
    } catch (error) {
      this.logger.error(
        `Error writing file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new Error('File writing failed');
    }
  }

  /**
   * Deletes a file from Filen.io
   * @param path Path to the file on Filen.io
   * @returns Promise that resolves when file is deleted
   */
  public static async deleteFile(path: string): Promise<void> {
    try {
      const filen: FilenSDK = await filenInstance;
      await filen.fs().unlink({
        path,
      });
    } catch (error) {
      this.logger.error(
        `Error deleting file: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new Error('File deletion failed');
    }
  }

  /**
   * Removes a directory and all its contents
   * @param path Path to the directory on Filen.io
   * @returns Promise that resolves when directory is removed
   */
  public static async removeDirectory(path: string): Promise<void> {
    try {
      const filen: FilenSDK = await filenInstance;
      await filen.fs().rmdir({
        path,
        permanent: true,
      });
    } catch (error) {
      this.logger.error(
        `Error removing directory: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw new Error('Directory removal failed');
    }
  }
}

// Export wrapper functions that call the static methods
export async function createDirectory(path: string): Promise<void> {
  return await FilenStorageAccess.createDirectory(path);
}

export async function uploadFile(
  remotePath: string,
  localPath: string,
): Promise<void> {
  return await FilenStorageAccess.uploadFile(remotePath, localPath);
}

export async function listDirectory(path: string): Promise<string[]> {
  return await FilenStorageAccess.listDirectory(path);
}

export async function getFileStats(path: string): Promise<FSStats> {
  return await FilenStorageAccess.getFileStats(path);
}

export async function downloadFile(
  remotePath: string,
  localPath: string,
): Promise<void> {
  return await FilenStorageAccess.downloadFile(remotePath, localPath);
}

export async function readFile(path: string): Promise<Buffer> {
  return await FilenStorageAccess.readFile(path);
}

export async function writeFile(
  path: string,
  content: string | Buffer,
): Promise<void> {
  return await FilenStorageAccess.writeFile(path, content);
}

export async function deleteFile(path: string): Promise<void> {
  return await FilenStorageAccess.deleteFile(path);
}

export async function removeDirectory(path: string): Promise<void> {
  return await FilenStorageAccess.removeDirectory(path);
}

// Also export as default
export default FilenStorageAccess;
