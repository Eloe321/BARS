import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

interface MP3File {
  url: string;
  filename: string;
  displayName: string;
  size: number;
  uploadedAt: string;
}

// Function to fetch files from a specified folder
async function fetchFiles(prefix: string): Promise<MP3File[]> {
  try {
    const { blobs } = await list({
      prefix: prefix,
      limit: 100,
    });

    return blobs
      .filter((blob) => blob.pathname.toLowerCase().endsWith(".mp3"))
      .map((blob) => {
        const filename = blob.pathname.split("/").pop() || "";
        const match = filename.match(/^mp3-\d+-(.+?)-[^-]+\.mp3$/);
        const songTitle = match ? match[1].replace(/_/g, " ") : filename;

        return {
          url: blob.url,
          filename: blob.pathname,
          displayName: songTitle,
          size: blob.size,
          uploadedAt: blob.uploadedAt.toString(),
        };
      })
      .sort(
        (a, b) =>
          new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
      );
  } catch (error) {
    console.error(`Error fetching files from ${prefix}:`, error);
    return [];
  }
}

export async function GET() {
  try {
    const [premadeFiles, uploadedFiles] = await Promise.all([
      fetchFiles("premade/mp3-"),
      fetchFiles("uploaded/mp3-"),
    ]);

    return NextResponse.json({
      premade: premadeFiles,
      uploaded: uploadedFiles,
    });
  } catch (error) {
    console.error("Error fetching files:", error);
    return NextResponse.json(
      { error: "Failed to fetch files" },
      { status: 500 }
    );
  }
}
