# IHC-A-07 · Dashboard UX · Stepper con validación

## Fase 1 · Diagnóstico

El Stepper original permite activar etapas posteriores sin completar requisitos previos. La persona investigadora pierde la referencia del paso vigente y puede llegar a un estado final inválido. El problema combina visibilidad del estado, prevención de errores y reconocimiento frente a recuerdo.

**Momentos de verdad:** completar el checklist y solicitar el avance.  
**Fallo priorizado:** navegación inválida sin explicación.

## Fase 2 · Requisitos y trazabilidad

| ID | Requisito verificable | Criterio de aceptación |
|---|---|---|
| A07-R01 | Identificar paso actual | Un paso tiene etiqueta actual |
| A07-R02 | Validar checklist | Un pendiente bloquea avance |
| A07-R03 | Explicar bloqueo | Se muestra el faltante |
| A07-R04 | Conservar marcas | Regresar no borra checks |
| A07-R05 | Diferenciar estados | Usa texto además de color |
| A07-R06 | Permitir éxito válido | Éxito solo tras completar |

| Requisito | Flujo | Pantalla | Componente |
|---|---|---|---|
| A07-R01/R05 | Paso actual | Checklist | Stepper |
| A07-R02/R03 | Incompleto → bloqueo | Validación | Tooltip/modal |
| A07-R04 | Bloqueo → regresar | Checklist | Estado persistente |
| A07-R06 | Completo → éxito | Revisión | Estado final |

## Fase 3 · Prototipo y decisiones

El paso siguiente permanece bloqueado hasta marcar los elementos obligatorios. Al intentar avanzar se explica el requisito faltante; volver conserva las marcas.

- Wireframe: [IHC-A-07-stepper.svg](../wireframes/IHC-A-07-stepper.svg).
- Prototipo v1: [IHC-A-07.png](../prototipo/v1/IHC-A-07.png).
- Prototipo v2: [IHC-A-07.png](../prototipo/v2/IHC-A-07.png).

Bloquear el avance previene estados inválidos; las etiquetas textuales complementan el color y el regreso reduce la carga de memoria.

## Fase 4 · Prueba y mejora

La prueba individual está en [IHC-A-07-prueba.md](../pruebas/IHC-A-07-prueba.md). La v2 añade bloqueo, explicación del faltante y conservación de marcas. La comparativa está en [IHC-A-07-antes-despues.svg](../evidencias/IHC-A-07-antes-despues.svg).

## Fase 5 · Incidencia y defensa

Se aplicó la incidencia sorpresa: bloquear avances inválidos con explicación y permitir regresar sin perder marcas. Pregunta de defensa: **¿Cómo aplica la visibilidad del estado del sistema de Nielsen?**

Diagrama completo: [IHC-A-07.md](../diagramas/IHC-A-07.md).

## Enlaces de Figma

- Archivo general o comparativa IHC-A-07: **[https://www.figma.com/design/1ejQ6tKfQIjuBxaEx5diQX/IHC-A-07-%C2%B7-Dashboard-UX-%C2%B7-Stepper-validado?node-id=0-1&t=xqkyOtPXCkqRWuUd-1]**
