function drawTable(data: Record<string, string | number>[]): string {
  if (data.length === 0) return '';

  const result: string[] = [];
  const headerKeys = Object.keys(data[0]);
  const columnWidths = headerKeys.map((key) => {
    return Math.max(...data.map((row) => row[key].toString().length), key.length);
  });

  let separator = '+';

  for (const width of columnWidths) {
    separator += `${'-'.repeat(width + 2)}+`;
  }

  result.push(separator);

  let headerString = '';

  for (let i = 0; i < headerKeys.length; i++) {
    const key = headerKeys[i];
    const width = columnWidths[i];

    headerString += `| ${key.slice(0, 1).toUpperCase()}${key.slice(1).padEnd(width)}`;
  }

  result.push(`${headerString}|`);

  result.push(separator);

  for (const row of data) {
    let rowString = '';
    const values = Object.values(row);

    for (let i = 0; i < values.length; i++) {
      const value = values[i].toString();
      const width = columnWidths[i];

      rowString += `| ${value.padEnd(width + 1)}`;
    }

    result.push(`${rowString}|`);
  }

  result.push(separator);

  return result.join('\n');
}

export { drawTable };
