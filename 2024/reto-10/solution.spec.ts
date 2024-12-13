import { describe, expect, expectTypeOf, it } from 'vitest';

import { compile } from './solution';

describe('reto #10: El ensamblador élfico', () => {
  it('return type', () => {
    expectTypeOf(compile([])).toMatchTypeOf<number | undefined>();
  });

  it('compile(["MOV 0 A", "INC A"])', () => {
    expect(compile(['MOV 0 A', 'INC A'])).toBe(1);
  });

  it('compile(["INC A", "INC A", "DEC A", "MOV A B"])', () => {
    expect(compile(['INC A', 'INC A', 'DEC A', 'MOV A B'])).toBe(1);
  });

  it('compile(["MOV 5 B", "DEC B", "MOV B A", "INC A"])', () => {
    expect(compile(['MOV 5 B', 'DEC B', 'MOV B A', 'INC A'])).toBe(5);
  });

  it('compile(["INC C", "DEC B", "MOV C Y", "INC Y"])', () => {
    expect(compile(['INC C', 'DEC B', 'MOV C Y', 'INC Y'])).toBe(undefined);
  });

  it('compile(["MOV 2 X", "DEC X", "DEC X", "JMP X 1", "MOV X A"])', () => {
    expect(compile(['MOV 2 X', 'DEC X', 'DEC X', 'JMP X 1', 'MOV X A'])).toBe(-2);
  });

  it('compile(["MOV 3 C", "DEC C", "DEC C", "DEC C", "JMP C 3", "MOV C A"])', () => {
    expect(compile(['MOV 3 C', 'DEC C', 'DEC C', 'DEC C', 'JMP C 3', 'MOV C A'])).toBe(-1);
  });
});
