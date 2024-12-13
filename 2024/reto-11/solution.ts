function decodeFilename(filename: string): string {
  const regex = /^\d+_(?<filename>[a-zA-Z0-9_-]+\.\w+)\..*$/;

  const match = regex.exec(filename);

  return match?.groups?.filename ?? '';
}

export { decodeFilename };
