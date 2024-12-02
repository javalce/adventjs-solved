import { describe, expect, expectTypeOf, it } from 'vitest';

import { createFrame } from './solution';

describe('reto #2: Enmarcando nombres', () => {
  it('should return a string', () => {
    expectTypeOf(createFrame([])).toBeString();
  });

  it('createFrame(["midu"])', () => {
    expect(createFrame(['midu'])).toEqual('********\n* midu *\n********');
  });

  it('createFrame(["midu", "madeval", "educalvolpz"])', () => {
    expect(createFrame(['midu', 'madeval', 'educalvolpz'])).toEqual(
      '***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************',
    );
  });

  it('createFrame(["a", "bb", "ccc"])', () => {
    expect(createFrame(['a', 'bb', 'ccc'])).toEqual('*******\n* a   *\n* bb  *\n* ccc *\n*******');
  });

  it('createFrame(["a", "bb", "ccc", "dddd"])', () => {
    expect(createFrame(['a', 'bb', 'ccc', 'dddd'])).toEqual(
      '********\n* a    *\n* bb   *\n* ccc  *\n* dddd *\n********',
    );
  });

  it('createFrame(["midu", "madeval", "educalvolpz", "midu"])', () => {
    expect(createFrame(['midu', 'madeval', 'educalvolpz', 'midu'])).toEqual(
      '***************\n* midu        *\n* madeval     *\n* educalvolpz *\n* midu        *\n***************',
    );
  });
});
