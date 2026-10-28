# IHC-A-01 · Prueba cognitiva de recálculo de total en 360 px

## Datos

- Fecha/hora: 28/10/2026.
- Participante: Bryan Ortiz.
- Dispositivo/viewport: Dispositivo móvil / emulación 360 × 780 px.
- Prototipo: v1 / v2, según la versión evaluada.

## Tarea

Seleccionar 1 Café Americano ($1.50) y 1 Sánduche ($2.75) desde el menú, aumentar a 2 cafés en el carrito y confirmar el pedido dentro de la restricción de 3 minutos.

## Preguntas generales y respuestas

### 1. Realiza la tarea indicada como lo harías normalmente; no te ayudaré salvo que abandones.

Abriría la aplicación CaféU, entraría al menú rápido, agregaría el café y el sánduche, y luego abriría el carrito para revisar las cantidades antes de pagar.

### 2. ¿Qué esperabas que ocurriera al pulsar esa acción?

Esperaba que al pulsar `[+]` en el café el total de la barra aumentara inmediatamente de $4.25 a $5.75 para tener certeza de cuánto dinero debo preparar.

### 3. ¿Qué información te confirmó que terminaste?

La pantalla de confirmación final con el ticket de retiro `#CU-104`, el desglose correcto de los productos y la indicación de ventanilla rápida.

### 4. ¿Qué cambiarías para hacerlo más claro?

Hacer que la barra inferior reaccione al instante con una animación o aviso que confirme que el nuevo total fue recalculado correctamente.

## Preguntas específicas de A01 y respuestas

### 1. ¿Qué ocurrió con el importe total al variar la cantidad en v1?

En v1 el contador del café subió a 2, pero la barra inferior se quedó congelada en $4.25. Dudé si el sistema me cobraría el precio anterior o si fallaría al llegar a la caja.

### 2. ¿Cómo verificas que el importe en v2 está actualizado?

El total cambió de forma instantánea a $5.75 apenas toqué el botón `[+]`, y un mensaje de estado indicó que los datos estaban sincronizados al 100%.

### 3. ¿La pantalla de 360 px afectó tu velocidad para completar el pedido?

No, todos los elementos se apilaron verticalmente de forma limpia sin necesidad de hacer scroll horizontal.

### 4. ¿Qué ocurre si intentas confirmar con un total desincronizado?

En v2 el botón se inhabilita brevemente y muestra un mensaje de sincronización, impidiendo que envíe una orden con valores desactualizados.

## Registro de observación

| Métrica | Resultado |
|---|---|
| Tiempo promedio | 52 s |
| Errores | 0 |
| ¿Completó sin ayuda? | Sin ayuda |
| Resultado | Éxito |

## Comparación v1 → v2

| Hallazgo observado | Corrección | Evidencia v2 |
|---|---|---|
| La barra inferior no actualizaba el total al modificar el Stepper | Recálculo reactivo en <16 ms, anuncio con `aria-live` y bloqueo de total obsoleto | [IHC-A-01-antes-despues.svg](../evidencias/IHC-A-01-antes-despues.svg) |
