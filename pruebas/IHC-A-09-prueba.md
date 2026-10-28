# IHC-A-09 · Prueba cognitiva de anonimización de participantes

## Datos

- Fecha/hora: 28/10/2026.
- Participante: Bryan Ortiz.
- Dispositivo: Computador personal / Desktop.
- Prototipo: v1 / v2, según la versión evaluada.

## Tarea

Gestionar y registrar los 2 consentimientos pendientes del estudio UT-024 garantizando la protección de datos personales mediante códigos seudónimos válidos.

## Preguntas generales y respuestas

### 1. Realiza la tarea indicada como lo harías normalmente; no te ayudaré salvo que abandones.

Abriría el Dashboard Forma, revisaría el panel lateral de preparación para ver qué elementos están pendientes, abriría el modal de consentimientos e ingresaría los datos solicitados.

### 2. ¿Qué esperabas que ocurriera al pulsar esa acción?

Esperaba que al ingresar el código de participante el sistema validara que no estoy ingresando información personal y actualizara el contador lateral.

### 3. ¿Qué información te confirmó que terminaste?

La barra de progreso del panel lateral llegando a 5 de 5 listos (100% completado), la desaparición de la alerta roja y la habilitación del botón «Iniciar prueba».

### 4. ¿Qué cambiarías para hacerlo más claro?

Mostrar un ejemplo visible del formato permitido dentro del campo de texto para saber exactamente cómo escribir el código sin cometer errores.

## Preguntas específicas de A09 y respuestas

### 1. ¿Qué ocurrió cuando intentaste ingresar un nombre real?

El sistema rechazó la entrada y mostró un mensaje de advertencia explicando que los nombres personales están prohibidos por protocolo ético y que debía usar el formato `PART-XXX`.

### 2. ¿Cómo valida el sistema el código seudónimo en v2?

Aplica una validación en tiempo real que exige la expresión regular `^PART-[0-9]{3}$`. Al escribir `PART-004` correctamente, el borde del campo se puso verde y habilitó el botón de guardado.

### 3. ¿Apareció algún dato personal en la tabla o en el dashboard?

No, la tabla solo muestra el código seudónimo (`PART-001` al `PART-005`), el segmento de edad y el estado del consentimiento digital firmado.

### 4. ¿Cómo cambió el sidebar lateral tras completar los 2 consentimientos?

Avanzó inmediatamente a 5 de 5 listos con un check verde, y el botón «Iniciar prueba» cambió de gris a azul activo.

## Registro de observación

| Métrica | Resultado |
|---|---|
| Tiempo promedio | 48 s |
| Errores | 0 |
| ¿Completó sin ayuda? | Sin ayuda |
| Resultado | Éxito |

## Comparación v1 → v2

| Hallazgo observado | Corrección | Evidencia v2 |
|---|---|---|
| Formulario sin validación estructurada y riesgo de exponer nombres | Código seudónimo obligatorio validado con regex `^PART-[0-9]{3}$` y actualización a 5/5 | [IHC-A-09-antes-despues.svg](../evidencias/IHC-A-09-antes-despues.svg) |
