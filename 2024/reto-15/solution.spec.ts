import { describe, expect, expectTypeOf, it } from 'vitest';

import { drawTable } from './solution';

describe('reto #15: Dibujando tablas', () => {
  it('return type', () => {
    expectTypeOf(drawTable([])).toBeString();
  });

  it('drawTable([{ name: "Alice", city: "London" }])', () => {
    expect(drawTable([{ name: 'Alice', city: 'London' }])).toEqual(
      '+-------+--------+\n' +
        '| Name  | City   |\n' +
        '+-------+--------+\n' +
        '| Alice | London |\n' +
        '+-------+--------+',
    );
  });

  it('drawTable([{ name: "Alice", city: "London" }, { name: "Bob", city: "Paris" }])', () => {
    expect(
      drawTable([
        { name: 'Alice', city: 'London' },
        { name: 'Bob', city: 'Paris' },
      ]),
    ).toEqual(
      '+-------+--------+\n' +
        '| Name  | City   |\n' +
        '+-------+--------+\n' +
        '| Alice | London |\n' +
        '| Bob   | Paris  |\n' +
        '+-------+--------+',
    );
  });

  it('drawTable([{ gift: "Doll", quantity: 10 }, { gift: "Book", quantity: 5 }, { gift: "Music CD", quantity: 1 }])', () => {
    expect(
      drawTable([
        { gift: 'Doll', quantity: 10 },
        { gift: 'Book', quantity: 5 },
        { gift: 'Music CD', quantity: 1 },
      ]),
    ).toEqual(
      '+----------+----------+\n' +
        '| Gift     | Quantity |\n' +
        '+----------+----------+\n' +
        '| Doll     | 10       |\n' +
        '| Book     | 5        |\n' +
        '| Music CD | 1        |\n' +
        '+----------+----------+',
    );
  });

  it('drawTable([{ id: 1, score: 95 }, { id: 2, score: 85 }])', () => {
    expect(
      drawTable([
        { id: 1, score: 95 },
        { id: 2, score: 85 },
      ]),
    ).toEqual(
      '+----+-------+\n' +
        '| Id | Score |\n' +
        '+----+-------+\n' +
        '| 1  | 95    |\n' +
        '| 2  | 85    |\n' +
        '+----+-------+',
    );
  });

  it('drawTable([{ id: "midugato", isCat: "true" }, { id: "miduperro", isCat: "false" }])', () => {
    expect(
      drawTable([
        { id: 'midugato', isCat: 'true' },
        { id: 'miduperro', isCat: 'false' },
      ]),
    ).toEqual(
      '+-----------+-------+\n' +
        '| Id        | IsCat |\n' +
        '+-----------+-------+\n' +
        '| midugato  | true  |\n' +
        '| miduperro | false |\n' +
        '+-----------+-------+',
    );
  });

  it('drawTable([{ game: "indianajones", subtitle: "the game" }, { game: "pokemonblue", subtitle: "" }])', () => {
    expect(
      drawTable([
        { game: 'indianajones', subtitle: 'the game' },
        { game: 'pokemonblue', subtitle: '' },
      ]),
    ).toEqual(
      '+--------------+----------+\n' +
        '| Game         | Subtitle |\n' +
        '+--------------+----------+\n' +
        '| indianajones | the game |\n' +
        '| pokemonblue  |          |\n' +
        '+--------------+----------+',
    );
  });
});
