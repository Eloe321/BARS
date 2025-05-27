import React, { useState, useEffect } from 'react';

interface AnalyzedLine {
  end_time: number;
  line_number: number;
  start_time: number;
  syllable_count: number;
  text: string;
  verse_index: number;
}

interface KaraokeViewerProps {
  analyzedVerses: AnalyzedLine[][];
  currentTime: number;
  className?: string;
}

const KaraokeViewer: React.FC<KaraokeViewerProps> = ({
  analyzedVerses,
  currentTime,
  className = ""
}) => {
  const [currentLine, setCurrentLine] = useState<AnalyzedLine | null>(null);
  const [nextLine, setNextLine] = useState<AnalyzedLine | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [countdownNumber, setCountdownNumber] = useState(3);

  useEffect(() => {
    if (!analyzedVerses || analyzedVerses.length === 0) {
      setCurrentLine(null);
      setNextLine(null);
      setIsVisible(false);
      setShowCountdown(false);
      return;
    }

    // Flatten all verses into a single array of lines
    const allLines = analyzedVerses.flat();
    
    // Get the first line's start time
    const firstLine = allLines[0];
    const firstLineStartTime = firstLine?.start_time || 0;
    
    // Check if we should show countdown (3 seconds before first line)
    const countdownStartTime = firstLineStartTime - 3;
    const shouldShowCountdown = currentTime >= countdownStartTime && currentTime < firstLineStartTime;
    
    if (shouldShowCountdown) {
      setShowCountdown(true);
      setIsVisible(true);
      setCurrentLine(null);
      setNextLine(firstLine || null);
      
      // Calculate countdown number (3, 2, 1)
      const timeUntilStart = firstLineStartTime - currentTime;
      const countdown = Math.ceil(timeUntilStart);
      setCountdownNumber(Math.max(0, countdown));
    } else {
      setShowCountdown(false);
      
      // Find the current line based on currentTime
      const active = allLines.find(
        line => currentTime >= line.start_time && currentTime <= line.end_time
      );

      // Find the next line
      const next = allLines.find(line => line.start_time > currentTime);

      setCurrentLine(active || null);
      setNextLine(next || null);
      setIsVisible(!!active);
    }
    console.log("NExt");
  }, [analyzedVerses, currentTime]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`karaoke-viewer-overlay ${className}`}>
      {/* Blur overlay */}
      <div className="karaoke-blur-backdrop" />
      
      {/* Karaoke content */}
      <div className="karaoke-content">
        {showCountdown ? (
          <div className="karaoke-countdown">
            <div className="countdown-number">
              {countdownNumber}
            </div>
            {nextLine && (
              <p className="countdown-ready-text">
                Get ready...
              </p>
            )}
            {nextLine && (
              <p className="karaoke-text next-text countdown-next">
                {nextLine.text}
              </p>
            )}
          </div>
        ) : currentLine && (
          <div className="karaoke-current-line">
            <div className="karaoke-text-container">
              <p className="karaoke-text current-text">
                {currentLine.text}
              </p>
              {nextLine && (
                <p className="karaoke-text next-text">
                  {nextLine.text}
                </p>
              )}
            </div>
            
            {/* Progress bar for current line */}
            <div className="karaoke-progress-container">
              <div 
                className="karaoke-progress-bar"
                style={{
                  width: `${Math.min(100, Math.max(0, 
                    ((currentTime - currentLine.start_time) / 
                     (currentLine.end_time - currentLine.start_time)) * 100
                  ))}%`
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KaraokeViewer;