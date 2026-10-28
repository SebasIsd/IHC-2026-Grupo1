# REPOSITORIO OFICIAL · PRUEBA PRÁCTICA INTEGRADORA IHC
## Universidad Técnica de Ambato · FISEI · Carrera de Software
### Asignatura: Interacción Humano-Computador (IHC) · Quinto Semestre · Paralelo A
### Docente: Ing. José Rubén Caiza Caizabuano
### Equipo de Trabajo: GRUPO 1

---

## 1. INTEGRANTES Y DISTRIBUCIÓN DE TARJETAS

| Integrante | Usuario GitHub | Tarjetas Asignadas | Casos Desarrollados |
| :--- | :--- | :---: | :--- |
| **Wilson Pillapa** | `@W1LSONN` | **IHC-A-01 · IHC-A-05 · IHC-A-09** | CaféU (360px & Recálculo) · CaféU (Presupuesto $4.25) · Dashboard Forma (Anonimización Regex) |
| **Alex Guachi** | `@A1EXF6A` | **IHC-A-02 · IHC-A-06 · IHC-A-10** | CaféU (Navegación Teclado) · CaféU (Red Inestable & Idempotencia) · Dashboard Forma (Accesibilidad Lector) |
| **Viviana Sarco** | `@maribelsailema` | **IHC-A-03 · IHC-A-07 · IHC-A-11** | CaféU (Confirmación & Privacidad) · Dashboard Forma (Stepper Secuencial) · Dashboard Forma (Layout 360px) |
| **Sebastián Santana** | `@SebasIsd` | **IHC-A-04 · IHC-A-08 · IHC-A-12** | CaféU (Alérgenos Perceptibles) · Dashboard Forma (Persistencia Checklist) · Dashboard Forma (Recuperación Sesión) |

---

## 2. VISIÓN GENERAL Y FUENTES DE ENTRADA

Este repositorio integra la ejecución completa de las **5 Fases de Ingeniería de IHC** para las **12 Tarjetas de Evaluación Práctica**:

1. **Caso CaféU Móvil (Tarjetas IHC-A-01 a IHC-A-06):**
   - Basado en el informe `APE4_Fase2_Reporte_CafeU.pdf` y el repositorio didáctico `Sax300-cpu/HCI-2026-G2`.
   - Flujo express de cafetería universitaria: Catálogo, personalización de productos (Café americano $1.50, Sánduche $2.75), revisión de pedido en carrito y confirmación con ticket `#CU-104` en Ventanilla Exclusiva #2.
2. **Caso Dashboard UX "Forma" (Tarjetas IHC-A-07 a IHC-A-12):**
   - Basado en el diseño `Desboard.jpeg` y el repositorio `maribelsailema/HCI_2026_G1`.
   - Plataforma de investigación UX para el estudio `UT-024` (Atlas commerce, 5 compradores, 45 min): barra lateral de preparación (readiness), métricas de usabilidad en Card UI, Stepper horizontal de 6 pasos y Checklist Grid previa.

---

## 3. MATRIZ INTEGRAL DE LAS 12 TARJETAS (GRUPO 1)

