function createXmasTree(height: number, ornament: string): string {
  const width = 2 * height - 1;
  const base = `${'_'.repeat((width - 1) / 2)}#${'_'.repeat((width - 1) / 2)}`;
  const tree: string[] = [];

  for (let i = 1; i <= height; i++) {
    const stars = i * 2 - 1;
    const spaces = (width - stars) / 2;

    tree.push(`${'_'.repeat(spaces)}${ornament.repeat(stars)}${'_'.repeat(spaces)}`);
  }

  return [...tree, base, base].join('\n');
}

export { createXmasTree };
