interface Shoe {
  type: 'I' | 'R';
  size: number;
}

function organizeShoes(shoes: Shoe[]): number[] {
  const result: number[] = [];
  const sizes = new Map<number, { I: number; R: number }>();

  for (const shoe of shoes) {
    const size = sizes.get(shoe.size) ?? { I: 0, R: 0 };

    size[shoe.type]++;
    sizes.set(shoe.size, size);
  }

  for (const [size, { I, R }] of sizes) {
    result.push(...Array<number>(Math.min(I, R)).fill(size));
  }

  return result;
}

export { organizeShoes };
