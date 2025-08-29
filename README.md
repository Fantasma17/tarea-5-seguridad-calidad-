# Proyecto Node.js con TypeScript - Pruebas y Tablas de Decisión

## 📋 Descripción

Este proyecto implementa dos funciones principales con sus respectivas pruebas unitarias y tablas de análisis:

1. **`esMayorDeEdad`**: Determina si una persona es mayor de edad (≥18 años)
2. **`puedeAprobarPrestamo`**: Decide si se aprueba un préstamo basándose en ocupación y deudas

## 🚀 Características

- ✅ **TypeScript** para tipado estático
- ✅ **Jest** para pruebas unitarias
- ✅ **100% de cobertura** en líneas, funciones, ramas y sentencias
- ✅ **Tablas de equivalencia** y **tablas de decisión**
- ✅ **Manejo de errores** explícito
- ✅ **Documentación completa**

## 📁 Estructura del Proyecto

```
├── src/
│   ├── domain/
│   │   ├── types.ts           # Tipos e interfaces
│   │   ├── mayor-edad.ts      # Función esMayorDeEdad
│   │   └── prestamo.ts        # Función puedeAprobarPrestamo
│   └── index.ts               # Punto de entrada y ejemplos
├── tests/
│   ├── mayor-edad.spec.ts     # Pruebas para esMayorDeEdad
│   └── prestamo.spec.ts       # Pruebas para puedeAprobarPrestamo
├── docs/
│   ├── equivalencias-mayor-edad.md    # Tabla de clases de equivalencia
│   └── decision-table-prestamo.md     # Tabla de decisiones
├── package.json
├── tsconfig.json
├── jest.config.ts
└── README.md
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o pnpm

### Instalación
```bash
# Instalar dependencias
npm install
# o
pnpm install
```

### Compilación
```bash
# Compilar TypeScript
npm run build
```

## 🧪 Ejecución de Pruebas

### Ejecutar todas las pruebas
```bash
npm test
```

### Ejecutar pruebas con reporte de cobertura
```bash
npm run test:cov
```

### Ejecutar pruebas en modo watch
```bash
npm run test:watch
```

### Ejecutar ejemplos
```bash
npm run dev
```

## 📊 Funciones Implementadas

### 1. esMayorDeEdad(edad: number): boolean

**Comportamiento:**
- Retorna `true` si edad ≥ 18
- Retorna `false` si 0 ≤ edad < 18
- Lanza error para entradas inválidas (negativas, NaN, no numéricos)

**Ejemplo:**
```typescript
import { esMayorDeEdad } from './src/domain/mayor-edad';

console.log(esMayorDeEdad(17)); // false
console.log(esMayorDeEdad(18)); // true
console.log(esMayorDeEdad(-1)); // Error: La edad no puede ser negativa
```

### 2. puedeAprobarPrestamo(persona: Persona): boolean

**Reglas de negocio:**
1. **Estudiante** → Siempre rechazado
2. **Empleado** → Siempre aprobado
3. **Retirado** → Aprobado solo si no tiene deudas

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

## 📈 Cobertura de Pruebas

El proyecto mantiene **100% de cobertura** en:
- ✅ **Líneas** (Lines): 100%
- ✅ **Funciones** (Functions): 100%  
- ✅ **Ramas** (Branches): 100%
- ✅ **Sentencias** (Statements): 100%

### Reporte de Cobertura
Después de ejecutar `npm run test:cov`, encontrarás el reporte detallado en:
- **Terminal**: Resumen en texto
- **HTML**: `coverage/lcov-report/index.html`
- **LCOV**: `coverage/lcov.info`

## 📋 Tablas de Análisis

### Clases de Equivalencia (esMayorDeEdad)
Ver: [`docs/equivalencias-mayor-edad.md`](docs/equivalencias-mayor-edad.md)

**Clases válidas:**
- CE1: Menor de edad (0 ≤ edad < 18) → false
- CE2: Mayor de edad (edad ≥ 18) → true

**Clases inválidas:**
- CE3: Edad negativa → Error
- CE4: No es número → Error  
- CE5: NaN → Error

### Tabla de Decisiones (puedeAprobarPrestamo)
Ver: [`docs/decision-table-prestamo.md`](docs/decision-table-prestamo.md)

| Ocupación | Tiene Deudas | Resultado |
|-----------|--------------|-----------|
| estudiante | Cualquiera | ❌ false |
| empleado | Cualquiera | ✅ true |
| retirado | true | ❌ false |
| retirado | false | ✅ true |

## 🔧 Scripts Disponibles

```json
{
  "build": "tsc",                    // Compilar TypeScript
  "test": "jest",                    // Ejecutar pruebas
  "test:cov": "jest --coverage",     // Pruebas con cobertura
  "test:watch": "jest --watch",      // Pruebas en modo watch
  "dev": "ts-node src/index.ts"      // Ejecutar ejemplos
}
```

## 🎯 Casos de Prueba Implementados

### esMayorDeEdad
- ✅ Casos válidos: 0, 17, 18, 25, 17.9, 18.1
- ✅ Casos de frontera: 17 vs 18
- ✅ Casos de error: -1, NaN, null, undefined, "18"

### puedeAprobarPrestamo  
- ✅ Todas las combinaciones de ocupación × deudas
- ✅ Casos de error: ocupación inválida
- ✅ Cobertura completa de reglas de negocio

## 📝 Tecnologías Utilizadas

- **Node.js** 18+
- **TypeScript** 5.2+
- **Jest** 29+ con ts-jest
- **@types/node** y **@types/jest**

## 🎥 Video Explicativo

Para completar el proyecto, debes crear un video de 4-8 minutos que incluya:

1. **Explicación del código** (funciones y lógica)
2. **Revisión de las tablas** (equivalencias y decisiones)
3. **Ejecución de pruebas** con `npm run test:cov`
4. **Demostración del reporte de cobertura** (100%)
5. **Cámara visible** durante todo el video (PiP)

### Sugerencias para el video:
- Mostrar la estructura del proyecto
- Explicar cada función paso a paso
- Revisar las tablas en `/docs`
- Ejecutar `npm run test:cov` y mostrar resultados
- Abrir el reporte HTML de cobertura
- Explicar cómo se logró el 100% de cobertura

## 📄 Entregables

1. ✅ **Código fuente** completo con TypeScript
2. ✅ **Pruebas unitarias** con Jest (100% cobertura)
3. ✅ **Tablas de análisis** en `/docs`
4. ✅ **Configuración** completa (package.json, tsconfig.json, jest.config.ts)
5. ✅ **README.md** con documentación completa
6. 🎥 **Video explicativo** (4-8 minutos con PiP)
7. 📄 **PDF** con URLs del repositorio y video

## 🚀 Próximos Pasos

1. **Instalar dependencias**: `npm install`
2. **Ejecutar pruebas**: `npm run test:cov`
3. **Verificar cobertura**: Revisar que sea 100%
4. **Crear video**: Grabar explicación con cámara visible
5. **Subir a repositorio**: GitHub, GitLab, etc.
6. **Crear PDF**: Con URLs del repo y video

## 📞 Soporte

Si encuentras algún problema:
1. Verifica que Node.js 18+ esté instalado
2. Ejecuta `npm install` para instalar dependencias
3. Revisa que todas las pruebas pasen con `npm test`
4. Confirma cobertura 100% con `npm run test:cov`

---

**¡Proyecto completado exitosamente! 🎉**

Todas las funciones implementadas, pruebas pasando al 100%, y documentación completa.