# IHC-A-01 — Documentación y diagnóstico

## Datos del caso

- **Persona usuaria:** Estudiante de primer nivel que compra entre clases.
- **Tarea crítica:** Agregar un café y un sánduche, ajustar cantidades y confirmar el pedido en menos de 3 minutos desde una pantalla de 360 px.
- **Restricción:** Pantalla de 360 px; tiempo límite de 180 segundos.
- **Fallo de la tarjeta:** El total permanece igual después de modificar las cantidades.
- **Referencias obligatorias:** [CaféU / arquitectura](https://github.com/Sax300-cpu/HCI-2026-G2), [Dashboard / UX emocional](https://github.com/maribelsailema/HCI_2026_G1) y [CaféU / presentación](https://github.com/Sax300-cpu/HCI-2026-G2/tree/main/presentacion). Consultar como material didáctico, sin copiar diseños terminados.


## Fase 1 · Diagnóstico emocional (20 min)

### Recorrido de 8 touchpoints

1. Abrir CaféU
2. Ingresar al menú
3. Localizar café americano
4. Agregar café al carrito
5. Localizar y agregar sánduche
6. Abrir Mi pedido
7. Cambiar cantidades y comprobar el total
8. Confirmar y revisar el comprobante

### Dos momentos de verdad

1. Edición de cantidades: el importe debe reflejar inmediatamente la nueva selección.
2. Confirmación: el total revisado debe ser exactamente el total confirmado.

### Tres fallos priorizados

| Issue | Hallazgo inicial | Severidad propuesta | Cómo reproducir | Principio relacionado |
|---|---|---|---|---|
| H1 | Total sin actualización | Alta | Cambiar cantidad de 1 a 2; el total permanece igual. | Visibilidad del estado del sistema (Nielsen) |
| H2 | Cambio sin aviso | Media | Pulsar + o −; no se informa del nuevo importe. | Retroalimentación / visibilidad (Nielsen) |
| H3 | Confirmación de importe obsoleto | Alta | Editar carrito y confirmar con un total anterior. | Prevención de errores (Nielsen) |

> **Diferencia entre estimación y observación:** el fallo principal está indicado en la tarjeta; la severidad, los demás riesgos y la emoción son hipótesis iniciales. No son resultados de usuarios hasta realizar la prueba.

### Curva emocional inicial (estimada)

| Momento | Emoción (-2 a +2) | Justificación |
|---|---:|---|
| Inicio | 0 | Todavía no ha interactuado |
| Selección / ingreso | +1 | Encuentra la acción esperada |
| Edición / validación | -1 | Puede aparecer el fallo de la tarjeta |
| Revisión del resultado | -2 | La incertidumbre afecta la tarea crítica |
| Confirmación correcta (objetivo v2) | +2 | Recibe una respuesta clara y verificable |

**Para la imagen `diagramas/curva-antes.png`:** dibujar un eje X con los cinco momentos y un eje Y de -2 a +2, usando los valores de la tabla. Etiquetar como *curva estimada*; reemplazar o contrastar con observaciones después de la prueba.


### Seis requisitos verificables 

| ID | Requisito | Criterio de comprobación |
|---|---|---|
| R01 | La interfaz se adapta a 360 px sin desplazamiento horizontal. | Probar ancho de 360 px. |
| R02 | Se puede añadir café americano y sánduche al carrito. | Comprobar ambos productos en Mi pedido. |
| R03 | Se puede aumentar y disminuir la cantidad sin valores negativos. | Probar botones + y −. |
| R04 | El total se recalcula al modificar cualquier cantidad. | Comparar suma de subtotales con total mostrado. |
| R05 | Cada cambio de total genera un aviso perceptible. | Modificar cantidad y comprobar mensaje anunciado. |
| R06 | Solo se confirma el total vigente, nunca uno desactualizado. | Alterar cantidad antes de confirmar y comparar importes. |


### Matriz requisito → flujo → pantalla → componente → wireframe 

| Requisito | Flujo | Pantalla | Componente | Wireframe |
|---|---|---|---|---|
| R01 | Principal | Pantalla 1 | Botón / texto / formulario | W1 |
| R02 | Principal | Pantalla 1 | Botón / texto / formulario | W1 |
| R03 | Edición / error | Pantalla 2 | Botón / texto / formulario | W2 |
| R04 | Edición / error | Pantalla 2 | Botón / texto / formulario | W2 |
| R05 | Edición / error | Pantalla 3 | Botón / texto / formulario | W3 |
| R06 | Principal | Pantalla 3 | Botón / texto / formulario | W3 |


### Decisión de diseño 

Diseño Lo-Fi primero y prototipo móvil a 360 px; priorizar lectura rápida, botones grandes y un total visible. Se elige una fidelidad suficiente para evaluar la tarea, sin añadir elementos decorativos innecesarios. **Principio complementario propuesto:** Nielsen: visibilidad del estado del sistema. El total y el mensaje de cambio informan del estado real del carrito.

**Guía de ejecución:** abrir el enlace real de Figma en modo presentación o iniciar el prototipo local según la herramienta elegida; ejecutar el flujo principal y la rama de error; comprobar cada estado y el teclado.


