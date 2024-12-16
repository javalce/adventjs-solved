import { describe, expect, expectTypeOf, it } from 'vitest';

import { isRobotBack } from './solution';

describe('reto #13: ¿El robot está de vuelta?', () => {
  it('return type', () => {
    expectTypeOf(isRobotBack('')).toMatchTypeOf<true | [number, number]>();
  });

  it('isRobotBack("R")', () => {
    expect(isRobotBack('R')).toEqual([1, 0]);
  });

  it('isRobotBack("RL")', () => {
    expect(isRobotBack('RL')).toEqual(true);
  });

  it('isRobotBack("RLUD")', () => {
    expect(isRobotBack('RLUD')).toEqual(true);
  });

  it('isRobotBack("*RU")', () => {
    expect(isRobotBack('*RU')).toEqual([2, 1]);
  });

  it('isRobotBack("R*U")', () => {
    expect(isRobotBack('R*U')).toEqual([1, 2]);
  });

  it('isRobotBack("LLL!R")', () => {
    expect(isRobotBack('LLL!R')).toEqual([-4, 0]);
  });

  it('isRobotBack("R?R")', () => {
    expect(isRobotBack('R?R')).toEqual([1, 0]);
  });

  it('isRobotBack("U?D")', () => {
    expect(isRobotBack('U?D')).toEqual(true);
  });

  it('isRobotBack("R!L")', () => {
    expect(isRobotBack('R!L')).toEqual([2, 0]);
  });

  it('isRobotBack("U!D")', () => {
    expect(isRobotBack('U!D')).toEqual([0, 2]);
  });

  it('isRobotBack("R?L")', () => {
    expect(isRobotBack('R?L')).toEqual(true);
  });

  it('isRobotBack("U?U")', () => {
    expect(isRobotBack('U?U')).toEqual([0, 1]);
  });
});
