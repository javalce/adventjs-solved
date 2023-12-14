import { manufacture } from './solution';

describe('Reto #2: Ponemos en marcha la fábrica', () => {
  it('Para los gifts ["tren", "oso", "pelota"] y el material "tronesa", debería devolver ["tren", "oso"]', () => {
    const gifts = ['tren', 'oso', 'pelota'];
    const materials = 'tronesa';
    const expected = ['tren', 'oso'];
    const result = manufacture(gifts, materials);

    expect(result).toStrictEqual(expected);
  });

  it('Para los gifts ["coche", "muñeca", "balon"] y el material "ocmuñalb", debería devolver []', () => {
    const gifts = ['coche', 'muñeca', 'balon'];
    const materials = 'ocmuñalb';
    const expected: string[] = [];
    const result = manufacture(gifts, materials);

    expect(result).toStrictEqual(expected);
  });

  it('Para los gifts ["patineta", "robot", "robot"] y el material "nopor", debería devolver []', () => {
    const gifts = ['patineta', 'robot', 'robot'];
    const materials = 'nopor';
    const expected: string[] = [];
    const result = manufacture(gifts, materials);

    expect(result).toStrictEqual(expected);
  });

  it('Para los gifts [] y el material "letras", debería devolver []', () => {
    const gifts: string[] = [];
    const materials = 'letras';
    const expected: string[] = [];
    const result = manufacture(gifts, materials);

    expect(result).toStrictEqual(expected);
  });
});
