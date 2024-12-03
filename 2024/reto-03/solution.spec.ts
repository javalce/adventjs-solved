import { describe, expect, expectTypeOf, it } from 'vitest';

import { organizeInventory } from './solution';

describe('reto #3: Organizando el inventario', () => {
  it('should return an object', () => {
    expectTypeOf(organizeInventory([])).toBeObject();
  });

  it('organizeInventory([])', () => {
    expect(organizeInventory([])).toEqual({});
  });

  it('organizeInventory([{ name: "doll", quantity: 5, category: "toys" }])', () => {
    expect(organizeInventory([{ name: 'doll', quantity: 5, category: 'toys' }])).toEqual({
      toys: { doll: 5 },
    });
  });

  it('organizeInventory([{ name: "book", quantity: 10, category: "education" }, { name: "book", quantity: 5, category: "education" }, { name: "paint", quantity: 3, category: "art" }])', () => {
    expect(
      organizeInventory([
        { name: 'book', quantity: 10, category: 'education' },
        { name: 'book', quantity: 5, category: 'education' },
        { name: 'paint', quantity: 3, category: 'art' },
      ]),
    ).toEqual({
      education: { book: 15 },
      art: { paint: 3 },
    });
  });

  it('organizeInventory([{ name: "doll", quantity: 5, category: "toys" }, { name: "car", quantity: 3, category: "toys" }, { name: "ball", quantity: 2, category: "sports" }, { name: "car", quantity: 2, category: "toys" }, { name: "racket", quantity: 4, category: "sports" }])', () => {
    expect(
      organizeInventory([
        { name: 'doll', quantity: 5, category: 'toys' },
        { name: 'car', quantity: 3, category: 'toys' },
        { name: 'ball', quantity: 2, category: 'sports' },
        { name: 'car', quantity: 2, category: 'toys' },
        { name: 'racket', quantity: 4, category: 'sports' },
      ]),
    ).toEqual({
      toys: { doll: 5, car: 5 },
      sports: { ball: 2, racket: 4 },
    });
  });
});
