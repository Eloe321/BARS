import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3306";

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

    const response = await fetch(`${BACKEND_URL}/music/uploaded`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
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

    let endpoint = "";

    // Determine the endpoint based on query parameters
    if (type === "uploaded") {
      if (MusicId) {
        console.log("using endpoint 1");
        endpoint = `/music/uploaded/${MusicId}`;
      } else if (name) {
        console.log("using endpoint 2");
        endpoint = `/music/uploaded/name/${name}`;
      } else {
        console.log("using endpoint 3");
        endpoint = "/music/uploaded";
      }
    } else if (type === "premade") {
      if (MusicId) {
        endpoint = `/music/premade/${MusicId}`;
      } else if (name) {
        endpoint = `/music/premade/name/${name}`;
      } else {
        endpoint = "/music/premade";
      }
    } else {
      return NextResponse.json(
        { message: "Invalid music type" },
        { status: 400 }
      );
    }
    const response = await fetch(`${BACKEND_URL}${endpoint}`, {
      headers: {
        Authorization: token || "",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
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

    const response = await fetch(`${BACKEND_URL}/music/uploaded/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token || "",
      },
    });

    if (!response.ok) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
