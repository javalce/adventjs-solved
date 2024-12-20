import { describe, expect, expectTypeOf, it } from 'vitest';

import { detectBombs } from './solution';

describe('reto #17: Busca las bombas del Grinch', () => {
  it('return type', () => {
    expectTypeOf(detectBombs([])).toBeArray();
  });

  it('detectBombs([[true, false, false], [false, true, false], [false, false, false]])', () => {
    expect(
      detectBombs([
        [true, false, false],
        [false, true, false],
        [false, false, false],
      ]),
    ).toEqual([
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1],
    ]);
  });

  it('detectBombs([[false, true, false], [true, false, true], [false, true, false]])', () => {
    expect(
      detectBombs([
        [false, true, false],
        [true, false, true],
        [false, true, false],
      ]),
    ).toEqual([
      [2, 2, 2],
      [2, 4, 2],
      [2, 2, 2],
    ]);
  });

  it('detectBombs([[true, true], [true, true], [false, false]])', () => {
    expect(
      detectBombs([
        [true, true],
        [true, true],
        [false, false],
      ]),
    ).toEqual([
      [3, 3],
      [3, 3],
      [2, 2],
    ]);
  });

  it('detectBombs([[true, true], [true, true]])', () => {
    expect(
      detectBombs([
        [true, true],
        [true, true],
      ]),
    ).toEqual([
      [3, 3],
      [3, 3],
    ]);
  });

  it('detectBombs([[false, false, false], [false, true, false], [false, false, false]])', () => {
    expect(
      detectBombs([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ]),
    ).toEqual([
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ]);
  });

  it('detectBombs([[true, false], [false, false]])', () => {
    expect(
      detectBombs([
        [true, false],
        [false, false],
      ]),
    ).toEqual([
      [0, 1],
      [1, 1],
    ]);
  });
});
