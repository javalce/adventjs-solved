import { describe, expect, expectTypeOf, it } from 'vitest';

import { findInAgenda } from './solution';

describe('reto #18: La agenda mágica de Santa', () => {
  it('return type', () => {
    expectTypeOf(findInAgenda('', '')).toMatchTypeOf<{ name: string; address: string } | null>();
  });

  it('findInAgenda("+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York", "34-600-123-456")', () => {
    expect(
      findInAgenda(
        '+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York',
        '34-600-123-456',
      ),
    ).toEqual({
      name: 'Juan Perez',
      address: 'Calle Gran Via 12',
    });
  });

  it('findInAgenda("+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York", "600-987")', () => {
    expect(
      findInAgenda(
        '+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York',
        '600-987',
      ),
    ).toEqual({
      name: 'Maria Gomez',
      address: 'Plaza Mayor 45 Madrid 28013',
    });
  });

  it('findInAgenda("+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York", "111")', () => {
    expect(
      findInAgenda(
        '+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez>+34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York',
        '111',
      ),
    ).toBeNull();
  });

  it('findInAgenda("+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York", "1")', () => {
    expect(
      findInAgenda(
        '+34-600-123-456 Calle Gran Via 12 <Juan Perez>\nPlaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654\n<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York',
        '1',
      ),
    ).toBeNull();
  });
});
