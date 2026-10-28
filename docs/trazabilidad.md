# Matriz de Trazabilidad Cruzada

## 📌 Propósito

Esta matriz garantiza que **cada componente del prototipo tenga un requisito que lo respalde** y que **no existan elementos huérfanos** en el código. Sirve como evidencia de coherencia entre diagnóstico, requisitos, flujos y prototipo.

---

## 🔗 IHC-A-04 · CaféU (Advertencia Perceptible de Alérgenos)

| ID Requisito | Descripción | User Flow | Pantalla | Componente | Wireframe |
|---|---|---|---|---|---|
| **RF-04-01** | Etiquetas visibles de alérgenos en detalle | Selección → Detalle | Detalle Producto | `.allergen-badge.warning` | `wireframes/tarjeta-04/01-inicio.png` |
| **RF-04-02** | Modal bloquea al añadir producto con alérgenos | Detalle → Modal | Detalle Producto | `#allergen-modal` | `wireframes/tarjeta-04/03-error.png` |
| **RF-04-03** | Botones "Entendido" y "Volver a editar" | Modal → Decisión | Modal Alérgenos | `#btn-accept-allergen`, `#btn-return-allergen` | `wireframes/tarjeta-04/03-error.png` |
| **RF-04-04** | Retorno al carrito sin perder pedido | Modal → Carrito | Mi Pedido | `#cart-section` | `wireframes/tarjeta-04/02-accion.png` |
| **RF-04-05** | Ícono de alerta en resumen del carrito | Carrito → Revisión | Mi Pedido | `.allergen-warning-icon` | `wireframes/tarjeta-04/02-accion.png` |
| **RF-04-06** | Bloqueo de confirmación sin revisión | Carrito → Confirmación | Mi Pedido | `#btn-confirm-order` (validado en JS) | `wireframes/tarjeta-04/04-confirmacion.png` |

---

## 🔗 IHC-A-08 · Dashboard UX (Persistencia de Datos en Checklist)

| ID Requisito | Descripción | User Flow | Pantalla | Componente | Wireframe |
|---|---|---|---|---|---|
| **RF-08-01** | Guardado automático en localStorage | Checklist → Guardado | Stepper (cualquier paso) | `localStorage.setItem()` | `wireframes/tarjeta-08/stepper-checklist.png` |
| **RF-08-02** | Persistencia al cambiar de paso | Paso N → Paso N+1 | Stepper | `.stepper-step` + navegación JS | `wireframes/tarjeta-08/stepper-checklist.png` |
| **RF-08-03** | Badge visual "Guardado" | Marcado → Feedback | Stepper (top) | `#save-badge` | `wireframes/tarjeta-08/stepper-checklist.png` |
| **RF-08-04** | Porcentaje de progreso real | Marcado → Cálculo | Barra de progreso | `#progress-fill`, `#progress-percentage` | `wireframes/tarjeta-08/stepper-checklist.png` |
| **RF-08-05** | Restauración al recargar página | Recarga → Restore | Stepper | `DOMContentLoaded` + `localStorage` | `wireframes/tarjeta-08/stepper-checklist.png` |
| **RF-08-06** | Desmarcar actualiza estado y progreso | Desmarcado → Update | Stepper | `.checklist-checkbox` (change event) | `wireframes/tarjeta-08/stepper-checklist.png` |

---

## 🔗 IHC-A-12 · Dashboard UX (Recuperación de Sesión)

| ID Requisito | Descripción | User Flow | Pantalla | Componente | Wireframe |
|---|---|---|---|---|---|
| **RF-12-01** | Validación de completitud antes de cerrar | Checklist → Cierre | Lista de Verificación | `#btn-close-session` (validado) | `wireframes/tarjeta-12/modal-recuperacion.png` |
| **RF-12-02** | Bloqueo si checklist < 100% | Cierre → Bloqueo | Modal Bloqueo | `#session-close-modal` | `wireframes/tarjeta-12/modal-recuperacion.png` |
| **RF-12-03** | Resumen de ítems pendientes | Bloqueo → Resumen | Modal Bloqueo | `#pending-items-list` | `wireframes/tarjeta-12/modal-recuperacion.png` |
| **RF-12-04** | Banner de sesión recuperada | Reingreso → Banner | Dashboard (top) | `#recovery-banner` | `wireframes/tarjeta-12/modal-recuperacion.png` |
| **RF-12-05** | Redirección al último paso incompleto | Banner → Stepper | Stepper | `scrollToLastIncomplete()` | `wireframes/tarjeta-12/modal-recuperacion.png` |
| **RF-12-06** | Cierre solo tras validación explícita | Resumen → Confirmación | Modal Final | `#final-confirm-modal` | `wireframes/tarjeta-12/modal-recuperacion.png` |

---

## ✅ Verificación de Cobertura

| Criterio | Estado |
|---|---|
| Total de requisitos definidos | 18 (6 por tarjeta) |
| Requisitos con componente en prototipo | 18/18 (100%) |
| Componentes huérfanos (sin requisito) | 0 |
| Pantallas sin wireframe asociado | 0 |
| Flujos sin trazabilidad | 0 |