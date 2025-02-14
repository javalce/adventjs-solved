import { describe, expect, expectTypeOf, it } from 'vitest';

import { distributeGifts } from './solution';

describe('reto #20: Distribuye el peso', () => {
  it('return type', () => {
    expectTypeOf(distributeGifts([])).toBeArray();
  });

  it('distributeGifts([[4, 5, 1], [6, null, 3], [8, null, 4]])', () => {
    expect(
      distributeGifts([
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4],
      ]),
    ).toEqual([
      [5, 3, 3],
      [6, 5, 3],
      [7, 6, 4],
    ]);
  });

  it('distributeGifts([[2, null], [null, 3]])', () => {
    expect(
      distributeGifts([
        [2, null],
        [null, 3],
      ]),
    ).toEqual([
      [2, 3],
      [3, 3],
    ]);
  });

  it('distributeGifts([[2, 1, 1], [3, 4, null]])', () => {
    expect(
      distributeGifts([
        [2, 1, 1],
        [3, 4, null],
      ]),
    ).toEqual([
      [2, 2, 1],
      [3, 3, 3],
    ]);
  });

  it('distributeGifts([[null, 5], [3, null]])', () => {
    expect(
      distributeGifts([
        [null, 5],
        [3, null],
      ]),
    ).toEqual([
      [4, 5],
      [3, 4],
    ]);
  });

  it('distributeGifts([[1, 2, 3], [4, 5, 6], [7, 8, 9]])', () => {
    expect(
      distributeGifts([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([
      [2, 3, 4],
      [4, 5, 6],
      [6, 7, 8],
    ]);
  });

  it('distributeGifts([[null, 1, null, 1, null], [1, null, 1, null, 1]])', () => {
    expect(
      distributeGifts([
        [null, 1, null, 1, null],
        [1, null, 1, null, 1],
      ]),
    ).toEqual([
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ]);
  });
});
