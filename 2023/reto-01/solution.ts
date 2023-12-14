export function findFirstRepeated(gifts: number[]): number {
  const ocurrencias: number[] = [];

  for (const gift of gifts) {
    if (ocurrencias.includes(gift)) return gift;
    ocurrencias.push(gift);
  }

  return -1;
}
