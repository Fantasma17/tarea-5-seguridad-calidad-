# Tabla de Clases de Equivalencia - Función esMayorDeEdad

## Descripción
La función `esMayorDeEdad(edad: number): boolean` determina si una persona es mayor de edad basándose en su edad.

## Clases de Equivalencia

### Clases Válidas

| Clase | Descripción | Rango de Valores | Resultado Esperado | Casos de Prueba |
|-------|-------------|------------------|-------------------|-----------------|
| CE1   | Menor de edad | 0 ≤ edad < 18 | false | 0, 1, 10, 16, 17, 17.9 |
| CE2   | Mayor de edad | edad ≥ 18 | true | 18, 19, 25, 65, 100, 18.0, 18.1 |

### Clases Inválidas

| Clase | Descripción | Valores | Error Esperado | Casos de Prueba |
|-------|-------------|---------|----------------|-----------------|
| CE3   | Edad negativa | edad < 0 | "La edad no puede ser negativa" | -1, -10, -0.1 |
| CE4   | No es número | typeof edad !== 'number' | "La edad debe ser un número" | null, undefined, "18", {}, [] |
| CE5   | NaN | isNaN(edad) === true | "La edad no puede ser NaN" | NaN |

## Valores de Frontera

Los valores de frontera más importantes son:
- **17**: Último valor que retorna false
- **18**: Primer valor que retorna true
- **0**: Valor mínimo válido
- **-1**: Primer valor inválido (negativo)

## Casos de Prueba Implementados

### Casos Válidos
1. **Exactamente 18 años**: `esMayorDeEdad(18)` → `true`
2. **Mayor a 18**: `esMayorDeEdad(25)` → `true`
3. **Exactamente 17 años**: `esMayorDeEdad(17)` → `false`
4. **Menor a 18**: `esMayorDeEdad(10)` → `false`
5. **Edad 0**: `esMayorDeEdad(0)` → `false`
6. **Decimales**: `esMayorDeEdad(17.9)` → `false`, `esMayorDeEdad(18.1)` → `true`

### Casos de Error
1. **Edad negativa**: `esMayorDeEdad(-1)` → Error
2. **NaN**: `esMayorDeEdad(NaN)` → Error
3. **Tipos inválidos**: `esMayorDeEdad(null)`, `esMayorDeEdad("18")` → Error

## Cobertura
Esta tabla garantiza:
- ✅ 100% cobertura de líneas
- ✅ 100% cobertura de ramas
- ✅ 100% cobertura de funciones
- ✅ 100% cobertura de sentencias