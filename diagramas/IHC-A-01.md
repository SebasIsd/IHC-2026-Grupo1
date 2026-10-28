# IHC-A-01 · Diagramas

## Sitemap

El sitemap representa la arquitectura del flujo móvil express de CaféU adaptada a una resolución base de 360 px. Permite la navegación lineal ágil entre el menú, la selección de productos y la revisión del carrito antes de emitir la orden bajo el límite de 3 minutos.

```mermaid
flowchart TD
  Inicio[01. Inicio Express 360px] --> Menu[02. Menu y Catalogo]
  Menu --> Detalle[03. Detalle Producto]
  Detalle --> Pedido[04. Mi Pedido]
  Pedido -. Continuar comprando .-> Menu
  Pedido --> Confirmacion[05. Confirmacion CU-104]
  Confirmacion --> Salir[Ventanilla Exclusiva #2]
```

## User flow

El user flow modela el recorrido transaccional, diferenciando la rama de error original (desincronización de total en v1) de la rama corregida con recálculo reactivo automático en menos de 16 ms y bloqueo preventivo de importes desactualizados.

```mermaid
flowchart TD
  A[Inicio 360px · Timer 03:00] --> B[Seleccionar Cafe $1.50 y Sanduche $2.75]
  B --> C[Abrir Mi Pedido · Total base $4.25]
  C --> D{¿Modifica Stepper + o -?}
  D -- Fallo v1 --> E[Total de barra queda congelado en $4.25]
  E --> F[Permite confirmar con datos obsoletos]
  D -- Incidencia v2 --> G[Recalculo reactivo DOM <16ms · $5.75]
  G --> H[Anuncio accesible aria-live polite]
  H --> I{¿Total visual coincide con memoria?}
  I -- No --> J[Bloquear confirmacion y sincronizar] --> G
  I -- Si --> K[Confirmar pedido verificado]
  K --> L[Ticket CU-104 · Retiro Ventanilla #2]
```
