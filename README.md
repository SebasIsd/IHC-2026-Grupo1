# ☕ CaféU & 📊 Dashboard UX Forma — Prototipado Interactivo y Evaluación Integral de Usabilidad

**Evaluación Práctica Integradora (Parcial 2) — Interacción Humano-Computador (IHC)**  
**Universidad Técnica de Ambato (UTA) — Facultad de Ingeniería en Sistemas, Electrónica e Industrial (FISEI)**  
**Carrera de Software | Quinto Semestre — Paralelo "A" | Grupo 1 | Año: 2026**

---

## 📌 1. Descripción del Proyecto

El presente proyecto académico constituye la entrega integral de la **Evaluación Práctica de Interacción Humano-Computador (IHC)**, correspondiente al Segundo Parcial. En este repositorio se consolida el trabajo multidisciplinario del **Grupo 1**, abordando dos ecosistemas de interfaz complementarios diseñados bajo metodologías centradas en el usuario:

1. **CaféU (Sistema Móvil de Pedidos Universitarios - Tarjetas IHC-A-01 a IHC-A-06):**  
   Una aplicación web móvil concebida para estudiantes universitarios que cuentan con descansos cortos (10 a 15 minutos). CaféU elimina la necesidad de realizar largas filas en mostrador y minimiza la incertidumbre operativa permitiendo consultar el menú del día, personalizar cantidades con recálculo dinámico en tiempo real, filtrar alérgenos alimentarios críticos, controlar estrictamente el presupuesto estudiantil (con límite configurado en USD 4,25), tolerar intermitencias de red y confirmar pedidos con un flujo seguro y sin exposición de datos confidenciales.

2. **Dashboard UX "Forma" (Plataforma de Investigación y Evaluación UT-024 - Tarjetas IHC-A-07 a IHC-A-12):**  
   Una suite de herramientas para investigadores y evaluadores de usabilidad. Permite registrar participantes en sesiones experimentales bajo rigurosa anonimización y protección de datos personales (códigos seudónimos obligatorios validados por regex), gestionar un stepper de 6 etapas para guiar protocolos de evaluación de 45 minutos, salvaguardar automáticamente el progreso en almacenamiento local (`localStorage`), garantizar compatibilidad universal con lectores de pantalla mediante estándares WAI-ARIA y adaptarse responsive a cualquier factor de forma desde 360 px de ancho.

A lo largo del proyecto se cubren de manera exhaustiva las **5 fases metodológicas de IHC**: Diagnóstico y Requisitos, Arquitectura y Wireframes Lo-Fi, Prototipado Funcional v1, Pruebas Cognitivas con usuarios externos (*Think Aloud*) y Resolución de Incidencias Sorpresa en tiempo real post-minuto 100 con entrega de prototipos refinados v2.

---

## 🎯 2. Objetivos

### Objetivo General
Diseñar, implementar y evaluar prototipos interactivos funcionales para los sistemas *CaféU* y *Dashboard UX Forma*, aplicando principios teóricos de Interacción Humano-Computador, heurísticas de usabilidad de Jakob Nielsen, pautas de accesibilidad WCAG 2.1 Nivel AAA y el modelo de microinteracciones de Dan Saffer, verificando su comportamiento mediante pruebas cognitivas empíricas y resolución de incidencias técnicas bajo condiciones límite.

### Objetivos Específicos
* **Diagnosticar puntos de dolor y momentos de la verdad:** Identificar los fallos de interacción existentes en los sistemas base (totales desincronizados, sobrecostos sin advertencia, fugas de datos de identidad, bloqueos por fallos de red y pérdidas de estado).
* **Diseñar arquitectura y wireframes consistentes:** Estructurar mapas de navegación (sitemaps), flujos de usuario detallados (happy path y flujos alternativos de error) y wireframes vectoriales a escala que prioricen la jerarquía visual y la reducción de carga cognitiva.
* **Desarrollar prototipos interactivos funcionales (v1 y v2):** Construir interfaces operativas mediante HTML5, CSS3, JavaScript reactivo y componentes de Figma que demuestren estados del sistema (vacío, carga, error y éxito) y microinteracciones fluidas (<100 ms).
* **Ejecutar evaluación empírica con usuarios reales:** Conducir pruebas de caminata cognitiva y protocolo de pensamiento en voz alta (*Think Aloud*) con participantes externos, registrando tiempos, dudas, tasas de éxito y hallazgos críticos.
* **Resolver incidencias sorpresa y documentar la mejora:** Aplicar modificaciones de alta criticidad en los prototipos (recálculo reactivo garantizado, límite presupuestario de $4.25 con diálogo de ajuste, anonimización regex `^PART-[0-9]{3}$`, accesibilidad ARIA y persistencia) justificando documentalmente la comparativa "Antes vs. Después".

