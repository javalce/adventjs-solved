import { describe, expect, expectTypeOf, it } from 'vitest';

import { execute } from './solution';

describe('reto #24: Ejecuta el lenguaje mágico', () => {
  it('return type', () => {
    expectTypeOf(execute('')).toBeNumber();
  });

  it('execute(`+++`)', () => {
    expect(execute('+++')).toBe(3);
  });

  it('execute(`+--`)', () => {
    expect(execute('+--')).toBe(-1);
  });

  it('execute(`>+++[-]`)', () => {
    expect(execute('>+++[-]')).toBe(0);
  });

  it('execute(`>>>+{++}`)', () => {
    expect(execute('>>>+{++}')).toBe(3);
  });

  it('execute(`+{[-]+}`)', () => {
    expect(execute('+{[-]+}')).toBe(1);
  });

  it('execute(`-[+>]++`)', () => {
    expect(execute('-[+>]++')).toBe(2);
  });

  it('execute(`-[+{++}]++{[-]}++`)', () => {
    expect(execute('-[+{++}]++{[-]}++')).toBe(2);
  });

  it('execute(`{+}{+}{+}`)', () => {
    expect(execute('{+}{+}{+}')).toBe(0);
  });

  it('execute(``) // empty program', () => {
    expect(execute('')).toBe(0);
  });

  it('execute(`+++{[-]+++[-]+}`) // nested loops', () => {
    expect(execute('+++{[-]+++[-]+}')).toBe(1);
  });

  it('execute(`{>++>++}`) // skip increment if condition is zero', () => {
    expect(execute('{>++>++}')).toBe(0);
  });

  it('execute(`++++[-->]>++`) // move and increment', () => {
    expect(execute('++++[-->]>++')).toBe(2);
  });
});
