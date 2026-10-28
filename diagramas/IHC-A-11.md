# IHC-A-11 · Diagramas

## Sitemap

El sitemap conserva el orden lógico en un viewport de 360 px: primero el Stepper, luego el contenido de la Card y finalmente la acción principal.

```mermaid
flowchart TD
  Inicio[Dashboard UX] --> Paso[Stepper]
  Paso --> Card[Card de formulario]
  Card --> Accion[Accion principal]
  Accion --> Siguiente[Siguiente paso]
```

## User flow

El flujo responsive mantiene una columna y permite regresar al campo si existe un error, sin ocultar el contenido ni romper el orden del foco.

```mermaid
flowchart TD
  A[Abrir viewport 360 px] --> B[Stepper visible]
  B --> C[Titulo y contexto]
  C --> D[Card en una columna]
  D --> E[Campo visible]
  E --> F[CTA principal]
  F --> G{Error?}
  G -- Si --> E
  G -- No --> H[Siguiente paso]
```
