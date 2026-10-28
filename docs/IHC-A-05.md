# IHC-A-05 — Documentación y diagnóstico

## Datos del caso

- **Persona usuaria:** Estudiante con un presupuesto disponible de USD 4,25.
- **Tarea crítica:** Agregar productos, modificar cantidades y revisar el pedido sin confirmar un sobrecosto sin aviso.
- **Restricción:** Aviso claro antes de confirmar un pedido que supera USD 4,25.
- **Fallo de la tarjeta:** Una edición provoca un importe mayor al presupuesto y no aparece ninguna advertencia.
- **Referencias obligatorias:** [CaféU / arquitectura](https://github.com/Sax300-cpu/HCI-2026-G2), [Dashboard / UX emocional](https://github.com/maribelsailema/HCI_2026_G1) y [CaféU / presentación](https://github.com/Sax300-cpu/HCI-2026-G2/tree/main/presentacion). Consultar como material didáctico, sin copiar diseños terminados.


## Fase 1 · Diagnóstico emocional (20 min)

### Recorrido de 8 touchpoints

1. Abrir CaféU
2. Consultar precios del menú
3. Agregar café
4. Agregar sánduche
5. Revisar carrito
6. Modificar cantidad
7. Comparar total con presupuesto
8. Decidir ajustar o confirmar

### Dos momentos de verdad

1. Al superar el presupuesto, la aplicación debe advertir el exceso antes de confirmar.
2. Al corregir el pedido, el usuario debe conservar el carrito y verificar el nuevo total.

### Tres fallos priorizados

| Issue | Hallazgo inicial | Severidad propuesta | Cómo reproducir | Principio relacionado |
|---|---|---|---|---|
| H1 | Sobrecosto sin advertencia | Alta | Añadir otra unidad de café cuando el total es $4,25. | Prevención de errores (Nielsen) |
| H2 | Presupuesto poco visible | Media | Abrir carrito sin poder comparar límite y total. | Proximidad y jerarquía (Gestalt) |
| H3 | Ajuste con pérdida del carrito | Alta | Volver desde alerta y perder artículos seleccionados. | Control y libertad del usuario (Nielsen) |

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
| R01 | Se muestran precios individuales y cantidades. | Revisar menú y carrito. |
| R02 | Se pueden añadir y editar artículos sin perder el carrito. | Modificar y regresar a la revisión. |
| R03 | Se calcula el total con cada cambio de cantidad. | Verificar sumas y subtotales. |
| R04 | Se compara el total con el límite fijo de $4,25. | Probar valores iguales, inferiores y superiores. |
| R05 | Si total > $4,25 se muestra el exceso y una advertencia antes de confirmar. | Generar total de $5,75 y comprobar alerta de $1,50. |
| R06 | La alerta permite ajustar el pedido conservando productos y cantidades. | Pulsar Ajustar pedido y comprobar contenido. |


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

Presupuesto y total en un mismo bloque para facilitar comparación; alerta textual, no solo color. Se elige una fidelidad suficiente para evaluar la tarea, sin añadir elementos decorativos innecesarios. **Principio complementario propuesto:** Nielsen: prevención de errores. El sistema comunica el sobrecosto antes de que el usuario confirme.

**Guía de ejecución:** abrir el enlace real de Figma en modo presentación o iniciar el prototipo local según la herramienta elegida; ejecutar el flujo principal y la rama de error; comprobar cada estado y el teclado.




