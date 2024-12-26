import { describe, expect, expectTypeOf, it } from 'vitest';

import { findMissingNumbers } from './solution';

describe('reto #23: Encuentra los números perdidos', () => {
  it('return type', () => {
    expectTypeOf(findMissingNumbers([])).toBeArray();
  });

  it('findMissingNumbers([1, 2, 4, 6])', () => {
    expect(findMissingNumbers([1, 2, 4, 6])).toEqual([3, 5]);
  });

  it('findMissingNumbers([4, 8, 7, 2])', () => {
    expect(findMissingNumbers([4, 8, 7, 2])).toEqual([1, 3, 5, 6]);
  });

  it('findMissingNumbers([3, 2, 1, 1])', () => {
    expect(findMissingNumbers([3, 2, 1, 1])).toEqual([]);
  });

  it('findMissingNumbers([5, 5, 5, 3, 3, 2, 1])', () => {
    expect(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])).toEqual([4]);
  });

  it('findMissingNumbers([1, 2, 3, 4, 5])', () => {
    expect(findMissingNumbers([1, 2, 3, 4, 5])).toEqual([]);
  });
});
