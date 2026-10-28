# IHC-A-07 · Diagramas

## Sitemap

El sitemap organiza el Dashboard en etapas secuenciales. El checklist controla el acceso a la revisión y al estado final.

```mermaid
flowchart TD
  Inicio[Dashboard UX] --> Datos[Paso 1: datos]
  Datos --> Checklist[Paso 2: checklist]
  Checklist --> Revision[Paso 3: revision]
  Revision --> Exito[Estado final]
  Checklist -. Requisito pendiente .-> Checklist
```

## User flow

El flujo valida los requisitos antes de avanzar. Si existe un pendiente, se explica el bloqueo; al regresar, las marcas se conservan.

```mermaid
flowchart TD
  A[Paso actual] --> B[Checklist]
  B --> C{Obligatorios completos?}
  C -- No --> D[Bloquear avance y explicar faltante] --> B
  C -- Si --> E[Avanzar]
  E --> F{Regresar?}
  F -- Si --> B
  F -- No --> G[Revision y exito]
```
