import { describe, expect, it } from 'vitest';
import { decode } from './solution';

describe('Reto #4: Dale la vuelta a los paréntesis', () => {
  it('Para el string "hola (odnum)", debería devolver "hola mudo"', () => {
    const message = 'hola (odnum)';
    const expected = 'hola mundo';
    const result = decode(message);

    expect(result).toBe(expected);
  });

  it('Para el string "(olleh) (dlrow)!, debería devolver "hello world!"', () => {
    const message = '(olleh) (dlrow)!';
    const expected = 'hello world!';
    const result = decode(message);

    expect(result).toBe(expected);
  });

  it('Para el string "sa(u(cla)atn)s", debería devolver "santaclaus"', () => {
    const message = 'sa(u(cla)atn)s';
    const expected = 'santaclaus';
    const result = decode(message);

    expect(result).toBe(expected);
  });

  it('Para el string "((nta)(sa))", debería devolver "santa"', () => {
    const message = '((nta)(sa))';
    const expected = 'santa';
    const result = decode(message);

    expect(result).toBe(expected);
  });
});
