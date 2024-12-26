function findMissingNumbers(nums: number[]): number[] {
  const result: number[] = [];
  const max = Math.max(...nums);

  for (let i = 1; i < max; i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }

  return result;
}

export { findMissingNumbers };
