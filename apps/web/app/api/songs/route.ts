import { NextRequest, NextResponse } from "next/server";
import { SongsService } from "@/lib/services/songs.service";

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get("authorization");
    const body = await request.json();

    const data = await SongsService.createSong(body, token || "");

    return NextResponse.json(data, { status: 201 });
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || {
      message: "Internal Server Error",
    };
    return NextResponse.json(message, { status });
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("authorization");
    const { searchParams } = new URL(request.url);
    const source = searchParams.get("source");

    const data = await SongsService.getSongs(token || "", source || undefined);

    return NextResponse.json(data);
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || {
      message: "Internal Server Error",
    };
    return NextResponse.json(message, { status });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const token = request.headers.get("authorization");
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Song ID is required" },
        { status: 400 }
      );
    }

    const data = await SongsService.updateSong(id, body, token || "");

    return NextResponse.json(data);
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || {
      message: "Internal Server Error",
    };
    return NextResponse.json(message, { status });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const token = request.headers.get("authorization");
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Song ID is required" },
        { status: 400 }
      );
    }

    await SongsService.deleteSong(id, token || "");

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    const status = error.response?.status || 500;
    const message = error.response?.data || {
      message: "Internal Server Error",
    };
    return NextResponse.json(message, { status });
  }
}
