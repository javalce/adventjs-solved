function execute(code: string): number {
  let result = 0;
  const openLoopIndexStack: number[] = [];

  for (let i = 0; i < code.length; i++) {
    const c = code[i];

    if (c === '+') {
      result++;
    } else if (c === '-') {
      result--;
    } else if (c === '[') {
      if (result === 0) {
        i = code.indexOf(']', i);
      } else {
        openLoopIndexStack.push(i);
      }
    } else if (c === ']') {
      if (result !== 0) {
        i = openLoopIndexStack.at(-1)!;
      } else {
        openLoopIndexStack.pop();
      }
    } else if (c === '{' && result === 0) {
      i = code.indexOf('}', i);
    }
  }

  return result;
}

export { execute };
