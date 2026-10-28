# IHC-A-05 — Diagramas

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
**Recorrido principal:** Menú → Agregar productos → Revisar total → Total ≤ $4,25 → Confirmar → Pedido recibido.

**Recorrido de edición o error:** Carrito → Aumentar cantidad → Total > $4,25 → Mostrar exceso y advertencia → Ajustar sin vaciar carrito → Recalcular y volver a revisar.

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



