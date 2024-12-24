import { describe, expect, expectTypeOf, it } from 'vitest';

import { treeHeight } from './solution';

describe('reto #21: Calcula la altura del árbol de Navidad', () => {
  it('return type', () => {
    expectTypeOf(treeHeight(null)).toBeNumber();
  });

  it('treeHeight({ value: "🎁", left: null, right: null })', () => {
    expect(treeHeight({ value: '🎁', left: null, right: null })).toEqual(1);
  });

  it('treeHeight({ value: "🎁", left: { value: "🎄", left: null, right: null }, right: { value: "❄️", left: null, right: null } })', () => {
    expect(
      treeHeight({
        value: '🎁',
        left: { value: '🎄', left: null, right: null },
        right: { value: '❄️', left: null, right: null },
      }),
    ).toEqual(2);
  });

  it('treeHeight({ value: "🎁", left: { value: "🎄", left: { value: "⭐", left: null, right: null }, right: null }, right: { value: "❄️", left: null, right: null } })', () => {
    expect(
      treeHeight({
        value: '🎁',
        left: { value: '🎄', left: { value: '⭐', left: null, right: null }, right: null },
        right: { value: '❄️', left: null, right: null },
      }),
    ).toEqual(3);
  });

  it('treeHeight(null)', () => {
    expect(treeHeight(null)).toEqual(0);
  });

  it('treeHeight({ value: "🎁", left: { value: "🎄", left: { value: "⭐", left: { value: "🎅", left: null, right: null }, right: null }, right: null }, right: null })', () => {
    expect(
      treeHeight({
        value: '🎁',
        left: {
          value: '🎄',
          left: { value: '⭐', left: { value: '🎅', left: null, right: null }, right: null },
          right: null,
        },
        right: null,
      }),
    ).toEqual(4);
  });
});
