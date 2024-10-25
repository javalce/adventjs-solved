import { describe, expect, it } from 'vitest';

import { createChristmasTree } from './solution';

describe('reto 10: Crea tu propio árbol de navidad', () => {
  it('debería devolver un string con el árbol de navidad', () => {
    expect(createChristmasTree('1', 1)).toBeTypeOf('string');
  });

  it('debería devolver un árbol de navidad con la altura 1', () => {
    const ornaments = '1';
    const height = 1;
    const expected = '1\n|\n';

    expect(createChristmasTree(ornaments, height)).toEqual(expected);
  });

  it('debería devolver un árbol de navidad con la altura 2', () => {
    const ornaments = '1';
    const height = 2;
    const expected = ' 1\n1 1\n |\n';

    expect(createChristmasTree(ornaments, height)).toEqual(expected);
  });

  it('debería devolver un árbol de navidad con la altura 3', () => {
    const ornaments = '1';
    const height = 3;
    const expected = '  1\n 1 1\n1 1 1\n  |\n';

    expect(createChristmasTree(ornaments, height)).toEqual(expected);
  });

  it('debería devolver un árbol de navidad con la altura 1 y con 2 ornamentos', () => {
    const ornaments = '12';
    const height = 1;
    const expected = '1\n|\n';

    expect(createChristmasTree(ornaments, height)).toEqual(expected);
  });

  it('debería devolver un árbol de navidad con la altura 2 y con 2 ornamentos', () => {
    const ornaments = '12';
    const height = 2;
    const expected = ' 1\n2 1\n |\n';

    expect(createChristmasTree(ornaments, height)).toEqual(expected);
  });

  it('debería devolver un árbol de navidad con la altura 3 y con 2 ornamentos', () => {
    const ornaments = '12';
    const height = 3;
    const expected = '  1\n 2 1\n2 1 2\n  |\n';

    expect(createChristmasTree(ornaments, height)).toEqual(expected);
  });

  it('debería devolver un árbol de navidad con la altura 3 y con 3 ornamentos', () => {
    const ornaments = '123';
    const height = 3;
    const expected = '  1\n 2 3\n1 2 3\n  |\n';

    expect(createChristmasTree(ornaments, height)).toEqual(expected);
  });

  it('debería devolver un árbol de navidad con la altura 3 y con 3 ornamentos que no sean números', () => {
    const ornaments = '*@o';
    const height = 3;
    const expected = '  *\n @ o\n* @ o\n  |\n';

    expect(createChristmasTree(ornaments, height)).toEqual(expected);
  });
});
