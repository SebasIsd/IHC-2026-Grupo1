# IHC-A-06: CAFÉU - Red Móvil Inestable y Duplicados

## 1. Diagnóstico
**Persona:** Estudiante con red móvil inestable (3G/4G intermitente).
**Tarea:** Confirmar pedido desde el teléfono.
**Touchpoints (6):** 
1. Revisión final -> 2. Clic en "Confirmar" -> 3. Espera de respuesta -> 4. Feedback visual -> 5. Recepción de éxito/error -> 6. Pantalla final.
**Momentos de la verdad:** 
- M1: El usuario hace clic en "Confirmar" y no sabe si el sistema lo recibió.
- M2: El usuario hace doble clic por desesperación y se generan dos pedidos.

## 2. Curva Emocional
- Inicio: Apresurado.
- Clic inicial: Incertidumbre (spinner o falta de él).
- Doble clic: Pánico (miedo a cobro doble).
- Resolución: Alivio (si hay estados claros) o Enojo (si se duplica).

## 3. Requisitos (Foco Red)
1. Al hacer clic en "Confirmar", el botón debe deshabilitarse inmediatamente.
2. El sistema debe mostrar un estado explícito de "Pendiente...".
3. Simular/Manejar latencia de red sin bloquear la UI completamente.
4. Si la red falla, mostrar estado "No confirmado" con botón de "Reintentar".
5. Si la red es exitosa, mostrar estado "Confirmado" con número de orden.
6. Prevenir técnicamente el envío duplicado de la solicitud (debounce/disabled).

## 4. Matriz de Trazabilidad
| Req | Touchpoint | Wireframe | Prototipo | Prueba |
|---|---|---|---|---|
| R1, R6 | Clic inicial | WF-1 | v2 | Pass |
| R2, R3 | Espera | WF-2 | v2 | Pass |
| R4 | Fallo de red | WF-3 | v2 | Pass |
| R5 | Éxito | WF-4 | v2 | Pass |