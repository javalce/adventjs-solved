export function cyberReindeer(road: string, time: number): string[] {
  const PATHS = {
    ROAD: '.',
    TRINEO: 'S',
    OPENED_BARRIER: '*',
    CLOSED_BARRIER: '|',
  };
  const result = [road];
  let lastChar = PATHS.ROAD;
  const LOOPS_TO_OPEN_DOOR = 5;

  for (let i = 1; i < time; i++) {
    if (i === LOOPS_TO_OPEN_DOOR) {
      road = road.replaceAll(PATHS.CLOSED_BARRIER, PATHS.OPENED_BARRIER);
    }

    const trineoIndex = road.indexOf(PATHS.TRINEO);
    const nextChar = road[trineoIndex + 1];

    if (nextChar !== PATHS.CLOSED_BARRIER) {
      const prev = road.substring(0, trineoIndex);
      const next = road.substring(trineoIndex + 2);

      road = prev + lastChar + PATHS.TRINEO + next;
      lastChar = nextChar;
    }

    result.push(road);
  }

  return result;
}
