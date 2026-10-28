# Registro de Prueba Cognitiva: IHC-A-06 · Red Móvil Inestable y Duplicados

## 📋 Información de la Sesión

**Participante:** P-06 (Valeria Torres - Estudiante universitaria)
**Perfil:** Usuario frecuente de datos móviles con conexión 4G intermitente
**Duración:** 8 minutos
**Método:** Moderado a distancia (Zoom + screen sharing desde celular)
**Dispositivo:** Smartphone Android (Red simulada 3G/Latencia alta)

---

## 🎯 Tarea Asignada

*"Estás en el campus con mala señal. Tu objetivo es confirmar tu pedido de Café Americano y Sánduche en CaféU sin que te cobren dos veces por error."*

---

## 📊 Métricas Registradas

### Versión 1 (Sin bloqueo de botones ni estados)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ️ Tiempo de tarea | 15 segundos | Confirmó, dudó y volvió a tocar la pantalla |
| ❌ Número de errores | 1 | Generó 2 pedidos duplicados |
| ⏸️ Pausas observadas | 2 (3 y 4 segundos) | Ansiedad por la falta de respuesta del servidor |
| ✅ Resultado | **FRACASO** | Se generaron dos órdenes (Cobro duplicado) |

**Cita textual:**
> *"Toqué 'Confirmar pedido' y no pasó nada por unos segundos. Pensé que no me había escuchado el celular y le di otra vez. Al final me llegaron dos mensajes de cobro."*

---

### Versión 2 (Con estados de red y bloqueo de duplicados)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ⏱️ Tiempo de tarea | 25 segundos | +10 seg por espera de estados y lectura |
| ❌ Número de errores | 0 | Esperó el feedback y usó "Reiniciar" tras el fallo |
| ⏸️ Pausas observadas | 1 (5 segundos) | Lectura del estado de error |
| ✅ Resultado | **ÉXITO** | Entendió el fallo, reinició y confirmó sin duplicar |

**Cita textual:**
> *"Cuando toqué confirmar, el botón se puso gris y no me dejó tocarlo otra vez. Me dijo que había fallado, pero me dio un botón para reiniciar. Me sentí mucho más tranquila sabiendo que no me iban a cobrar doble."*

---

## 🔍 Observaciones Detalladas

### Comportamiento en v1:
1. Usuario revisó el total ($4.25).
2. Tocó "Confirmar pedido".
3. La interfaz no dio feedback inmediato (latencia de red).
4. Usuario tocó el botón 3 veces más por ansiedad.
5. El sistema procesó 4 solicitudes (4 pedidos duplicados).

### Comportamiento en v2:
1. Usuario revisó el total y leyó: "Listo para enviar. El pedido aún no se ha confirmado."
2. Tocó "Confirmar pedido".
3. **Bloqueo inmediato:** El botón se deshabilitó visualmente.
4. Simulación de fallo de red: Apareció el mensaje "Después de un intento fallido, el botón se bloquea para evitar confirmaciones duplicadas."
5. Usuario tocó "Reiniciar demostración".
6. El estado volvió a "Listo para enviar" y pudo confirmar correctamente.

---

## 📈 Resultados de la Prueba del Parche

**Incidencia sorpresa aplicada:** Modelar pendiente/confirmado/no confirmado y evitar duplicación.

| Criterio | Cumplimiento |
|----------|--------------|
| Modelo de estados (Pendiente/Confirmado/Fallo) | ✅ Sí - Textos claros en cada etapa |
| Prevención de duplicados | ✅ Sí - Botón se bloquea tras el primer toque |
| Recuperación tras fallo | ✅ Sí - Botón "Reiniciar demostración" funcional |
| Feedback semántico y visual | ✅ Sí - Cambios de estado inequívocos |

---

## 💡 Hallazgos Clave

1. **La ansiedad genera errores:** En redes lentas, el usuario asume que el toque no fue registrado y repite la acción.
2. **El bloqueo del botón es la mejor solución:** Deshabilitar el botón tras el primer clic elimina el problema de raíz.
3. **Los mensajes de estado reducen la incertidumbre:** Saber que "el pedido aún no se ha confirmado" es mejor que un spinner genérico.
4. **El botón de reinicio es vital:** Permite al usuario recuperar el control tras un error de red sin perder el contexto del carrito.

---

## ✅ Decisión Final

**Estado:** APROBADO para producción
**Recomendación:** Implementar este patrón de bloqueo y estados en todos los flujos de pago y confirmación de la plataforma.