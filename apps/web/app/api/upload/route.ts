import { put } from "@vercel/blob";
import { type NextRequest, NextResponse } from "next/server";

// Configure the API route to handle larger files
export const runtime = "nodejs";
export const maxDuration = 60; // 60 seconds timeout

export async function POST(request: NextRequest) {
  try {
    // Add timeout handling
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Upload timeout")), 55000); // 55 seconds
    });

    const uploadPromise = async () => {
      const formData = await request.formData();
      const file = formData.get("file") as File | null;

      if (!file) {
        return NextResponse.json(
          { error: "No file provided" },
          { status: 400 }
        );
      }

      // Validate file type
      const isValidMP3 =
        file.type === "audio/mpeg" ||
        file.type === "audio/mp3" ||
        file.name.toLowerCase().endsWith(".mp3");

      if (!isValidMP3) {
        return NextResponse.json(
          { error: "Invalid file type. Please upload an MP3 file." },
          { status: 400 }
        );
      }

      // Check file size (limit to 100MB for better compatibility)
      const maxSize = 10 * 1024 * 1024;
      if (file.size > maxSize) {
        return NextResponse.json(
          { error: "File too large. Maximum size is 10MB." },
          { status: 400 }
        );
      }

      // Generate a unique filename
      const timestamp = Date.now();
      const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const filename = `mp3-${timestamp}-${cleanFileName}`;

      // Upload to Vercel Blob with explicit content type
      const blob = await put(`uploaded/${filename}`, file, {
        access: "public",
        addRandomSuffix: true,
        contentType: file.type || "audio/mpeg",
      });

      return NextResponse.json({
        url: blob.url,
        filename: filename,
        size: file.size,
      });
    };

    // Race between upload and timeout
    const result = await Promise.race([uploadPromise(), timeoutPromise]);
    return result as NextResponse;
  } catch (error) {
    console.error("Upload error:", error);

    // Ensure we always return valid JSON
    const errorMessage =
      error instanceof Error ? error.message : "Failed to upload file";

    return NextResponse.json(
      {
        error: errorMessage.includes("timeout")
          ? "Upload timed out. Please try with a smaller file or try again."
          : "Failed to upload file. Please try again.",
      },
      { status: 500 }
    );
  }
}
