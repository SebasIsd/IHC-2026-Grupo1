# Diagnóstico Específico: IHC-A-04 · CaféU (Advertencia Perceptible de Alérgenos)

## 1. Descripción del Fallo

En el flujo actual de CaféU, el usuario puede añadir productos al carrito y **confirmar el pedido (#CU-104) sin haber leído ni recibido ninguna advertencia sobre alérgenos o ingredientes críticos**. Esto representa un riesgo de salud real para usuarios con alergias alimentarias y una violación directa de principios de prevención de errores.

---

## 2. Touchpoints Identificados (6)

| # | Touchpoint | Pantalla asociada | Interacción del usuario |
|---|---|---|---|
| 1 | Visualización de producto | Detalle Producto | Usuario ve imagen, precio y descripción |
| 2 | Revisión de ingredientes | Detalle Producto | Usuario desplaza para leer detalles (opcional) |
| 3 | Acción de añadir | Detalle Producto | Clic en "Añadir al pedido - $1.50" |
| 4 | Revisión del carrito | Mi Pedido | Usuario ve resumen con 2 items ($4.25) |
| 5 | Confirmación | Mi Pedido | Clic en "Confirmar pedido - $4.25" |
| 6 | Estado final | Estado de pedido / Confirmación | Usuario ve #CU-104 procesado |

---

## 3. Momentos de Verdad (2)

### Momento de Verdad #1: Clic en "Añadir al pedido"
- **Qué ocurre:** El producto se añade al carrito sin ninguna validación previa sobre alérgenos.
- **Por qué es crítico:** Es el primer punto donde el sistema podría intervenir preventivamente.
- **Estado actual:**  Sin intervención del sistema.

### Momento de Verdad #2: Clic en "Confirmar pedido"
- **Qué ocurre:** El pedido se procesa definitivamente (#CU-104) sin que el usuario haya sido alertado.
- **Por qué es crítico:** Punto de no retorno; el pedido ya está en cocina.
- **Estado actual:** ❌ Sin validación de alérgenos.

---

## 4. Priorización de Fallos (Top 3)

### Fallo #1: Ausencia de modal de advertencia (CRÍTICO)
- **Heurística de Nielsen violada:** #1 Visibilidad del estado del sistema + #5 Prevención de errores.
- **Principio de Gestalt:** Falta de contraste visual entre acción segura y riesgosa.
- **Carga cognitiva:** Intrínseca alta — el usuario debe recordar de memoria los alérgenos de cada producto.
- **Impacto:** Riesgo de salud directo.

### Fallo #2: Etiquetas de alérgenos no perceptibles (ALTO)
- **Heurística de Nielsen violada:** #2 Correspondencia entre el sistema y el mundo real.
- **Principio de Gestalt:** Similitud — las etiquetas se confunden con información decorativa.
- **Carga cognitiva:** Extrínseca — el diseño no apoya la lectura rápida.
- **Impacto:** El usuario pasa por alto la información crítica.

### Fallo #3: Sin opción de retorno seguro al carrito (MEDIO)
- **Heurística de Nielsen violada:** #6 Reconocer en lugar de recordar + #3 Control y libertad del usuario.
- **Principio de Gestalt:** Cierre — el flujo no ofrece una ruta clara de vuelta.
- **Carga cognitiva:** Germana — el usuario no sabe cómo modificar su pedido sin perderlo.
- **Impacto:** Frustración y posible abandono del pedido.

---

## 5. Datos: Observados vs Estimados

| Tipo | Dato | Fuente |
|---|---|---|
| **Observado** | El botón "Confirmar pedido" está siempre habilitado en la pantalla "Mi Pedido". | Wireframe actual (imagen referencia) |
| **Observado** | No existe modal ni banner de advertencia en ninguna de las 7 pantallas de CaféU. | Wireframe actual |
| **Observado** | La pantalla "Detalle Producto" muestra descripción pero no etiquetas de alérgenos destacadas. | Wireframe actual |
| **Estimado** | ~15% de usuarios universitarios tienen alguna alergia alimentaria (dato epidemiológico general). | Literatura externa |
| **Estimado** | Tasa de error estimada: 60-70% de usuarios confirmarían sin leer alérgenos en el flujo actual. | Proyección basada en heurísticas |
| **Estimado** | Tiempo de revisión de alérgenos añadido: +3-5 segundos por producto (carga aceptable). | Benchmark de UX |

---