---

## 🔎 3. Problema de Diseño

### Contexto 1: Cafetería Universitaria (CaféU)
En el campus universitario, los estudiantes enfrentan descansos de corta duración entre clases consecutivas. El esquema tradicional de compra genera múltiples cuellos de botella:
* **Fricción temporal:** Filas físicas congestionadas que consumen la totalidad del descanso.
* **Falta de retroalimentación en compras:** Al editar cantidades de productos, la interfaz original no actualizaba el total o permitía confirmar órdenes con importes obsoletos.
* **Incertidumbre financiera:** Estudiantes con presupuestos ajustados (ej. $4,25 diarios) sobrepasaban su saldo sin alertas previas antes de enviar la orden.
* **Riesgos de salud y privacidad:** Falta de filtros preventivos para alérgenos alimentarios comunes y exposición de datos personales/financieros innecesarios en la pantalla final de retiro.
* **Vulnerabilidad de red:** En zonas de campus con baja cobertura Wi-Fi, la pérdida de paquetes provocaba órdenes duplicadas o transacciones truncadas sin retroalimentación.

### Contexto 2: Laboratorio de Investigación UX (Dashboard Forma)
Durante las sesiones de pruebas de usabilidad del estudio experimental UT-024:
* **Vulneración de privacidad (Ética de Investigación):** El formulario original solicitaba nombres y apellidos de los evaluados, incumpliendo normativas de protección de datos personales.
* **Pérdida de esfuerzo:** Evaluadores completando listas de cotejo de 45 minutos perdían todas sus anotaciones si el navegador se cerraba o recargaba de improvisto.
* **Barreras de accesibilidad digital:** Interfaces incompatibles con lectores de pantalla (ausencia de etiquetas semánticas y roles ARIA) y diseño colapsado en pantallas móviles reducidas (360 px).

### 💡 Solución Propuesta
Crear un entorno digital consistente, altamente reactivo y accesible que implemente:
1. **Recálculo instantáneo en el cliente:** Sincronización inmediata de subtotales, impuestos y totales generales, bloqueando cualquier acción de pago si los valores no están actualizados.
2. **Sistema preventivo de presupuesto:** Alerta persistente y modales de negociación antes de sobrepasar el umbral de USD 4,25.
3. **Anonimización algorítmica obligatoria:** Reemplazo de identidad por códigos regex estandarizados (`PART-XXX`) con validación en tiempo real.
4. **Resiliencia y accesibilidad integral:** Soporte de navegación por teclado sin trampas de foco, compatibilidad con lectores de pantalla NVDA/TalkBack y layouts elásticos probados rigurosamente a 360 px de ancho.

---

## 👤 4. Usuario Objetivo

| Característica | Perfil 1: Estudiante Universitario (CaféU) | Perfil 2: Investigador / Evaluador UX (Dashboard Forma) |
| :--- | :--- | :--- |
| **Usuario Principal** | Estudiante de pregrado (FISEI / UTA) | Investigador UX, docente o evaluador de software |
| **Rango de Edad** | 18 a 26 años | 21 a 50 años |
| **Dispositivo de Acceso** | Smartphone personal (viewport estándar 360 px – 390 px) | Computador portátil, estación de trabajo o tablet |
| **Contexto de Uso** | Cafetería del campus, pasillos o aulas durante el receso | Laboratorio de usabilidad, cubículo de estudio o sala de pruebas |
| **Objetivo Central** | Pedir desayuno/refrigerio en <3 minutos sin equivocaciones | Guiar sesiones de evaluación de 45 min y registrar métricas fiables |
| **Presupuesto / Restricción** | **Límite diario de USD 4,25** | Protocolo estricto de confidencialidad y tiempo límite de sesión |
| **Principales Frustraciones** | Errores en cobro, pedidos lentos, exceder presupuesto, alergias | Pérdida de notas de evaluación, violación de datos, falta de accesibilidad |

