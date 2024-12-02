function createFrame(names: string[]): string {
  if (names.length === 0) return '';

  let maxNameLength = 0;

  for (const name of names) {
    maxNameLength = Math.max(maxNameLength, name.length);
  }

  const border = '*'.repeat(maxNameLength + 4);
  const frames = names.map((name) => `* ${name.padEnd(maxNameLength, ' ')} *`);

  return [border, ...frames, border].join('\n');
}

export { createFrame };
