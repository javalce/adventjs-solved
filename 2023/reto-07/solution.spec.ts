import { describe, expect, it } from 'vitest';
import { drawGift } from './solution';

describe('Reto 07: Las cajas en 3D', () => {
  it('Test 1', () => {
    const size = 4;
    const symbol = '+';
    const expected =
      '   ####\n' +
      '  #++##\n' +
      ' #++#+#\n' +
      '####++#\n' +
      '#++#+#\n' +
      '#++##\n' +
      '####\n';
    const result = drawGift(size, symbol);

    expect(result).toBe(expected);
  });

  it('Test 2', () => {
    const size = 5;
    const symbol = '*';
    const expected =
      '    #####\n' +
      '   #***##\n' +
      '  #***#*#\n' +
      ' #***#**#\n' +
      '#####***#\n' +
      '#***#**#\n' +
      '#***#*#\n' +
      '#***##\n' +
      '#####\n';
    const result = drawGift(size, symbol);

    expect(result).toBe(expected);
  });

  it('Test 3', () => {
    const size = 1;
    const symbol = '^';
    const expected = '#\n';
    const result = drawGift(size, symbol);

    expect(result).toBe(expected);
  });

  it('Test 4', () => {
    const size = 2;
    const symbol = '&';
    const expected = ' ##\n###\n##\n';
    const result = drawGift(size, symbol);

    expect(result).toBe(expected);
  });

  it('Test 5', () => {
    const size = 10;
    const symbol = '%';
    const expected =
      '         ##########\n' +
      '        #%%%%%%%%##\n' +
      '       #%%%%%%%%#%#\n' +
      '      #%%%%%%%%#%%#\n' +
      '     #%%%%%%%%#%%%#\n' +
      '    #%%%%%%%%#%%%%#\n' +
      '   #%%%%%%%%#%%%%%#\n' +
      '  #%%%%%%%%#%%%%%%#\n' +
      ' #%%%%%%%%#%%%%%%%#\n' +
      '##########%%%%%%%%#\n' +
      '#%%%%%%%%#%%%%%%%#\n' +
      '#%%%%%%%%#%%%%%%#\n' +
      '#%%%%%%%%#%%%%%#\n' +
      '#%%%%%%%%#%%%%#\n' +
      '#%%%%%%%%#%%%#\n' +
      '#%%%%%%%%#%%#\n' +
      '#%%%%%%%%#%#\n' +
      '#%%%%%%%%##\n' +
      '##########\n';
    const result = drawGift(size, symbol);

    expect(result).toBe(expected);
  });
});
