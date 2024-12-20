function detectBombs(grid: boolean[][]): number[][] {
  const adjacents = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const result = grid.map((row, i) => {
    return row.map((_, j) => {
      return adjacents.reduce((count, [x, y]) => {
        const nextX = i + x;
        const nextY = j + y;
        const isNextXValid = nextX >= 0 && nextX < grid.length;
        const isNextYValid = nextY >= 0 && nextY < row.length;

        if (isNextXValid && isNextYValid && grid[nextX][nextY]) {
          return count + 1;
        }

        return count;
      }, 0);
    });
  });

  return result;
}

export { detectBombs };
