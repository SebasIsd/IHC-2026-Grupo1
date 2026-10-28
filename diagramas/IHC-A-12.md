## Flujo IHC-A-12: Recuperación de Sesión (Dashboard UX)
```mermaid
graph TD
    A[Usuario intenta 'Cerrar Sesión'] --> B{¿Checklist al 100%?}
    B -- Sí --> C[Mostrar Resumen Final]
    C --> D[Usuario confirma cierre]
    D --> E[Sesión cerrada exitosamente]
    B -- No --> F[Bloquear cierre: Modal 'Éxito Falso']
    F --> G[Mostrar lista de ítems pendientes]
    G --> H[Usuario vuelve al Stepper]
    H --> I[Completa ítems pendientes]
    I --> A
    
    J[Usuario reingresa tras interrupción] --> K{¿Hay sesión guardada?}
    K -- Sí --> L[Mostrar Banner 'Sesión Recuperada']
    L --> M[Redirigir al último paso no completado]
    K -- No --> N[Iniciar nueva sesión]