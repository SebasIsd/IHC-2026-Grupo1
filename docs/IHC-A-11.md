# IHC-A-11 · Dashboard UX · Layout responsivo a 360 px

## Fase 1 · Diagnóstico

En 360 px la Card UI se superpone al Stepper y oculta campos. La persona pierde el orden del foco y debe recordar información que ya no puede ver. Se priorizan proximidad, cierre y reducción de carga cognitiva.

**Momentos de verdad:** identificar el paso vigente y completar el campo visible.  
**Fallo priorizado:** superposición, pérdida de jerarquía y foco visual.

## Fase 2 · Requisitos y trazabilidad

| ID | Requisito verificable | Criterio de aceptación |
|---|---|---|
| A11-R01 | Soportar 360 px | Sin scroll horizontal |
| A11-R02 | Mantener orden | Stepper → título → card → acción |
| A11-R03 | Evitar ocultar campos | Cada control es visible |
| A11-R04 | Aplicar proximidad | Label y control agrupados |
| A11-R05 | Aplicar cierre | Card claramente contenida |
| A11-R06 | Reducir carga | Una acción principal |

| Requisito | Flujo | Pantalla | Componente |
|---|---|---|---|
| A11-R01/R03 | Abrir 360 → scroll | Responsive | Columna |
| A11-R02/R06 | Foco → acción | Formulario | Orden DOM/CTA |
| A11-R04/R05 | Ver card → completar | Formulario | Label + contenedor |

## Fase 3 · Prototipo y decisiones

El diseño usa una sola columna, conserva el orden Stepper → título → card → acción y permite desplazamiento vertical sin anchos fijos.

- Wireframe: [IHC-A-11-responsive.svg](../wireframes/IHC-A-11-responsive.svg).
- Prototipo v1: [IHC-A-11.svg](../prototipo/v1/IHC-A-11.svg).
- Prototipo v2: [IHC-A-11.svg](../prototipo/v2/IHC-A-11.svg).

La proximidad agrupa etiquetas y controles, mientras que el cierre conserva la Card como unidad visual.

## Fase 4 · Prueba y mejora

La prueba individual está en [IHC-A-11-prueba.md](../pruebas/IHC-A-11-prueba.md). La v2 reorganiza el contenido en una columna y elimina la superposición. La comparativa está en [IHC-A-11-antes-despues.svg](../evidencias/IHC-A-11-antes-despues.svg).

## Fase 5 · Incidencia y defensa

Se aplicó la incidencia sorpresa: reorganizar el layout responsivo preservando el orden lógico del foco y evitando superposiciones. Pregunta de defensa: **¿Qué ley Gestalt aplica y qué carga cognitiva se reduce?**

Diagrama completo: [IHC-A-11.md](../diagramas/IHC-A-11.md).
