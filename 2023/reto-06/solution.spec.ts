import { describe, expect, it } from 'vitest';
import { maxDistance } from './solution';

describe('Reto 06: Los renos a prueba', () => {
  it('Test 1', () => {
    const movements = '>>*<';
    const result = maxDistance(movements);
    const expected = 2;

    expect(result).toBe(expected);
  });

  it('Test 2', () => {
    const movements = '<<<<<';
    const result = maxDistance(movements);
    const expected = 5;

    expect(result).toBe(expected);
  });

  it('Test 3', () => {
    const movements = '>***>';
    const result = maxDistance(movements);
    const expected = 5;

    expect(result).toBe(expected);
  });

  it('Test 4', () => {
    const movements = '**********';
    const result = maxDistance(movements);
    const expected = 10;

    expect(result).toBe(expected);
  });

  it('Test 5', () => {
    const movements = '<<**>>';
    const result = maxDistance(movements);
    const expected = 2;

    expect(result).toBe(expected);
  });
});