### Escenario de Uso Típico — CaféU (Estudiante)
Un estudiante ingresa a CaféU con USD 4,25 en su cuenta estudiantil. Desea ordenar su combo habitual durante el cambio de hora (10 minutos disponibles):
* **Café Americano:** 1 unidad × USD 1,50
* **Sánduche Clásico:** 1 unidad × USD 2,75
* **Total:** **USD 4,25**  
El estudiante ajusta cantidades con un stepper reactivo, recibe aviso preventivo de presupuesto exacto, verifica la ausencia de alérgenos que le afecten y confirma su pedido recibiendo su identificador único `#CU-104` en menos de 90 segundos.

---

## 📱 5. Funcionalidades del Prototipo y Matriz de Tarjetas

El proyecto implementa la totalidad de las 12 tarjetas de intervención asignadas al Grupo 1, divididas de manera balanceada entre sus 4 integrantes:

### Sistema CaféU (Pedidos Móviles)
* **IHC-A-01 (Wilson Pillapa):** *Recálculo Reactivo de Total y Adaptación a 360px.* Actualización instantánea (<100 ms) de cantidad, subtotal, IVA 15% y total; bloqueo de confirmación ante importes desactualizados; optimización para pantallas compactas de 360 px bajo estrés de 3 minutos.
* **IHC-A-02 (Alex Guachi):** *Tolerancia a Red Inestable y Manejo de Conectividad.* Detección de fallos de conexión, estado visual de reintento automático y garantía de idempotencia en transacciones.
* **IHC-A-03 (Viviana Sarco):** *Confirmación Limpia y Protección de Datos Sensibles.* Pantalla de éxito con identificador `#CU-104`, resumen claro de ítems y ocultamiento estricto de números de tarjeta o credenciales privadas.
* **IHC-A-04 (Sebastián Santana):** *Filtros de Menú y Alertas de Alérgenos.* Identificación visual mediante insignias contrastadas para gluten, lactosa y frutos secos con avisos de prevención en ficha de producto.
* **IHC-A-05 (Wilson Pillapa):** *Límite Presupuestario de USD 4,25.* Barra indicadora de consumo, alerta visual preventiva al alcanzar o exceder los $4.25, bloqueo de checkout no autorizado y diálogo para ajustar pedido sin vaciar el carrito.
* **IHC-A-06 (Alex Guachi):** *Navegación por Teclado y Foco Accesible.* Flujo completo operable con teclas `Tab`, `Shift+Tab`, `Enter` y `Escape`, sin trampas de foco en modales ni formularios.

### Sistema Dashboard Forma (Investigación UX UT-024)
* **IHC-A-07 (Viviana Sarco):** *Stepper Visual de 6 Etapas.* Barra de progreso cronológico y secuencial para pruebas de usabilidad de 45 minutos con temporizador activo y estado por fase.
* **IHC-A-08 (Sebastián Santana):** *Persistencia Local de Checklist.* Guardado automático y transparente en `localStorage` de casillas marcadas y observaciones, tolerando recargas accidentales.
* **IHC-A-09 (Wilson Pillapa):** *Anonimización Seudónima Obligatoria.* Eliminación de campos de nombre real; obligatoriedad de código de participante validado por expresión regular `^PART-[0-9]{3}$` y hash irreversible.
* **IHC-A-10 (Alex Guachi):** *Prevención de Inicio Inválido.* Inhabilitación proactiva del botón de inicio de sesión hasta completar campos requeridos y consentimiento informado.
* **IHC-A-11 (Viviana Sarco):** *Layout Responsivo Adaptable a 360px.* Transformación dinámica de la interfaz desktop a una columna elástica optimizada para dispositivos táctiles sin barras de desplazamiento horizontal.
* **IHC-A-12 (Sebastián Santana):** *Accesibilidad Semántica ARIA.* Implementación de regiones semánticas (`banner`, `main`, `contentinfo`), anuncios dinámicos `role="status"` y atributos `aria-live="polite"` para lectores de pantalla.

