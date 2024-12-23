function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
  const phoneRegex = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/;
  const agendaLines = agenda.split('\n');
  const results: { name: string; address: string }[] = [];

  for (const line of agendaLines) {
    const phoneMatch = phoneRegex.exec(line);

    if (!phoneMatch?.[0].includes(phone)) continue;

    const newLine = line.replace(phoneRegex, '');
    const nameMatch = /<(?<name>.*)>/.exec(newLine);
    const addressMatch = /(?<address>.*) <.*>/.exec(newLine);

    results.push({
      name: nameMatch?.groups?.name ?? '',
      address: addressMatch?.groups?.address.trim() ?? '',
    });
  }

  return results.length === 1 ? results[0] : null;
}

export { findInAgenda };
