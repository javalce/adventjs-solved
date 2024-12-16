function isRobotBack(moves: string): true | [number, number] {
  const MOVEMENTS: Record<string, [number, number]> = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };
  const INVERSE_MOVEMENTS: Record<string, string> = {
    L: 'R',
    R: 'L',
    U: 'D',
    D: 'U',
  };
  const position: [number, number] = [0, 0];
  const movesArray = moves.split('');
  const movementDoneBefore = new Set<string>();

  for (let i = 0; i < movesArray.length; i++) {
    let move = movesArray[i];

    movementDoneBefore.add(move);

    if (move === '*') {
      move = movesArray[i + 1];
    } else if (move === '!') {
      move = INVERSE_MOVEMENTS[movesArray[++i]];
    } else if (move === '?') {
      move = movesArray[++i];
      if (movementDoneBefore.has(move)) {
        continue;
      }
    }

    const [x, y] = MOVEMENTS[move];

    position[0] += x;
    position[1] += y;
  }

  return position[0] === 0 && position[1] === 0 ? true : position;
}

export { isRobotBack };