### Recorridos Principales (User Flows)
```mermaid
flowchart TD
    subgraph CafeU["☕ Flujo Principal CaféU (Móvil 360px)"]
        A[Inicio / Catálogo] --> B[Seleccionar Productos & Verificar Alérgenos]
        B --> C[Ajustar Cantidades en Stepper]
        C --> D{¿Total > $4.25?}
        D -- Sí --> E[Alerta Presupuestaria: Ajustar Ítems]
        E --> C
        D -- No --> F[Revisar Pedido: Recálculo en tiempo real]
        F --> G[Confirmar Pedido]
        G --> H[Pantalla Éxito: Orden #CU-104 y Retiro en Caja]
    end

    subgraph Dashboard["📊 Flujo Dashboard UX Forma (Desktop / Móvil)"]
        I[Acceso a Estudio UT-024] --> J[Ingreso de Código Seudónimo PART-XXX]
        J --> K{Validación Regex ^PART-0-9{3}$}
        K -- Inválido --> L[Mensaje de Error Accesible ARIA]
        L --> J
        K -- Válido --> M[Inicio Sesión: Stepper 6 Pasos]
        M --> N[Completar Checklist con Auto-guardado LocalStorage]
        N --> O[Cierre Seguro de Sesión y Resumen Anonimizado]
    end
```

---

## 🧠 6. Principios de IHC Aplicados

| Principio / Estándar | Fundamento Teórico | Implementación en el Repositorio |
| :--- | :--- | :--- |
| **Visibilidad del Estado del Sistema** | *Heurística #1 de Jakob Nielsen* | Indicadores de recálculo instantáneo, temporizador dinámico del stepper, barra de consumo presupuestario y banners de estado (online/offline). |
| **Prevención de Errores** | *Heurística #5 de Jakob Nielsen* | Bloqueo automático del botón de envío si el importe del carrito no coincide con el cálculo del servidor; máscaras de entrada para formato de código seudónimo. |
| **Control y Libertad del Usuario** | *Heurística #3 de Jakob Nielsen* | Diálogo de ajuste presupuestario que permite modificar cantidades o eliminar ítems individuales sin perder el contenido restante del carrito. |
| **Diseño y Estética Minimalista** | *Heurística #8 de Jakob Nielsen* | Eliminación de datos irrelevantes en la confirmación de compra; enfoque exclusivo en número de orden y tiempo estimado de retiro. |
| **Leyes de la Gestalt** | *Proximidad y Región Común* | Agrupación visual mediante tarjetas de productos delimitadas, separación clara entre subtotales e impuestos, y encasillamiento de pasos en el stepper. |
| **Microinteracciones de Dan Saffer** | *Trigger → Rules → Feedback → Loops* | Pulsadores `[+]` y `[-]` que escalan elásticamente (1.05x), actualizan precio en <16 ms y deshabilitan el incremento al topar stock o presupuesto. |
| **Accesibilidad Web (WCAG 2.1 AAA)** | *Perceptible, Operable, Comprensible* | Ratio de contraste de texto > 7:1 en fondos oscuros y claros; áreas de pulsación mínimas de 44 × 44 px; etiquetas semánticas y compatibilidad con NVDA. |
| **Privacidad desde el Diseño (PbD)** | *Minimización de Datos (K-Anonimato)* | Prohibición estricta de captura de nombres y correos personales en el registro; sustitución técnica por códigos `PART-XXX`. |

---

## 🔄 7. Metodología de Desarrollo en 5 Fases

