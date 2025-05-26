export const formatMusicName = (name: string) => {
  const match = name.match(/^mp3-\d+-(.+?)-[^-]+\.mp3$/);
  const musicTitle = match ? match[1].replace(/_/g, " ") : name;
  return musicTitle;
};

export const formatQuotesFromMusicName = (name: string) => {
  const newName = name.replace(/"/g, "");
  return newName;
};
