# Registro de Decisiones Técnicas

## 1. Justificación del Stack Tecnológico

### HTML5 + CSS3 + Vanilla JavaScript

**Decisión:** Utilizar tecnologías web nativas sin frameworks ni librerías externas.

**Justificación:**

| Criterio | Evaluación |
|---|---|
| **Curva de aprendizaje** | Baja — todos los integrantes dominan HTML/CSS/JS básico |
| **Velocidad de desarrollo** | Alta — sin configuración de build tools ni dependencias |
| **Portabilidad** | Total — funciona en cualquier navegador moderno sin instalación |
| **Evaluación docente** | Permite al docente revisar código línea por línea sin abstracciones |
| **Control del DOM** | Directo — ideal para demostrar manipulación de estado (localStorage, eventos) |
| **Peso final** | Mínimo — sin node_modules, sin bundles, sin CDN |

**Conclusión:** Para un prototipo académico de alta fidelidad con foco en IHC, Vanilla JS es más apropiado que React/Vue porque permite demostrar comprensión directa de los principios de interacción.

---

## 2. Nivel de Fidelidad: Alta fidelidad a 360px

**Decisión:** Prototipo mobile-first con viewport fijo de 360px.

**Justificación:**

1. **Contexto de uso real:** CaféU se usa en cafetería universitaria con smartphones.
2. **Restricción de diseño:** 360px es el ancho mínimo estándar (iPhone SE, Android base).
3. **Enfoque en IHC:** Al limitar el viewport, forzamos decisiones de:
   - Jerarquía visual clara
   - Touch targets adecuados (mínimo 44x44px)
   - Reducción de carga cognitiva
4. **Consistencia con Figma:** El diseño original fue creado en frame de 360px.

---

## 3. Principio de Repositorio Complementario

**Decisión:** Aplicar principios de una tarjeta a otra para demostrar transferencia de aprendizaje.

**Aplicaciones concretas:**

| Principio | Origen | Aplicado en |
|---|---|---|
| **Feedback e indicadores** | Dashboard UX (A-08) | CaféU (A-04) → Badge "Guardado" en carrito |
| **Prevención de errores** | CaféU (A-04) | Dashboard UX (A-12) → Modal bloquea éxito falso |
| **Visibilidad del estado** | Dashboard UX (A-08) | CaféU (A-04) → Ícono de alerta en carrito |
| **Recuperación de sesión** | Dashboard UX (A-12) | CaféU (A-04) → Carrito persistente en localStorage |

---

## 4. Alternativas Descartadas

| Alternativa | Motivo de descarte |
|---|---|
| **React + Vite** | Overkill para prototipo académico; añade complejidad de build innecesaria |
| **Bootstrap / Tailwind** | Oculta el aprendizaje de CSS puro; el docente no puede evaluar fundamentos |
| **Figma como prototipo final** | No permite interacción real con localStorage ni validación de estado |
| **Vue.js** | Similar a React; curva de aprendizaje no justificada para 3 tarjetas |
| **jQuery** | Tecnología legacy; no demuestra competencias modernas de JS |
| **PWA con Service Workers** | Fuera del alcance; el foco es IHC, no arquitectura de red |
| **Base de datos real (Firebase)** | No necesario; localStorage simula persistencia suficiente para el caso |
| **Framework CSS (Material UI)** | Limita personalización; no refleja identidad visual de CaféU |

---

## 5. Decisiones de Diseño Específicas

### 5.1 Paleta de colores

| Aplicación | Paleta | Justificación |
|---|---|---|
| **CaféU** | Tonos café (#92400E, #D97706) + neutros | Evoca identidad de cafetería universitaria |
| **Dashboard UX** | Azul (#3B82F6) + morado (#8B5CF6) | Transmite profesionalismo y confianza (auditoría) |

### 5.2 Tipografía

- **Familia:** System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto`)
- **Justificación:** Sin dependencias externas, renderizado nativo óptimo, carga instantánea

### 5.3 Iconografía

- **Enfoque:** Emojis nativos (️, ✅, 🔄) en lugar de librerías de iconos
- **Justificación:** Cero dependencias, accesibilidad nativa, carga inmediata

### 5.4 Animaciones

- **Duración:** 200-300ms (estándar Material Design)
- **Tipo:** `ease` para transiciones naturales
- **Justificación:** No distraen, refuerzan feedback sin saturar

---

## 6. Consideraciones de Accesibilidad

| Decisión | Implementación |
|---|---|
| **Contraste mínimo** | WCAG AA (4.5:1) en todos los textos |
| **Focus visible** | `outline: 2px solid` en elementos interactivos |
| **ARIA labels** | `role="alertdialog"`, `aria-labelledby`, `aria-hidden` en modales |
| **Navegación por teclado** | Todos los botones y checkboxes accesibles con Tab |
| **Cierre de modales** | Tecla Escape + clic fuera del modal |
