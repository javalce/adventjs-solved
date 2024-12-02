function prepareGifts(gifts: number[]): number[] {
  const set = new Set(gifts);

  return [...set].sort((a, b) => a - b);
}

export { prepareGifts };
