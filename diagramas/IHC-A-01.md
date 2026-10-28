# IHC-A-01 — Diagramas

### Sitemap propuesto 

```mermaid
flowchart TD
  A[Inicio / Dashboard] --> B[Selección o registro]
  B --> C[Revisión / edición]
  C --> D[Confirmación]
  C --> E[Error o advertencia]
  E --> C
```

### User flow principal y rama de error/edición 

**Recorrido principal:** Inicio → Menú → Agregar café y sánduche → Mi pedido → Revisar total → Confirmar → Pedido recibido.

**Recorrido de edición o error:** Mi pedido → Modificar cantidad → Recalcular subtotales y total → Anunciar nuevo importe → Revisar nuevamente → Confirmar solo si el total coincide.

```mermaid
flowchart TD
 A[Inicio] --> B[Seleccionar o registrar]
 B --> C[Revisar datos]
 C --> D{¿Datos válidos y vigentes?}
 D -- Sí --> E[Confirmar / guardar]
 E --> F[Mostrar éxito]
 D -- No --> G[Mostrar motivo del error]
 G --> H[Editar sin perder datos]
 H --> C
```



