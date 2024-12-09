import { describe, expect, expectTypeOf, it } from 'vitest';

import { inBox } from './solution';

describe('reto #6: ¿Regalo dentro de la caja?', () => {
  it('return type', () => {
    expectTypeOf(inBox([])).toBeBoolean();
  });

  it('inBox(["###", "#*#", "###"])', () => {
    expect(inBox(['###', '#*#', '###'])).toBe(true);
  });

  it('inBox(["#*#", "###", "###"])', () => {
    expect(inBox(['#*#', '###', '###'])).toBe(false);
  });

  it('inBox(["###", "# #", "###"])', () => {
    expect(inBox(['###', '# #', '###'])).toBe(false);
  });

  it('inBox(["####", "#* #", "#  #", "####"])', () => {
    expect(inBox(['####', '#* #', '#  #', '####'])).toBe(true);
  });

  it('inBox(["#####", "#   #", "#  #*", "####"])', () => {
    expect(inBox(['#####', '#   #', '#  #*', '####'])).toBe(false);
  });

  it('inBox(["#####", "#   #", "#   #", "#   #", "#####"])', () => {
    expect(inBox(['#####', '#   #', '#   #', '#   #', '#####'])).toBe(false);
  });

  it('inBox(["#####", "#   #", "#   #", "*#  #", "#####"])', () => {
    expect(inBox(['#####', '#   #', '#   #', '*#  #', '#####'])).toBe(false);
  });

  it('inBox(["##*##", "#   #", "#   #", "#   #", "#####"])', () => {
    expect(inBox(['##*##', '#   #', '#   #', '#   #', '#####'])).toBe(false);
  });

  it('inBox(["####", "#  #", "##*#"])', () => {
    expect(inBox(['####', '#  #', '##*#'])).toBe(false);
  });

  it('inBox(["###", "###", "#*#"])', () => {
    expect(inBox(['###', '###', '#*#'])).toBe(false);
  });
});
