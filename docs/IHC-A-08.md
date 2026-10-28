# Diagnóstico Específico: IHC-A-08 · Dashboard UX (Persistencia de Datos en Checklist)


## 1. Descripción del Fallo

En el Dashboard UX, las casillas del checklist **parecen guardarse visualmente**, pero al navegar entre los 6 pasos del Stepper (especialmente al usar "Atrás" o saltar entre pasos), **los datos marcados se pierden**. Esto genera frustración, retrabajo y desconfianza en el sistema, especialmente en contextos de auditoría donde la integridad de los datos es crítica.

---

## 2. Touchpoints Identificados (8)

| # | Touchpoint | Pantalla asociada | Interacción del usuario |
|---|---|---|---|
| 1 | Ingreso al Stepper | Vista General | Usuario selecciona auditoría activa |
| 2 | Navegación a Paso 1 | Stepper - Paso 1 | Usuario ve checklist inicial |
| 3 | Marcado de casilla | Stepper - Paso 1 | Usuario hace clic en checkbox |
| 4 | Navegación a Paso 2 | Stepper - Paso 2 | Usuario clic en "Siguiente" |
| 5 | Marcado en Paso 2 | Stepper - Paso 2 | Usuario completa ítems del paso |
| 6 | Retorno a Paso 1 | Stepper - Paso 1 | Usuario clic en "Anterior" |
| 7 | Verificación de estado | Stepper - Paso 1 | Usuario revisa si sus marcas persisten |
| 8 | Guardado final | Lista de Verificación | Usuario intenta guardar progreso |

---

## 3. Momentos de Verdad (2)

### Momento de Verdad #1: Navegación entre pasos del Stepper
- **Qué ocurre:** Al hacer clic en "Siguiente" o "Anterior", el estado de las casillas marcadas se pierde.
- **Por qué es crítico:** Es el momento donde el usuario confía en que el sistema recordará su trabajo.
- **Estado actual:**  Los datos no persisten entre navegaciones.

### Momento de Verdad #2: Intento de guardar progreso manualmente
- **Qué ocurre:** El usuario busca un botón de "Guardar" o asume que se guardó automáticamente.
- **Por qué es crítico:** Define la confianza del usuario en el sistema.
- **Estado actual:** ❌ No hay indicador visual de estado de guardado.

---

## 4. Priorización de Fallos (Top 3)

### Fallo #1: Pérdida de datos al navegar entre pasos (CRÍTICO)
- **Heurística de Nielsen violada:** #5 Prevención de errores + #1 Visibilidad del estado del sistema.
- **Principio de Gestalt:** Continuidad — el flujo visual se rompe al perder información.
- **Carga cognitiva:** Extrínseca alta — el usuario debe recordar qué marcó en cada paso.
- **Impacto:** Retrabajo, frustración, posible abandono de la auditoría.

### Fallo #2: Ausencia de indicadores de guardado (ALTO)
- **Heurística de Nielsen violada:** #1 Visibilidad del estado del sistema.
- **Principio de Gestalt:** Figura/Fondo — no hay diferenciación visual entre "guardado" y "pendiente".
- **Carga cognitiva:** Intrínseca — el usuario no sabe si su acción tuvo efecto.
- **Impacto:** Ansiedad del usuario, clics repetitivos innecesarios.

### Fallo #3: Sin cálculo de progreso real (MEDIO)
- **Heurística de Nielsen violada:** #1 Visibilidad del estado del sistema + #6 Reconocer en lugar de recordar.
- **Principio de Gestalt:** Cierre — el usuario no percibe el avance hacia la completitud.
- **Carga cognitiva:** Germana — el usuario debe calcular mentalmente cuánto le falta.
- **Impacto:** Desmotivación y percepción de tarea infinita.

---

## 5. Datos: Observados vs Estimados

| Tipo | Dato | Fuente |
|---|---|---|
| **Observado** | El Stepper tiene 6 pasos navegables en el wireframe del Dashboard UX. | Wireframe actual |
| **Observado** | No existe badge ni indicador de "Guardado" en ninguna pantalla del Stepper. | Wireframe actual |
| **Observado** | No hay barra de progreso visible que refleje el avance real del checklist. | Wireframe actual |
| **Estimado** | 40-50% de usuarios navegarían entre pasos al menos 2 veces durante una auditoría. | Patrón de uso típico |
| **Estimado** | Tasa de pérdida de datos estimada: 100% en el flujo actual (sin localStorage). | Análisis técnico |
| **Estimado** | Tiempo de retrabajo por pérdida de datos: +2-3 minutos por sesión de auditoría. | Benchmark de UX |

---