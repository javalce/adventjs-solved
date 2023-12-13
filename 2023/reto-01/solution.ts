export function findFirstRepeated(gifs: number[]): number {
  const ocurrencias: number[] = [];

  for (const gif of gifs) {
    if (ocurrencias.includes(gif)) return gif;
    ocurrencias.push(gif);
  }

  return -1;
}
