export function autonomousDrive(
  store: string[],
  movements: string[],
): string[] {
  const MOVEMENTS: Record<string, number> = {
    R: 1,
    L: -1,
    D: 1,
    U: -1,
  };

  const ROBOT_SYMBOL = '!';
  const OBSTACLE_SYMBOL = '*';
  const EMPTY_SYMBOL = '.';

  for (const movement of movements) {
    let robotRow = store.findIndex((row) => row.includes(ROBOT_SYMBOL));
    let robotCol = store[robotRow].indexOf(ROBOT_SYMBOL);

    store[robotRow] = store[robotRow].replace(ROBOT_SYMBOL, EMPTY_SYMBOL);

    const nextMovement = MOVEMENTS[movement];

    if (
      'DU'.includes(movement) &&
      robotRow + nextMovement >= 0 &&
      robotRow + nextMovement < store.length &&
      store[robotRow + nextMovement].at(robotCol) !== OBSTACLE_SYMBOL
    ) {
      robotRow = robotRow + nextMovement;
    } else if (
      'LR'.includes(movement) &&
      robotCol + nextMovement >= 0 &&
      robotCol + nextMovement < store[robotRow].length &&
      store[robotRow].at(robotCol + nextMovement) !== OBSTACLE_SYMBOL
    ) {
      robotCol = robotCol + nextMovement;
    }

    const newRobotRow1 = store[robotRow].slice(0, robotCol);
    const newRobotRow2 = store[robotRow].slice(robotCol + 1);
    const newRobotRow = `${newRobotRow1}${ROBOT_SYMBOL}${newRobotRow2}`;

    store[robotRow] = newRobotRow;
  }

  return store;
}
