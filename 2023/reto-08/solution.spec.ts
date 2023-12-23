import { describe, expect, it } from 'vitest';
import { organizeGifts } from './solution';

describe('reto 08: Ordenado el almacén', () => {
  it('test 1', () => {
    const gifts = '76a11b';
    const expected = '[a]{a}{a}(aaaaaa){b}(b)';
    const result = organizeGifts(gifts);

    expect(result).toBe(expected);
  });

  it('test 2', () => {
    const gifts = '20a';
    const expected = '{a}{a}';
    const result = organizeGifts(gifts);

    expect(result).toBe(expected);
  });

  it('test 3', () => {
    const gifts = '70b120a4c';
    const expected = '[b]{b}{b}[a][a]{a}{a}(cccc)';
    const result = organizeGifts(gifts);

    expect(result).toBe(expected);
  });

  it('test 4', () => {
    const gifts = '9c';
    const expected = '(ccccccccc)';
    const result = organizeGifts(gifts);

    expect(result).toBe(expected);
  });

  it('test 5', () => {
    const gifts = '19d51e';
    const expected = '{d}(ddddddddd)[e](e)';
    const result = organizeGifts(gifts);

    expect(result).toBe(expected);
  });
});
