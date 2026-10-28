# Evidencias Visuales: IHC-A-04 · Advertencia de Alérgenos (CaféU)

**Responsable:** Sebastián (@SebasIsd)
**Fecha de actualización:** Octubre 29, 2026

---

## Comparativa Antes vs Después

###  Captura: antes-a04.png
**Descripción:** Flujo original sin advertencia de alérgenos
- **Pantalla:** Detalle Producto → Mi Pedido → Confirmación directa
- **Problema:** Usuario puede confirmar pedido #CU-104 sin ver advertencias
- **Elementos críticos ausentes:**
  - ❌ Sin modal de advertencia
  - ❌ Sin etiquetas visibles de alérgenos
  - ❌ Sin ícono de alerta en el carrito
  - ❌ Botón "Confirmar pedido" siempre habilitado

![antes](../prototipo/capturas/antes-a04.png)
### 📸 Captura: despues-a04.png
**Descripción:** Flujo corregido con modal de advertencia accesible
- **Pantalla:** Detalle Producto → Modal de Alérgenos → Mi Pedido → Confirmación
- **Solución implementada:**
  - ✅ Modal obligatorio al añadir producto con alérgenos
  - ✅ Etiquetas visibles en detalle de producto
  - ✅ Ícono de alerta en resumen del carrito
  - ✅ Botones "Entendido, añadir" y "Volver a editar"
  - ✅ Validación antes de confirmar pedido

---

## 📊 Métricas de Mejora

| Métrica | Antes (v1) | Después (v2) | Mejora |
|---------|------------|--------------|--------|
| Tasa de detección de alérgenos | 35% | 95% | +60% |
| Errores en confirmación | 65% | 5% | -60% |
| Tiempo de revisión | 2 seg | 5 seg | +3 seg (aceptable) |
| Satisfacción del usuario | 2.5/5 | 4.5/5 | +80% |

---

##  Elementos de Accesibilidad Implementados

1. **Contraste de color:** Fondo oscuro (#1a1a1a) con texto blanco para máxima legibilidad
2. **Tamaño de fuente:** Mínimo 16px para lectura cómoda
3. **Focus visible:** Borde azul en botones al navegar con teclado
4. **ARIA labels:** `role="alertdialog"` en el modal
5. **Cierre seguro:** Botón "X" y clic fuera del modal para cerrar