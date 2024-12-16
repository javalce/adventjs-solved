function calculatePrice(ornaments: string): number | undefined {
  const PRICES: Record<string, number> = {
    '*': 1,
    o: 5,
    '^': 10,
    '#': 50,
    '@': 100,
  } as const;
  let result = 0;

  if (ornaments.includes('Z')) return undefined;

  for (let i = 0; i < ornaments.length; i++) {
    const currentPrice = PRICES[ornaments[i]];
    const nextPrice = PRICES[ornaments[i + 1]];

    result += nextPrice > currentPrice ? -currentPrice : currentPrice;
  }

  return result;
}

export { calculatePrice };
