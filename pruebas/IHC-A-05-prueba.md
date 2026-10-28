# IHC-A-05 · Prueba cognitiva de límite presupuestario

## Datos

- Fecha/hora: 28/10/2026.
- Participante: Mateo Morales.
- Dispositivo: Computador personal / emulación móvil.
- Prototipo: v1 / v2, según la versión evaluada.

## Tarea

Añadir productos al refrigerio diario, ajustar porciones con el Stepper elástico y confirmar el pedido respetando el límite presupuestario de USD 4,25.

## Preguntas generales y respuestas

### 1. Realiza la tarea indicada como lo harías normalmente; no te ayudaré salvo que abandones.

Revisaría el menú de CaféU con mi saldo de $4.25 en mente, ajustaría las cantidades de los productos deseados y revisaría que no me pase antes de presionar el botón de confirmar.

### 2. ¿Qué esperabas que ocurriera al pulsar esa acción?

Esperaba que si me paso de los $4.25 la aplicación me lo advirtiera claramente con una alerta visible y me permitiera corregir el pedido antes de pagar.

### 3. ¿Qué información te confirmó que terminaste?

La pantalla de orden confirmada mostrando el ticket `#CU-105` y la confirmación de que el total final fue de exactamente USD 4,25.

### 4. ¿Qué cambiarías para hacerlo más claro?

Incluir un botón directo que me permita reducir la porción sobrante sin tener que vaciar todo el carrito y volver a buscar los productos desde cero.

## Preguntas específicas de A05 y respuestas

### 1. ¿Cómo te alertó el sistema cuando el total superó los USD 4,25?

En v1 la barra cambió a rojo, pero me dejó confirmar directamente. En v2 apareció un cuadro de diálogo antes de confirmar indicándome que me había pasado por $1.50.

### 2. ¿Pudiste ajustar tu pedido sin perder los productos de tu carrito?

Sí, al presionar «Ajustar pedido» en el modal, el carrito se mantuvo abierto con mis selecciones y solo tuve que reducir 1 café con el botón `-`.

### 3. ¿Notaste la animación elástica al pulsar el Stepper?

Sí, el botón `+` se expande elásticamente al tocarlo, lo que hace muy claro que el toque fue registrado y ayuda a no presionarlo dos veces por error.

### 4. ¿Qué touchpoint consideras más crítico en esta experiencia?

El momento previo a la confirmación, porque me da la tranquilidad de que no voy a pasar un mal momento en la caja de la cafetería por falta de dinero.

## Registro de observación

| Métrica | Resultado |
|---|---|
| Tiempo promedio | 45 s |
| Errores | 0 |
| ¿Completó sin ayuda? | Sin ayuda |
| Resultado | Éxito |

## Comparación v1 → v2

| Hallazgo observado | Corrección | Evidencia v2 |
|---|---|---|
| Sobrecosto inadvertido y confirmación sin advertencia | Interceptor modal pre-confirmación y opción de ajuste conservando el carrito | [IHC-A-05-antes-despues.svg](../evidencias/IHC-A-05-antes-despues.svg) |
