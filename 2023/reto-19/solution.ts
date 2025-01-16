function revealSabotage(store: string[][]): string[][] {
  const positions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ] as const;

  for (let i = 0; i < store.length; i++) {
    for (let j = 0; j < store[i].length; j++) {
      if (store[i][j] !== '*') {
        let count = 0;

        for (const [x, y] of positions) {
          const row = i + x;
          const col = j + y;

          if (store[row]?.[col] === '*') {
            count++;
          }
        }

        if (count > 0) {
          store[i][j] = count.toString();
        }
      }
    }
  }

  return store;
}

export { revealSabotage };
