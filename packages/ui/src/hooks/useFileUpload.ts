import { useState } from "react";

// TODO: Add file upload functionality
export function useFileUpload(defaultSrc: string) {
  const [audioSrc, setAudioSrc] = useState<string>(defaultSrc);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioSrc(url);

      // Clean up the URL when the audio ends
      const cleanup = () => {
        URL.revokeObjectURL(url);
        setAudioSrc(defaultSrc);
      };
      return { url, cleanup };
    }
    return null;
  };

  return { audioSrc, handleFileUpload };
}
