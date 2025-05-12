/* eslint-disable @typescript-eslint/no-unsafe-call */
// filenAPI.ts
import filenInstance from './connect';
import { FSStats } from '@filen/sdk'; // Assuming this is the correct import for FSStats
import { FilenSDK } from '@filen/sdk';

/**
 * Creates a directory at the specified path
 * @param path Directory path to create
 * @returns Promise that resolves when directory is created
 */
export async function createDirectory(path: string): Promise<void> {
  try {
    const filen: FilenSDK = await filenInstance;

    await filen.fs().mkdir({
      path,
    });
  } catch (error) {
    console.error(`Error creating directory at ${path}:`, error);
    throw error;
  }
}

/**
 * Uploads a file to Filen.io
 * @param remotePath Path on Filen.io where the file should be stored
 * @param localPath Local path of the file to upload
 * @returns Promise that resolves when upload is complete
 */
export async function uploadFile(
  remotePath: string,
  localPath: string,
): Promise<void> {
  try {
    await filenInstance.fs().upload({
      path: remotePath,
      source: localPath,
    });
  } catch (error) {
    console.error(
      `Error uploading file from ${localPath} to ${remotePath}:`,
      error,
    );
    throw error;
  }
}

/**
 * Lists contents of a directory
 * @param path Directory path to read
 * @returns Promise that resolves with an array of file/directory names
 */
export async function listDirectory(path: string): Promise<string[]> {
  try {
    return await filenInstance.fs().readdir({
      path,
    });
  } catch (error) {
    console.error(`Error reading directory at ${path}:`, error);
    throw error;
  }
}

/**
 * Gets information about a file or directory
 * @param path Path to the file or directory
 * @returns Promise that resolves with file stats
 */
export async function getFileStats(path: string): Promise<FSStats> {
  try {
    return await filenInstance.fs().stat({
      path,
    });
  } catch (error) {
    console.error(`Error getting stats for ${path}:`, error);
    throw error;
  }
}

/**
 * Downloads a file from Filen.io
 * @param remotePath Path of the file on Filen.io
 * @param localPath Local path where the file should be downloaded
 * @returns Promise that resolves when download is complete
 */
export async function downloadFile(
  remotePath: string,
  localPath: string,
): Promise<void> {
  try {
    await filenInstance.fs().download({
      path: remotePath,
      destination: localPath,
    });
  } catch (error) {
    console.error(
      `Error downloading file from ${remotePath} to ${localPath}:`,
      error,
    );
    throw error;
  }
}

/**
 * Reads the contents of a file
 * @param path Path to the file on Filen.io
 * @returns Promise that resolves with file content as Buffer
 */
export async function readFile(path: string): Promise<Buffer> {
  try {
    return await filenInstance.fs().readFile({
      path,
    });
  } catch (error) {
    console.error(`Error reading file at ${path}:`, error);
    throw error;
  }
}

/**
 * Writes content to a file
 * @param path Path to the file on Filen.io
 * @param content Content to write (string or Buffer)
 * @returns Promise that resolves when write is complete
 */
export async function writeFile(
  path: string,
  content: string | Buffer,
): Promise<void> {
  try {
    await filenInstance.fs().writeFile({
      path,
      content:
        typeof content === 'string' ? Buffer.from(content, 'utf-8') : content,
    });
  } catch (error) {
    console.error(`Error writing to file at ${path}:`, error);
    throw error;
  }
}

/**
 * Deletes a file from Filen.io
 * @param path Path to the file on Filen.io
 * @returns Promise that resolves when file is deleted
 */
export async function deleteFile(path: string): Promise<void> {
  try {
    await filenInstance.fs().unlink({
      path,
    });
  } catch (error) {
    console.error(`Error deleting file at ${path}:`, error);
    throw error;
  }
}

/**
 * Removes a directory and all its contents
 * @param path Path to the directory on Filen.io
 * @returns Promise that resolves when directory is removed
 */
export async function removeDirectory(path: string): Promise<void> {
  try {
    await filenInstance.fs().rmdir({
      path,
      recursive: true,
    });
  } catch (error) {
    console.error(`Error removing directory at ${path}:`, error);
    throw error;
  }
}

// Export a single object with all functions
export default {
  createDirectory,
  uploadFile,
  listDirectory,
  getFileStats,
  downloadFile,
  readFile,
  writeFile,
  deleteFile,
  removeDirectory,
};