El desarrollo del proyecto se ejecutó siguiendo una rigurosa metodología iterativa de 5 fases de ingeniería de usabilidad:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│     FASE 1      │ ──> │     FASE 2      │ ──> │     FASE 3      │ ──> │     FASE 4      │ ──> │     FASE 5      │
│  Diagnóstico &   │     │  Arquitectura & │     │   Prototipado   │     │Prueba Cognitiva │     │  Incidencias &  │
│   Requisitos    │     │Wireframes Lo-Fi │     │ Funcional (v1)  │     │   con Usuario   │     │  Prototipo v2   │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
```

1. **Fase 1 — Diagnóstico y Requisitos:**  
   Auditoría de las interfaces heredadas para identificar fallos críticos, modelado de 6 a 8 touchpoints y definición de 2 momentos clave de la verdad. Redacción de requisitos funcionales y no funcionales verificables en `docs/requisitos.md` y `docs/trazabilidad.md`.
2. **Fase 2 — Arquitectura y Wireframes Lo-Fi:**  
   Elaboración de mapas de arquitectura de información (sitemaps) y diseño de wireframes de baja fidelidad en formato vectorial SVG y tableros Figma, garantizando compatibilidad estructural a 360 px.
3. **Fase 3 — Prototipado Interactivo v1:**  
   Desarrollo de prototipos funcionales independientes y navegables con código fuente estructurado en HTML, CSS y JavaScript Vanilla. Modelado de estados operativos: Inicial, En Proceso, Error y Éxito.
4. **Fase 4 — Evaluación Heurística y Prueba Cognitiva:**  
   Ejecución de sesiones experimentales con participantes externos al equipo de trabajo aplicando el protocolo *Think Aloud*. Documentación en matrices formales de observación, tasa de finalización de tareas y errores de navegación en `pruebas/`.
5. **Fase 5 — Incidencia Sorpresa y Prototipo Refinado v2:**  
   Inyección de requerimientos de alta exigencia comunicados de forma imprevista post-minuto 100 de la práctica. Implementación de contramedidas técnicas inmediatas, generación de prototipos v2 y elaboración de evidencias gráficas comparativas "Antes vs. Después".

---

## 👥 8. Equipo de Trabajo (Grupo 1)

| N.º | Integrante | Rol Principal | Usuario GitHub | Correo Institucional | Tarjetas Asignadas |
| :---: | :--- | :--- | :---: | :--- | :---: |
| **1** | **Sarco Sailema Viviana Maribel** | Especialista en Flujos y Diseño Responsivo | [@maribelsailema](https://github.com/maribelsailema) | `vsarco7769@uta.edu.ec` | IHC-A-03, IHC-A-07, IHC-A-11 |
| **2** | **Santana Durán Sebastián Israel** | Especialista en Accesibilidad y Persistencia | [@SebasIsd](https://github.com/SebasIsd) | `ssantana1312@uta.edu.ec` | IHC-A-04, IHC-A-08, IHC-A-12 |
| **3** | **Pillapa Tubón Wilson Joseph** | Especialista en Arquitectura Reactiva y Privacidad | [@W1LSONN](https://github.com/W1LSONN) | `wpillapa8482@uta.edu.ec` | IHC-A-01, IHC-A-05, IHC-A-09 |
| **4** | **Guachi Aucapiña Alex Fabricio** | Especialista en Resiliencia y Evaluación Heurística | [@A1EXF6A](https://github.com/A1EXF6A) | `aguachi4414@uta.edu.ec` | IHC-A-02, IHC-A-06, IHC-A-10 |

---

## 📋 9. Distribución de Actividades y Matriz de Entregables

| Tarjeta | Sistema | Responsable | Problema / Fallo Inicial | Solución v1 / v2 e Incidencia Sorpresa | Estado |
| :---: | :---: | :---: | :--- | :--- | :---: |
| **IHC-A-01** | CaféU | Wilson Pillapa | Total no cambia al alterar cantidades en carrito | Recálculo reactivo dinámico (<100 ms), anuncio sonoro/visual y bloqueo de pago obsoleto a 360 px. | Concluido |
| **IHC-A-02** | CaféU | Alex Guachi | Cuelgue ante caídas de red Wi-Fi | Detección offline, reintento automático idempotente y banner informativo. | Concluido |
| **IHC-A-03** | CaféU | Viviana Sarco | Exposición de credenciales de pago en confirmación | Pantalla limpia de orden `#CU-104`, supresión de datos sensibles y tiempo de retiro en caja. | Concluido |
| **IHC-A-04** | CaféU | Sebastián Santana | Falta de avisos preventivos para alérgenos | Badges de alto contraste para alérgenos y filtros dietéticos en menú. | Concluido |
| **IHC-A-05** | CaféU | Wilson Pillapa | Sobrecosto silencioso que excede saldo del usuario | Límite estricto en USD 4,25, barra de gasto en vivo y modal de ajuste de ítems sin pérdida de carrito. | Concluido |
| **IHC-A-06** | CaféU | Alex Guachi | Inaccesible mediante teclado; trampas de foco | Navegación `Tab`/`Enter` fluida, orden de tabulación lógico y bypass de modales. | Concluido |
| **IHC-A-07** | Dashboard | Viviana Sarco | Desorientación en protocolos de usabilidad | Stepper visual de 6 pasos para sesión UT-024 (45 min) con temporizador regresivo. | Concluido |
| **IHC-A-08** | Dashboard | Sebastián Santana | Pérdida de notas al refrescar navegador | Persistencia automática transparente de notas y estados en `localStorage`. | Concluido |
| **IHC-A-09** | Dashboard | Wilson Pillapa | Formulario exige nombre real violando privacidad | Anonimización total por código seudónimo obligatorio `^PART-[0-9]{3}$` y hash SHA-256. | Concluido |
| **IHC-A-10** | Dashboard | Alex Guachi | Formulario permite envío con datos en blanco | Validación preventiva y bloqueo de botón de inicio hasta completar prerrequisitos. | Concluido |
| **IHC-A-11** | Dashboard | Viviana Sarco | Desbordamiento horizontal en pantallas móviles | Grid elástico adaptable a 360 px de ancho sin scroll horizontal y controles táctiles de 48 px. | Concluido |
| **IHC-A-12** | Dashboard | Sebastián Santana | Incompatible con lectores de pantalla para invidentes | Árbol de accesibilidad completo con roles ARIA, `aria-live` y navegación para NVDA. | Concluido |

