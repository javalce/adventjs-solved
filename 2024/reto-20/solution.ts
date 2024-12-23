function fixGiftList(
  received: string[],
  expected: string[],
): {
  missing: Record<string, number>;
  extra: Record<string, number>;
} {
  const result: {
    missing: Record<string, number>;
    extra: Record<string, number>;
  } = {
    missing: {},
    extra: {},
  };

  for (const gift of received) {
    const expectedIndex = expected.indexOf(gift);

    if (expectedIndex > -1) {
      expected.splice(expectedIndex, 1);
    } else {
      result.extra[gift] = (result.extra[gift] ?? 0) + 1;
    }
  }

  for (const gift of expected) {
    result.missing[gift] = (result.missing[gift] ?? 0) + 1;
  }

  return result;
}

export { fixGiftList };
