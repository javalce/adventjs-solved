import { describe, expect, expectTypeOf, it } from 'vitest';

import { organizeShoes } from './solution';

describe('reto #5: Emparejando botas', () => {
  it('return type', () => {
    expectTypeOf(organizeShoes([])).toEqualTypeOf<number[]>();
  });

  it('organizeShoes([  { type: "I", size: 38 },  { type: "R", size: 38 },  { type: "R", size: 42 },  { type: "I", size: 41 },  { type: "I", size: 42 }])', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 42 },
      ]),
    ).toEqual([38, 42]);
  });

  it('organizeShoes([  { type: "I", size: 38 },  { type: "R", size: 38 },  { type: "I", size: 38 },  { type: "I", size: 38 },  { type: "R", size: 38 }  ])', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'I', size: 38 },
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
      ]),
    ).toEqual([38, 38]);
  });

  it('organizeShoes([  { type: "I", size: 38 },  { type: "R", size: 36 },  { type: "R", size: 42 },  { type: "I", size: 41 },  { type: "I", size: 42 }  ])', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 38 },
        { type: 'R', size: 36 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 42 },
      ]),
    ).toEqual([42]);
  });

  it('organizeShoes([  { type: "I", size: 40 },  { type: "R", size: 40 },  { type: "I", size: 40 },  { type: "R", size: 40 }])', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 40 },
        { type: 'R', size: 40 },
        { type: 'I', size: 40 },
        { type: 'R', size: 40 },
      ]),
    ).toEqual([40, 40]);
  });

  it('organizeShoes([  { type: "I", size: 39 },  { type: "R", size: 39 },  { type: "R", size: 39 }])', () => {
    expect(
      organizeShoes([
        { type: 'I', size: 39 },
        { type: 'R', size: 39 },
        { type: 'R', size: 39 },
      ]),
    ).toEqual([39]);
  });
});
