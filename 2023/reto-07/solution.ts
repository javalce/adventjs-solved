export function drawGift(size: number, symbol: string): string {
  let bgSize = size - 2;

  bgSize += Number(!(bgSize + 1));

  const top = `${' '.repeat(size - 1) + '#'.repeat(size)}\n`;
  const center = `${'#'.repeat(size) + symbol.repeat(bgSize)}#\n`;
  const bottom = `${'#'.repeat(size)}\n`;

  let topCenter = '';
  let bottomCenter = '';

  for (const a of Array.from({ length: bgSize }).keys()) {
    const c = `#${symbol.repeat(bgSize)}#${symbol.repeat(a)}#`;

    bottomCenter = `${c}\n${bottomCenter}`;
    topCenter += `${' '.repeat(bgSize - a) + c}\n`;
  }

  const topCenterToBottom = topCenter + center + bottomCenter + bottom;
  const repeatNum = Number(Boolean(size - 1));

  return top + topCenterToBottom.repeat(repeatNum);
}
