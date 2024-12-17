function minMovesToStables(reindeer: number[], stables: number[]): number {
  let moves = 0;
  const size = reindeer.length;

  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);

  for (let i = 0; i < size; i++) {
    moves += Math.abs(reindeer[i] - stables[i]);
  }

  return moves;
}

export { minMovesToStables };
