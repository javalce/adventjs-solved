import { describe, expect, expectTypeOf, it } from 'vitest';

import { fixPackages } from './solution';

describe('reto #7: El ataque del Grinch', () => {
  it('return type', () => {
    expectTypeOf(fixPackages('')).toBeString();
  });

  it('fixPackages("a(bc)de")', () => {
    expect(fixPackages('a(bc)de')).toBe('acbde');
  });

  it('fixPackages("a(bc(def)g)h")', () => {
    expect(fixPackages('a(bc(def)g)h')).toBe('agdefcbh');
  });

  it('fixPackages("abc(def(gh)i)jk")', () => {
    expect(fixPackages('abc(def(gh)i)jk')).toBe('abcighfedjk');
  });

  it('fixPackages("a(b(c))e")', () => {
    expect(fixPackages('a(b(c))e')).toBe('acbe');
  });

  it('fixPackages("a(b(cd(efg)))h")', () => {
    expect(fixPackages('a(b(cd(efg)))h')).toBe('acdgfebh');
  });

  it('fixPackages("(abc(def(ghi)))")', () => {
    expect(fixPackages('(abc(def(ghi)))')).toBe('defihgcba');
  });
});
