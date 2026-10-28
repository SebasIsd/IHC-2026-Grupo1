## Flujo IHC-A-04: Advertencia de Alérgenos (CaféU)
```mermaid
graph TD
    A[Usuario ve Detalle Producto] --> B{¿Tiene alérgenos críticos?}
    B -- No --> C[Clic en 'Añadir al pedido']
    B -- Sí --> D[Se abre Modal de Advertencia]
    D --> E{¿Usuario acepta el riesgo?}
    E -- Sí, añadir --> C
    E -- No, volver --> F[Retorna a Detalle Producto sin perder carrito]
    C --> G[Vista 'Mi Pedido' con ícono de alerta]
    G --> H{¿Revisó advertencias?}
    H -- Sí --> I[Botón 'Confirmar pedido' habilitado]
    H -- No --> J[Botón 'Confirmar pedido' deshabilitado]