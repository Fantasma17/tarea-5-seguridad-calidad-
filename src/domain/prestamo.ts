import { Persona } from './types';

/**
 * Determina si se puede aprobar un préstamo basado en las reglas de negocio
 * 
 * Reglas:
 * 1. Si la persona es estudiante → NO se aprueba, aunque no tenga deudas
 * 2. Si la persona es empleado → SÍ se aprueba, aunque tenga deudas
 * 3. Si la persona es retirado → SÍ se aprueba si no presenta deudas
 * 4. Si la persona es retirado → NO se aprueba si presenta deudas
 * 
 * @param persona - Los datos de la persona a evaluar
 * @returns true si se aprueba el préstamo, false en caso contrario
 */
export function puedeAprobarPrestamo(persona: Persona): boolean {
  switch (persona.ocupacion) {
    case 'estudiante':
      // Regla 1: Estudiantes nunca son aprobados
      return false;
    
    case 'empleado':
      // Regla 2: Empleados siempre son aprobados
      return true;
    
    case 'retirado':
      // Reglas 3 y 4: Retirados solo si no tienen deudas
      return !persona.tieneDeudas;
    
    default:
      throw new Error(`Ocupación no válida: ${persona.ocupacion}`);
  }
}