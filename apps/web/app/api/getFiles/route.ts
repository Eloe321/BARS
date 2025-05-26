import { list } from "@vercel/blob";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { formatMusicName } from "@/components/functions/formatMusicName";

interface MP3File {
  url: string;
  filename: string;
  displayName: string;
  originalFilename: string;
  size: number;
  uploadedAt: string;
}
interface DatabaseFile {
  music_name: string;
  uploaded_by: string;
  path: string;
}

// Function to fetch files from Vercel Blob
async function fetchBlobFiles(prefix: string): Promise<MP3File[]> {
  try {
    const { blobs } = await list({
      prefix: prefix,
      limit: 100,
    });

    return blobs
      .map((blob) => {
        const filename = blob.pathname.split("/").pop() ?? "";

        return {
          url: blob.url,
          filename: blob.pathname,
          displayName: formatMusicName(filename),
          originalFilename: filename as string,
          size: blob.size,
          uploadedAt: blob.uploadedAt.toString(),
        };
      })
      .filter((file) => file.filename.toLowerCase().endsWith(".mp3"))
      .sort(
        (a, b) =>
          new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
      );
  } catch (error) {
    console.error(`Error fetching blob files from ${prefix}:`, error);
    return [];
  }
}

// Function to fetch files from database
async function fetchDatabaseFiles(token: string) {
  try {
    const [uploadedResponse, premadeResponse] = await Promise.all([
      fetch("http://localhost:3306/music/uploaded", {
        headers: {
          Authorization: token,
        },
      }),
      fetch("http://localhost:3306/music/premade"),
    ]);

    if (!uploadedResponse.ok || !premadeResponse.ok) {
      throw new Error("Failed to fetch from database");
    }

    const uploadedData = await uploadedResponse.json();
    const premadeData = await premadeResponse.json();

    return {
      uploaded: uploadedData as DatabaseFile[],
      premade: premadeData as DatabaseFile[],
    };
  } catch (error) {
    console.error("Error fetching database files:", error);
    return { uploaded: [], premade: [] };
  }
}

export async function GET() {
  try {
    const headersList = await headers();
    const token = headersList.get("Authorization");

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch files from both sources
    const [blobFiles, dbFiles] = await Promise.all([
      Promise.all([
        fetchBlobFiles("premade/mp3-"),
        fetchBlobFiles("uploaded/mp3-"),
      ]),
      fetchDatabaseFiles(token),
    ]);

    const [premadeBlobs, uploadedBlobs] = blobFiles;

    // Filter premade files that exist in both Blob and DB
    const premadeFiles = premadeBlobs.filter((blobFile) => {
      return dbFiles.premade.some((dbFile) => {
        const cleanDbFilename = dbFile.music_name.replace(/^"|"$/g, "").trim();
        return cleanDbFilename === blobFile.originalFilename;
      });
    });
    const uploadedFiles = uploadedBlobs.filter((blobFile) => {
      const matchFound = dbFiles.uploaded.some((dbFile, index) => {
        const cleanDbFilename = dbFile.music_name.replace(/^"|"$/g, "").trim();
        const isMatch = cleanDbFilename === blobFile.originalFilename;
        if (isMatch) {
          console.log("  ✅ MATCH FOUND!");
        }
        return isMatch;
      });

      return matchFound;
    });

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
