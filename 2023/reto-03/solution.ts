export function findNaugtyStep(original: string, modified: string): string {
  if (original.length < modified.length) {
    [modified, original] = [original, modified];
  }

  for (let i = 0; i < original.length; i++) {
    const a = original[i];
    const b = modified[i];
    if (a !== b) return a;
  }

  return '';
}
