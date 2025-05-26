"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@workspace/ui/components/context/authContext";

interface TestResponse {
  status: number;
  data: any;
}

export default function ApiTester() {
  const { token } = useAuth();
  const [response, setResponse] = useState<TestResponse | null>(null);
  const [musicName, setMusicName] = useState("");
  const [musicId, setMusicId] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const API_URL = "http://localhost:3306/music";

  const handleApiCall = async (
    endpoint: string,
    method: string = "GET",
    body?: any
  ) => {
    try {
      const headers: HeadersInit = {
        Authorization: `Bearer ${token}`,
      };

      if (!(body instanceof FormData)) {
        headers["Content-Type"] = "application/json";
      }

      const response = await fetch(`${API_URL}${endpoint}`, {
        method,
        headers,
        body: body instanceof FormData ? body : JSON.stringify(body),
      });

      const data = await response.json();
      setResponse({
        status: response.status,
        data,
      });
    } catch (error) {
      setResponse({
        status: 500,
        data: {
          error: error instanceof Error ? error.message : "Unknown error",
        },
      });
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Music API Tester</h1>

      <div className="space-y-6">
        {/* Get All Music */}
        <section className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Get All Music</h2>
          <div className="space-y-2">
            <button
              onClick={() => handleApiCall("/premade")}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Get All Premade
            </button>
            <button
              onClick={() => handleApiCall("/uploaded")}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Get All Uploaded
            </button>
          </div>
        </section>

        {/* Search by Name */}
        <section className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Search by Name</h2>
          <div className="space-y-2">
            <input
              type="text"
              value={musicName}
              onChange={(e) => setMusicName(e.target.value)}
              placeholder="Enter music name"
              className="border p-2 rounded w-full"
            />
            <button
              onClick={() => handleApiCall(`/premade/name/${musicName}`)}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Search Premade
            </button>
            <button
              onClick={() => handleApiCall(`/uploaded/name/${musicName}`)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Search Uploaded
            </button>
          </div>
        </section>

        {/* Get by ID */}
        <section className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Get by ID</h2>
          <div className="space-y-2">
            <input
              type="text"
              value={musicId}
              onChange={(e) => setMusicId(e.target.value)}
              placeholder="Enter music ID"
              className="border p-2 rounded w-full"
            />
            <button
              onClick={() => handleApiCall(`/premade/${musicId}`)}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Get Premade
            </button>
            <button
              onClick={() => handleApiCall(`/uploaded/${musicId}`)}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Get Uploaded
            </button>
          </div>
        </section>

        {/* Delete Music */}
        <section className="border p-4 rounded">
          <h2 className="text-xl font-semibold mb-4">Delete Music</h2>
          <div className="space-y-2">
            <input
              type="text"
              value={musicId}
              onChange={(e) => setMusicId(e.target.value)}
              placeholder="Enter music ID to delete"
              className="border p-2 rounded w-full"
            />
            <button
              onClick={() => handleApiCall(`/uploaded/${musicId}`, "DELETE")}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </section>

        {/* Response Display */}
        <section className="border p-4 rounded text-black">
          <h2 className="text-xl font-semibold mb-4">Response</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p>Status: {response?.status}</p>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(response?.data, null, 2)}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
