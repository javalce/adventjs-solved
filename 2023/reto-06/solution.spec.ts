import { describe, expect, it } from 'vitest';
import { maxDistance } from './solution';

describe('reto 06: Los renos a prueba', () => {
  it('test 1', () => {
    const movements = '>>*<';
    const result = maxDistance(movements);
    const expected = 2;

    expect(result).toBe(expected);
  });

  it('test 2', () => {
    const movements = '<<<<<';
    const result = maxDistance(movements);
    const expected = 5;

    expect(result).toBe(expected);
  });

  it('test 3', () => {
    const movements = '>***>';
    const result = maxDistance(movements);
    const expected = 5;

    expect(result).toBe(expected);
  });

  it('test 4', () => {
    const movements = '**********';
    const result = maxDistance(movements);
    const expected = 10;

    expect(result).toBe(expected);
  });

  it('test 5', () => {
    const movements = '<<**>>';
    const result = maxDistance(movements);
    const expected = 2;

    expect(result).toBe(expected);
  });
});
