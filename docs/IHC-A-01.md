# IHC-A-01 · CaféU · Recálculo de total y pantalla de 360 px

## Fase 1 · Diagnóstico

En la versión original, al variar las cantidades de productos en el carrito mediante el Stepper `[-] / [+]`, el importe total mostrado en la barra flotante inferior permanece congelado en $4.25 en lugar de reflejar el costo real ($5.75 al agregar un segundo café). Esto rompe la visibilidad del estado del sistema, genera incertidumbre cognitiva ante el cobro real e induce a confirmar una orden con importe obsoleto bajo la presión del receso de 10 minutos (límite de 3 minutos en viewport móvil de 360 px).

**Momentos de verdad:** variar cantidades en el Stepper esperando ver el nuevo importe y presionar el botón de confirmación.  
**Fallo priorizado:** desincronización del total acumulado y falta de visibilidad del estado del sistema (Heurística #1 y #5 de Nielsen).

## Fase 2 · Requisitos y trazabilidad

| ID | Requisito verificable | Criterio de aceptación |
|---|---|---|
| A01-R01 | Soportar viewport de 360 px | Sin scroll horizontal en ancho base de 360 px |
| A01-R02 | Cronómetro de 3 minutos | Temporizador visible decreciendo en cabecera |
| A01-R03 | Selección express base | Permite agregar Café ($1.50) y Sánduche ($2.75) |
| A01-R04 | Recálculo reactivo | Actualiza el total en menos de 16 ms ante mutación del Stepper |
| A01-R05 | Anuncio accesible | Barra inferior anuncia cambios mediante `aria-live="polite"` |
| A01-R06 | Bloqueo transaccional | Impide confirmar si el total en pantalla difiere del cálculo en memoria |

| Requisito | Flujo | Pantalla | Componente |
|---|---|---|---|
| A01-R01/R02 | Inicio → catálogo | Menú (360px) | Viewport + Timer header |
| A01-R03/R04 | Modificar cantidad | Mi pedido | Stepper + Total reactivo |
| A01-R05 | Notificación auditiva | Barra flotante | Atributo `aria-live` |
| A01-R06 | Confirmar orden | Mi pedido → éxito | CTA validado / Bloqueo |

## Fase 3 · Prototipo y decisiones

La interfaz adapta el flujo al viewport móvil compacto de 360 px y resuelve la reactividad. Al pulsar `[+]` o `[-]`, el DOM recalcula el total aritmético en milisegundos (<16 ms), la barra flotante anclada refleja el nuevo monto de forma inmediata y el botón valida la consistencia de datos antes de someter la transacción.

- Wireframe: [IHC-A-01-recalculo.svg](../wireframes/IHC-A-01-recalculo.svg).
- Prototipo v1: [IHC-A-01.png](../prototipo/v1/IHC-A-01.png).
- Prototipo v2: [IHC-A-01.png](../prototipo/v2/IHC-A-01.png).

La decisión principal es garantizar sincronía total e instantánea entre el estado del carrito en memoria y el render visual, evitando que el usuario someta importes desactualizados.

## Fase 4 · Prueba y mejora

La prueba individual está en [IHC-A-01-prueba.md](../pruebas/IHC-A-01-prueba.md). La v2 incorpora recálculo reactivo automático, anuncio semántico con `aria-live` e inhabilitación preventiva ante desincronización. La comparativa visual está en [IHC-A-01-antes-despues.svg](../evidencias/IHC-A-01-antes-despues.svg).

## Fase 5 · Incidencia y defensa

Se aplicó la incidencia sorpresa: recalcular el total, anunciar cada cambio e impedir confirmar un importe obsoleto. Pregunta de defensa: **¿Qué parte de la rama de editar del user flow se modifica?**

**Respuesta:** Se modifica la transición entre la mutación numérica del Stepper y la persistencia en la barra flotante inferior, insertando un ciclo de sincronización reactiva que recalcula el DOM en menos de 16 ms y suspende el botón CTA si existiese discrepancia temporal entre los ítems en memoria y el importe visual.

Diagrama completo: [IHC-A-01.md](../diagramas/IHC-A-01.md).

## Enlaces de Figma

- Prompt maestro y especificaciones de pantalla única con Auto Layout: [PROMPTS_FIGMA.md](../wireframes/PROMPTS_FIGMA.md).
- Archivo de trabajo Figma: **[https://www.figma.com/design/wl3jFYJqHiM852P94kUzlz/cafeU_redise%C3%B1o?node-id=2-636]**
