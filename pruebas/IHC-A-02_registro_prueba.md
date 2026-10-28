# Registro de Prueba Cognitiva: IHC-A-02 · Interacción 100% por Teclado

## 📋 Información de la Sesión

**Participante:** P-02 (Mateo Rojas - Estudiante universitario)
**Perfil:** Lesión temporal en la mano derecha (uso exclusivo de teclado)
**Duración:** 10 minutos
**Método:** Moderado presencial (Observación directa)
**Dispositivo:** Laptop (Windows + Navegador Chrome)

---

## 🎯 Tarea Asignada

*"Tienes una lesión en la mano y no puedes usar el ratón. Tu objetivo es editar tu pedido en CaféU, quitar el sánduche y finalizar la compra usando solo el teclado."*

---

## 📊 Métricas Registradas

### Versión 1 (Sin gestión de foco ni confirmación)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de tarea | 45 segundos | Navegó con Tab, pero se perdió al eliminar |
| ❌ Número de errores | 2 | 1) No vio el foco en "Quitar", 2) Perdió el contexto al borrar |
| ⏸️ Pausas observadas | 3 (4, 6 y 5 segundos) | Buscando el foco y tratando de regresar al carrito |
| ✅ Resultado | **FRACASO** | Eliminó el producto por error y tuvo que recargar la página |

**Cita textual:**
> *"Presioné Tab muchas veces pero no sabía dónde estaba. Cuando por fin llegué a 'Quitar' y di Enter, se borró de golpe y la pantalla saltó al inicio. Tuve que empezar de nuevo."*

---

### Versión 2 (Con diálogo de confirmación y restauración de foco)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ️ Tiempo de tarea | 38 segundos | Navegación fluida y predecible |
| ❌ Número de errores | 0 | Usó Enter para confirmar y Escape para cancelar |
| ️ Pausas observadas | 1 (2 segundos) | Lectura rápida del diálogo de confirmación |
| ✅ Resultado | **ÉXITO** | Editó el pedido y finalizó sin usar el ratón |

**Cita textual:**
> *"Ahora sí veo un recuadro azul cuando me muevo con Tab. Cuando quité el sánduche, me preguntó si estaba seguro y al confirmar, el foco regresó al carrito. Pude seguir con 'Confirmar pedido' sin problemas."*

---

## 🔍 Observaciones Detalladas

### Comportamiento en v1:
1. Usuario presionó `Tab` repetidamente sin ver indicadores visuales.
2. Al llegar al botón "Quitar", presionó `Enter` por intuición.
3. El ítem se eliminó instantáneamente sin confirmación.
4. El foco del navegador saltó al elemento `<body>` (inicio de la página).
5. Usuario no pudo navegar de regreso al botón "Finalizar" eficientemente.

### Comportamiento en v2:
1. Usuario navegó con `Tab` y observó el anillo de foco visible (`focus-visible`).
2. Al llegar a "Quitar", presionó `Enter`.
3. **Diálogo emergente:** "¿Quitar producto?" con opciones "Cancelar (Esc)" y "Sí, quitar".
4. Usuario presionó `Enter` en "Sí, quitar".
5. El foco regresó automáticamente al contenedor del pedido.
6. Usuario presionó `Tab` una vez y llegó a "Confirmar pedido".
7. Finalizó la tarea recibiendo el mensaje: "¡Pedido recibido! Pedido #CU-104".

---

## 📈 Resultados de la Prueba del Parche

**Incidencia sorpresa aplicada:** Hacer identificables y operables los controles; restaurar foco después de quitar.

| Criterio | Cumplimiento |
|----------|--------------|
| Controles identificables (foco visible) | ✅ Sí - Outline azul de alto contraste |
| Operables sin ratón (Enter/Escape) | ✅ Sí - Diálogo modal funcional |
| Restauración de foco post-eliminación | ✅ Sí - Foco regresa al contenedor del pedido |
| Feedback de éxito | ✅ Sí - Muestra número de pedido #CU-104 |

---

## 💡 Hallazgos Clave

1. **El foco visible es crítico:** Sin el anillo de alto contraste, el usuario con lesión temporal se frustra en los primeros 10 segundos.
2. **El diálogo modal previene errores:** La opción "Cancelar (Esc)" da seguridad al usuario antes de borrar.
3. **Restaurar foco ahorra tiempo:** Elimina la necesidad de volver a tabular desde el inicio de la página.
4. **Teclas estándar:** El uso de `Escape` para cerrar es un patrón mental que el usuario ya conoce y agradece.

---

## ✅ Decisión Final

**Estado:** APROBADO para producción
**Recomendación:** Mantener el patrón de restauración de foco en todos los módulos de edición de CaféU.