---

## 📁 10. Estructura del Repositorio

El repositorio se encuentra rigurosamente normalizado en 6 directorios técnicos principales que respaldan la trazabilidad completa del proyecto:

```text
IHC-2026-Grupo1/
├── .gitignore
├── README.md                              <- Ficha técnica y documentación maestra del proyecto
├── diagramas/                             <- Sitemaps, user flows y diagramas de navegación
│   ├── IHC-A-01.md                        <- Flujos de recálculo y estados del carrito
│   ├── IHC-A-02/                          <- Carpeta de diagramas: sitemap.png, flujoprincipal.png, flujoerror.png
│   ├── IHC-A-03.md                        <- Flujo de confirmación segura de orden
│   ├── IHC-A-04.md                        <- Flujo de filtrado y detección de alérgenos
│   ├── IHC-A-05.md                        <- Flujo de control presupuestario y diálogo de ajuste
│   ├── IHC-A-06/                          <- Carpeta de diagramas de accesibilidad por teclado
│   ├── IHC-A-07.md                        <- Flujo de navegación del stepper de 6 fases
│   ├── IHC-A-08.md                        <- Diagrama de sincronización y persistencia local
│   ├── IHC-A-09.md                        <- Flujo de anonimización y validación regex seudónima
│   ├── IHC-A-10/                          <- Carpeta de diagramas de validación de formularios
│   ├── IHC-A-11.md                        <- Diagrama de adaptabilidad y breakpoints responsivos
│   └── IHC-A-12.md                        <- Árbol de jerarquía y anuncios semánticos ARIA
├── docs/                                  <- Especificaciones técnicas, requisitos y diagnóstico individual
│   ├── IHC-A-01.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-01
│   ├── IHC-A-02.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-02
│   ├── IHC-A-03.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-03
│   ├── IHC-A-04.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-04
│   ├── IHC-A-05.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-05
│   ├── IHC-A-06.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-06
│   ├── IHC-A-07.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-07
│   ├── IHC-A-08.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-08
│   ├── IHC-A-09.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-09
│   ├── IHC-A-10.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-10
│   ├── IHC-A-11.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-11
│   └── IHC-A-12.md                        <- Especificación: Diagnóstico, requisitos e incidencias IHC-A-12
├── evidencias/                            <- Comparativas visuales de resolución y métricas
│   ├── IHC-A-01-antes-despues.svg         <- Comparativa visual Antes (Fallo) vs Después (Recálculo v2)
│   ├── IHC-A-03-antes-despues.svg         <- Comparativa de pantalla de confirmación limpia
│   ├── IHC-A-04.md                        <- Evidencias de implementación de filtros de alérgenos
│   ├── IHC-A-05-antes-despues.svg         <- Comparativa de alerta de presupuesto USD 4,25 y modal
│   ├── IHC-A-07-antes-despues.svg         <- Comparativa de stepper de progreso cronológico
│   ├── IHC-A-08.md                        <- Evidencias de persistencia y tolerancia a recarga
│   ├── IHC-A-09-antes-despues.svg         <- Comparativa de anonimización (Nombre real vs PART-XXX)
│   ├── IHC-A-11-antes-despues.svg         <- Comparativa de adaptabilidad desktop a 360 px
│   └── IHC-A-12.md                        <- Evidencias de pruebas con lectores de pantalla ARIA
├── prototipo/                             <- Código fuente y entregables funcionales
│   ├── v1/                                <- Prototipos iniciales con incidencias presentes
│   │   ├── IHC-A-01.png                   <- Captura del prototipo v1 con fallo de total
│   │   ├── IHC-A-04.html, .css, .js       <- Prototipo navegable v1 de filtros
│   │   ├── IHC-A-05.png                   <- Captura de prototipo v1 sin alerta de presupuesto
│   │   ├── IHC-A-08.html, .js, -12.css    <- Prototipo navegable v1 de persistencia
│   │   ├── IHC-A-09.png                   <- Captura v1 con formulario vulnerable
│   │   └── IHC-A-12.html, .js             <- Prototipo v1 preliminar de accesibilidad
│   └── v2/                                <- Prototipos refinados con incidencias resueltas
│       ├── IHC-A-01.png                   <- Captura v2 con recálculo dinámico y alerta activa
│       ├── IHC-A-04.html, .css, .js       <- Prototipo funcional v2 con filtros mejorados
│       ├── IHC-A-05.png                   <- Captura v2 con modal de negociación presupuestaria
│       ├── IHC-A-08.html, .js, -12.css    <- Prototipo funcional v2 con persistencia en localStorage
│       ├── IHC-A-09.png                   <- Captura v2 con validación regex y código seudónimo
│       └── IHC-A-12.html, .js             <- Prototipo v2 con soporte ARIA completo
├── pruebas/                               <- Registros formales de pruebas cognitivas con usuarios
│   ├── IHC-A-01-prueba.md                 <- Reporte de prueba cognitiva: Recálculo en 360px
│   ├── IHC-A-02_registro_prueba.md        <- Reporte de prueba de conectividad y reintento
│   ├── IHC-A-03-prueba.md                 <- Reporte de prueba: Confirmación limpia
│   ├── IHC-A-04.md                        <- Reporte de prueba: Filtros de alérgenos
│   ├── IHC-A-05-prueba.md                 <- Reporte de prueba: Límite presupuestario USD 4,25
│   ├── IHC-A-06_registro_prueba.md        <- Reporte de prueba: Navegación por teclado
│   ├── IHC-A-07-prueba.md                 <- Reporte de prueba: Stepper de 6 etapas
│   ├── IHC-A-08.md                        <- Reporte de prueba: Resiliencia de checklist
│   ├── IHC-A-09-prueba.md                 <- Reporte de prueba: Validación de código seudónimo
│   ├── IHC-A-10_registro_prueba.md        <- Reporte de prueba: Prevención de inicio inválido
│   ├── IHC-A-11-prueba.md                 <- Reporte de prueba: Ergonomía táctil a 360px
│   └── IHC-A-12.md                        <- Reporte de prueba: Evaluación con lector de pantalla
└── wireframes/                            <- Diseños Lo-Fi vectoriales a escala 360px / desktop
    ├── IHC-A-01-recalculo.svg             <- Wireframe de arquitectura de carrito y recálculo
    ├── IHC-A-03-confirmacion.svg          <- Wireframe de confirmación de pedido segura
    ├── IHC-A-05-presupuesto.svg           <- Wireframe de estados presupuestarios y modal de ajuste
    ├── IHC-A-07-stepper.svg               <- Wireframe de stepper para evaluación UT-024
    ├── IHC-A-09-anonimizacion.svg         <- Wireframe de vista seudónima de consentimiento
    └── IHC-A-11-responsive.svg            <- Wireframe de transformación responsiva a 360px
```

