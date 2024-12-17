import { describe, expect, expectTypeOf, it } from 'vitest';

import { minMovesToStables } from './solution';

describe('reto #14: Acomodando a los renos', () => {
  it('return type', () => {
    expectTypeOf(minMovesToStables([], [])).toBeNumber();
  });

  it('minMovesToStables([2, 6, 9], [3, 8, 5])', () => {
    expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toBe(3);
  });

  it('minMovesToStables([1, 1, 3], [1, 4, 8])', () => {
    expect(minMovesToStables([1, 1, 3], [1, 4, 8])).toBe(8);
  });

  it('minMovesToStables([5, 15, 10], [8, 18, 12])', () => {
    expect(minMovesToStables([5, 15, 10], [8, 18, 12])).toBe(8);
  });

  it('minMovesToStables([30, 1, 2], [1, 2, 30])', () => {
    expect(minMovesToStables([30, 1, 2], [1, 2, 30])).toBe(0);
  });

  it('minMovesToStables([30, 20, 10], [35, 25, 15])', () => {
    expect(minMovesToStables([30, 20, 10], [35, 25, 15])).toBe(15);
  });

  it('minMovesToStables([100, 1], [50, 75])', () => {
    expect(minMovesToStables([100, 1], [50, 75])).toBe(74);
  });
});
