# IHC-A-03 · CaféU · Confirmación limpia y privacidad

## Fase 1 · Diagnóstico

La pantalla original comunica «Listo», pero no confirma qué pedido se recibió ni ofrece un identificador consultable. Esto deja ambiguo si el clic fue procesado, dificulta salir rápido de un dispositivo compartido y puede inducir a repetir el pedido. La solución usa el identificador simulado **#CU-104** y no muestra datos personales.

**Momentos de verdad:** confirmar el pedido y leer el estado posterior.  
**Fallo priorizado:** feedback insuficiente y falta de visibilidad del estado del sistema.

## Fase 2 · Requisitos y trazabilidad

| ID | Requisito verificable | Criterio de aceptación |
|---|---|---|
| A03-R01 | Mostrar estado explícito | Contiene «Pedido recibido» |
| A03-R02 | Usar identificador no personal | Muestra `#CU-104`, sin nombre, teléfono o documento |
| A03-R03 | Mostrar desglose | Lista productos, cantidades y total |
| A03-R04 | Diferenciar procesamiento y éxito | Existen «Procesando» y «Pedido recibido» |
| A03-R05 | Permitir salida segura | No guarda datos personales |
| A03-R06 | Recuperar errores | Reintento sin duplicar confirmación |

| Requisito | Flujo | Pantalla | Componente |
|---|---|---|---|
| A03-R01/R02/R03 | Confirmar → éxito | Confirmación | Estado + resumen |
| A03-R04/R06 | Confirmar → procesando/error | Estado | Feedback + reintento |
| A03-R05 | Éxito → salir | Confirmación | CTA finalizar |

## Fase 3 · Prototipo y decisiones

La pantalla de éxito muestra estado inequívoco, identificador simulado, desglose y acción de salida. La transición «Procesando pedido» evita confundir clic con confirmación; el error ofrece reintento.

- Wireframe: [IHC-A-03-confirmacion.svg](../wireframes/IHC-A-03-confirmacion.svg).
- Prototipo v1: [IHC-A-03.png](../prototipo/v1/IHC-A-03.png).
- Prototipo v2: [IHC-A-03.png](../prototipo/v2/IHC-A-03.png).

La decisión principal es usar `#CU-104` para confirmar la operación sin exponer información personal.

## Fase 4 · Prueba y mejora

La prueba individual está en [IHC-A-03-prueba.md](../pruebas/IHC-A-03-prueba.md). La v2 incorpora el estado «Pedido recibido», el identificador y el desglose. La comparativa está en [IHC-A-03-antes-despues.svg](../evidencias/IHC-A-03-antes-despues.svg).

## Fase 5 · Incidencia y defensa

Se aplicó la incidencia sorpresa: mostrar identificador simulado, desglose completo y estado inequívoco. Pregunta de defensa: **¿Cómo evita confundir clic efectuado con pedido confirmado?**

Diagrama completo: [IHC-A-03.md](../diagramas/IHC-A-03.md).

## Enlaces de Figma

- Archivo general o comparativa IHC-A-03: **[https://www.figma.com/design/bwMfsWzUceEgnOhJT0PUnG/IHC-A-03-%C2%B7-Caf%C3%A9U-%C2%B7-Confirmaci%C3%B3n-y-privacidad?node-id=0-1&t=fPuHji7o352McuE1-1]**
