import { describe, expect, expectTypeOf, it } from 'vitest';

import { drawRace } from './solution';

describe('reto #8: La carrera de renos', () => {
  it('return type', () => {
    expectTypeOf(drawRace([], 0)).toBeString();
  });

  it('drawRace([0, 5, -3], 10)', () => {
    expect(drawRace([0, 5, -3], 10)).toEqual('  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3');
  });

  it('drawRace([2, -1, 0, 5], 8)', () => {
    expect(drawRace([2, -1, 0, 5], 8)).toEqual(
      '   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4',
    );
  });

  it('drawRace([3, 7, -2], 12)', () => {
    expect(drawRace([3, 7, -2], 12)).toEqual(
      '  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3',
    );
  });

  it('drawRace([0, 0, 0], 6)', () => {
    expect(drawRace([0, 0, 0], 6)).toEqual('  ~~~~~~ /1\n ~~~~~~ /2\n~~~~~~ /3');
  });

  it('drawRace([5, 3, -4], 9)', () => {
    expect(drawRace([5, 3, -4], 9)).toEqual('  ~~~~~r~~~ /1\n ~~~r~~~~~ /2\n~~~~~r~~~ /3');
  });
});