| Código | Caso | Tarea Crítica Principal | Fallo Diagnosticado (v1) | Incidencia Sorpresa Resuelta (v2) | Responsable |
| :---: | :---: | :--- | :--- | :--- | :--- |
| **IHC-A-01** | CaféU | Pedido express en viewport 360px con límite de 3 min | Total en barra queda congelado en $4.25 al variar cantidades en Stepper (Heurística #1) | Recálculo reactivo &lt;16ms, anuncio con `aria-live` y bloqueo de importes obsoletos | Wilson Pillapa |
| **IHC-A-02** | CaféU | Editar pedido y finalizar navegación 100% por teclado | Botón eliminar sin etiqueta accesible ni diálogo de confirmación | Cuadro de diálogo accesible y restauración/retención de foco visual | Alex Guachi |
| **IHC-A-03** | CaféU | Confirmación y salida segura en dispositivo compartido | Pantalla dice «Listo» pero no muestra ticket identificador ni desglose | Identificador #CU-104, desglose visible y retiro en Ventanilla #2 | Viviana Sarco |
| **IHC-A-04** | CaféU | Consulta de ingredientes y advertencia perceptible de alérgenos | Sistema permite confirmar sin alertar sobre ingredientes críticos de riesgo | Advertencia visible WCAG AAA y confirmación con checkbox sin vaciar carrito | Sebastián Santana |
| **IHC-A-05** | CaféU | Ajuste de cantidades con límite presupuestario de USD 4,25 | Stepper incrementa costo sin feedback; total excede $4.25 sin advertencia previa (Heurística #5) | Interceptor modal pre-confirmación que ofrece ajustar pedido conservando carrito | Wilson Pillapa |
| **IHC-A-06** | CaféU | Confirmación en red móvil intermitente (3G/4G campus) | Dos pulsaciones consecutivas generan confirmaciones duplicadas (falta de idempotencia) | Modelado de 3 estados (Loading con micro-spinner, Error inline `#fef2f2`, Éxito) | Alex Guachi |
| **IHC-A-07** | Dashboard | Stepper secuencial de 6 pasos y avance por etapas | Stepper permite saltar etapas avanzadas sin validar requisitos previos | Bloqueo de avance no lineal con tooltips explicativos del requisito faltante | Viviana Sarco |
| **IHC-A-08** | Dashboard | Marcado interactivo en Checklist Grid previa (6 tareas) | Casillas marcadas se resetean al navegar por el Stepper (pérdida de datos en memoria) | Persistencia de estado en memoria y confirmación de autoguardado en tiempo real | Sebastián Santana |
| **IHC-A-09** | Dashboard | Anonimización y gestión de consentimientos (UT-024) | Formulario exige nombres reales obligatorios y rechaza códigos seudónimos | Código seudónimo obligatorio validado con regex `^PART-[0-9]{3}$` y sidebar a 5/5 | Wilson Pillapa |
| **IHC-A-10** | Dashboard | Auditoría de accesibilidad mediante lector de pantalla | Paso activo del Stepper y estados dependen únicamente de color azul sin ARIA | Atributos semánticos `aria-current="step"`, badges textuales y contraste visible | Alex Guachi |
| **IHC-A-11** | Dashboard | Monitoreo en viewport pequeño / monitor compacto (360px) | Card UI se superpone al Stepper y oculta columnas del checklist | Layout responsivo adaptativo en una columna conservando orden lógico de foco | Viviana Sarco |
| **IHC-A-12** | Dashboard | Cierre de preparación y habilitación de "Iniciar prueba" | Botón principal activo a pesar de tener consentimientos y piloto pendientes | Deshabilitación preventiva del CTA y lista de tareas bloqueantes para subsanar | Sebastián Santana |

---

## 4. ESTRUCTURA REAL Y ORGANIZACIÓN DEL REPOSITORIO

```text
IHC-2026-Grupo1/
├── .gitignore                             <- Reglas de exclusión de Git
├── README.md                              <- Este documento integrador general
├── docs/                                  <- Especificaciones, diagnóstico y fichas técnicas
│   ├── incidencias-sorpresa.md            <- Documentación de incidencias aplicadas post-minuto 100
│   ├── IHC-A-01.md ... IHC-A-12.md        <- Fichas técnicas individuales con las 5 fases por tarjeta
├── diagramas/                             <- Sitemaps y flujos de usuario (User Flows)
│   ├── IHC-A-01.md, IHC-A-03.md ...       <- Diagramas en sintaxis Mermaid por tarjeta
│   ├── IHC-A-02/                          <- flujoprincipal.png, flujoerror.png, sitemap.png
│   ├── IHC-A-06/                          <- flujoprincipal.png, flujoerror.png, sitemap.png
│   └── IHC-A-10/                          <- flujoprincipal.png, flujoerror.png, sitemap.png
├── wireframes/                            <- Wireframes Lo-Fi en formato SVG vectorial (1000x250 px)
│   ├── IHC-A-01-recalculo.svg             <- 4 paneles: Inicio 360px, Selección, Fallo v1, Recálculo v2
│   ├── IHC-A-03-confirmacion.svg          <- 4 paneles: Revisar, Procesando, Error, Recibido
│   ├── IHC-A-05-presupuesto.svg           <- 4 paneles: Presupuesto, Stepper 1.1x, Alerta, Ajuste OK
│   ├── IHC-A-07-stepper.svg               <- 4 paneles: Paso actual, Checklist, Bloqueo, Revisión
│   ├── IHC-A-09-anonimizacion.svg         <- 4 paneles: Sidebar alerta, Modal seudónimo, Regex, 5/5
│   └── IHC-A-11-responsive.svg           <- 4 paneles: Layout 360px, Foco, Card cerrada, Columna
├── prototipo/                             <- Prototipos navegables e interactivos v1 y v2
│   ├── IHC-A-02.html / IHC-A-02-v3.html   <- Prototipo interactivo navegación por teclado
│   ├── IHC-A-06.html / IHC-A-06-v3.html   <- Prototipo interactivo red móvil e idempotencia
│   ├── IHC-A-10.html / IHC-A-10-v3.html   <- Prototipo interactivo accesible lector de pantalla
│   ├── capturas/                          <- Capturas antes/después/incidencias (A-04, A-08)
│   ├── v1/                                <- Versiones v1 demostrando el fallo asignado
│   │   ├── IHC-A-01.png, IHC-A-03.png, IHC-A-05.png, IHC-A-07.png, IHC-A-09.png, IHC-A-11.png
│   │   ├── IHC-A-04.html, IHC-A-04.css, IHC-A-04.js
│   │   ├── IHC-A-08.html, IHC-A-08.js, IHC-A-08-12.css
│   │   └── IHC-A-12.html, IHC-A-12.js
│   └── v2/                                <- Versiones v2 con incidencias resueltas (post-min 100)
│       ├── IHC-A-01.png, IHC-A-03.png, IHC-A-05.png, IHC-A-07.png, IHC-A-09.png, IHC-A-11.png
│       ├── IHC-A-04.html, IHC-A-04.css, IHC-A-04.js
│       ├── IHC-A-08.html, IHC-A-08.js, IHC-A-08-12.css
│       └── IHC-A-12.html, IHC-A-12.js
├── pruebas/                               <- Registros de Cognitive Walkthrough con usuarios externos
│   ├── IHC-A-01-prueba.md ... IHC-A-12-prueba.md
└── evidencias/                            <- Comparativas visuales antes vs. después (SVG y MD)
    ├── IHC-A-01-antes-despues.svg ... IHC-A-11-antes-despues.svg
    └── IHC-A-04.md, IHC-A-08.md, IHC-A-12.md
```

---

## 5. GUÍA DE EJECUCIÓN Y VALIDACIÓN DE PROTOTIPOS

Los prototipos navegables están desarrollados en tecnologías web estándar (HTML5 Semántico, CSS3 y Vanilla JavaScript) y pueden ser ejecutados de dos formas:

1. **Apertura Directa:** Doble clic sobre cualquiera de los archivos `.html` dentro de `prototipo/` para ejecutarlos inmediatamente en cualquier navegador (Google Chrome, Microsoft Edge, Mozilla Firefox o Safari).
2. **Servidor Local en VS Code:** Clic derecho sobre el archivo `.html` y seleccionar *"Open with Live Server"*.

### Protocolo de Evaluación Comparativa (v1 vs. v2):
* **Prototipos v1 (Fallo Inicial):** Permiten reproducir de forma tangible el fallo heurístico reportado en la Fase 1 (ej. total congelado en A01, sobrecosto inadvertido en A05, o formulario rígido en A09).
* **Prototipos v2 (Incidencia Sorpresa):** Demuestran la corrección implementada en vivo tras el minuto 100, verificando la visibilidad del estado, la prevención de errores y la accesibilidad WCAG.

---

## 6. PROTOCOLO DE COLABORACIÓN Y TRAZABILIDAD EN GITHUB

Para garantizar el cumplimiento de las **Reglas de Autenticidad** del examen:
* **Ramas Individuales:** Cada integrante trabajó sobre su propia rama de funcionalidad (`feature/...`):
  - `feature/wilson-tarjetas-01-05-09`: Wilson Pillapa
  - `feature/cards_`: Alex Guachi
  - `feature/tarjetas-03-07-11`: Viviana Sarco
  - `feature/tarjeta-4812` / `feature/incidencias`: Sebastián Santana
* **Commits Atómicos y Descriptivos:** Commits estructurados según *Conventional Commits* documentando Fases 1 a 4 y los commits específicos post-minuto 100.
* **Pull Requests con Peer Review:** Cada conjunto de cambios fue integrado a `main` mediante Pull Requests revisados y aprobados entre compañeros de equipo.



