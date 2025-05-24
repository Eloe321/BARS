import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import * as path from 'path';
import { fileTypeFromBuffer } from 'file-type';

@Injectable()
export class MP3ValidationPipe implements PipeTransform {
  async transform(value: Express.Multer.File, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('File is required');
    }

    // Check file size (30MB limit)
    const maxSize = 30 * 1024 * 1024; // 30MB in bytes
    if (value.size > maxSize) {
      throw new BadRequestException('File size exceeds the 30MB limit');
    }

    // Verify file extension is .mp3
    const ext = path.extname(value.originalname).toLowerCase();
    if (ext !== '.mp3') {
      throw new BadRequestException('Only MP3 files are allowed');
    }

    // Validate MIME type
    try {
      // Check buffer's magic numbers to verify it's really an MP3
      const fileInfo = await fileTypeFromBuffer(value.buffer);
      if (!fileInfo || fileInfo.mime !== 'audio/mpeg') {
        throw new BadRequestException(
          'Invalid file format. Only MP3 files are allowed.',
        );
      }
    } catch (err) {
      throw new BadRequestException('Could not validate file type ', err);
    }

    // Basic malware checks
    // 1. Check for suspicious patterns in file headers
    const header = Buffer.from(value.buffer).subarray(0, 256).toString('hex');
    const suspiciousPatterns = [
      // Add patterns that might indicate malware
      '4d5a9000', // MZ header (executable)
      '504b0304', // PK header (zip files that could contain malware)
    ];

    if (suspiciousPatterns.some((pattern) => header.includes(pattern))) {
      throw new BadRequestException('Potentially unsafe file detected');
    }

    // 2. Check filename for suspicious double extensions
    if (/\.(exe|dll|bat|cmd|vbs|js)\.(mp3)$/i.test(value.originalname)) {
      throw new BadRequestException('File name contains suspicious patterns');
    }

    // Return the validated file after all checks pass
    return value;
  }
}
