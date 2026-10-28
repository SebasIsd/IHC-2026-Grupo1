# IHC-A-03 · Diagramas

## Sitemap

El sitemap representa el recorrido mínimo de CaféU desde el inicio hasta la confirmación. La persona puede revisar o editar el pedido antes de llegar al estado recibido.

```mermaid
flowchart TD
  Inicio[Inicio] --> Cafe[Menu CafeU]
  Cafe --> Pedido[Mi pedido]
  Pedido --> Confirmacion[Confirmacion]
  Pedido -. Editar .-> Cafe
  Confirmacion --> Salir[Salir sin datos personales]
```

## User flow

El flujo diferencia revisar, procesar, fallar y confirmar. La pantalla «Pedido recibido» solo aparece después de una respuesta exitosa, evitando confundir el clic con la recepción real.

```mermaid
flowchart TD
  A[Revisar pedido] --> B{Confirmar?}
  B -- Editar --> A
  B -- Confirmar --> C[Procesando pedido]
  C --> D{Respuesta}
  D -- Error --> E[Explicar error y reintentar] --> C
  D -- Exito --> F[Pedido recibido]
  F --> G[Mostrar CU-104, desglose y total]
  G --> H[Salir sin datos personales]
```
