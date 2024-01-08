import { describe, expect, it } from 'vitest';
import { calculateTime } from './solution';

describe('Reto 13: Calculando el tiempos', () => {
  it('Debería devolver un string con el tiempo en formato HH:MM:SS', () => {
    expect(calculateTime([])).toBeTypeOf('string');
  });

  it('Deberían sobrar "-02:20:00" para el delivery ["00:10:00", "01:00:00", "03:30:00"]', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe(
      '-02:20:00',
    );
  });

  it('Deberían faltar "-00:30:00" para el delivery ["01:00:00", "05:00:00", "00:30:00"]', () => {
    expect(calculateTime(['01:00:00', '05:00:00', '00:30:00'])).toBe(
      '-00:30:00',
    );
  });

  it('Deberían faltar "00:30:00" para el delivery ["02:00:00", "05:00:00", "00:30:00"]', () => {
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe(
      '00:30:00',
    );
  });

  it('Deberían sobrar "-05:29:00" para el delivery ["00:45:00", "00:45:00", "00:00:30", "00:00:30"]', () => {
    expect(
      calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']),
    ).toBe('-05:29:00');
  });

  it('Deberían sobrar "00:00:00" para el delivery ["02:00:00", "03:00:00", "02:00:00"]', () => {
    expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toBe(
      '00:00:00',
    );
  });

  it('Deberían sobrar "05:02:01" para el delivery ["01:01:01", "09:59:59", "01:01:01"]', () => {
    expect(calculateTime(['01:01:01', '09:59:59', '01:01:01'])).toBe(
      '05:02:01',
    );
  });

  it('Deberían sobrar "-00:00:01" para el delivery ["01:01:01", "03:59:59", "01:01:01", "00:57:58"]', () => {
    expect(
      calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']),
    ).toBe('-00:00:01');
  });
});
