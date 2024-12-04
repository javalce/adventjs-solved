import { describe, expect, expectTypeOf, it } from 'vitest';

import { createXmasTree } from './solution';

describe('reto #4: Decorando el árbol de Navidad', () => {
  it('return type', () => {
    expectTypeOf(createXmasTree(1, '')).toBeString();
  });

  it('createXmasTree(3, "*")', () => {
    expect(createXmasTree(3, '*')).toBe('__*__\n_***_\n*****\n__#__\n__#__');
  });

  it('createXmasTree(5, "+")', () => {
    expect(createXmasTree(5, '+')).toBe(
      '____+____\n___+++___\n__+++++__\n_+++++++_\n+++++++++\n____#____\n____#____',
    );
  });

  it('createXmasTree(6, "@")', () => {
    expect(createXmasTree(6, '@')).toBe(
      '_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____',
    );
  });

  it('createXmasTree(1, "*")', () => {
    expect(createXmasTree(1, '*')).toBe('*\n#\n#');
  });

  it('createXmasTree(4, "#")', () => {
    expect(createXmasTree(4, '#')).toBe('___#___\n__###__\n_#####_\n#######\n___#___\n___#___');
  });
});
