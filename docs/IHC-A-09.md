# IHC-A-09 · Dashboard UX · Anonimización de participantes

## Fase 1 · Diagnóstico

En la plataforma de gestión de pruebas de usabilidad "Forma" (Estudio `UT-024` para Atlas commerce), el formulario de reclutamiento y consentimiento de los 5 compradores exige obligatoriamente ingresar nombre y apellido reales en texto libre, bloqueando o careciendo de un campo para registrar códigos seudónimos (ej. `PART-004`). Esto vulnera las directrices internacionales de bioética, rompe el acuerdo de confidencialidad y expone la identidad de los participantes en pantallas compartidas y reportes públicos.

**Momentos de verdad:** registrar el consentimiento en el formulario sin ingresar datos personales y verificar que las evidencias públicas no revelen nombres reales.  
**Fallo priorizado:** violación del principio ético de privacidad y validación rígida que no admite códigos seudónimos estructurados (Heurísticas #2 y #7 de Nielsen).

## Fase 2 · Requisitos y trazabilidad

| ID | Requisito verificable | Criterio de aceptación |
|---|---|---|
| A09-R01 | Supresión de nombres reales | Elimina de los formularios e interfaces campos de nombres, apellidos y correos |
| A09-R02 | Identificación seudónima | Campo de código de participante como identificador único obligatorio |
| A09-R03 | Validación por regex | Exige obligatoriamente el patrón `^PART-[0-9]{3}$` (ej. `PART-004`) |
| A09-R04 | Feedback constructivo inline | Mensaje en tiempo real orientando al formato seudónimo e inhabilitando texto libre |
| A09-R05 | Actualización de preparación | Sidebar actualiza de "4 de 5" a "5 de 5 listos (100%)" al validar consentimientos |
| A09-R06 | Trazabilidad ética persistente | Persiste la muestra anonimizada durante los 6 pasos del Stepper y habilita "Iniciar prueba" |

| Requisito | Flujo | Pantalla | Componente |
|---|---|---|---|
| A09-R01/R02 | Sidebar → registrar | Modal anónimo | Formulario sin datos sensibles |
| A09-R03/R04 | Validar formato | Modal anónimo | Input regex + feedback inline |
| A09-R05 | Guardar código | Dashboard Forma | Widget sidebar (5/5) + checklist |
| A09-R06 | Sesión lista | Dashboard Forma | Tabla anonimizada + botón iniciar |

## Fase 3 · Prototipo y decisiones

El formulario sustituye por completo los campos tradicionales de datos personales por el campo obligatorio `Código Seudónimo`. El motor de validación en tiempo real evalúa la expresión regular `^PART-[0-9]{3}$`, rechazando nombres propios y guiando al evaluador. Al registrar los códigos pendientes (`PART-004` y `PART-005`), el indicador lateral de preparación avanza automáticamente al 100% y habilita el botón principal `[ Iniciar prueba ]`.

- Wireframe: [IHC-A-09-anonimizacion.svg](../wireframes/IHC-A-09-anonimizacion.svg).
- Prototipo v1: [IHC-A-09.png](../prototipo/v1/IHC-A-09.png).
- Prototipo v2: [IHC-A-09.png](../prototipo/v2/IHC-A-09.png).

La decisión principal es asegurar el anonimato total por diseño (*privacy by design*), permitiendo trazabilidad científica rigurosa sin almacenar información privada que comprometa la identidad del participante.

## Fase 4 · Prueba y mejora

La prueba individual está en [IHC-A-09-prueba.md](../pruebas/IHC-A-09-prueba.md). La v2 incorpora la validación estricta de regex `^PART-[0-9]{3}$`, el feedback inline constructivo y la actualización reactiva del sidebar lateral a 5/5 completado. La comparativa visual está en [IHC-A-09-antes-despues.svg](../evidencias/IHC-A-09-antes-despues.svg).

## Fase 5 · Incidencia y defensa

Se aplicó la incidencia sorpresa: sustituir por código seudónimo obligatorio y validar su formato regex. Pregunta de defensa: **¿Qué requisito protege privacidad y dónde aparece en la trazabilidad?**

**Respuesta:** Los requisitos **A09-R01** (supresión de nombres y datos personales) y **A09-R03** (validación regex estricta `^PART-[0-9]{3}$`), los cuales quedan trazados en la matriz desde la alerta de consentimiento en el sidebar izquierdo hasta la tabla de evidencias éticas del estudio UT-024.

Diagrama completo: [IHC-A-09.md](../diagramas/IHC-A-09.md).

## Enlaces de Figma

- Prompt maestro y especificaciones de pantalla única con Auto Layout: [PROMPTS_FIGMA.md](../wireframes/PROMPTS_FIGMA.md).
- Archivo de trabajo Figma: **[https://www.figma.com/design/1ejQ6tKfQIjuBxaEx5diQX/Dashboard-UX-Forma?node-id=0-1]**
