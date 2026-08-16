# Resiliencia en la selección de modelos

## Problema

Un agente puede fallar aunque el modelo elegido sea capaz de resolver la tarea. El proveedor puede estar lento, la cuota puede agotarse, una herramienta puede no estar disponible o el resultado puede no cumplir el criterio de calidad.

La resiliencia consiste en diseñar una ruta controlada para esos casos. No significa cambiar de modelo silenciosamente y ocultar el fallo. Significa definir de antemano cuándo se puede reintentar, cuándo se debe degradar y cuándo hay que pedir intervención humana.

## Estrategias

| Estrategia | Uso | Riesgo |
|---|---|---|
| Timeout | Evitar que una tarea bloquee todo el sistema. | Cortar una respuesta que necesitaba más tiempo. |
| Retry limitado | Recuperarse de fallos transitorios. | Duplicar operaciones con efectos externos. |
| Circuit breaker | Detener temporalmente un proveedor con errores repetidos. | Retrasar una recuperación si el umbral es malo. |
| Fallback | Cambiar a una ruta alternativa documentada. | Obtener menor calidad o capacidades distintas. |
| Budget guard | Detener cuando se alcanza coste o tokens máximos. | Dejar la tarea incompleta. |
| Human escalation | Pedir una decisión cuando el riesgo supera el límite. | Añadir latencia, pero conservar control. |

## Estado de la tarea

```text
queued -> running -> verified
             |          |
             v          v
          retrying    needs_review
             |
             v
          failed
```

Las transiciones deben quedar registradas. Un fallback no debe repetir una operación de escritura sin idempotencia ni autorización renovada.

## Criterios de selección

La elección de un modelo puede considerar capacidad, latencia, coste, privacidad, modalidad, disponibilidad de tools y calidad histórica en la clase de tarea. Las métricas deben ser específicas: una métrica global puede ocultar que un modelo es bueno para síntesis, pero malo para cambios de código.

## Próximo experimento

Crear un benchmark pequeño con tareas de investigación, código y extracción estructurada. Comparar una ruta fija con una ruta resiliente, midiendo tasa de finalización, coste, latencia, errores y necesidad de intervención.

## Estado

Es una propuesta de arquitectura y evaluación. No se presentan métricas hasta que exista un conjunto de pruebas reproducible.
