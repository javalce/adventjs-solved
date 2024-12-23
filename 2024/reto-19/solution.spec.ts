import { describe, expect, expectTypeOf, it } from 'vitest';

import { distributeWeight } from './solution';

describe('reto #19: Apila cajas mágicas para repartir regalos', () => {
  it('return type', () => {
    expectTypeOf(distributeWeight(0)).toBeString();
  });

  it('distributeWeight(1)', () => {
    expect(distributeWeight(1)).toBe(' _ \n|_|');
  });

  it('distributeWeight(2)', () => {
    expect(distributeWeight(2)).toBe(' ___ \n|___|');
  });

  it('distributeWeight(3)', () => {
    expect(distributeWeight(3)).toBe(' _ \n|_|_\n|___|');
  });

  it('distributeWeight(4)', () => {
    expect(distributeWeight(4)).toBe(' ___ \n|___|\n|___|');
  });

  it('distributeWeight(5)', () => {
    expect(distributeWeight(5)).toBe(' _____ \n|     |\n|_____|');
  });

  it('distributeWeight(6)', () => {
    expect(distributeWeight(6)).toBe(' _ \n|_|___\n|     |\n|_____|');
  });

  it('distributeWeight(7)', () => {
    expect(distributeWeight(7)).toBe(' ___ \n|___|_\n|     |\n|_____|');
  });

  it('distributeWeight(18)', () => {
    expect(distributeWeight(18)).toBe(
      ' _ \n|_|_\n|___|_\n|     |\n|_____|___\n|         |\n|_________|',
    );
  });

  it('distributeWeight(121)', () => {
    expect(distributeWeight(121)).toBe(
      ' _ \n|_|_______\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|\n|         |\n|_________|',
    );
  });
});
