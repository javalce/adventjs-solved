export function maxDistance(movements: string): number {
  const nums: Record<string, number> = {
    '>': 0,
    '<': 0,
    '*': 0,
  };

  for (const movement of movements) {
    nums[movement]++;
  }

  const total = nums['>'] - nums['<'];
  const result = Math.abs(total) + nums['*'];

  return result;
}
