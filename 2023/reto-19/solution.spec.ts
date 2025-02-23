import { describe, expect, expectTypeOf, it } from 'vitest';

import { revealSabotage } from './solution';

describe('reto #19: Enfrenta el sabotaje', () => {
  it('return type', () => {
    expectTypeOf(revealSabotage([])).toBeArray();
  });

  it('revealSabotage([["*", " ", " ", " "], [" ", " ", "*", " "], [" ", " ", " ", " "], ["*", " ", " ", " "]])', () => {
    expect(
      revealSabotage([
        ['*', ' ', ' ', ' '],
        [' ', ' ', '*', ' '],
        [' ', ' ', ' ', ' '],
        ['*', ' ', ' ', ' '],
      ]),
    ).toEqual([
      ['*', '2', '1', '1'],
      ['1', '2', '*', '1'],
      ['1', '2', '1', '1'],
      ['*', '1', ' ', ' '],
    ]);
  });

  it('revealSabotage([[" ", " ", " "], [" ", "*", " "], [" ", " ", " "]])', () => {
    expect(
      revealSabotage([
        [' ', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', ' '],
      ]),
    ).toEqual([
      ['1', '1', '1'],
      ['1', '*', '1'],
      ['1', '1', '1'],
    ]);
  });

  it('revealSabotage([["*", " ", " "], [" ", "*", " "], [" ", " ", "*"]])', () => {
    expect(
      revealSabotage([
        ['*', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', '*'],
      ]),
    ).toEqual([
      ['*', '2', '1'],
      ['2', '*', '2'],
      ['1', '2', '*'],
    ]);
  });

  it('revealSabotage([["*", " ", " "], [" ", " ", " "], [" ", " ", " "]])', () => {
    expect(
      revealSabotage([
        ['*', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' '],
      ]),
    ).toEqual([
      ['*', '1', ' '],
      ['1', '1', ' '],
      [' ', ' ', ' '],
    ]);
  });

  it('revealSabotage([["*", "*", "*"], ["*", " ", "*"], ["*", "*", "*"]])', () => {
    expect(
      revealSabotage([
        ['*', '*', '*'],
        ['*', ' ', '*'],
        ['*', '*', '*'],
      ]),
    ).toEqual([
      ['*', '*', '*'],
      ['*', '8', '*'],
      ['*', '*', '*'],
    ]);
  });

  it('revealSabotage([["*", " ", "*"]])', () => {
    expect(revealSabotage([['*', ' ', '*']])).toEqual([['*', '2', '*']]);
  });

  it('revealSabotage([["*", " ", " "], [" ", " ", " "], [" ", " ", "*"]])', () => {
    expect(
      revealSabotage([
        ['*', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', '*'],
      ]),
    ).toEqual([
      ['*', '1', ' '],
      ['1', '2', '1'],
      [' ', '1', '*'],
    ]);
  });

  it('revealSabotage([["*", " ", " ", " ", " "], [" ", " ", " ", " ", " "], [" ", " ", "*", " ", " "], [" ", " ", " ", " ", " "], [" ", " ", " ", " ", "*"]])', () => {
    expect(
      revealSabotage([
        ['*', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', '*', ' ', ' '],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', '*'],
      ]),
    ).toEqual([
      ['*', '1', ' ', ' ', ' '],
      ['1', '2', '1', '1', ' '],
      [' ', '1', '*', '1', ' '],
      [' ', '1', '1', '2', '1'],
      [' ', ' ', ' ', '1', '*'],
    ]);
  });
});
