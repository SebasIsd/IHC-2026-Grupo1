# Registro de Prueba Cognitiva: IHC-A-10 · Accesibilidad y Lector de Pantalla

## 📋 Información de la Sesión

**Participante:** P-10 (Diego Méndez - Evaluador de accesibilidad)
**Perfil:** Usuario ciego que utiliza lector de pantalla (NVDA)
**Duración:** 15 minutos
**Método:** Moderado presencial (Observación de uso de NVDA + JAWS)
**Dispositivo:** Laptop (Windows + NVDA actualizado)

---

## 🎯 Tarea Asignada

*"Utilizas un lector de pantalla. Tu objetivo es navegar por el Dashboard UX, identificar en qué paso del Stepper te encuentras y completar la lista de verificación previa."*

---

## 📊 Métricas Registradas

### Versión 1 (Paso activo dependiente solo de color)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de tarea | 1 minuto 20 segundos | Navegó en círculos sin saber dónde estaba |
| ❌ Número de errores | 3 | 1) No identificó el paso actual, 2) Saltó al paso 3 sin completar, 3) No supo cómo marcar el checklist |
| ⏸️ Pausas observadas | 4 (Largas, de 10+ segundos) | Escuchando el código HTML buscando pistas |
| ✅ Resultado | **FRACASO** | No pudo completar el flujo de forma independiente |

**Cita textual:**
> *"El lector me dice 'Paso 1, Paso 2, Paso 3', pero no me dice cuál es el actual. Solo veo que cambia el color, pero yo no veo. Me siento perdido en el dashboard."*

---

### Versión 2 (Con estado semántico, texto accesible y foco visible)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de tarea | 45 segundos | Navegación lineal y predecible |
| ❌ Número de errores | 0 | Identificó el paso actual y completó el checklist |
| ⏸️ Pausas observadas | 1 (2 segundos) | Escuchando el anuncio de cambio de paso |
| ✅ Resultado | **ÉXITO** | Completó la lista de verificación previa sin ayuda |

**Cita textual:**
> *"Ahora el lector me dice 'Paso actual: Plan de prueba de usabilidad'. Cuando avanzo, me anuncia 'Siguiente paso'. Y las casillas del checklist me dicen claramente si están marcadas o no. Perfecto."*

---

##  Observaciones Detalladas

### Comportamiento en v1:
1. Lector de pantalla anunció la lista del Stepper como "Lista de 3 elementos".
2. Al navegar con `Tab`, el lector no distinguía el ítem activo (solo había cambio de clase CSS de color).
3. Usuario intentó adivinar el paso actual basándose en el título de la página, pero no era dinámico.
4. Al llegar al checklist, las casillas no tenían etiquetas (`labels`) asociadas correctamente.

### Comportamiento en v2:
1. Lector anunció: "Stepper de 3 pasos. Paso actual: Plan de prueba de usabilidad".
2. Usuario usó `Tab` y observó el foco visible (anillo de alto contraste).
3. Usuario presionó "Siguiente paso".
4. **Región `aria-live`:** El lector anunció automáticamente el cambio de contexto.
5. Al llegar a la "Lista de verificación previa", el lector anunció cada casilla con su etiqueta correcta y su estado (marcada/no marcada).
6. Usuario completó la tarea dentro del tiempo objetivo (≤ 3 min).

---

## 📈 Resultados de la Prueba del Parche

**Incidencia sorpresa aplicada:** Añadir texto/estado accesible del paso activo y foco visible.

| Criterio | Cumplimiento |
|----------|--------------|
| Texto/estado accesible del paso activo | ✅ Sí - `aria-current="step"` y texto oculto para SR |
| Anuncios de cambio de contexto | ✅ Sí - Región `aria-live` funcional |
| Foco visible inequívoco | ✅ Sí - `focus-visible` con alto contraste |
| Checklist semántico | ✅ Sí - Labels asociados y estados anunciados |

---

## 💡 Hallazgos Clave

1. **El color nunca es suficiente:** Depender del color para indicar el estado activo excluye completamente a los usuarios ciegos y daltónicos.
2. **`aria-current` es el estándar correcto:** Permite que el lector de pantalla anuncie "Paso actual" sin necesidad de texto visible redundante.
3. **Los anuncios en vivo (`aria-live`) mejoran la eficiencia:** El usuario no tiene que volver a leer todo el Stepper para saber en qué paso está.
4. **El foco visible ayuda a usuarios con baja visión:** No solo los ciegos totales; los usuarios con baja visión también dependen de un anillo de foco grueso y contrastado.

---

## ✅ Decisión Final

**Estado:** APROBADO para producción
**Recomendación:** Auditar el resto del Dashboard UX para asegurar que todos los componentes dinámicos (tabs, acordeones, modales) utilicen regiones `aria-live` y estados semánticos adecuados.