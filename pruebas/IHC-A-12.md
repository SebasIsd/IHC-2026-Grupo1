# Registro de Prueba Cognitiva: IHC-A-12 · Recuperación de Sesión

##  Información de la Sesión

**Participante:** P-12 (Michelle Tunja - Estudiante UTA)
**Perfil:** Primer uso del Dashboard
**Duración:** 18 minutos
**Método:** Moderado a distancia (Microsoft Teams)
**Dispositivo:** Desktop Firefox (1366px)

---

## 🎯 Tareas Asignadas

**Tarea 1:** *"Intenta cerrar la sesión de auditoría con solo el 70% del checklist completado."*

**Tarea 2:** *"Simula una interrupción (cierra la pestaña) en el Paso 4, luego reingresa y verifica si recupera tu progreso."*

---

##  Métricas Registradas

### Tarea 1: Validación de cierre (v1 vs v2)

#### Versión 1 (Sin validación - Éxito falso)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de tarea | 15 segundos | Cierre directo sin validación |
| ❌ Número de errores | 1 | Cerró con checklist incompleto |
| ⏸️ Pausas observadas | 0 | Sin reflexión sobre completitud |
| ✅ Resultado | **ÉXITO FALSO** | Sesión cerrada pero auditoría incompleta |

**Cita textual:**
> *"Le di a 'Cerrar sesión' y listo. No me preguntó nada, no me mostró resumen. Asumo que quedó guardado, pero ni siquiera revisé si faltaba algo."*

---

#### Versión 2 (Con validación obligatoria)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de tarea | 45 segundos | Leyó modal, revisó resumen, completó ítems |
| ❌ Número de errores | 0 | Sistema bloqueó y guió correctamente |
| ⏸️ Pausas observadas | 2 (lectura de modal y resumen) | Atención a los ítems pendientes |
| ✅ Resultado | **ÉXITO** | Completó auditoría al 100% antes de cerrar |

**Cita textual:**
> *"¡Ah! Me bloqueó el cierre. El modal dice 'No puedes cerrar: faltan 8 ítems'. Me mostró exactamente qué pasos me faltan. Tuve que completarlos y luego sí pude cerrar con el resumen final. Esto sí es profesional."*

---

### Tarea 2: Recuperación de sesión interrumpida

#### Versión 1 (Sin recuperación)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de reconstrucción | 6 minutos 20 segundos | Tuvo que empezar desde cero |
| ❌ Número de errores | 3 | Perdió contexto de dónde iba |
| ⏸️ Pausas observadas | 5 (frustración creciente) | "¿En qué paso iba?" |
| ✅ Resultado | **FRACASO** | Abandonó la auditoría a la mitad |

**Cita textual:**
> *"Cerré la pestaña sin querer. Cuando volví a entrar, estaba todo vacío. Tuve que recordar en qué paso iba y volver a marcar todo. Es demasiado trabajo perdido. Mejor lo dejo para después."*

---

#### Versión 2 (Con banner de recuperación)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de recuperación | 45 segundos | Banner lo llevó directo al Paso 4 |
|  Número de errores | 0 | Recuperación automática perfecta |
| ⏸️ Pausas observadas | 1 (sorpresa positiva) | "¡Wow, recuperó todo!" |
| ✅ Resultado | **ÉXITO** | Continuó exactamente donde lo dejó |

**Cita textual:**
> *"Al entrar vi un banner amarillo: 'Sesión recuperada - Último paso: 4 de 6'. Le di clic y ¡pum! estaba exactamente donde lo dejé, con todas mis marcas. Esto es increíble, me salvó la vida."*

---

## 🔍 Observaciones Detalladas

### Comportamiento en v1:
1. Usuario completó 4 de 6 pasos del Stepper (70%)
2. Clic en "Cerrar sesión"
3. **ERROR:** Sistema cerró inmediatamente sin validación
4. Estado mostrado: "Auditoría completada" (falso)
5. Usuario cerró pestaña accidentalmente
6. Al reingresar: Todo vacío, sin rastro de sesión anterior
7. Usuario intentó reconstruir pero abandonó por frustración

### Comportamiento en v2:
1. Usuario completó 4 de 6 pasos del Stepper (70%)
2. Clic en "Cerrar sesión"
3. **Modal de bloqueo:** 