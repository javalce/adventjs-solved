import { describe, expect, it } from 'vitest';
import { adjustLights } from './solution';

describe('Reto 09: Alterna las luces', () => {
  it('Debe devolver un número', () => {
    expect(typeof adjustLights([])).toBe('number');
  });

  it('["🟢", "🔴", "🟢", "🟢", "🟢"] -> 1 (cambias la cuarta luz a "🔴")', () => {
    const lights = ['🟢', '🔴', '🟢', '🟢', '🟢'];
    const expected = 1;
    const result = adjustLights(lights);

    expect(result).toBe(expected);
  });

  it('["🔴", "🔴", "🟢", "🟢", "🔴"] -> 2 (cambias la segunda luz a "🟢" y la tercera a "🔴")', () => {
    const lights = ['🔴', '🔴', '🟢', '🟢', '🔴'];
    const expected = 2;
    const result = adjustLights(lights);

    expect(result).toBe(expected);
  });

  it('["🔴", "🔴", "🟢", "🔴", "🟢"] -> 1 (cambias la primera luz a "🟢")', () => {
    const lights = ['🔴', '🔴', '🟢', '🔴', '🟢'];
    const expected = 1;
    const result = adjustLights(lights);

    expect(result).toBe(expected);
  });

  it('["🟢", "🔴", "🟢", "🔴", "🟢"] -> 0 (ya están alternadas)', () => {
    const lights = ['🟢', '🔴', '🟢', '🔴', '🟢'];
    const expected = 0;
    const result = adjustLights(lights);

    expect(result).toBe(expected);
  });

  it('["🔴", "🔴", "🔴"] -> 1 (cambias la segunda luz a "🟢")', () => {
    const lights = ['🔴', '🔴', '🔴'];
    const expected = 1;
    const result = adjustLights(lights);

    expect(result).toBe(expected);
  });
});
