import { describe, expect, expectTypeOf, it } from 'vitest';

import { optimizeIntervals } from './solution';

describe('reto #17: Optimizando el alquiler', () => {
  it('return type', () => {
    expectTypeOf(optimizeIntervals([])).toBeArray();
  });

  it('optimizeIntervals([[2, 7], [3, 4], [5, 8]])', () => {
    expect(
      optimizeIntervals([
        [2, 7],
        [3, 4],
        [5, 8],
      ]),
    ).toEqual([[2, 8]]);
  });

  it('optimizeIntervals([[3, 4], [5, 8], [2, 7]])', () => {
    expect(
      optimizeIntervals([
        [3, 4],
        [5, 8],
        [2, 7],
      ]),
    ).toEqual([[2, 8]]);
  });

  it('optimizeIntervals([[1, 3], [2, 6], [8, 10]])', () => {
    expect(
      optimizeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
    ]);
  });

  it('optimizeIntervals([[1, 2], [3, 4], [5, 6]])', () => {
    expect(
      optimizeIntervals([
        [1, 2],
        [3, 4],
        [5, 6],
      ]),
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it('optimizeIntervals([[5, 7], [6, 8]])', () => {
    expect(
      optimizeIntervals([
        [5, 7],
        [6, 8],
      ]),
    ).toEqual([[5, 8]]);
  });

  it('optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])', () => {
    expect(
      optimizeIntervals([
        [1, 5],
        [6, 10],
        [11, 15],
        [16, 20],
      ]),
    ).toEqual([
      [1, 5],
      [6, 10],
      [11, 15],
      [16, 20],
    ]);
  });

  it('optimizeIntervals([[1, 15], [8, 12], [4, 7]])', () => {
    expect(
      optimizeIntervals([
        [1, 15],
        [8, 12],
        [4, 7],
      ]),
    ).toEqual([[1, 15]]);
  });
});
