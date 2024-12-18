import { describe, expect, expectTypeOf, it } from 'vitest';

import { removeSnow } from './solution';

describe('reto #16: Limpiando la nieve del camino', () => {
  it('return type', () => {
    expectTypeOf(removeSnow('')).toBeString();
  });

  it('removeSnow("abbaca")', () => {
    expect(removeSnow('abbaca')).toBe('ca');
  });

  it('removeSnow("azxxzy")', () => {
    expect(removeSnow('azxxzy')).toBe('ay');
  });

  it('removeSnow("aabccba")', () => {
    expect(removeSnow('aabccba')).toBe('a');
  });

  it('removeSnow("aaabbaacc")', () => {
    expect(removeSnow('aaabbaacc')).toBe('a');
  });

  it('removeSnow("xyzzy")', () => {
    expect(removeSnow('xyzzy')).toBe('x');
  });

  it('removeSnow("abbacddce")', () => {
    expect(removeSnow('abbacddce')).toBe('e');
  });

  it('removeSnow("")', () => {
    expect(removeSnow('')).toBe('');
  });

  it('removeSnow("a")', () => {
    expect(removeSnow('a')).toBe('a');
  });

  it('removeSnow("aa")', () => {
    expect(removeSnow('aa')).toBe('');
  });

  it('removeSnow("ab")', () => {
    expect(removeSnow('ab')).toBe('ab');
  });

  it('removeSnow("abc")', () => {
    expect(removeSnow('abc')).toBe('abc');
  });
});
