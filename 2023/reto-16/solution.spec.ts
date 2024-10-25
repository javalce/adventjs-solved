import { describe, expect, it } from 'vitest';
import { transformTree } from './solution';

describe('Reto 16: Despliegue en viernes', () => {
  it('Debería devolver un objeto', () => {
    expect(transformTree([])).toBeTypeOf('object');
  });

  it('Debería devolver null para el array []', () => {
    expect(transformTree([])).toBeNull();
  });

  it('Debería devolver un objeto para el array [1]', () => {
    const tree = [1];
    const expected = {
      value: 1,
      left: null,
      right: null,
    };
    const result = transformTree(tree);

    expect(result).toEqual(expected);
  });

  it('Debería devolver un objeto para el array [1, 2, 3]', () => {
    const tree = [1, 2, 3];
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    };
    const result = transformTree(tree);

    expect(result).toEqual(expected);
  });

  it('Debería devolver un objeto para el array [1, 2, 3, 4, 5]', () => {
    const tree = [1, 2, 3, 4, 5];
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    };
    const result = transformTree(tree);

    expect(result).toEqual(expected);
  });

  it('Debería devolver un objeto para el array [1, 2, 3, 4, 5, 6, 7]', () => {
    const tree = [1, 2, 3, 4, 5, 6, 7];
    const expected = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: {
          value: 7,
          left: null,
          right: null,
        },
      },
    };
    const result = transformTree(tree);

    expect(result).toEqual(expected);
  });

  it('Debería devolver un objeto para el array [17, 0, null, null, 1]', () => {
    const tree = [17, 0, null, null, 1];
    const expected = {
      value: 17,
      left: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
      right: null,
    };
    const result = transformTree(tree);

    expect(result).toEqual(expected);
  });

  it('Debería devolver un objeto para el array [3, 1, 0, 8, 12, null, 1]', () => {
    const tree = [3, 1, 0, 8, 12, null, 1];
    const expected = {
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null,
        },
        right: {
          value: 12,
          left: null,
          right: null,
        },
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    };
    const result = transformTree(tree);

    expect(result).toEqual(expected);
  });

  it('Debería devolver un objeto para el array [2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10]', () => {
    const tree = [
      2,
      7,
      5,
      null,
      6,
      null,
      9,
      null,
      null,
      1,
      11,
      null,
      null,
      null,
      10,
    ];
    const expected = {
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 11,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
      },
    };
    const result = transformTree(tree);

    expect(result).toEqual(expected);
  });
});
