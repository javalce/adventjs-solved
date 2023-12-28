import { describe, expect, it } from 'vitest';
import checkIsValidCopy from './solution';

describe('Reto 12: ¿Es una copia válida?', () => {
  it('Debería devolver un booleano', () => {
    expect(checkIsValidCopy('', '')).toBeTypeOf('boolean');
  });

  it('Debería devolver true para la copia "sa#ta cl#us is comin#" de "Santa Claus is coming"', () => {
    expect(
      checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#'),
    ).toBeTruthy();
  });

  it('Debería devolver false para la copia "p#nt: cla#s #s c+min#" de "Santa Claus is coming"', () => {
    expect(
      checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#'),
    ).toBeFalsy();
  });

  it('Debería devolver false para la copia " Santa Claus " de "Santa Claus"', () => {
    expect(checkIsValidCopy('Santa Claus', ' Santa Claus ')).toBeFalsy();
  });

  it('Debería devolver true para la copia "###:. c:+##" de "Santa Claus"', () => {
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toBeTruthy();
  });

  it('Debería devolver false para la copia "sant##claus+" de "Santa Claus"', () => {
    expect(checkIsValidCopy('Santa Claus', 'sant##claus+')).toBeFalsy();
  });

  it('Debería devolver true para la copia "S#+:. c:. s" de "S#n:a Claus"', () => {
    expect(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')).toBeTruthy();
  });

  it('Debería devolver false para la copia "s#+:.#c:. s" de "Santa Claus"', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBeFalsy();
  });

  it('Debería devolver false para la copia "s#+:.#c:. s" de "s+#:.#c:. s"', () => {
    expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')).toBeFalsy();
  });

  it('Debería devolver false para la copia "S#ntA ClauS" de "S#nta Claus"', () => {
    expect(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')).toBeFalsy();
  });

  it('Debería devolver true para la copia "3 .+:# #:" de "3 #egalos"', () => {
    expect(checkIsValidCopy('3 #egalos', '3 .+:# #:')).toBeTruthy();
  });

  it('Debería devolver true para la copia "3        " de "3 regalos"', () => {
    expect(checkIsValidCopy('3 regalos', '3        ')).toBeTruthy();
  });

  it('Debería devolver true para la copia "3 .+:# #: 3" de "3 regalos 3"', () => {
    expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')).toBeTruthy();
  });

  it('Debería devolver false para la copia "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño" de "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños"', () => {
    expect(
      checkIsValidCopy(
        'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños',
        'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño',
      ),
    ).toBeFalsy();
  });
});
