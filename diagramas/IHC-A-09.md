# IHC-A-09 — Diagramas

### Sitemap propuesto 

```mermaid
flowchart TD
  A[Inicio / Dashboard] --> B[Selección o registro]
  B --> C[Revisión / edición]
  C --> D[Confirmación]
  C --> E[Error o advertencia]
  E --> C
```

### User flow principal y rama de error/edición 

**Recorrido principal:** Dashboard → Nueva sesión → Ingresar P-001 → Registrar resultados → Validar código → Guardar → Confirmación.

**Recorrido de edición o error:** Formulario → Código vacío o incorrecto → Mostrar error de formato → Corregir código → Conservar resultados → Validar y guardar.

```mermaid
flowchart TD
 A[Inicio] --> B[Seleccionar o registrar]
 B --> C[Revisar datos]
 C --> D{¿Datos válidos y vigentes?}
 D -- Sí --> E[Confirmar / guardar]
 E --> F[Mostrar éxito]
 D -- No --> G[Mostrar motivo del error]
 G --> H[Editar sin perder datos]
 H --> C
```


