import { describe, expect, expectTypeOf, it } from 'vitest';

import { isTreesSynchronized } from './solution';

describe('reto #24: Verifica si los árboles son espejos mágicos', () => {
  it('return type', () => {
    expectTypeOf(isTreesSynchronized(undefined, undefined)).toBeArray();
  });

  it('isTreesSynchronized({ value: "🎄" }, { value: "🎄" })', () => {
    expect(isTreesSynchronized({ value: '🎄' }, { value: '🎄' })).toEqual([true, '🎄']);
  });

  it('isTreesSynchronized({ value: "🎄", left: { value: "⭐" }, right: { value: "🎅" } }, { value: "🎄", left: { value: "🎅" }, right: { value: "⭐" } })', () => {
    expect(
      isTreesSynchronized(
        { value: '🎄', left: { value: '⭐' }, right: { value: '🎅' } },
        { value: '🎄', left: { value: '🎅' }, right: { value: '⭐' } },
      ),
    ).toEqual([true, '🎄']);
  });

  it('isTreesSynchronized({ value: "✨", left: { value: "⭐" }, right: { value: "🎅" } }, { value: "✨", left: { value: "🎅" }, right: { value: "🎁" } })', () => {
    expect(
      isTreesSynchronized(
        { value: '✨', left: { value: '⭐' }, right: { value: '🎅' } },
        { value: '✨', left: { value: '🎅' }, right: { value: '🎁' } },
      ),
    ).toEqual([false, '✨']);
  });

  it('isTreesSynchronized({ value: "🎁" }, { value: "🎁" })', () => {
    expect(isTreesSynchronized({ value: '🎁' }, { value: '🎁' })).toEqual([true, '🎁']);
  });

  it('isTreesSynchronized({ value: "🎄" }, { value: "🎁" })', () => {
    expect(isTreesSynchronized({ value: '🎄' }, { value: '🎁' })).toEqual([false, '🎄']);
  });

  it('isTreesSynchronized({ value: "🎄", left: { value: "⭐" } }, { value: "🎄", right: { value: "⭐" } })', () => {
    expect(
      isTreesSynchronized(
        { value: '🎄', left: { value: '⭐' } },
        { value: '🎄', right: { value: '⭐' } },
      ),
    ).toEqual([true, '🎄']);
  });
});
