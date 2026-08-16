# Source evidence registry

La investigación de Meridian no debe llamar a una URL y asumir que el resultado es confiable. Primero necesita separar señales de política de evidencia de red.

El módulo `src/meridian_research/source_registry.py` ofrece `assess_source`, una función determinista que inspecciona la forma de una URL, su transporte y la política de dominios oficiales. No realiza llamadas de red y no declara que una fuente haya sido consultada.

| Señal | Significado |
|---|---|
| `is_secure` | La URL usa HTTPS. Es una señal de transporte, no una prueba de autenticidad completa. |
| `is_official_domain` | El host coincide con un dominio permitido o con un sufijo gubernamental/educativo. Es una candidata para revisión, no una garantía. |
| `reason` | Explica qué revisión adicional necesita la fuente. |

El adaptador que consulte Google Search, SerpAPI o una fuente de documentación deberá registrar la fecha de consulta, el título, la URL final y las citas obtenidas. Esta separación evita que el agente diga que investigó cuando solamente preparó una consulta.

## Ejemplo

```python
from meridian_research import assess_source

assessment = assess_source(
    "https://modelcontextprotocol.io/specification",
    official_domains=("modelcontextprotocol.io",),
)

if assessment.is_secure and assessment.is_official_domain:
    print("candidate for primary-source review")
```

La salida es una evaluación inicial. La verificación final debe conservar la respuesta del proveedor, sus citas y cualquier cambio de redirección.
