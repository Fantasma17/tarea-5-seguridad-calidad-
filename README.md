Claro, Sauly. Aquí tienes tu README ajustado para sonar más natural, directo y humano, sin emojis ni frases que parezcan generadas por IA. También cuidé que mantenga un tono profesional y claro para que cualquier docente o evaluador lo entienda fácilmente:

---

# Proyecto Node.js con TypeScript — Pruebas y Tablas de Decisión

## Descripción

Este proyecto implementa dos funciones principales con sus respectivas pruebas unitarias y análisis de casos:

1. `esMayorDeEdad`: Determina si una persona es mayor de edad (18 años o más).
2. `puedeAprobarPrestamo`: Decide si se aprueba un préstamo según la ocupación y si la persona tiene deudas.

## Características

- Uso de TypeScript para tipado estático.
- Pruebas unitarias con Jest.
- Cobertura del 100% en líneas, funciones, ramas y sentencias.
- Tablas de clases de equivalencia y tablas de decisión documentadas.
- Manejo explícito de errores.
- Documentación clara y completa.

## Estructura del Proyecto

```
├── src/
│   ├── domain/
│   │   ├── types.ts
│   │   ├── mayor-edad.ts
│   │   └── prestamo.ts
│   └── index.ts
├── tests/
│   ├── mayor-edad.spec.ts
│   └── prestamo.spec.ts
├── docs/
│   ├── equivalencias-mayor-edad.md
│   └── decision-table-prestamo.md
├── package.json
├── tsconfig.json
├── jest.config.ts
└── README.md
```

## Instalación y Configuración

### Requisitos previos

- Node.js versión 18 o superior
- npm o pnpm

### Instalación

```bash
npm install
# o
pnpm install
```

### Compilación

```bash
npm run build
```

## Ejecución de Pruebas

### Ejecutar todas las pruebas

```bash
npm test
```

### Ejecutar pruebas con reporte de cobertura

```bash
npm run test:cov
```

### Ejecutar pruebas en modo observación

```bash
npm run test:watch
```

### Ejecutar ejemplos

```bash
npm run dev
```

## Funciones Implementadas

### 1. esMayorDeEdad(edad: number): boolean

**Comportamiento:**

- Retorna `true` si la edad es mayor o igual a 18.
- Retorna `false` si la edad está entre 0 y 17.
- Lanza un error si la entrada es inválida (edad negativa, NaN, null, undefined o no numérica).

**Ejemplo:**

```typescript
import { esMayorDeEdad } from './src/domain/mayor-edad';

console.log(esMayorDeEdad(17)); // false
console.log(esMayorDeEdad(18)); // true
console.log(esMayorDeEdad(-1)); // Error
```

### 2. puedeAprobarPrestamo(persona: Persona): boolean

**Reglas:**

1. Si la persona es estudiante, no se aprueba el préstamo.
2. Si es empleado, se aprueba el préstamo, tenga o no deudas.
3. Si es retirado, se aprueba solo si no tiene deudas.

**Ejemplo:**

```typescript
import { puedeAprobarPrestamo } from './src/domain/prestamo';

const estudiante = { edad: 20, ocupacion: 'estudiante', tieneDeudas: false };
console.log(puedeAprobarPrestamo(estudiante)); // false

const empleado = { edad: 30, ocupacion: 'empleado', tieneDeudas: true };
console.log(puedeAprobarPrestamo(empleado)); // true

const retirado = { edad: 65, ocupacion: 'retirado', tieneDeudas: false };
console.log(puedeAprobarPrestamo(retirado)); // true
```

## Cobertura de Pruebas

El proyecto mantiene cobertura total en:

- Líneas
- Funciones
- Ramas
- Sentencias

### Reporte de cobertura

Al ejecutar `npm run test:cov`, se genera:

- Un resumen en la terminal.
- Un reporte HTML en `coverage/lcov-report/index.html`.
- Un archivo LCOV en `coverage/lcov.info`.

## Tablas de Análisis

### Clases de Equivalencia (`esMayorDeEdad`)

Ver archivo: `docs/equivalencias-mayor-edad.md`

- Edad entre 0 y 17 → false
- Edad 18 o más → true
- Edad negativa, NaN, null, undefined, no numérico → error

### Tabla de Decisiones (`puedeAprobarPrestamo`)

Ver archivo: `docs/decision-table-prestamo.md`

| Ocupación | Tiene Deudas | Resultado |
|-----------|--------------|-----------|
| estudiante | cualquiera   | false     |
| empleado   | cualquiera   | true      |
| retirado   | true         | false     |
| retirado   | false        | true      |

## Scripts Disponibles

```json
{
  "build": "tsc",
  "test": "jest",
  "test:cov": "jest --coverage",
  "test:watch": "jest --watch",
  "dev": "ts-node src/index.ts"
}
```

## Casos de Prueba Implementados

### esMayorDeEdad

- Casos válidos: 0, 17, 18, 25, 17.9, 18.1
- Casos límite: 17 y 18
- Casos inválidos: -1, NaN, null, undefined, "18"

### puedeAprobarPrestamo

- Todas las combinaciones de ocupación y deudas
- Ocupación inválida
- Cobertura completa de reglas

## Tecnologías Utilizadas

- Node.js 18+
- TypeScript 5.2+
- Jest 29+ con ts-jest
- @types/node y @types/jest

## Video Explicativo

El video debe tener entre 4 y 8 minutos e incluir:

1. Explicación del código
2. Revisión de las tablas en `/docs`
3. Ejecución de pruebas con `npm run test:cov`
4. Demostración del reporte de cobertura
5. Cámara encendida durante todo el video (modo PiP)

## Entregables

1. Código fuente completo
2. Pruebas unitarias con cobertura total
3. Tablas de análisis en `/docs`
4. Configuración completa del proyecto
5. README con documentación
6. Video explicativo
7. PDF con enlaces al repositorio y al video

## Próximos Pasos

1. Instalar dependencias
2. Ejecutar pruebas
3. Verificar cobertura
4. Grabar el video
5. Subir el proyecto al repositorio
6. Crear el PDF con los enlaces

## Soporte

Si tienes problemas:

1. Verifica que tienes Node.js 18 o superior
2. Asegúrate de haber ejecutado `npm install`
3. Revisa que todas las pruebas pasen con `npm test`

---

Si quieres, también puedo ayudarte a revisar los archivos Markdown de las tablas o ayudarte a redactar el PDF final con los enlaces. ¿Te gustaría que lo revisemos juntos?

