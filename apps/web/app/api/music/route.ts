import { NextRequest, NextResponse } from "next/server";
import { MusicService } from "@/lib/services/music.service";

// Handler for POST /api/music?type=uploaded
export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get("authorization");
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (type !== "uploaded") {
      return NextResponse.json(
        { message: "Invalid music type" },
        { status: 400 }
      );
    }

    const data = await MusicService.createUploadedMusic(body, token || "");

    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || {
      message: "Internal Server Error",
    };
    return NextResponse.json(message, { status });
  }
}

// Handler for GET requests
// api/music?type=uploaded&id=123
// api/music?type=uploaded&name=song1
// api/music?type=uploaded
export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("authorization");
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const MusicId = searchParams.get("id");
    const name = searchParams.get("name");

    console.log("=== API ROUTE DEBUG ===");
    console.log("Request URL:", request.url);
    console.log("Type:", type);
    console.log("MusicId:", MusicId);
    console.log("Name:", name);

    let data;

    // Determine the service method based on query parameters
    if (type === "uploaded") {
      if (MusicId) {
        console.log("using endpoint 1");
        data = await MusicService.getUploadedMusicById(MusicId, token || "");
      } else if (name) {
        console.log("using endpoint 2");
        data = await MusicService.getUploadedMusicByName(name, token || "");
      } else {
        console.log("using endpoint 3");
        data = await MusicService.getAllUploadedMusic(token || "");
      }
    } else if (type === "premade") {
      if (MusicId) {
        data = await MusicService.getPremadeMusicById(MusicId);
      } else if (name) {
        data = await MusicService.getPremadeMusicByName(name);
      } else {
        data = await MusicService.getAllPremadeMusic();
      }
    } else {
      return NextResponse.json(
        { message: "Invalid music type" },
        { status: 400 }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || {
      message: "Internal Server Error",
    };
    return NextResponse.json(message, { status });
  }
}

// Handler for DELETE requests
export async function DELETE(request: NextRequest) {
  try {
    const token = request.headers.get("authorization");
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const id = searchParams.get("id");

    if (type !== "uploaded") {
      return NextResponse.json(
        { message: "Can only delete uploaded music" },
        { status: 400 }
      );
    }

    if (!id) {
      return NextResponse.json(
        { message: "Music ID is required" },
        { status: 400 }
      );
    }

    await MusicService.deleteUploadedMusic(id, token || "");

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || {
      message: "Internal Server Error",
    };
    return NextResponse.json(message, { status });
  }
}
