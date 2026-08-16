# Meridian Research Lab

[![Preview 4K de la demo Remotion](video-demo/out/meridian-research-lab-4k-poster.png)](video-demo/out/meridian-research-lab-1080p.mp4)

[Ver la demo Remotion en MP4](video-demo/out/meridian-research-lab-1080p.mp4) · [Leer la skill de video](skills/remotion-video/README.md)

Este repositorio es un laboratorio público de investigación sobre agentes autónomos, Meridian API y sistemas que pueden investigar antes de construir.

La idea central es sencilla: una IA no debería limitarse a generar código a partir de sus propias suposiciones. Debería poder entender el contexto, consultar fuentes actuales, revisar herramientas disponibles, comparar opciones y mostrar sus decisiones antes de ejecutar una acción.

Este proyecto documenta esa investigación de forma incremental. Algunas partes son propuestas de arquitectura, otras son experimentos y otras son documentación de decisiones. No presento como terminado lo que todavía está en desarrollo.

## Qué estoy investigando

El laboratorio explora una arquitectura para agentes que combine un orquestador principal, workers especializados, herramientas con permisos definidos, búsqueda web con fuentes verificables y una capa de evaluación para comparar resultados.

Las líneas principales son:

| Línea | Pregunta de investigación |
|---|---|
| Meridian API | ¿Cómo puede una API coordinar contexto, herramientas y ejecuciones verificables? |
| Federated Model Ensemble | ¿Cómo elegir o combinar modelos según capacidad, coste, latencia, privacidad y tipo de tarea? |
| Swarm Architectures | ¿Cuándo conviene delegar una tarea entre varios workers especializados? |
| Web Research | ¿Cómo puede un agente buscar información actual y conservar las fuentes que utilizó? |
| MCP | ¿Cómo conectar agentes con datos y herramientas externas sin perder control, permisos ni trazabilidad? |
| Skills | ¿Cómo describir, descubrir y cargar capacidades bajo demanda sin saturar el contexto? |

## Estado actual

Este repositorio está en fase de investigación y prototipado. Los documentos describen diseños y criterios que todavía deben validarse con implementaciones, pruebas y métricas. Las APIs externas no se incluyen con claves reales y las integraciones se documentan mediante contratos y ejemplos seguros.

## Documentos principales

[Arquitectura de Meridian API](docs/meridian-api-architecture.md) explica las capas de contexto, routing, herramientas y verificación.

[Federated Model Ensemble](docs/federated-model-ensemble.md) presenta una propuesta para seleccionar modelos de acuerdo con las características de cada tarea.

[Swarm Architectures](docs/swarm-architectures.md) describe la delegación entre workers y los riesgos de coordinación.

[Investigación web y SerpAPI](docs/web-research-and-serpapi.md) documenta un flujo de búsqueda con consultas, resultados, fuentes y validación.

[MCP y control de herramientas](docs/mcp-context-and-tools.md) relaciona el diseño con la especificación pública de Model Context Protocol.

[Resiliencia en la selección de modelos](docs/model-selection-resilience.md) define fallbacks, timeouts, circuit breakers y criterios de degradación segura.

[Implementación inicial de investigación web](docs/web-research-implementation.md) describe el primer módulo ejecutable, sus límites y sus pruebas.

[Research Before Build](docs/research-before-build.md) define el flujo para investigar antes de construir aplicaciones, automatizaciones y contenido.

[Remotion Video Skill](skills/remotion-video/README.md) conecta investigación, planificación de escenas, render y verificación.

[Enlaces Remotion verificados](docs/remotion-verified-links.md) reúne las fuentes oficiales comprobadas antes de integrar la demo.

[Meridian ecosystem verified](docs/meridian-ecosystem-verified.md) separa las capacidades públicas verificadas de las ideas que todavía están en desarrollo o en repositorios privados.

[Source evidence](docs/source-evidence.md) explica cómo distinguir una candidata a fuente oficial de una fuente realmente verificada.

[GitHub achievement plan](docs/github-achievement-plan.md) registra qué logros son alcanzables mediante trabajo real y cuáles dependen de terceros.

## Primera implementación

La primera capacidad ejecutable está en `src/meridian_research/query_plan.py`. Prepara planes deterministas de consulta y valida fuentes sin llamar todavía a un proveedor externo. Las pruebas se ejecutan con `pytest`.

## Próximas skills

Las próximas skills serán pequeñas capacidades versionadas que puedan ser descubiertas por un agente y cargadas solo cuando la tarea las necesite. Entre las primeras propuestas están la búsqueda web con fuentes, la lectura de documentación, el análisis de repositorios, la planificación de cambios, la verificación visual y la selección resiliente de modelos.

Las integraciones con Google Search, SerpAPI y MCP se tratarán como conectores con permisos explícitos. El repositorio no incluye secretos ni pretende ejecutar acciones externas sin autorización.

## Plataformas y referencias

La investigación se apoya en documentación pública de [Model Context Protocol](https://modelcontextprotocol.io/specification/2026-07-28), [Google Gemini Grounding with Google Search](https://ai.google.dev/gemini-api/docs/google-search), [SerpAPI](https://serpapi.com/search-api), [GitHub](https://docs.github.com/) y el ecosistema de [Meridian](https://github.com/christiandejesus320-droid/christiandejes320-droid).

## Cómo colaborar

Las colaboraciones deben concentrarse en este repositorio. Una contribución útil puede ser una propuesta de arquitectura, una comparación reproducible, una mejora documental, una prueba de evaluación o una implementación pequeña con criterios claros.

Antes de abrir un pull request, revisa [CONTRIBUTING.md](CONTRIBUTING.md). Las propuestas deben explicar el problema, los supuestos, las fuentes utilizadas y la forma de verificar el resultado.

## Licencia y estado

Este laboratorio está evolucionando. Las decisiones pueden cambiar cuando aparezcan nuevas pruebas. Cada documento debe distinguir entre hechos respaldados por fuentes, decisiones de diseño y trabajo pendiente.
