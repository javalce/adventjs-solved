function inBox(box: string[]): boolean {
  const regex = /^#\s*\*\s*#$/;

  return box.slice(1, -1).some((row) => regex.test(row));
}

export { inBox };
