# Requisitos Verificables (IHC-A-04, A-08, A-12)

## IHC-A-04: Advertencia Perceptible de Alérgenos (CaféU)
| ID | Descripción | Criterio (Sí/No) | Prioridad | Origen |
|---|---|---|---|---|
| RF-04-01 | Al seleccionar un producto, el sistema debe mostrar etiquetas claras de alérgenos en la pantalla de detalle. | Sí muestra / No muestra | Alta | Hallazgo A-04 |
| RF-04-02 | Al hacer clic en "Añadir al pedido", si hay alérgenos críticos, se debe bloquear el flujo y mostrar un modal. | Sí bloquea / No bloquea | Alta | Hallazgo A-04 |
| RF-04-03 | El modal de alérgenos debe tener un botón explícito de "Entendido, añadir" y "Volver a editar". | Sí tiene ambos / No | Media | Heurística Nielsen |
| RF-04-04 | Si el usuario vuelve al carrito desde el modal, los ítems previamente añadidos no deben perderse. | Sí persisten / No | Alta | Hallazgo A-04 |
| RF-04-05 | El resumen del carrito ("Mi Pedido") debe mostrar un ícono de advertencia si hay alérgenos en el pedido. | Sí muestra / No muestra | Media | Gestalt |
| RF-04-06 | El usuario no podrá dar clic en "Confirmar pedido" hasta haber interactuado con las advertencias. | Sí bloquea / No | Alta | Carga Cognitiva |

## IHC-A-08: Persistencia de Datos en Checklist (Dashboard UX)
| ID | Descripción | Criterio (Sí/No) | Prioridad | Origen |
|---|---|---|---|---|
| RF-08-01 | Cada casilla marcada en el checklist debe guardarse automáticamente en el estado local (localStorage). | Sí guarda / No guarda | Alta | Hallazgo A-08 |
| RF-08-02 | Al cambiar de paso en el Stepper (ej. de Paso 2 a Paso 3), las marcas del paso anterior deben conservarse. | Sí conservan / No | Alta | Hallazgo A-08 |
| RF-08-03 | El sistema debe mostrar un badge visual "Guardado" o "No guardado" junto al título del paso. | Sí muestra / No | Media | Heurística Nielsen |
| RF-08-04 | El sistema debe calcular y mostrar el porcentaje de progreso real basado en las casillas marcadas. | Sí calcula / No | Media | Hallazgo A-08 |
| RF-08-05 | Si el usuario recarga la página, el checklist debe restaurar el último estado guardado. | Sí restaura / No | Alta | Prevención errores |
| RF-08-06 | El usuario debe poder desmarcar una casilla y el sistema debe actualizar el estado y el progreso. | Sí actualiza / No | Baja | Flujo natural |

## IHC-A-12: Recuperación de Sesión y Verificación Final (Dashboard UX)
| ID | Descripción | Criterio (Sí/No) | Prioridad | Origen |
|---|---|---|---|---|
| RF-12-01 | Al intentar cerrar la sesión, el sistema debe validar si el checklist obligatorio está al 100%. | Sí valida / No | Alta | Hallazgo A-12 |
| RF-12-02 | Si el checklist no está completo, el sistema debe bloquear el cierre y mostrar un modal de "Éxito falso". | Sí bloquea / No | Alta | Hallazgo A-12 |
| RF-12-03 | El modal de bloqueo debe mostrar un resumen de los ítems pendientes de comprobar. | Sí muestra / No | Alta | Heurística Nielsen |
| RF-12-04 | Si la sesión se interrumpe (ej. cierre de pestaña), al reingresar se debe mostrar un banner de "Sesión recuperada". | Sí muestra / No | Media | Hallazgo A-12 |
| RF-12-05 | El banner de recuperación debe permitir al usuario ir directamente al último paso no completado. | Sí permite / No | Media | Carga Cognitiva |
| RF-12-06 | Solo se permitirá el estado final de "Auditoría Completada" tras la validación explícita del resumen. | Sí permite / No | Alta | Prevención errores |