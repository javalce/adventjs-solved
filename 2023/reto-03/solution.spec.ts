import { describe, expect, it } from 'vitest';

import { findNaughtyStep } from './solution';

describe('reto #3: El elfo travieso', () => {
  it('para el original "abcd" y el modificado "abcde", debería devolver "e"', () => {
    const original = 'abcd';
    const modified = 'abcde';
    const expected = 'e';
    const result = findNaughtyStep(original, modified);

    expect(result).toBe(expected);
  });

  it('para el original "abcde" y el modificado "abcde", debería devolver ""', () => {
    const original = 'abcde';
    const modified = 'abcde';
    const expected = '';
    const result = findNaughtyStep(original, modified);

    expect(result).toBe(expected);
  });

  it('para el original "xxxx" y el modificado "xxoxx", debería devolver "o"', () => {
    const original = 'xxxx';
    const modified = 'xxoxx';
    const expected = 'o';
    const result = findNaughtyStep(original, modified);

    expect(result).toBe(expected);
  });

  it('para el original "stepfor" y el modificado "stepor", debería devolver "f"', () => {
    const original = 'stepfor';
    const modified = 'stepor';
    const expected = 'f';
    const result = findNaughtyStep(original, modified);

    expect(result).toBe(expected);
  });

  it('para el original "iiiii" y el modificado "iiiii", debería devolver ""', () => {
    const original = 'iiiii';
    const modified = 'iiiii';
    const expected = '';
    const result = findNaughtyStep(original, modified);

    expect(result).toBe(expected);
  });
});
