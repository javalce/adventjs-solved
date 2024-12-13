function compile(instructions: string[]): number | undefined {
  const memory = new Map<string, number>();
  let index = 0;

  while (index < instructions.length) {
    const [action, ...params] = instructions[index].split(' ');

    if (action === 'MOV') {
      const [value, registry] = params;
      const intValue = Number(value);

      if (Number.isNaN(intValue)) {
        const valueToMove = memory.get(value) ?? 0;

        memory.set(registry, valueToMove);
      } else {
        memory.set(registry, intValue);
      }
    } else if (action === 'INC') {
      const [registry] = params;
      const newValue = memory.get(registry) ?? 0;

      memory.set(registry, newValue + 1);
    } else if (action === 'DEC') {
      const [registry] = params;
      const newValue = memory.get(registry) ?? 0;

      memory.set(registry, newValue - 1);
    } else if (action === 'JMP') {
      const [registry, jump] = params;
      const value = memory.get(registry) ?? 0;

      if (value === 0) {
        index = Number(jump);
        continue;
      }
    }

    index++;
  }

  return memory.get('A');
}

export { compile };
