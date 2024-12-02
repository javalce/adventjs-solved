import { describe, expect, expectTypeOf, it } from 'vitest';

import { prepareGifts } from './solution';

describe('reto #1: ¡Primer regalo repetido!', () => {
  it('should return an array', () => {
    expectTypeOf(prepareGifts([])).toBeArray();
  });

  it('prepareGifts([3, 1, 2, 3, 4, 2, 5])', () => {
    expect(prepareGifts([3, 1, 2, 3, 4, 2, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('prepareGifts([5, 5, 5, 5])', () => {
    expect(prepareGifts([5, 5, 5, 5])).toEqual([5]);
  });

  it('prepareGifts([1, 2, 3])', () => {
    expect(prepareGifts([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('prepareGifts([])', () => {
    expect(prepareGifts([])).toEqual([]);
  });

  it('prepareGifts([10, 20, 10, 30, 20, 30, 40])', () => {
    expect(prepareGifts([10, 20, 10, 30, 20, 30, 40])).toEqual([10, 20, 30, 40]);
  });

  it('prepareGifts([3, 1, 2, 3, 1, 2])', () => {
    expect(prepareGifts([3, 1, 2, 3, 1, 2])).toEqual([1, 2, 3]);
  });
});
