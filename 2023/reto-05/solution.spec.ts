import { describe, expect, it } from 'vitest';
import { cyberReindeer } from './solution';

describe('Reto #5: El CyberTruck de Santa', () => {
  it('Test 1', () => {
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

  it('Test 2', () => {
    const road = 'S.|.';
    const time = 4;
    const expected = ['S.|.', '.S|.', '.S|.', '.S|.'];
    const result = cyberReindeer(road, time);

    expect(result).toEqual(expected);
  });

  it('Test 3', () => {
    const road = 'S.|.|.';
    const time = 7;
    const expected = [
      'S.|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '..S.*.',
      '..*S*.',
    ];
    const result = cyberReindeer(road, time);

    expect(result).toEqual(expected);
  });

  it('Test 4', () => {
    const road = 'S.|..';
    const time = 6;
    const expected = ['S.|..', '.S|..', '.S|..', '.S|..', '.S|..', '..S..'];
    const result = cyberReindeer(road, time);

    expect(result).toEqual(expected);
  });

  it('Test 5', () => {
    const road = 'S.|.|.|......|.||.........';
    const time = 8;
    const expected = [
      'S.|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '..S.*.*......*.**.........',
      '..*S*.*......*.**.........',
      '..*.S.*......*.**.........',
    ];
    const result = cyberReindeer(road, time);

    expect(result).toEqual(expected);
  });
});
