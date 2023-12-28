export default function checkIsValidCopy(
  original: string,
  copy: string,
): boolean {
  const SYMBOLS = '#+:. ';
  const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz';

  const getDegradationOptions = (s: string): string => {
    if (UPPERCASE_LETTERS.includes(s)) {
      return s + s.toLowerCase() + SYMBOLS;
    }

    if (LOWERCASE_LETTERS.includes(s)) {
      return s + SYMBOLS;
    }

    if (SYMBOLS.includes(s)) {
      const i = SYMBOLS.indexOf(s);

      return SYMBOLS.slice(i);
    }

    return s;
  };

  if (original.length !== copy.length) {
    return false;
  }

  for (const i of Array.from({ length: original.length }).keys()) {
    const currentOriginalChar = original[i];
    const degradationOptions = getDegradationOptions(currentOriginalChar);
    const currentCopyChar = copy[i];

    if (!degradationOptions.includes(currentCopyChar)) {
      return false;
    }
  }

  return true;
}
