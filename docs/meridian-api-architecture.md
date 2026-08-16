# Meridian API Architecture

## Propósito

Meridian API se plantea como una capa de coordinación para agentes que necesitan trabajar con contexto, herramientas externas y resultados verificables. La API no debe tratar al modelo como una caja negra que recibe un prompt y devuelve una respuesta sin explicación.

El objetivo de esta investigación es definir contratos pequeños que permitan inspeccionar una tarea, proponer un plan, seleccionar capacidades, ejecutar herramientas autorizadas y devolver evidencia suficiente para revisar el resultado.

## Flujo propuesto

```text
USER REQUEST
    |
    v
INTENT + CONSTRAINTS
    |
    v
CONTEXT INDEX
    |
    v
ROUTING DECISION
    |
    +--> RESEARCH WORKER
    +--> DESIGN WORKER
    +--> CODE WORKER
    +--> DATA WORKER
    +--> VERIFICATION WORKER
    |
    v
SCOPED TOOLS
    |
    v
EVIDENCE + PREVIEW
    |
    v
APPROVAL OR SAFE RESULT
```

Cada etapa debe dejar una representación inspeccionable. El sistema no debería ocultar qué información utilizó, qué herramienta invocó, qué permisos aplicó o qué supuestos permanecen abiertos.

## Contratos principales

| Contrato | Responsabilidad |
|---|---|
| Request | Describe la intención, el objetivo, las restricciones y el nivel de autonomía permitido. |
| Context | Identifica documentos, repositorios, fuentes y datos relevantes para la tarea. |
| Plan | Divide el trabajo en pasos que pueden aprobarse, ejecutarse y verificarse. |
| Tool capability | Define una operación concreta, sus parámetros, permisos y límites. |
| Evidence | Conserva resultados, fuentes, logs y verificaciones asociadas a una acción. |
| Approval | Registra la autorización humana necesaria para acciones sensibles. |

## Principios de diseño

La API debe separar planificación de ejecución. Un agente puede investigar un repositorio sin modificarlo y puede proponer un plan antes de ejecutar cambios. Las instalaciones, migraciones, eliminaciones, publicaciones y llamadas con efectos externos deben tener límites explícitos.

La seguridad no se resuelve únicamente con el prompt. Las credenciales deben permanecer fuera del contexto normal del modelo y las herramientas deben recibir capacidades acotadas por tarea, workspace y duración.

## Relación con MCP

Model Context Protocol estandariza conexiones entre aplicaciones de modelos, fuentes de datos y herramientas. Su especificación define hosts, clientes y servidores, además de recursos, prompts y tools como capacidades diferenciadas.[1]

Meridian puede utilizar MCP como una frontera de integración, pero conserva una capa propia de políticas y verificación. Conectar una herramienta no implica autorizar cualquier operación que esa herramienta pueda realizar.

## Trabajo pendiente

La siguiente fase debe convertir este diseño en un contrato ejecutable y probarlo con tareas pequeñas: lectura de un repositorio, búsqueda documentada, generación de un plan y modificación de un archivo mediante aprobación explícita.

## Referencias

[1]: https://modelcontextprotocol.io/specification/2026-07-28 "Model Context Protocol Specification"
