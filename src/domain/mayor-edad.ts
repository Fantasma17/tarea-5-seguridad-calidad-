/**
 * Determina si una persona es mayor de edad (18 años o más)
 * 
 * @param edad - La edad a evaluar
 * @returns true si la edad es >= 18, false si 0 <= edad < 18
 * @throws Error si la entrada es inválida (negativa, NaN, null, undefined, no numérico)
 */
export function esMayorDeEdad(edad: number): boolean {
  // Validar que la entrada sea un número válido
  if (typeof edad !== 'number') {
    throw new Error('La edad debe ser un número');
  }
  
  if (isNaN(edad)) {
    throw new Error('La edad no puede ser NaN');
  }
  
  if (edad < 0) {
    throw new Error('La edad no puede ser negativa');
  }
  
  // Retornar true si edad >= 18, false en caso contrario
  return edad >= 18;
}