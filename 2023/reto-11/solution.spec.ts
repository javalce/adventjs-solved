import { describe, expect, it } from 'vitest';

import getIndexsForPalindrome from './solution';

describe('reto 11: Los elfos estudiosos', () => {
  it('debería ser una función', () => {
    expect(getIndexsForPalindrome).toBeTypeOf('function');
  });

  it('debería devolver un array vacío para la palabra "anna", ya que es palíndromo', () => {
    const word = 'anna';
    const expected: number[] = [];
    const result = getIndexsForPalindrome(word);

    expect(result).toEqual(expected);
  });

  it('debería devolver un array con los índices 0 y 1 para que la palabra "abab" sea palíndromo', () => {
    const word = 'abab';
    const expected = [0, 1];
    const result = getIndexsForPalindrome(word);

    expect(result).toEqual(expected);
  });

  it('debería devolver null para la palabra "abac", ya que no es posible que sea palíndromo', () => {
    const word = 'abac';
    const result = getIndexsForPalindrome(word);

    expect(result).toBeNull();
  });

  it('debería devolver un array vacío para la palabra "aaaaaaaa", ya que es palíndromo', () => {
    const word = 'aaaaaaaa';
    const expected: number[] = [];
    const result = getIndexsForPalindrome(word);

    expect(result).toEqual(expected);
  });

  it('debería devolver un array con los índices 1 y 3 para que la palabra "aaababa" sea palíndromo', () => {
    const word = 'aaababa';
    const expected = [1, 3];
    const result = getIndexsForPalindrome(word);

    expect(result).toEqual(expected);
  });

  it('debería devolver null para la palabra "caababa", ya que no es posible que sea palíndromo', () => {
    const word = 'caababa';
    const result = getIndexsForPalindrome(word);

    expect(result).toBeNull();
  });

  it('debería devolver un array vacío para la palabra "rotavator", ya que es palíndromo', () => {
    const word = 'rotavator';
    const expected: number[] = [];
    const result = getIndexsForPalindrome(word);

    expect(result).toEqual(expected);
  });

  it('debería devolver un array con los índices 4 y 8 para que la palabra "rotaratov" sea palíndromo', () => {
    const word = 'rotaratov';
    const expected = [4, 8];
    const result = getIndexsForPalindrome(word);

    expect(result).toEqual(expected);
  });

  it('debería devolver un array vacío para la palabra "saippuakivikauppias", ya que es palíndromo', () => {
    const word = 'saippuakivikauppias';
    const expected: number[] = [];
    const result = getIndexsForPalindrome(word);

    expect(result).toEqual(expected);
  });
});
