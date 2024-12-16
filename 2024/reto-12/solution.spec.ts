import { describe, expect, expectTypeOf, it } from 'vitest';

import { calculatePrice } from './solution';

describe('reto #12: ¿Cuánto cuesta el árbol?', () => {
  it('return type', () => {
    expectTypeOf(calculatePrice('')).toMatchTypeOf<number | undefined>();
  });

  it('calculatePrice("***")', () => {
    expect(calculatePrice('***')).toBe(3);
  });

  it('calculatePrice("*o")', () => {
    expect(calculatePrice('*o')).toBe(4);
  });

  it('calculatePrice("o*")', () => {
    expect(calculatePrice('o*')).toBe(6);
  });

  it('calculatePrice("*o@")', () => {
    expect(calculatePrice('*o@')).toBe(94);
  });

  it('calculatePrice("^#")', () => {
    expect(calculatePrice('^#')).toBe(40);
  });

  it('calculatePrice("#@Z")', () => {
    expect(calculatePrice('#@Z')).toBeUndefined();
  });
});
