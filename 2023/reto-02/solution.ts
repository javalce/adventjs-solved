export function manufacture(gifts: string[], materials: string): string[] {
  const regex = new RegExp(`[^${materials}]`);

  return gifts.filter((gift) => !regex.test(gift));
}
