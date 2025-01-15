type Interval = [number, number];

function optimizeIntervals(intervals: Interval[]): Interval[] {
  intervals.sort((a, b) => a[0] - b[0]);
  const result: Interval[] = [intervals[0]];

  for (const interval of intervals) {
    const [start, end] = interval;
    const [lastStart, lastEnd] = result[result.length - 1];

    if (start <= lastEnd) {
      result.splice(-1, 1, [lastStart, Math.max(lastEnd, end)]);
    } else {
      result.push(interval);
    }
  }

  return result;
}

export { optimizeIntervals };
