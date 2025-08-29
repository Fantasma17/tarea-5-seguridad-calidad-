import { puedeAprobarPrestamo } from '../src/domain/prestamo';
import { Persona } from '../src/domain/types';

describe('puedeAprobarPrestamo', () => {
  describe('Regla 1: Estudiantes - Nunca se aprueba', () => {
    test('estudiante sin deudas debe ser rechazado', () => {
      const persona: Persona = {
        edad: 20,
        ocupacion: 'estudiante',
        tieneDeudas: false
      };
      expect(puedeAprobarPrestamo(persona)).toBe(false);
    });

    test('estudiante con deudas debe ser rechazado', () => {
      const persona: Persona = {
        edad: 25,
        ocupacion: 'estudiante',
        tieneDeudas: true
      };
      expect(puedeAprobarPrestamo(persona)).toBe(false);
    });

    test('estudiante mayor sin deudas debe ser rechazado', () => {
      const persona: Persona = {
        edad: 40,
        ocupacion: 'estudiante',
        tieneDeudas: false
      };
      expect(puedeAprobarPrestamo(persona)).toBe(false);
    });
  });

  describe('Regla 2: Empleados - Siempre se aprueba', () => {
    test('empleado sin deudas debe ser aprobado', () => {
      const persona: Persona = {
        edad: 30,
        ocupacion: 'empleado',
        tieneDeudas: false
      };
      expect(puedeAprobarPrestamo(persona)).toBe(true);
    });

    test('empleado con deudas debe ser aprobado', () => {
      const persona: Persona = {
        edad: 35,
        ocupacion: 'empleado',
        tieneDeudas: true
      };
      expect(puedeAprobarPrestamo(persona)).toBe(true);
    });

    test('empleado joven con deudas debe ser aprobado', () => {
      const persona: Persona = {
        edad: 22,
        ocupacion: 'empleado',
        tieneDeudas: true
      };
      expect(puedeAprobarPrestamo(persona)).toBe(true);
    });
  });

  describe('Reglas 3 y 4: Retirados - Depende de las deudas', () => {
    test('retirado sin deudas debe ser aprobado', () => {
      const persona: Persona = {
        edad: 65,
        ocupacion: 'retirado',
        tieneDeudas: false
      };
      expect(puedeAprobarPrestamo(persona)).toBe(true);
    });

    test('retirado con deudas debe ser rechazado', () => {
      const persona: Persona = {
        edad: 70,
        ocupacion: 'retirado',
        tieneDeudas: true
      };
      expect(puedeAprobarPrestamo(persona)).toBe(false);
    });

    test('retirado joven sin deudas debe ser aprobado', () => {
      const persona: Persona = {
        edad: 55,
        ocupacion: 'retirado',
        tieneDeudas: false
      };
      expect(puedeAprobarPrestamo(persona)).toBe(true);
    });
  });

  describe('Casos de error', () => {
    test('debe lanzar error para ocupación inválida', () => {
      const persona = {
        edad: 30,
        ocupacion: 'invalida' as any,
        tieneDeudas: false
      };
      expect(() => puedeAprobarPrestamo(persona)).toThrow('Ocupación no válida: invalida');
    });
  });
});