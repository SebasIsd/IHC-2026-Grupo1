# Registro de Prueba Cognitiva: IHC-A-04 · Advertencia de Alérgenos

## 📋 Información de la Sesión

**Participante:** P-04 (Anthony Semblantes - Estudiante universitario)
**Perfil:** Alérgico al maní y frutos secos
**Duración:** 12 minutos
**Método:** Moderado a distancia (Zoom + screen sharing)
**Dispositivo:** Celular Inifnix

---

## 🎯 Tarea Asignada

*"Eres alérgico al maní. Tu objetivo es pedir un café y un sándwich en CaféU sin poner en riesgo tu salud."*

---

## 📊 Métricas Registradas

### Versión 1 (Sin modal de advertencia)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ️ Tiempo de tarea | 35 segundos | Confirmó sin leer ingredientes |
|  Número de errores | 2 | 1) No vio alérgenos, 2) Confirmó directamente |
| ⏸️ Pausas observadas | 1 (2 segundos) | Duda en la descripción del producto |
| ✅ Resultado | **FRACASO** | Pedido confirmado sin revisar alérgenos |

**Cita textual:**
> *"Le di a confirmar porque tenía hambre y vi que era rápido. No me fijé en los ingredientes, pensé que si decía 'Café americano' no tendría nada raro."*

---

### Versión 2 (Con modal de advertencia)

| Métrica | Valor | Observación |
|---------|-------|-------------|
| ️ Tiempo de tarea | 48 segundos | +13 seg por lectura del modal |
| ❌ Número de errores | 0 | Leyó el modal y tomó decisión informada |
| ⏸️ Pausas observadas | 2 (5 y 3 segundos) | Lectura del modal y decisión |
| ✅ Resultado | **ÉXITO** | Usuario eliminó producto con alérgenos |

**Cita textual:**
> *"Ah, el modal me detuvo. Dice que el sándwich tiene maní. Mejor lo quito y pido solo el café. Me gusta que me avise antes de confirmar."*

---

## 🔍 Observaciones Detalladas

### Comportamiento en v1:
1. Usuario entró a "Menú" rápidamente
2. Seleccionó "Café americano" y "Sándwich"
3. No expandió la sección de "Ingredientes"
4. Clic directo en "Confirmar pedido - $4.25"
5. Confirmación exitosa #CU-104 (riesgo de salud)

### Comportamiento en v2:
1. Usuario entró a "Menú"
2. Seleccionó "Sándwich"
3. **Modal emergente:** "⚠️ Este producto contiene: Maní, Gluten"
4. Usuario leyó por 5 segundos
5. Clic en "Volver a editar"
6. Cambió a "Galleta" (sin alérgenos)
7. Confirmó pedido seguro

---

## 📈 Resultados de la Prueba del Parche

**Incidencia sorpresa aplicada:** Incorporar aviso accesible con confirmación explícita

| Criterio | Cumplimiento |
|----------|--------------|
| Modal es perceptible | ✅ Sí - Contraste alto, tamaño grande |
| Confirmación explícita | ✅ Sí - Dos botones claros |
| Retorno al carrito sin perder pedido | ✅ Sí - Mantiene items añadidos |
| Accesibilidad (teclado/lector) | ✅ Sí - ARIA labels, focus visible |

---

##  Hallazgos Clave

1. **El modal funciona:** 100% de los usuarios lo leyeron antes de actuar
2. **Tiempo aceptable:** +13 segundos es un costo razonable por seguridad
3. **Botones claros:** "Volver a editar" es más efectivo que "Cancelar"
4. **Sin pérdida de datos:** Los usuarios valoran no perder el carrito

---

## ✅ Decisión Final

**Estado:** APROBADO para producción
**Recomendación:** Mantener el modal obligatorio para todos los productos con alérgenos críticos.