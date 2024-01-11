import { describe, expect, it } from 'vitest';
import { autonomousDrive } from './solution';

describe('Reto 15: Robot autónomo', () => {
  it('Debería devolver un array de strings', () => {
    expect(autonomousDrive([], [])).toBeInstanceOf(Array);
  });

  it('Debería devolver el array ["..!...."] para el almacén ["..!...."] y los movimientos ["R", "L"]', () => {
    const store = ['..!....'];
    const movements = ['R', 'L'];
    const expected = ['..!....'];
    const result = autonomousDrive(store, movements);

    expect(result).toEqual(expected);
  });

  it('Debería devolver el array ["!..", "***"] para el almacén ["!..", "***"] y los movimientos ["R", "L"]', () => {
    const store = ['!..', '***'];
    const movements = ['R', 'L'];
    const expected = ['!..', '***'];
    const result = autonomousDrive(store, movements);

    expect(result).toEqual(expected);
  });

  it('Debería devolver el array [".......", "..!...*"] para el almacén ["..!....", "......*"] y los movimientos ["R", "D", "L"]', () => {
    const store = ['..!....', '......*'];
    const movements = ['R', 'D', 'L'];
    const expected = ['.......', '..!...*'];
    const result = autonomousDrive(store, movements);

    expect(result).toEqual(expected);
  });

  it('Debería devolver el array ["*.....*", "*....!*"] para el almacén ["*..!..*", "*.....*"] y los movimientos ["R", "R", "D", "D"]', () => {
    const store = ['*..!..*', '*.....*'];
    const movements = ['R', 'R', 'D', 'D'];
    const expected = ['*.....*', '*....!*'];
    const result = autonomousDrive(store, movements);

    expect(result).toEqual(expected);
  });

  it('Debería devolver el array ["***", "..!", "***"] para el almacén ["***", ".!.", "***"] y los movimientos ["D", "U", "R", "R", "R"]', () => {
    const store = ['***', '.!.', '***'];
    const movements = ['D', 'U', 'R', 'R', 'R'];
    const expected = ['***', '..!', '***'];
    const result = autonomousDrive(store, movements);

    expect(result).toEqual(expected);
  });

  it('Debería devolver el array ["***", "*!*", "***"] para el almacén ["***", "*!*", "***"] y los movimientos ["D", "U", "R", "L"]', () => {
    const store = ['***', '*!*', '***'];
    const movements = ['D', 'U', 'R', 'L'];
    const expected = ['***', '*!*', '***'];
    const result = autonomousDrive(store, movements);

    expect(result).toEqual(expected);
  });

  it('Debería devolver el array [".**.*.*.", ".***....", ".....!.."] para el almacén [".**.*.*.", ".***....", "..!....."] y los movimientos ["D", "U", "R", "R", "R"]', () => {
    const store = ['.**.*.*.', '.***....', '..!.....'];
    const movements = ['D', 'U', 'R', 'R', 'R'];
    const expected = ['.**.*.*.', '.***....', '.....!..'];
    const result = autonomousDrive(store, movements);

    expect(result).toEqual(expected);
  });

  // TEST SECRETOS
  it('Debería devolver el array [".**.*.*.", ".***....", "!......."] para el almacén [".**.*.*.", ".***....", "..!....."] y los movimientos ["D", "U", "L", "L", "L", "D"]', () => {
    const store = ['.**.*.*.', '.***....', '..!.....'];
    const movements = ['D', 'U', 'L', 'L', 'L', 'D'];
    const expected = ['.**.*.*.', '.***....', '!.......'];
    const result = autonomousDrive(store, movements);

    expect(result).toEqual(expected);
  });
});
