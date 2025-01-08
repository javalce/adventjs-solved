import { describe, expect, expectTypeOf, it } from 'vitest';

import { getCompleted } from './solution';

describe('reto #26: Calcula el porcentaje empleado', () => {
  it('return type', () => {
    expectTypeOf(getCompleted('01:00:00', '03:00:00')).toBeString();
  });

  it('getCompleted("01:00:00", "03:00:00")', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toEqual('33%');
  });

  it('getCompleted("02:00:00", "04:00:00")', () => {
    expect(getCompleted('02:00:00', '04:00:00')).toEqual('50%');
  });

  it('getCompleted("01:00:00", "01:00:00")', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toEqual('100%');
  });

  it('getCompleted("00:10:00", "01:00:00")', () => {
    expect(getCompleted('00:10:00', '01:00:00')).toEqual('17%');
  });

  it('getCompleted("01:10:10", "03:30:30")', () => {
    expect(getCompleted('01:10:10', '03:30:30')).toEqual('33%');
  });

  it('getCompleted("03:30:30", "05:50:50")', () => {
    expect(getCompleted('03:30:30', '05:50:50')).toEqual('60%');
  });

  it('getCompleted("00:00:00", "01:00:00")', () => {
    expect(getCompleted('00:00:00', '01:00:00')).toEqual('0%');
  });

  it('getCompleted("00:00:01", "00:00:02")', () => {
    expect(getCompleted('00:00:01', '00:00:02')).toEqual('50%');
  });

  it('getCompleted("23:59:59", "24:00:00")', () => {
    expect(getCompleted('23:59:59', '24:00:00')).toEqual('100%');
  });
});
