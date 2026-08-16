# Web Research and SerpAPI

## Objetivo

Una skill de investigación web debe hacer algo más que devolver enlaces. Tiene que convertir una pregunta en consultas, recoger resultados, identificar fuentes relevantes, conservar la trazabilidad y separar hechos encontrados de interpretaciones del agente.

SerpAPI ofrece una API de resultados de búsqueda que acepta una consulta, parámetros de localización y filtros, y devuelve resultados estructurados en JSON.[1] En este repositorio se documenta como una posible fuente de búsqueda; no se incluye una clave ni se ejecutan llamadas externas desde los ejemplos.

## Flujo propuesto

```text
USER QUESTION
    |
    v
QUERY PLAN
    |
    v
SEARCH PROVIDER
    |
    v
RESULT NORMALIZATION
    |
    v
SOURCE FILTERING
    |
    v
SYNTHESIS WITH CITATIONS
    |
    v
HUMAN REVIEW WHEN NEEDED
```

## Contrato de la skill

La entrada debe incluir la pregunta, el idioma, la región, el nivel de profundidad y las restricciones de fuentes. La salida debe conservar las consultas ejecutadas, las URLs consultadas, la fecha de acceso, los fragmentos relevantes y las afirmaciones que dependen de cada fuente.

| Campo | Propósito |
|---|---|
| query | Pregunta que se desea investigar. |
| scope | Tema, región, idioma y periodo temporal. |
| sources | URLs, títulos, dominios y fecha de consulta. |
| claims | Afirmaciones que aparecen en la síntesis. |
| confidence | Nivel de confianza y razones para limitarlo. |
| unresolved | Preguntas que quedaron sin verificar. |

## Alternativa con Google Search grounding

Google Gemini ofrece Grounding with Google Search para conectar un modelo con contenido web en tiempo real y devolver anotaciones con citas.[2] La diferencia principal frente a una API de resultados directa es que el modelo puede decidir cuándo buscar, generar consultas y devolver una respuesta grounded con referencias.

Meridian debe mantener la distinción entre ambos enfoques. Una búsqueda directa proporciona más control sobre la recuperación y la normalización; un mecanismo de grounding puede simplificar el flujo de citación, pero depende de las reglas, límites y costes del proveedor.

## Costes y seguridad

Las consultas externas pueden tener coste, límites de uso y condiciones de almacenamiento. Las claves deben permanecer en el servidor y nunca deben escribirse en el prompt, los logs públicos o los commits. Las respuestas deben limitarse por tamaño y deben filtrarse antes de entregarse a otro worker.

## Estado

La skill está en fase de diseño. El siguiente paso es implementar un adaptador con una interfaz falsa para pruebas locales y añadir un proveedor real solo después de definir secretos, límites, atribución y pruebas de calidad.

## Referencias

[1]: https://serpapi.com/search-api "Google Search Engine Results API — SerpAPI"
[2]: https://ai.google.dev/gemini-api/docs/google-search "Grounding with Google Search — Google AI for Developers"
