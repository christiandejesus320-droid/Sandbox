# Federated Model Ensemble

## Hipótesis

Una sola elección de modelo no es óptima para todas las tareas. Un sistema de agentes puede obtener mejores resultados si selecciona modelos según la dificultad, la modalidad, la latencia permitida, la sensibilidad de los datos y la necesidad de herramientas.

En este repositorio, Federated Model Ensemble describe una capa de decisión que puede enrutar una tarea hacia un modelo principal, un modelo especializado o una combinación de modelos. La palabra federated se refiere a la coordinación de capacidades independientes; no implica que todos los modelos compartan datos ni que exista entrenamiento conjunto.

## Señales de selección

| Señal | Ejemplo de decisión |
|---|---|
| Tipo de tarea | Usar un modelo de código para implementación y otro de síntesis para el informe. |
| Complejidad | Reservar modelos de mayor capacidad para tareas con ambigüedad o alto riesgo. |
| Latencia | Elegir un modelo rápido para clasificación o una respuesta interactiva. |
| Coste | Evitar pagar el modelo más caro cuando uno más pequeño cumple el objetivo. |
| Privacidad | Mantener datos sensibles en una ruta con límites de proveedor y retención. |
| Herramientas | Elegir un modelo que pueda trabajar con las tools requeridas. |
| Verificación | Pedir una segunda evaluación cuando el resultado tenga impacto operativo. |

## Flujo de decisión

```text
TASK PROFILE
    |
    v
CAPABILITY FILTER
    |
    v
POLICY FILTER
    |
    v
CANDIDATE MODELS
    |
    v
ROUTE + BUDGET
    |
    v
EXECUTION
    |
    v
EVALUATION
```

La selección debe registrarse como una decisión explicable. El sistema debería conservar el perfil de la tarea, los candidatos considerados, el modelo elegido, los límites aplicados y la evaluación posterior.

## Evaluación

No se debe afirmar que un ensemble es mejor sin medirlo. Las primeras pruebas pueden comparar exactitud, tasa de errores, latencia, coste aproximado, completitud de citas y porcentaje de intervención humana.

Un experimento reproducible debe usar el mismo conjunto de tareas, los mismos criterios de evaluación y una separación clara entre datos de prueba y datos utilizados para ajustar instrucciones.

## Riesgos

La combinación de modelos puede aumentar la complejidad, producir conflictos entre respuestas y elevar el coste. También puede crear una falsa sensación de consenso si varios modelos repiten el mismo supuesto incorrecto. Por eso la diversidad de modelos no sustituye a las fuentes, las pruebas ni la revisión humana.

## Estado

Este documento es una propuesta de investigación. No representa una implementación completa ni afirma resultados de rendimiento.
