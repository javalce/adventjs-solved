function distributeGifts(weights: (number | null)[][]): number[][] {
  const rows = weights.length;
  const cols = weights[0]?.length ?? 0;
  const result = Array.from({ length: rows }, () => Array<number>(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const neighbors = [
        weights[i][j],
        i > 0 ? weights[i - 1][j] : null,
        j > 0 ? weights[i][j - 1] : null,
        i < rows - 1 ? weights[i + 1][j] : null,
        j < cols - 1 ? weights[i][j + 1] : null,
      ];

      const { total, count } = neighbors.reduce(
        (acc, neighbor) => {
          if (neighbor !== null) {
            acc.total += neighbor;
            acc.count++;
          }

          return acc;
        },
        { total: 0, count: 0 },
      );

      result[i][j] = Math.round(total / count);
    }
  }

  return result;
}

export { distributeGifts };
