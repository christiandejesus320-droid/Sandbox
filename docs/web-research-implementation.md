# Web Research Implementation

## Qué existe hoy

La primera implementación reproducible vive en `src/meridian_research/query_plan.py`. Su responsabilidad es preparar un plan determinista de consultas y registrar fuentes con fecha, título y URL absoluta.

El módulo no llama todavía a SerpAPI ni a Google Search. Esa separación es intencional: permite probar la planificación y la validación sin exponer claves ni confundir una consulta propuesta con una consulta realmente ejecutada.

## Uso local

Desde la raíz del repositorio:

```bash
pytest
```

El conjunto actual comprueba que el plan está limitado, que las consultas se deduplican, que una pregunta vacía se rechaza y que las fuentes deben utilizar URLs HTTP o HTTPS con título.

## Próximo adaptador

El siguiente paso será definir una interfaz de proveedor que reciba un `ResearchPlan` y devuelva resultados normalizados. El adaptador deberá conservar la consulta ejecutada, la fecha, el proveedor, las URLs obtenidas y los errores. Las claves deberán llegar mediante variables de entorno o un gestor de secretos, nunca desde el código o el prompt.

## Estado

Esta es una primera capacidad local y verificable. No debe presentarse todavía como una integración completa de búsqueda web ni como un sistema de producción.
