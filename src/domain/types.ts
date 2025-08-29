/**
 * Tipos de ocupación válidos para el sistema de préstamos
 */
export type Ocupacion = 'estudiante' | 'empleado' | 'retirado';

/**
 * Interfaz que representa a una persona para la evaluación de préstamos
 */
export interface Persona {
  /** Edad de la persona en años */
  edad: number;
  /** Ocupación actual de la persona */
  ocupacion: Ocupacion;
  /** Indica si la persona tiene deudas sin pagar */
  tieneDeudas: boolean;
}