import { findFirstRepeated } from './solution';

describe('Reto #1: ¡Primer regalo repetido!', () => {
  it('Para el array [2, 1, 3, 5, 3, 2], debería devolver 3 (el primero que aparezca)', () => {
    const gifsId = [2, 1, 3, 5, 3, 2];
    const expected = 3;
    const result = findFirstRepeated(gifsId);
    expect(result).toBe(expected);
  });

  it('Para el array [1, 2, 3, 4], debería devolver -1', () => {
    const gifsId = [1, 2, 3, 4];
    const expected = -1;
    const result = findFirstRepeated(gifsId);
    expect(result).toBe(expected);
  });

  it('Para el array [5, 1, 5, 1], debería devolver 5 (el que primero aparezca)', () => {
    const gifsId = [5, 1, 5, 1];
    const expected = 5;
    const result = findFirstRepeated(gifsId);
    expect(result).toBe(expected);
  });
});
