export function createChristmasTree(ornaments: string, height: number): string {
  let tree = '';
  let ornamentIndex = 0;

  function getSpaces(height: number): string {
    return ' '.repeat(height);
  }

  function getOrnament(): string {
    const ornament = ornaments[ornamentIndex];

    ornamentIndex++;
    ornamentIndex %= ornaments.length;

    return ornament;
  }

  for (let i = 1; i <= height; i++) {
    const lateralSpaces = getSpaces(height - i);
    const centerOrnaments = Array.from({ length: i }, getOrnament).join(' ');

    tree += `${lateralSpaces}${centerOrnaments}\n`;
  }

  const baseSpaces = getSpaces(height - 1);
  const base = `${baseSpaces}|\n`;

  tree += base;

  return tree;
}
