import { describe, expect, it } from 'vitest';
import { findFirstRepeated } from './solution';

describe('reto #1: ¡Primer regalo repetido!', () => {
  it('para el array [2, 1, 3, 5, 3, 2], debería devolver 3 (el primero que aparezca)', () => {
    const giftsId = [2, 1, 3, 5, 3, 2];
    const expected = 3;
    const result = findFirstRepeated(giftsId);

    expect(result).toBe(expected);
  });

  it('para el array [2, 2], debería devolver 2', () => {
    const giftsId = [2, 2];
    const expected = 2;
    const result = findFirstRepeated(giftsId);

    expect(result).toBe(expected);
  });

  it('para el array [2, 4, 3, 5, 1], debería devolver -1', () => {
    const giftsId = [2, 4, 3, 5, 1];
    const expected = -1;
    const result = findFirstRepeated(giftsId);

    expect(result).toBe(expected);
  });

  it('para el array [1, 3, 4, 5, 0, 1, 3, 0, 7], debería devolver 1', () => {
    const giftsId = [1, 3, 4, 5, 0, 1, 3, 0, 7];
    const expected = 1;
    const result = findFirstRepeated(giftsId);

    expect(result).toBe(expected);
  });

  it('para el array [], debería devolver -1', () => {
    const giftsId: number[] = [];
    const expected = -1;
    const result = findFirstRepeated(giftsId);

    expect(result).toBe(expected);
  });

  it('para el array [10, 20, 30], debería devolver -1', () => {
    const giftsId = [10, 20, 30];
    const expected = -1;
    const result = findFirstRepeated(giftsId);

    expect(result).toBe(expected);
  });

  it('para el array [5, 1, 2, 3, 2, 5, 1], debería devolver 2', () => {
    const giftsId = [5, 1, 2, 3, 2, 5, 1];
    const expected = 2;
    const result = findFirstRepeated(giftsId);

    expect(result).toBe(expected);
  });

  it('para el array [1, 10, 2, 10, 20, 50, 7, 0, 0, 7], debería devolver 10', () => {
    const giftsId = [1, 10, 2, 10, 20, 50, 7, 0, 0, 7];
    const expected = 10;
    const result = findFirstRepeated(giftsId);

    expect(result).toBe(expected);
  });
});
