# IHC-A-05 · CaféU · Límite presupuestario de USD 4,25

## Fase 1 · Diagnóstico

La persona usuaria cuenta con un presupuesto diario fijo de USD 4,25 para su refrigerio en el campus. En la versión inicial, al incrementar cantidades mediante el Stepper `[-] 1 [+]`, el total supera los USD 4,25 (alcanzando $5.75) sin que el sistema proporcione retroalimentación sensorial perceptible ni una advertencia preventiva previa. Al presionar "Confirmar", la orden se envía con sobrecosto, generando riesgo de rechazo o vergüenza social en la caja física al no disponer de efectivo suficiente.

**Momentos de verdad:** presionar el Stepper y percatarse del saldo consumido, y pulsar "Confirmar pedido" ante un monto que sobrepasa el límite.  
**Fallo priorizado:** edición genera sobrecosto sin feedback y ausencia de prevención de errores (Heurística #5 de Nielsen).

## Fase 2 · Requisitos y trazabilidad

| ID | Requisito verificable | Criterio de aceptación |
|---|---|---|
| A05-R01 | Microinteracción elástica | Stepper con escala elástica 1.1x (Dan Saffer) y mutación a papelera en 1u |
| A05-R02 | Monitorización de presupuesto | Compara permanentemente el total contra el umbral de USD 4,25 |
| A05-R03 | Alerta visual cromática | Barra inferior conmuta a color ámbar/rojo con badge de exceso cuando total > 4.25 |
| A05-R04 | Interceptor pre-confirmación | Despliega modal preventivo antes de confirmar si existe sobrecosto |
| A05-R05 | Ajuste sin vaciar carrito | Permite reducir porciones conservando intactos los productos en memoria |
| A05-R06 | Confirmación cumplida | Emite ticket #CU-105 cuando el importe final respeta los USD 4,25 |

| Requisito | Flujo | Pantalla | Componente |
|---|---|---|---|
| A05-R01 | Menú → Stepper | Catálogo / Carrito | Stepper elástico [- 1 +] |
| A05-R02/R03 | Calcular total | Barra flotante | Badge presupuesto + color |
| A05-R04/R05 | Confirmar con sobrecosto | Interceptor | Modal alertdialog + botón ajustar |
| A05-R06 | Confirmar con $4.25 | Éxito | Ticket #CU-105 + ventanilla #2 |

## Fase 3 · Prototipo y decisiones

El prototipo incorpora el modelo de microinteracciones de Dan Saffer (disparador tap, feedback elástico 1.1x y bucle de límite en 10 unidades). Cuando el acumulado supera el límite de USD 4,25, la barra inferior advierte el sobrecosto. Al pulsar "Confirmar", un diálogo modal accesible intercepta la acción, ofreciendo la opción prioritaria de `[ Ajustar pedido ]` directamente en el carrito sin tener que vaciarlo ni reiniciar.

- Wireframe: [IHC-A-05-presupuesto.svg](../wireframes/IHC-A-05-presupuesto.svg).
- Prototipo v1: [IHC-A-05.png](../prototipo/v1/IHC-A-05.png).
- Prototipo v2: [IHC-A-05.png](../prototipo/v2/IHC-A-05.png).

La decisión principal es proteger la solvencia del estudiante mediante un poka-yoke de software que previene pagos accidentales pero respeta su autonomía al permitir ajustar o proceder.

## Fase 4 · Prueba y mejora

La prueba individual está en [IHC-A-05-prueba.md](../pruebas/IHC-A-05-prueba.md). La v2 añade la microinteracción elástica, el interceptor modal antes de confirmar y la preservación del carrito durante el reajuste. La comparativa visual está en [IHC-A-05-antes-despues.svg](../evidencias/IHC-A-05-antes-despues.svg).

## Fase 5 · Incidencia y defensa

Se aplicó la incidencia sorpresa: avisar antes de confirmar y ofrecer ajustar el pedido manteniendo el carrito. Pregunta de defensa: **¿Qué touchpoint pasa a ser momento de verdad y por qué?**

**Respuesta:** El touchpoint TP-05 (Revisión de Carrito y pulsación del CTA "Confirmar") pasa a ser el momento de verdad decisivo, porque es la última barrera donde el sistema protege activamente al estudiante de una quiebra financiera y de un incidente en la ventanilla rápida de la cafetería universitaria.

Diagrama completo: [IHC-A-05.md](../diagramas/IHC-A-05.md).

## Enlaces de Figma

- Prompt maestro y especificaciones de pantalla única con Auto Layout: [PROMPTS_FIGMA.md](../wireframes/PROMPTS_FIGMA.md).
- Archivo de trabajo Figma: **[https://www.figma.com/design/wl3jFYJqHiM852P94kUzlz/cafeU_redise%C3%B1o?node-id=2-636]**
