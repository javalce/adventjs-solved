export function createChristmasTree(ornaments: string, height: number): string {
  let tree = '';
  let ornamentIndex = 0;

  for (let i = 1; i <= height; i++) {
    const lateralSpaces = ' '.repeat(height - i);
    const centerOrnamentsArray: string[] = [];

    for (let j = 0; j < i; j++) {
      const ornament = ornaments[ornamentIndex];

      ornamentIndex = (ornamentIndex + 1) % ornaments.length;
      centerOrnamentsArray.push(ornament);
    }

    const centerOrnaments = centerOrnamentsArray.join(' ');

    tree += `${lateralSpaces}${centerOrnaments}\n`;
  }

  const baseSpaces = ' '.repeat(height - 1);
  const base = `${baseSpaces}|\n`;

  tree += base;

  return tree;
}
