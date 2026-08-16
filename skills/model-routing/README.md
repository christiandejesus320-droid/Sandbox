# Model Routing Skill

## Objetivo

Seleccionar una ruta de modelo según la tarea, las herramientas requeridas, el presupuesto, la latencia, la privacidad y la calidad esperada.

## Entrada

La skill recibe un perfil de tarea, políticas del workspace, modelos disponibles, presupuesto y criterios de evaluación.

## Salida

Debe producir candidatos considerados, ruta elegida, razones, límites, plan de fallback y condición de escalado humano. La elección no debe ocultarse dentro de una respuesta final.

## Resiliencia

Los reintentos deben ser limitados. Las operaciones con efectos externos requieren idempotencia o aprobación renovada antes de repetirse. Un fallback puede cambiar la calidad o las capacidades disponibles, por lo que debe registrarse.

## Estado

Propuesta experimental. El próximo paso es construir un benchmark pequeño que compare rutas fijas y dinámicas con tareas reproducibles.
