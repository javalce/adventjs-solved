export function cyberReindeer(road: string, time: number): string[] {
  const paths = {
    road: '.',
    trineo: 'S',
    openedBarrier: '*',
    closedBarrier: '|',
  } as const;
  const result = [road];
  const trineoIndex = road.indexOf(paths.trineo);
  let lastChar = trineoIndex === 0 ? paths.road : road[trineoIndex - 1];
  const loopsToOpenDoor = 5;

  for (let i = 0; i < time - 1; i++) {
    let [prev, next] = road.split(paths.trineo);
    let replaceChar;
    let nextRoad;

    if (i === loopsToOpenDoor - 1) {
      road = road.replaceAll(paths.closedBarrier, paths.openedBarrier);
      [prev, next] = road.split(paths.trineo);
    }

    if (next[0] !== paths.closedBarrier) {
      replaceChar = lastChar;
      lastChar = next[0];
      nextRoad = next.slice(1);
    } else {
      replaceChar = '';
      nextRoad = next;
    }

    road = [prev, replaceChar, paths.trineo, nextRoad].join('');
    result.push(road);
  }

  return result;
}
