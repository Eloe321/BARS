const BASE_URL = "http://127.0.0.1:5000/api";

export async function getSyllables(text: string) {
  const res = await fetch(`${BASE_URL}/syllables`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  return res.json();
}

export async function getAudioTempo(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/audio-tempo`, {
    method: "POST",
    body: formData,
  });
  return res.json();
}

export async function generateLyrics(prompt: string) {
  const res = await fetch(`${BASE_URL}/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  console.log(res);
  return res.json();
}

export async function searchBinisaya(word: string): Promise<any> {
  const res = await fetch(`${BASE_URL}/search-binisaya/${word}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch thesaurus entry");
  }

  const data = await res.json();
  return data;
}

export async function analyzeLyrics(lyrics: string, audioFile: File) {
  const formData = new FormData();
  formData.append("audio", audioFile);
  formData.append("lyrics", lyrics);
  formData.append("verse_delimiter", "<VERSE>")

  const res = await fetch(`${BASE_URL}/analyze-lyrics`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Failed to analyze lyrics");
  }

  return res.json();
}