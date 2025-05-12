/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { FilenSDK } from '@filen/sdk';
import os from 'os';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const initializeFilen = async (): Promise<FilenSDK> => {
  if (
    !process.env.SERVER_EMAIL ||
    !process.env.SERVER_PASSWORD ||
    !process.env.SERVER_USER_AGENT
  ) {
    throw new Error('Missing required MEGA environment variables');
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

    return filen;
  } catch (error) {
    throw new Error('Failed to initialize Filen SDK: ' + error);
  }
};

// Create and export a singleton instance
const filenInstance = initializeFilen();

export default filenInstance;
