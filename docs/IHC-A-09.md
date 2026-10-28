# IHC-A-09 — Documentación y diagnóstico

## Datos del caso

- **Persona usuaria:** Investigadora que registra resultados de participantes anónimos.
- **Tarea crítica:** Registrar resultados y finalizar una sesión sin solicitar ni mostrar nombres reales.
- **Restricción:** Las evidencias y la interfaz no deben mostrar nombres reales.
- **Fallo de la tarjeta:** El formulario exige nombre real y no admite un código de participante.
- **Referencias obligatorias:** [CaféU / arquitectura](https://github.com/Sax300-cpu/HCI-2026-G2), [Dashboard / UX emocional](https://github.com/maribelsailema/HCI_2026_G1) y [CaféU / presentación](https://github.com/Sax300-cpu/HCI-2026-G2/tree/main/presentacion). Consultar como material didáctico, sin copiar diseños terminados.


## Fase 1 · Diagnóstico emocional (20 min)

### Recorrido de 8 touchpoints

1. Abrir Dashboard UX
2. Seleccionar sesión de prueba
3. Abrir formulario de participante
4. Identificar participante
5. Registrar resultado de tarea
6. Revisar datos
7. Guardar registro
8. Finalizar sesión

### Dos momentos de verdad

1. Identificación: el sistema debe aceptar un código y no exigir nombre real.
2. Guardado: los resultados deben vincularse al código y confirmarse sin revelar identidad.

### Tres fallos priorizados

| Issue | Hallazgo inicial | Severidad propuesta | Cómo reproducir | Principio relacionado |
|---|---|---|---|---|
| H1 | Campo de nombre obligatorio | Alta | Intentar guardar usando solo P-001 y el formulario pide nombre real. | Prevención de errores y privacidad |
| H2 | Código sin validación | Alta | Ingresar código inválido y observar aceptación sin aviso. | Prevención de errores (Nielsen) |
| H3 | Estado de guardado ambiguo | Media | Guardar y no recibir confirmación identificada por código. | Visibilidad del estado (Nielsen) |

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
| R01 | El formulario solicita código seudónimo en lugar de nombre real. | Comprobar etiquetas y campos. |
| R02 | No se registran ni muestran nombres reales en pantalla ni evidencias. | Revisar formulario y salida. |
| R03 | El código es obligatorio y cumple el patrón ^P-[0-9]{3}$. | Probar P-001 y valores inválidos. |
| R04 | Un código inválido muestra error comprensible y no se guarda. | Probar P1, P-12 y campo vacío. |
| R05 | Cada resultado se asocia al código del participante. | Guardar resultado y revisar identificador. |
| R06 | El sistema confirma guardado y finalización sin datos personales. | Guardar y revisar mensaje de éxito. |


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

Formulario con etiqueta explícita y ejemplo de código; el patrón es una convención propuesta por el equipo, no fijada por la tarjeta. Se elige una fidelidad suficiente para evaluar la tarea, sin añadir elementos decorativos innecesarios. **Principio complementario propuesto:** Nielsen: prevención de errores. Validación temprana del formato y mensajes de corrección claros.

**Guía de ejecución:** abrir el enlace real de Figma en modo presentación o iniciar el prototipo local según la herramienta elegida; ejecutar el flujo principal y la rama de error; comprobar cada estado y el teclado.




