import { cyberReindeer } from './solution';

describe('reto #5: El CyberTruck de Santa', () => {
  it('test 1', () => {
    const road = 'S.........';
    const time = 5;
    const expected = [
      'S.........', // estado inicial
      '.S........', // avanza el trineo la carretera
      '..S.......', // avanza el trineo la carretera
      '...S......', // avanza el trineo la carretera
      '....S.....', // avanza el trineo la carretera
    ];
    const result = cyberReindeer(road, time);

    expect(result).toEqual(expected);
  });

  it('test 2', () => {
    const road = 'S..*...*..';
    const time = 5;
    const expected = [
      'S..*...*..', // estado inicial
      '.S.*...*..', // avanza el trineo la carretera
      '..S*...*..', // avanza el trineo la carretera
      '...S...*..', // avanza el trineo la carretera
      '...*S..*..', // avanza el trineo la carretera
    ];
    const result = cyberReindeer(road, time);

    expect(result).toEqual(expected);
  });

  it('test 3', () => {
    const road = 'S..|...|..';
    const time = 10;
    const expected = [
      'S..|...|..', // estado inicial
      '.S.|...|..', // avanza el trineo la carretera
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // el trineo para en la barrera
      '..S|...|..', // el trineo para en la barrera
      '...S...*..', // se abre la barrera, el trineo avanza
      '...*S..*..', // avanza el trineo la carretera
      '...*.S.*..', // avanza el trineo la carretera
      '...*..S*..', // avanza el trineo la carretera
      '...*...S..', // avanza por la barrera abierta
    ];
    const result = cyberReindeer(road, time);

    expect(result).toEqual(expected);
  });

  it('test 4', () => {
    const road = '..S|...|..';
    const time = 10;
    const expected = [
      '..S|...|..', // estado inicial
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // el trineo para en la barrera
      '..S|...|..', // el trineo para en la barrera
      '...S...*..', // se abre la barrera, el trineo avanza
      '...*S..*..', // avanza el trineo la carretera
      '...*.S.*..', // avanza el trineo la carretera
      '...*..S*..', // avanza el trineo la carretera
      '...*...S..', // avanza por la barrera abierta
    ];
    const result = cyberReindeer(road, time);

    expect(result).toEqual(expected);
  });
});
