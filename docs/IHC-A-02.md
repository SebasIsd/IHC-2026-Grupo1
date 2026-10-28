# IHC-A-02: CAFÉU - Interacción 100% por Teclado

## 1. Diagnóstico
**Persona:** Estudiante con lesión temporal en la mano derecha.
**Tarea:** Editar pedido y finalizar sin ratón.
**Touchpoints (6):** 
1. Acceso al carrito -> 2. Visualización de ítems -> 3. Foco en botón "Quitar" -> 4. Acción de eliminar -> 5. Actualización de total -> 6. Confirmación final.
**Momentos de la verdad:** 
- M1: Lograr navegar hasta el botón "Quitar" usando solo Tab.
- M2: Eliminar el ítem sin perder el foco ni el contexto del pedido.

## 2. Curva Emocional
- Inicio: Neutral.
- Navegación (Tab): Frustración (el foco no es visible).
- Acción (Quitar): Ansiedad (no hay confirmación, miedo a borrar algo mal).
- Final: Alivio (si se logra) o Abandono (si se pierde el foco).

## 3. Requisitos (Foco Teclado)
1. Todos los elementos interactivos deben ser alcanzables mediante la tecla `Tab`.
2. El estado de foco (`:focus-visible`) debe ser claramente visible (anillo de alto contraste).
3. Los botones de acción ("Quitar") deben tener nombres accesibles (`aria-label`).
4. La tecla `Enter` o `Espacio` debe activar los botones enfocados.
5. La tecla `Escape` debe permitir cancelar la edición o cerrar modales.
6. Al eliminar un elemento, el foco debe restaurarse al elemento anterior o al contenedor padre.

## 4. Matriz de Trazabilidad
| Req | Touchpoint | Wireframe | Prototipo | Prueba |
|---|---|---|---|---|
| R1, R2 | Navegación | WF-1 | v2 | Pass |
| R3, R4 | Botón Quitar | WF-2 | v2 | Pass |
| R5 | Cancelar | WF-3 | v2 | Pass |
| R6 | Restaurar foco | WF-4 | v2 | Pass |