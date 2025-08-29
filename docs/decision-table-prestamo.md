# Tabla de Decisiones - Función puedeAprobarPrestamo

## Descripción
La función `puedeAprobarPrestamo(persona: Persona): boolean` determina si se aprueba un préstamo basándose en la ocupación y el estado de deudas de una persona.

## Reglas de Negocio
1. **Estudiante** → NO se aprueba, independientemente de las deudas
2. **Empleado** → SÍ se aprueba, independientemente de las deudas  
3. **Retirado sin deudas** → SÍ se aprueba
4. **Retirado con deudas** → NO se aprueba

## Tabla de Decisiones

| Regla | R1 | R2 | R3 | R4 | R5 | R6 |
|-------|----|----|----|----|----|----|
| **Condiciones** | | | | | | |
| Ocupación = 'estudiante' | ✓ | ✓ | - | - | - | - |
| Ocupación = 'empleado' | - | - | ✓ | ✓ | - | - |
| Ocupación = 'retirado' | - | - | - | - | ✓ | ✓ |
| Tiene deudas = true | ✓ | - | ✓ | - | ✓ | - |
| Tiene deudas = false | - | ✓ | - | ✓ | - | ✓ |
| **Acciones** | | | | | | |
| Aprobar préstamo | x | x | ✓ | ✓ | x | ✓ |

### Leyenda
- ✓ = Condición verdadera
- - = Condición falsa o no relevante
- ✓ = Acción ejecutada (true)
- x = Acción no ejecutada (false)

## Casos de Prueba por Regla

### R1: Estudiante con deudas
```typescript
const persona: Persona = {
  edad: 25,
  ocupacion: 'estudiante',
  tieneDeudas: true
};
// Resultado esperado: false
```

### R2: Estudiante sin deudas
```typescript
const persona: Persona = {
  edad: 20,
  ocupacion: 'estudiante',
  tieneDeudas: false
};
// Resultado esperado: false
```

### R3: Empleado con deudas
```typescript
const persona: Persona = {
  edad: 35,
  ocupacion: 'empleado',
  tieneDeudas: true
};
// Resultado esperado: true
```

### R4: Empleado sin deudas
```typescript
const persona: Persona = {
  edad: 30,
  ocupacion: 'empleado',
  tieneDeudas: false
};
// Resultado esperado: true
```

### R5: Retirado con deudas
```typescript
const persona: Persona = {
  edad: 70,
  ocupacion: 'retirado',
  tieneDeudas: true
};
// Resultado esperado: false
```

### R6: Retirado sin deudas
```typescript
const persona: Persona = {
  edad: 65,
  ocupacion: 'retirado',
  tieneDeudas: false
};
// Resultado esperado: true
```

## Casos de Error

### Ocupación inválida
```typescript
const persona = {
  edad: 30,
  ocupacion: 'invalida' as any,
  tieneDeudas: false
};
// Resultado esperado: Error "Ocupación no válida: invalida"
```

## Matriz de Cobertura

| Ocupación | Tiene Deudas | Resultado | Regla | Test Case |
|-----------|--------------|-----------|-------|-----------|
| estudiante | true | false | R1 | ✓ |
| estudiante | false | false | R2 | ✓ |
| empleado | true | true | R3 | ✓ |
| empleado | false | true | R4 | ✓ |
| retirado | true | false | R5 | ✓ |
| retirado | false | true | R6 | ✓|

## Cobertura
Esta tabla garantiza:
-  100% cobertura de líneas
-  100% cobertura de ramas (todas las combinaciones de switch/case)
- 100% cobertura de funciones
- 100% cobertura de sentencias
-  Cobertura de casos de error
