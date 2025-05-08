"use client";
import React, { useState } from 'react';
import axios from 'axios';

const MusicUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:3306/api/upload', formData);
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default MusicUploader;
