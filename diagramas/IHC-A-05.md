# IHC-A-05 · Diagramas

## Sitemap

El sitemap organiza el catálogo y el carrito de CaféU incorporando la monitorización activa del umbral presupuestario de USD 4,25.

```mermaid
flowchart TD
  Inicio[Inicio CafeU] --> Menu[Catalogo con indicador USD 4.25]
  Menu --> Stepper[Ajuste con Stepper Elastico Dan Saffer]
  Stepper --> Carrito[Revision de Pedido]
  Carrito --> Interceptor{¿Supera USD 4.25?}
  Interceptor -. Si .-> Modal[Modal Interceptor Ajustar]
  Modal -. Mantener carrito .-> Carrito
  Interceptor -. No .-> Confirmacion[Confirmacion Ticket CU-105]
  Confirmacion --> Salir[Retiro sin sobrecosto]
```

## User flow

El flujo define el control de presupuesto. Si la suma de productos sobrepasa los USD 4,25, el sistema activa una alerta visual y despliega un diálogo preventivo antes de confirmar, facilitando el ajuste de porciones sin reiniciar la compra.

```mermaid
flowchart TD
  A[Catalogo con saldo USD 4.25] --> B[Anadir Cafe $1.50 y Sanduche $2.75]
  B --> C[Total inicial $4.25 · Estado OK]
  C --> D[Pulsar Stepper + en Cafe · Total sube a $5.75]
  D --> E{¿Confirmar orden?}
  E --> F{¿Total > USD 4.25?}
  F -- No --> G[Confirmacion directa $4.25]
  F -- Si (Incidencia) --> H[Interceptor Modal de Sobrecosto]
  H --> I{Decision de usuario}
  I -- Ajustar pedido --> J[Abrir ajuste manteniendo carrito]
  J --> K[Reducir 1 cafe con Stepper elastico]
  K --> C
  I -- Proceder --> L[Confirmar asumiendo sobrecosto]
  G --> M[Ticket CU-105 emitido con exito]
```
