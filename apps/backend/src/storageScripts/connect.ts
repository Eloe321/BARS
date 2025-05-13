/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FilenSDK } from '@filen/sdk';
import os from 'os';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

class FilenConnection {
  private static instance: FilenSDK | null = null;

  private constructor() {} // Prevent direct construction

  public static async getInstance(): Promise<FilenSDK> {
    if (!this.instance) {
      if (!process.env.SERVER_EMAIL || !process.env.SERVER_PASSWORD) {
        throw new Error('Missing required Filen environment variables');
      }

      try {
        const filen: FilenSDK = new FilenSDK({
          metadataCache: true,
          connectToSocket: true,
          tmpPath: path.join(os.tmpdir(), 'filen-sdk'),
        });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        await filen.login({
          email: process.env.SERVER_EMAIL,
          password: process.env.SERVER_PASSWORD,
        });

        this.instance = filen;
      } catch (error) {
        throw new Error('Failed to initialize Filen SDK: ' + error);
      }
    }

    return this.instance;
  }
}

export default FilenConnection.getInstance();
