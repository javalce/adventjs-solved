import { describe, expect, expectTypeOf, it } from 'vitest';

import { moveTrain } from './solution';

describe('reto #9: El tren mágico', () => {
  it('return type', () => {
    expectTypeOf(moveTrain(['@'], 'D')).toBeString();
  });

  it('moveTrain(["·····", "··*··", "··@··", "··o··", "··o··" ], "U")', () => {
    expect(moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'U')).toEqual('eat');
  });

  it('moveTrain(["·····", "··*··", "··.··", "··o··", "··@··"], "D")', () => {
    expect(moveTrain(['·····', '··*··', '··.··', '··o··', '··@··'], 'D')).toEqual('crash');
  });

  it('moveTrain(["·····", "··*··", "··@··", "··o··", "··o··"], "D")', () => {
    expect(moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'D')).toEqual('crash');
  });

  it('moveTrain(["·····", "··*··", "··@··", "··o··", "··o··"], "R")', () => {
    expect(moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'R')).toEqual('none');
  });

  it('moveTrain(["··@··", "··o··", "·*o··", "··o··", "··o··"], "U")', () => {
    expect(moveTrain(['··@··', '··o··', '·*o··', '··o··', '··o··'], 'U')).toEqual('crash');
  });

  it('moveTrain(["··@··", "··o··", "·*o··", "··o··", "··o··"], "L")', () => {
    expect(moveTrain(['··@··', '··o··', '·*o··', '··o··', '··o··'], 'L')).toEqual('none');
  });

  it('moveTrain(["·····", "··@··", "··*··", "·····", "·····"], "D")', () => {
    expect(moveTrain(['·····', '··@··', '··*··', '·····', '·····'], 'D')).toEqual('eat');
  });
});
