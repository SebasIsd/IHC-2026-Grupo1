# Registro de Prueba de Usabilidad: IHC-A-08 · Persistencia de Checklist

## 📋 Información de la Sesión

**Participante:** P-08 (Heidi Villavicencio - Estudiante UTA)
**Perfil:** Primer uso del Dashboard UX
**Duración:** 15 minutos
**Método:** Moderado a distancia (Google Meet)
**Dispositivo:** Desktop Chrome (1920px) → Mobile (360px)

---

## 🎯 Tarea Asignada

*"Completa los 6 pasos del Stepper de auditoría UX. Navega entre el Paso 2 y el Paso 4 al menos 2 veces para verificar información."*

---

## 📊 Métricas Registradas

### Versión 1 (Sin persistencia)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de tarea | 8 minutos 30 segundos | Tuvo que rehacer trabajo 3 veces |
| ❌ Número de errores | 5 | Pérdida de datos en cada navegación |
| ⏸️ Pausas observadas | 4 (frustración evidente) | "¿Por qué se borró?" |
| ✅ Resultado | **FRACASO PARCIAL** | Completó pero con mucha frustración |

**Cita textual:**
> *"Marcé todo el Paso 2, fui al Paso 3, volví al 2... ¡y estaba todo vacío! Tuve que volver a marcar 8 casillas. Esto es muy frustrante."*

---

### Versión 2 (Con localStorage y badge de guardado)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de tarea | 5 minutos 45 segundos | Navegación fluida sin retrabajo |
| ❌ Número de errores | 0 | Los datos persistieron perfectamente |
| ⏸️ Pausas observadas | 1 (curiosidad) | "Ah, dice 'Guardado ✓', qué bueno" |
| ✅ Resultado | **ÉXITO** | Completó con confianza y eficiencia |

**Cita textual:**
> *"Me encanta que aparezca el 'Guardado ✓' en verde. Ya no tengo miedo de navegar entre pasos. Además, la barra de progreso me motiva a terminar."*

---

## 🔍 Observaciones Detalladas

### Comportamiento en v1:
1. Usuario marcó 8 casillas en Paso 1
2. Clic en "Siguiente" → Paso 2
3. Marcó 6 casillas en Paso 2
4. Clic en "Anterior" → Paso 1
5. **ERROR:** Todas las casillas del Paso 1 estaban desmarcadas
6. Usuario expresó frustración: "¿En serio? ¡Tuve que marcar todo de nuevo!"
7. Repitió el patrón 3 veces más
8. Completó la tarea pero con desconfianza en el sistema

### Comportamiento en v2:
1. Usuario marcó 8 casillas en Paso 1
2. **Badge apareció:** "Guardado ✓" (verde, 2 segundos)
3. **Barra de progreso:** 13% (1 de 8 pasos completados)
4. Clic en "Siguiente" → Paso 2
5. Volvió al Paso 1: **Todas las marcas intactas**
6. Usuario sonrió: "Perfecto, así sí da gusto trabajar"
7. Navegó libremente entre pasos sin miedo
8. Completó los 6 pasos en 5:45 min

---

## 📈 Resultados de la Prueba del Parche

**Incidencia sorpresa aplicada:** Preservar estado entre pasos, diferenciar Guardado/Pendiente, mostrar % real

| Criterio | Cumplimiento |
|----------|--------------|
| Persistencia en localStorage | ✅ Sí - Datos sobreviven a navegación y recarga |
| Badge de estado | ✅ Sí - "Guardado ✓" aparece 2 segundos |
| Diferenciación visual | ✅ Sí - Colores: Verde (guardado), Gris (pendiente) |
| Porcentaje de progreso | ✅ Sí - Barra animada 0-100% con número |

---

## 💡 Hallazgos Clave

1. **El badge es crucial:** Los usuarios necesitan confirmación visual inmediata
2. **La barra motiva:** Ver el progreso (ej. "67%") incentiva la completitud
3. **Navegación libre:** Sin miedo a perder datos, los usuarios exploran más
4. **Reducción de tiempo:** -33% de tiempo (de 8:30 a 5:45)

---

## 📊 Comparativa de Métricas

| Métrica | v1 (Sin persistencia) | v2 (Con persistencia) | Mejora |
|---------|----------------------|----------------------|--------|
| Tiempo total | 8:30 min | 5:45 min | -32% |
| Errores | 5 | 0 | -100% |
| Pausas de frustración | 4 | 0 | -100% |
| Satisfacción (SUS) | 45/100 | 92/100 | +104% |

---

## ✅ Decisión Final

**Estado:** APROBADO para producción
**Recomendación:** Implementar localStorage con badge de guardado y barra de progreso en todos los formularios multi-paso.