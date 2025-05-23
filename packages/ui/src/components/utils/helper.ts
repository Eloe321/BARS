async function urlToFile(audioSrc: string, fileName: string, mimeType: string): Promise<File> {
  const response = await fetch(audioSrc);
  const data = await response.blob();
  return new File([data], fileName, { type: mimeType });
}

export { urlToFile }

