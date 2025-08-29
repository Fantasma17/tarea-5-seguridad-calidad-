// Archivo principal del proyecto
export { esMayorDeEdad } from './domain/mayor-edad';
export { puedeAprobarPrestamo } from './domain/prestamo';
export { Persona, Ocupacion } from './domain/types';

// Ejemplo de uso
import { esMayorDeEdad } from './domain/mayor-edad';
import { puedeAprobarPrestamo } from './domain/prestamo';
import { Persona } from './domain/types';

console.log('=== Ejemplos de uso ===');

// Ejemplos de esMayorDeEdad
console.log('\n--- Función esMayorDeEdad ---');
console.log('Edad 17:', esMayorDeEdad(17)); // false
console.log('Edad 18:', esMayorDeEdad(18)); // true
console.log('Edad 25:', esMayorDeEdad(25)); // true

// Ejemplos de puedeAprobarPrestamo
console.log('\n--- Función puedeAprobarPrestamo ---');

const estudiante: Persona = { edad: 20, ocupacion: 'estudiante', tieneDeudas: false };
console.log('Estudiante sin deudas:', puedeAprobarPrestamo(estudiante)); // false

const empleado: Persona = { edad: 30, ocupacion: 'empleado', tieneDeudas: true };
console.log('Empleado con deudas:', puedeAprobarPrestamo(empleado)); // true

const retiradoSinDeudas: Persona = { edad: 65, ocupacion: 'retirado', tieneDeudas: false };
console.log('Retirado sin deudas:', puedeAprobarPrestamo(retiradoSinDeudas)); // true

const retiradoConDeudas: Persona = { edad: 70, ocupacion: 'retirado', tieneDeudas: true };
console.log('Retirado con deudas:', puedeAprobarPrestamo(retiradoConDeudas)); // false