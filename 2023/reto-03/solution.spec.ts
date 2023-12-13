import { findNaugtyStep } from './solution';

describe('Reto #3: El elfo travieso', () => {
  it('Para el original "abcd" y el modificado "abcde", debería devolver "e"', () => {
    const original = 'abcd';
    const modified = 'abcde';
    const expected = 'e';
    const result = findNaugtyStep(original, modified);

    expect(result).toBe(expected);
  });

  it('Para el original "stepfor" y el modificado "stepor", debería devolver "f"', () => {
    const original = 'stepfor';
    const modified = 'stepor';
    const expected = 'f';
    const result = findNaugtyStep(original, modified);

    expect(result).toBe(expected);
  });

  it('Para el original "abcde" y el modificado "abcde", debería devolver ""', () => {
    const original = 'abcde';
    const modified = 'abcde';
    const expected = '';
    const result = findNaugtyStep(original, modified);

    expect(result).toBe(expected);
  });
});
