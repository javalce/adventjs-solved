function drawRace(indices: number[], length: number): string {
  const rail = '~'.repeat(length);
  const result = [];
  let count = 1;
  let spaces = indices.length - 1;

  for (const index of indices) {
    const value = rail.split('');

    if (index > 0) {
      value.splice(index, 1, 'r');
    } else if (index < 0) {
      value.splice(length + index, 1, 'r');
    }

    result.push(`${' '.repeat(spaces--)}${value.join('')} /${count++}`);
  }

  return result.join('\n');
}

export { drawRace };
