# Diagnóstico Específico: IHC-A-12 · Dashboard UX (Recuperación de Sesión y Verificación Final)

## 1. Descripción del Fallo

En el Dashboard UX, el estado final de la auditoría aparece como **"Completado" o "Éxito" sin haber comprobado realmente el checklist obligatorio**. Esto genera un **"éxito falso"** que puede llevar a cerrar sesiones de auditoría con ítems críticos sin verificar, comprometiendo la integridad del proceso y generando riesgos operativos.

---

## 2. Touchpoints Identificados (7)

| # | Touchpoint | Pantalla asociada | Interacción del usuario |
|---|---|---|---|
| 1 | Completado del último paso | Stepper - Paso 6 | Usuario marca última casilla |
| 2 | Intento de cierre | Lista de Verificación | Usuario clic en "Cerrar sesión" o "Finalizar" |
| 3 | Validación del sistema | Modal de estado | Sistema verifica completitud del checklist |
| 4 | Escenario de éxito falso | Modal de bloqueo | Sistema detecta checklist incompleto |
| 5 | Revisión de pendientes | Resumen de auditoría | Usuario ve ítems faltantes |
| 6 | Retorno al Stepper | Stepper - Paso pendiente | Usuario completa ítems faltantes |
| 7 | Cierre validado | Confirmación final | Sistema permite cierre tras validación |

---

## 3. Momentos de Verdad (2)

### Momento de Verdad #1: Intento de cerrar sesión con checklist incompleto
- **Qué ocurre:** El usuario intenta finalizar la auditoría sin haber completado todos los ítems obligatorios.
- **Por qué es crítico:** Es el punto donde se debe prevenir el "éxito falso".
- **Estado actual:** ❌ El sistema permite el cierre sin validación.

### Momento de Verdad #2: Reingreso tras interrupción de sesión
- **Qué ocurre:** El usuario vuelve a la aplicación tras una interrupción (cierre de pestaña, error de red, etc.).
- **Por qué es crítico:** Define si el sistema recupera el contexto o fuerza a empezar de cero.
- **Estado actual:** ❌ No hay mecanismo de recuperación de sesión.

---

## 4. Priorización de Fallos (Top 3)

### Fallo #1: Permiso de cierre sin validación de checklist (CRÍTICO)
- **Heurística de Nielsen violada:** #5 Prevención de errores + #3 Control y libertad del usuario.
- **Principio de Gestalt:** Figura/Fondo — el botón de "Éxito" resalta visualmente aunque la tarea esté incompleta.
- **Carga cognitiva:** Intrínseca — el usuario debe recordar mentalmente si completó todo.
- **Impacto:** Auditorías incompletas marcadas como completadas (riesgo operativo alto).

### Fallo #2: Ausencia de resumen de comprobación previo al cierre (ALTO)
- **Heurística de Nielsen violada:** #1 Visibilidad del estado del sistema + #6 Reconocer en lugar de recordar.
- **Principio de Gestalt:** Cierre — el usuario no tiene una vista consolidada antes de finalizar.
- **Carga cognitiva:** Germana — el usuario debe integrar mentalmente el estado de todos los pasos.
- **Impacto:** Decisiones de cierre basadas en información incompleta.

### Fallo #3: Sin recuperación de sesión interrumpida (MEDIO)
- **Heurística de Nielsen violada:** #1 Visibilidad del estado del sistema + #6 Reconocer en lugar de recordar.
- **Principio de Gestalt:** Continuidad — la experiencia se rompe al perder el contexto.
- **Carga cognitiva:** Extrínseca alta — el usuario debe reconstruir mentalmente dónde quedó.
- **Impacto:** Frustración y posible abandono de la auditoría.

---

## 5. Datos: Observados vs Estimados

| Tipo | Dato | Fuente |
|---|---|---|
| **Observado** | Existe un botón de "Cerrar sesión" o "Finalizar" en el Dashboard UX. | Wireframe actual |
| **Observado** | No hay modal de validación ni resumen previo al cierre. | Wireframe actual |
| **Observado** | No existe banner de "Sesión recuperada" ni mecanismo de reingreso contextual. | Wireframe actual |
| **Estimado** | 20-30% de sesiones de auditoría se interrumpen antes de completarse (cierre accidental, distracciones). | Patrón de uso típico |
| **Estimado** | Tasa de "éxito falso" estimada: 35-45% de usuarios cerrarían sin completar el checklist en el flujo actual. | Proyección basada en heurísticas |
| **Estimado** | Tiempo de reconstrucción de contexto tras interrupción: +4-6 minutos por sesión. | Benchmark de UX |

---