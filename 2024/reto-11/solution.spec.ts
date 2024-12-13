import { describe, expect, expectTypeOf, it } from 'vitest';

import { decodeFilename } from './solution';

describe('reto #11: Nombres de archivos codificados', () => {
  it('return type', () => {
    expectTypeOf(decodeFilename('')).toBeString();
  });

  it('decodeFilename("2023122512345678_sleighDesign.png.grinchwa")', () => {
    expect(decodeFilename('2023122512345678_sleighDesign.png.grinchwa')).toEqual(
      'sleighDesign.png',
    );
  });

  it('decodeFilename("42_chimney_dimensions.pdf.hack2023")', () => {
    expect(decodeFilename('42_chimney_dimensions.pdf.hack2023')).toEqual('chimney_dimensions.pdf');
  });

  it('decodeFilename("987654321_elf-roster.csv.tempfile")', () => {
    expect(decodeFilename('987654321_elf-roster.csv.tempfile')).toEqual('elf-roster.csv');
  });

  it('decodeFilename("2024120912345678_magic_wand-blueprint.jpg.grinchbackup")', () => {
    expect(decodeFilename('2024120912345678_magic_wand-blueprint.jpg.grinchbackup')).toEqual(
      'magic_wand-blueprint.jpg',
    );
  });

  it('decodeFilename("51231_trainSchedule.txt.extra")', () => {
    expect(decodeFilename('51231_trainSchedule.txt.extra')).toEqual('trainSchedule.txt');
  });
});
