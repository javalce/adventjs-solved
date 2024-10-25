import { describe, expect, it } from 'vitest';

import { maxGifts } from './solution';

describe('reto 14: Evita la alarma', () => {
  it('debería devolver un número', () => {
    expect(maxGifts([])).toBeTypeOf('number');
  });

  it('debería devolver 4 si se le pasa [1, 2, 3, 1]', () => {
    expect(maxGifts([1, 2, 3, 1])).toBe(4);
  });

  it('debería devolver 12 si se le pasa [2, 7, 9, 3, 1]', () => {
    expect(maxGifts([2, 7, 9, 3, 1])).toBe(12);
  });

  it('debería devolver 1 si se le pasa [0, 0, 0, 0, 1]', () => {
    expect(maxGifts([0, 0, 0, 0, 1])).toBe(1);
  });

  it('debería devolver 100 si se le pasa [100]', () => {
    expect(maxGifts([100])).toBe(100);
  });

  it('debería devolver 2 si se le pasa [1, 1, 1, 1]', () => {
    expect(maxGifts([1, 1, 1, 1])).toBe(2);
  });

  it('debería devolver 2 si se le pasa [1, 1, 1]', () => {
    expect(maxGifts([1, 1, 1])).toBe(2);
  });

  it('debería devolver 8 si se le pasa [3, 4, 5]', () => {
    expect(maxGifts([3, 4, 5])).toBe(8);
  });

  it('debería devolver 99 si se le pasa [99]', () => {
    expect(maxGifts([99])).toBe(99);
  });
});
