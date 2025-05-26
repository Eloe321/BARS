import { useState, useEffect } from "react";

type Cell = {
  id: number;
  type: string;
  content: string;
  timeStart?: number;
  timeEnd?: number;
};

export function useSongAlign() {
  const [cells, setCells] = useState<Cell[]>([]);
  const [lyricsText, setLyricsText] = useState<any>();
  const [contentJson, setContentJson] = useState<any>();

  // automatically arranges cells into json format
  const handleCellsUpdate = (cells: Cell[]) => {
    // taking all the cells
    setCells(cells);

    const lyricCells = cells.filter(cell => cell.type === 'lyric');

    const lyricsText = lyricCells.map(cell => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = cell.content;

      // Convert <div> and <br> to new lines explicitly
      tempDiv.querySelectorAll("br").forEach(br => br.replaceWith("\n"));
      tempDiv.querySelectorAll("div").forEach(div => {
        const textNode = document.createTextNode("\n" + div.textContent);
        div.replaceWith(textNode);
      });

      return tempDiv.textContent?.trim() || "";
    }).join('<VERSE>'); // Two newlines between each cell

  setLyricsText(lyricsText);

    const jsonData = cells.map(cell => ({
      id: cell.id,
      type: cell.type,
      content: cell.content,
      timeStart: cell.timeStart,
      timeEnd: cell.timeEnd
    }));

    // console.log("Generated JSON (lyrics only):", JSON.stringify(lyricsText, null, 2));
    console.log("Generated JSON (all cells):", JSON.stringify(jsonData, null, 2));
    setContentJson((JSON.stringify(jsonData, null, 2)));
  };

  return {contentJson, lyricsText, handleCellsUpdate};  
}