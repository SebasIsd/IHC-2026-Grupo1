# IHC-A-10: DASHBOARD UX - Accesibilidad y Lector de Pantalla

## 1. Diagnóstico
**Persona:** Evaluador que utiliza lector de pantalla (NVDA/VoiceOver).
**Tarea:** Navegar Stepper y checklist.
**Touchpoints (6):** 
1. Carga del dashboard -> 2. Identificación del Stepper -> 3. Navegación entre pasos -> 4. Identificación del paso actual -> 5. Interacción con checklist -> 6. Avance al siguiente paso.
**Momentos de la verdad:** 
- M1: Saber en qué paso del Stepper se encuentra sin ver la pantalla.
- M2: Recibir confirmación semántica al marcar un ítem del checklist.

## 2. Curva Emocional
- Inicio: Expectante.
- Navegación Stepper: Confusión (si solo hay colores).
- Interacción: Frustración (si no anuncia los cambios).
- Resolución: Satisfacción (si el lector anuncia todo correctamente).

## 3. Requisitos (Foco A11y)
1. El Stepper debe usar `role="list"` y `role="listitem"`.
2. El paso activo debe tener `aria-current="step"`.
3. Los cambios de paso deben anunciarse mediante una región `aria-live="polite"`.
4. El foco visible (`focus-visible`) debe ser inequívoco al navegar con Tab.
5. Los íconos del Stepper deben tener texto alternativo o estar ocultos (`aria-hidden`) si hay texto redundante.
6. El checklist debe usar etiquetas `<label>` asociadas correctamente a los `<input type="checkbox">`.

## 4. Matriz de Trazabilidad
| Req | Touchpoint | Wireframe | Prototipo | Prueba |
|---|---|---|---|---|
| R1, R2 | Stepper | WF-1 | v2 | Pass |
| R3, R4 | Navegación | WF-2 | v2 | Pass |
| R5 | Íconos | WF-3 | v2 | Pass |
| R6 | Checklist | WF-4 | v2 | Pass |