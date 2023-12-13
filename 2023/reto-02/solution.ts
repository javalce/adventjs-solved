export function manufacture(gifts: string[], materials: string): string[] {
  const result: string[] = [];
  const regex = new RegExp(`[^${materials}]`);

  for (const gift of gifts) {
    if (!regex.test(gift)) {
      result.push(gift);
    }
  }

  return result;
}
