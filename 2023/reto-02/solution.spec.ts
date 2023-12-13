import { manufacture } from './solution';

describe('Reto #2: Ponemos en marcha la fábrica', () => {
  it('Para los gifts ["tren", "oso", "pelota"] y el material "tronesa", debería devolver ["tren", "oso"]', () => {
    const gifts = ['tren', 'oso', 'pelota'];
    const materials = 'tronesa';
    const expected = ['tren', 'oso'];
    const result = manufacture(gifts, materials);
    expect(result).toStrictEqual(expected);
  });

  it('Para los gifts ["juego", "puzzle"] y el material "jlepuz", debería devolver ["puzzle"]', () => {
    const gifts = ['juego', 'puzzle'];
    const materials = 'jlepuz';
    const expected = ['puzzle'];
    const result = manufacture(gifts, materials);
    expect(result).toStrictEqual(expected);
  });

  it('Para los gifts ["libro", "ps5"] y el material "psli", debería devolver []', () => {
    const gifts = ['libro', 'ps5'];
    const materials = 'psli';
    const expected: string[] = [];
    const result = manufacture(gifts, materials);
    expect(result).toStrictEqual(expected);
  });
});
