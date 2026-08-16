# Research Before Build

## La idea

Meridian no debería responder a una petición de construir una aplicación con un template genérico tomado de sus suposiciones. Antes de escribir código, el agente debe investigar el contexto actual, revisar referencias, comparar implementaciones, hacer preguntas y explicar qué encontró.

Este flujo aplica a landing pages, aplicaciones, automatizaciones, APIs, videos y sistemas completos. El producto final puede cambiar, pero el orden de trabajo debe conservar cuatro momentos: investigar, planificar, construir y verificar.

## Flujo operativo

```text
REQUEST
  |
  v
QUESTIONS + CONSTRAINTS
  |
  v
CURRENT RESEARCH
  |  web sources, GitHub, docs, examples
  v
OPTIONS + TRADE-OFFS
  |
  v
APPROVED PLAN
  |
  v
BUILD WITH SELECTED SKILLS
  |  web, code, MCP, Remotion, data
  v
PREVIEW + TESTS + SOURCES
  |
  v
HUMAN REVIEW OR SAFE DELIVERY
```

## Qué debe hacer el agente

Cuando el usuario pida una web, el agente debe buscar referencias actuales de interfaces, patrones responsive, accesibilidad, componentes y repositorios relevantes. Debe preguntar por audiencia, objetivo, contenido, integraciones, restricciones y ejemplos de estilo. Si encuentra una referencia útil, debe mostrarla y explicar qué parte propone reutilizar conceptualmente.

Cuando el usuario pida una aplicación o automatización, el agente debe identificar el flujo de datos, los permisos, los servicios externos, los fallos posibles y el criterio de éxito. Cuando pida un video, debe investigar el formato, el mensaje, el público, los assets, la duración y las licencias antes de crear una composición.

## Botón de investigación

La interfaz ideal debe ofrecer una acción explícita como `Déjame investigar la web`. Esa acción no debe ser una excusa para buscar sin límites. Debe mostrar las consultas, las fuentes, la fecha de consulta, los resultados relevantes y los límites del análisis.

## Evidencia y verificación

Cada salida debe declarar si es una propuesta, un prototipo o una implementación verificada. Los resultados de búsqueda deben conservar sus fuentes. El código debe tener pruebas. Un video debe tener un preview, dimensiones correctas, duración comprobada, captions si son necesarios y una revisión de assets.

## Relación con Remotion

Remotion encaja en la fase de construcción visual. Sus Agent Skills oficiales cubren creación, markup, Studio, render, captions, SaaS, interactividad, documentación, multimedia, mapas y upgrades.[1] Meridian no debe copiar una skill sin revisar su fuente y versión; debe seleccionar la skill adecuada para la tarea y registrar qué utilizó.

## Referencias

[1]: https://www.remotion.dev/docs/ai/skills "Remotion Agent Skills"
[2]: https://modelcontextprotocol.io/specification/2026-07-28 "Model Context Protocol Specification"
[3]: https://ai.google.dev/gemini-api/docs/google-search "Grounding with Google Search"