---

## 🛠️ 11. Herramientas Utilizadas

| Herramienta | Finalidad Técnica en el Proyecto |
| :--- | :--- |
| **Figma (Design & Prototype)** | Diseño de wireframes vectoriales, sistemas de diseño de componentes móviles, variantes interactivas de microinteracciones y flujos interactivos navegables. |
| **HTML5 Semántico & CSS3 Moderno** | Construcción de maquetas web funcionales con Flexbox y CSS Grid elástico, garantizando un viewport restringido a 360 px sin desbordamiento. |
| **JavaScript Vanilla (ES6+)** | Lógica reactiva para el recálculo dinámico de subtotales/IVA, persistencia en `localStorage`, algoritmos de validación regex y manejo de eventos del DOM. |
| **Git & GitHub** | Control distribuido de versiones, bifurcación por ramas de características (`feature/`), integración mediante Pull Requests y resolución colaborativa de conflictos. |
| **SVG Vectorial** | Creación de diagramas y wireframes de alta precisión escalables sin pérdida de resolución para documentación embebida. |
| **Visual Studio Code** | Entorno de desarrollo integrado para codificación, pruebas locales y estructuración de la documentación técnica. |
| **Markdown & KaTeX** | Elaboración estandarizada de informes de ingeniería de usabilidad, matrices de evaluación y fórmulas matemáticas de cálculo de métricas. |

