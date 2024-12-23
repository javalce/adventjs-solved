import { describe, expect, expectTypeOf, it } from 'vitest';

import { fixGiftList } from './solution';

describe('reto #20: Encuentra los regalos faltantes y duplicados', () => {
  it('return type', () => {
    expectTypeOf(fixGiftList([], [])).toBeObject();
  });

  it('fixGiftList(["puzzle", "car"], ["puzzle", "car", "ball"])', () => {
    expect(fixGiftList(['puzzle', 'car'], ['puzzle', 'car', 'ball'])).toEqual({
      missing: { ball: 1 },
      extra: {},
    });
  });

  it('fixGiftList(["car", "puzzle", "car"], ["puzzle", "car", "doll"])', () => {
    expect(fixGiftList(['car', 'puzzle', 'car'], ['puzzle', 'car', 'doll'])).toEqual({
      missing: { doll: 1 },
      extra: { car: 1 },
    });
  });

  it('fixGiftList(["train", "book", "kite"], ["train", "kite", "book", "kite"])', () => {
    expect(fixGiftList(['train', 'book', 'kite'], ['train', 'kite', 'book', 'kite'])).toEqual({
      missing: { kite: 1 },
      extra: {},
    });
  });

  it('fixGiftList(["bear", "car"], ["bear", "car", "car"])', () => {
    expect(fixGiftList(['bear', 'car'], ['bear', 'car', 'car'])).toEqual({
      missing: { car: 1 },
      extra: {},
    });
  });

  it('fixGiftList([], ["bear", "car", "car"])', () => {
    expect(fixGiftList([], ['bear', 'car', 'car'])).toEqual({
      missing: {
        car: 2,
        bear: 1,
      },
      extra: {},
    });
  });

  it('fixGiftList(["puzzle", "puzzle", "car"], ["puzzle", "car"])', () => {
    expect(fixGiftList(['puzzle', 'puzzle', 'car'], ['puzzle', 'car'])).toEqual({
      missing: {},
      extra: {
        puzzle: 1,
      },
    });
  });

  it('fixGiftList(["car"], ["car", "puzzle", "ball"])', () => {
    expect(fixGiftList(['car'], ['car', 'puzzle', 'ball'])).toEqual({
      missing: {
        puzzle: 1,
        ball: 1,
      },
      extra: {},
    });
  });

  it('fixGiftList(["bear", "bear", "car"], ["bear", "bear", "car"])', () => {
    expect(fixGiftList(['bear', 'bear', 'car'], ['bear', 'bear', 'car'])).toEqual({
      missing: {},
      extra: {},
    });
  });
});
