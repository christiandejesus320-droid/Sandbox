# Research Roadmap

## Fase 1: contratos y documentación

Definir contratos para requests, contexto, planes, tools, evidencia y aprobación. Documentar las decisiones y mantener referencias actualizadas.

## Fase 2: investigación web

Implementar un adaptador falso para probar consultas, normalización de resultados y citaciones sin usar credenciales reales. Después comparar una integración directa con SerpAPI y una ruta de grounding con Google Search.

## Fase 3: selección de modelos

Construir un conjunto pequeño de tareas de código, investigación y extracción. Medir calidad, latencia, coste estimado, completitud de fuentes y frecuencia de escalado humano.

## Fase 4: workers especializados

Probar un flujo con Research Worker, Architect Worker y Verification Worker. Comparar los resultados con una ruta de modelo único y registrar conflictos o duplicación de trabajo.

## Fase 5: tools y permisos

Crear herramientas locales sin efectos externos y probar autorización, cancelación, timeouts, reintentos e idempotencia. No conectar servicios de producción hasta tener una política de secretos y permisos.

## Criterio de avance

Una fase solo se considera completada cuando existe una implementación o un experimento reproducible, una descripción de sus límites y evidencia suficiente para revisar el resultado.