---

## 📚 12. Conclusiones

1. **La reactividad de la interfaz y la visibilidad del estado reducen drásticamente la tasa de error:**  
   La implementación de microinteracciones con tiempos de respuesta menores a 100 ms y recálculo en vivo en el carrito de CaféU demostró en las pruebas cognitivas que los usuarios corrigen cantidades intuitivamente y con cero dudas. Eliminar el desfase entre las acciones del usuario y los importes reflejados previene transacciones erróneas y optimiza el tiempo de compra dentro de la ventana crítica de 3 minutos.

2. **La privacidad y la accesibilidad deben concebirse como pilares estructurales, no como adiciones posteriores:**  
   La resolución de la anonimización mediante códigos seudónimos obligatorios (`^PART-[0-9]{3}$`) en el Dashboard Forma evidenció que la protección de datos no penaliza la experiencia de usuario si se acompaña de mensajes de validación inline claros y ayudas contextuales. Asimismo, la estructuración semántica con roles ARIA y contrastes WCAG AAA habilitó el uso universal del sistema sin degradar la estética visual.

3. **Las pruebas empíricas (*Think Aloud*) y las incidencias sorpresa fortalecen la madurez del diseño:**  
   La evaluación con usuarios externos expuso fricciones reales que ningún análisis estático previo logró anticipar, tales como la frustración ante la superación silenciosa del presupuesto de USD 4,25. La capacidad de iterar rápidamente desde los prototipos v1 hacia versiones v2 con diálogos de negociación y persistencia local ratifica la importancia del ciclo iterativo de diseño centrado en el ser humano.

---
*Grupo 1 — Quinto Semestre "A" — Carrera de Software — Universidad Técnica de Ambato (2026)*
