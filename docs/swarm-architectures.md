# Swarm Architectures

## Idea principal

Una arquitectura de swarm divide un trabajo complejo entre workers especializados que comparten un objetivo, pero no necesariamente el mismo contexto completo. La división puede mejorar la claridad y permitir verificaciones específicas, aunque también introduce coordinación, latencia y riesgo de inconsistencias.

En Meridian, un swarm no significa lanzar agentes sin control. Cada worker debe recibir una tarea acotada, una capacidad concreta y un criterio de salida. El orquestador conserva la responsabilidad de coordinar, registrar y verificar.

## Workers propuestos

| Worker | Función | Evidencia esperada |
|---|---|---|
| Research | Busca fuentes y compara alternativas. | Consultas, URLs y síntesis citada. |
| Architect | Propone estructura técnica. | Diagrama, decisiones y riesgos. |
| Design | Analiza experiencia, responsive y accesibilidad. | Tokens, componentes y criterios de revisión. |
| Code | Implementa cambios aprobados. | Diff, pruebas y archivos afectados. |
| Security | Revisa permisos, secretos y superficies de ataque. | Hallazgos y mitigaciones. |
| Verification | Comprueba que el resultado cumple el objetivo. | Checklist, pruebas y pendientes. |

## Patrón de coordinación

```text
ORCHESTRATOR
    |
    +--> decomposes task
    |
    +--> assigns scoped work
    |
    +--> collects artifacts
    |
    +--> resolves conflicts
    |
    +--> requests verification
    |
    +--> presents preview
```

La coordinación debe evitar que cada worker reconstruya toda la conversación. El orquestador puede compartir un resumen de contexto, referencias y restricciones, y mantener los detalles específicos dentro de cada worker.

## Fallos esperados

Los workers pueden producir resultados incompatibles, duplicar trabajo, consumir presupuesto demasiado rápido o interpretar de forma diferente una restricción. El sistema debe tener timeouts, límites de reintentos, cancelación y una ruta de escalado hacia una persona.

Un worker no debe publicar, eliminar recursos o modificar infraestructura solo porque otro worker lo sugirió. Las acciones sensibles necesitan una política separada y una aprobación explícita.

## Próximo experimento

Construir un flujo pequeño con Research, Architect y Verification. El objetivo no será crear una aplicación completa, sino comparar si la separación produce mejores decisiones documentadas que una sola respuesta de modelo.
