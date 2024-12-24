import { describe, expect, expectTypeOf, it } from 'vitest';

import { generateGiftSets } from './solution';

describe('reto #21: Genera combinaciones de regalos', () => {
  it('return type', () => {
    expectTypeOf(generateGiftSets([])).toBeArray();
  });

  it('generateGiftSets(["car"])', () => {
    expect(generateGiftSets(['car'])).toEqual([['car']]);
  });

  it('generateGiftSets(["car", "doll"])', () => {
    expect(generateGiftSets(['car', 'doll'])).toEqual([['car'], ['doll'], ['car', 'doll']]);
  });

  it('generateGiftSets(["car", "doll", "puzzle"])', () => {
    expect(generateGiftSets(['car', 'doll', 'puzzle'])).toEqual([
      ['car'],
      ['doll'],
      ['puzzle'],
      ['car', 'doll'],
      ['car', 'puzzle'],
      ['doll', 'puzzle'],
      ['car', 'doll', 'puzzle'],
    ]);
  });

  it('generateGiftSets(["apple", "banana", "cherry", "date"])', () => {
    expect(generateGiftSets(['apple', 'banana', 'cherry', 'date'])).toEqual([
      ['apple'],
      ['banana'],
      ['cherry'],
      ['date'],
      ['apple', 'banana'],
      ['apple', 'cherry'],
      ['apple', 'date'],
      ['banana', 'cherry'],
      ['banana', 'date'],
      ['cherry', 'date'],
      ['apple', 'banana', 'cherry'],
      ['apple', 'banana', 'date'],
      ['apple', 'cherry', 'date'],
      ['banana', 'cherry', 'date'],
      ['apple', 'banana', 'cherry', 'date'],
    ]);
  });

  it('generateGiftSets(["pen", "notebook", "eraser", "pencil", "marker"])', () => {
    expect(generateGiftSets(['pen', 'notebook', 'eraser', 'pencil', 'marker'])).toEqual([
      ['pen'],
      ['notebook'],
      ['eraser'],
      ['pencil'],
      ['marker'],
      ['pen', 'notebook'],
      ['pen', 'eraser'],
      ['pen', 'pencil'],
      ['pen', 'marker'],
      ['notebook', 'eraser'],
      ['notebook', 'pencil'],
      ['notebook', 'marker'],
      ['eraser', 'pencil'],
      ['eraser', 'marker'],
      ['pencil', 'marker'],
      ['pen', 'notebook', 'eraser'],
      ['pen', 'notebook', 'pencil'],
      ['pen', 'notebook', 'marker'],
      ['pen', 'eraser', 'pencil'],
      ['pen', 'eraser', 'marker'],
      ['pen', 'pencil', 'marker'],
      ['notebook', 'eraser', 'pencil'],
      ['notebook', 'eraser', 'marker'],
      ['notebook', 'pencil', 'marker'],
      ['eraser', 'pencil', 'marker'],
      ['pen', 'notebook', 'eraser', 'pencil'],
      ['pen', 'notebook', 'eraser', 'marker'],
      ['pen', 'notebook', 'pencil', 'marker'],
      ['pen', 'eraser', 'pencil', 'marker'],
      ['notebook', 'eraser', 'pencil', 'marker'],
      ['pen', 'notebook', 'eraser', 'pencil', 'marker'],
    ]);
  });
});
