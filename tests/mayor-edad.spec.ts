import { esMayorDeEdad } from '../src/domain/mayor-edad';

describe('esMayorDeEdad', () => {
  describe('Casos válidos - Mayor de edad', () => {
    test('debe retornar true para edad exactamente 18', () => {
      expect(esMayorDeEdad(18)).toBe(true);
    });

    test('debe retornar true para edad mayor a 18', () => {
      expect(esMayorDeEdad(25)).toBe(true);
      expect(esMayorDeEdad(65)).toBe(true);
      expect(esMayorDeEdad(100)).toBe(true);
    });
  });

  describe('Casos válidos - Menor de edad', () => {
    test('debe retornar false para edad 0', () => {
      expect(esMayorDeEdad(0)).toBe(false);
    });

    test('debe retornar false para edad exactamente 17', () => {
      expect(esMayorDeEdad(17)).toBe(false);
    });

    test('debe retornar false para edades menores a 18', () => {
      expect(esMayorDeEdad(1)).toBe(false);
      expect(esMayorDeEdad(10)).toBe(false);
      expect(esMayorDeEdad(16)).toBe(false);
    });
  });

  describe('Casos de frontera', () => {
    test('debe manejar correctamente la frontera entre 17 y 18', () => {
      expect(esMayorDeEdad(17)).toBe(false);
      expect(esMayorDeEdad(18)).toBe(true);
    });

    test('debe manejar números decimales correctamente', () => {
      expect(esMayorDeEdad(17.9)).toBe(false);
      expect(esMayorDeEdad(18.0)).toBe(true);
      expect(esMayorDeEdad(18.1)).toBe(true);
    });
  });

  describe('Casos de error - Entradas inválidas', () => {
    test('debe lanzar error para edad negativa', () => {
      expect(() => esMayorDeEdad(-1)).toThrow('La edad no puede ser negativa');
      expect(() => esMayorDeEdad(-10)).toThrow('La edad no puede ser negativa');
    });

    test('debe lanzar error para NaN', () => {
      expect(() => esMayorDeEdad(NaN)).toThrow('La edad no puede ser NaN');
    });

    test('debe lanzar error para tipos no numéricos', () => {
      expect(() => esMayorDeEdad(null as any)).toThrow('La edad debe ser un número');
      expect(() => esMayorDeEdad(undefined as any)).toThrow('La edad debe ser un número');
      expect(() => esMayorDeEdad('18' as any)).toThrow('La edad debe ser un número');
      expect(() => esMayorDeEdad({} as any)).toThrow('La edad debe ser un número');
      expect(() => esMayorDeEdad([] as any)).toThrow('La edad debe ser un número');
    });
  });
});