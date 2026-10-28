# Diagnóstico de Usabilidad - CaféU & Dashboard UX

## 1. Tarjeta IHC-A-04: CaféU (Advertencia de Alérgenos)
**Fallo diagnosticado:** El usuario puede confirmar el pedido (#CU-104) sin haber leído ni recibido advertencia sobre alérgenos o ingredientes críticos.
**Touchpoints (6):** Inicio -> Menú -> Detalle Producto -> Mi Pedido -> Estado de Pedido -> Confirmación.
**Momento de Verdad:** Clic en el botón "Confirmar pedido - $4.25" en la pantalla "Mi Pedido".
**Análisis Heurístico:**
- *Nielsen (Visibilidad del estado del sistema):* Falta feedback preventivo sobre riesgos (alérgenos).
- *Gestalt (Similitud/Cierre):* Los botones de acción no diferencian visualmente una acción segura de una riesgosa.
- *Carga Cognitiva:* Se asume que el usuario recordará los alérgenos (carga intrínseca alta) sin apoyo externo.
**Datos:** Observado (en wireframes actuales) / Estimado (tasa de error en usuarios con alergias).

## 2. Tarjeta IHC-A-08: Dashboard UX (Persistencia en Checklist)
**Fallo diagnosticado:** Las casillas del checklist parecen guardarse, pero al navegar entre los 6 pasos del Stepper, los datos se pierden.
**Touchpoints (8):** Paso 1 a 6 del Stepper -> Navegación siguiente/anterior -> Guardado -> Carga.
**Momento de Verdad:** Clic en "Siguiente paso" o "Paso anterior" en el Stepper.
**Análisis Heurístico:**
- *Nielsen (Prevención de errores):* El sistema no previene la pérdida de trabajo del usuario.
- *Carga Cognitiva:* Aumenta la carga extrínseca al obligar al usuario a recordar qué marcó en pasos anteriores.
**Datos:** Observado (comportamiento actual del prototipo).

## 3. Tarjeta IHC-A-12: Dashboard UX (Recuperación de Sesión)
**Fallo diagnosticado:** El estado final aparece como "Completado/Éxito" sin haber comprobado el checklist obligatorio, generando un "éxito falso".
**Touchpoints (5):** Checklist -> Intento de cierre -> Modal de estado -> Resumen -> Cierre real.
**Momento de Verdad:** Clic en "Cerrar sesión" o "Finalizar auditoría".
**Análisis Heurístico:**
- *Nielsen (Reconocer en lugar de recordar):* El sistema no muestra el estado real de completitud antes de cerrar.
- *Gestalt (Figura/Fondo):* El botón de éxito resalta visualmente aunque la tarea no esté completa.
**Datos:** Estimado (basado en flujos de auditoría estándar).