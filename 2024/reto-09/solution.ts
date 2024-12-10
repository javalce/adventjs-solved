type Board = string[];
type Movement = 'U' | 'D' | 'R' | 'L';
type Result = 'none' | 'crash' | 'eat';

function moveTrain(board: Board, mov: Movement): Result {
  const movements = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  } as const;
  const status: Record<string, Result> = {
    '*': 'eat',
    o: 'crash',
  };

  let row = board.findIndex((row) => row.includes('@'));
  let col = board[row].indexOf('@');

  [row, col] = [row + movements[mov][0], col + movements[mov][1]];

  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
    return 'crash';
  }

  const cell = board[row][col];

  return status[cell] ?? 'none';
}

export { moveTrain };
