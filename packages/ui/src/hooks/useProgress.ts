import { useState, useEffect } from "react";

// This hook calculates the progress percentage based on current time and duration.
export function useProgress(currentTime: number, duration: number) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  const updateProgress = (value: number) => {
    setProgress(value);
  };

  return { progress, updateProgress };
}
