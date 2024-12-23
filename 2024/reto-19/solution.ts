function distributeWeight(weight: number): string {
  const boxRepresentations: Record<number, string[]> = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
  };
  const boxWeights = [10, 5, 2, 1];
  const stack: number[] = [];

  if (weight === 0) return '';

  for (const boxWeight of boxWeights) {
    while (weight >= boxWeight) {
      stack.push(boxWeight);
      weight -= boxWeight;
    }
  }

  stack.reverse();

  const combinedStack: string[] = [...boxRepresentations[stack[0]]];

  for (let i = 1; i < stack.length; i++) {
    const current = stack[i];
    const prev = stack[i - 1];

    const currentBoxes = boxRepresentations[current][0];
    const prevBoxes = boxRepresentations[prev].at(-1)!;
    const combinedBoxes = prevBoxes + currentBoxes.slice(prevBoxes.length);

    combinedStack.splice(combinedStack.length - 1, 1, combinedBoxes.trim());
    combinedStack.push(...boxRepresentations[current].slice(1));
  }

  return combinedStack.join('\n');
}

export { distributeWeight };
