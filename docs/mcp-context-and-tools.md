# MCP, Context and Tools

## Por qué importa

Model Context Protocol es un protocolo abierto para conectar aplicaciones de modelos con fuentes de datos y herramientas externas. La especificación describe comunicación JSON-RPC entre hosts, clientes y servidores, y diferencia recursos, prompts y tools.[1]

Para Meridian, MCP es una frontera de integración, no una autorización global. El agente puede descubrir que existe una herramienta, pero todavía debe comprobar si la tarea, el usuario y la política permiten invocarla.

## Mapa conceptual

```text
HOST APPLICATION
    |
    +--> MCP CLIENT
            |
            +--> POLICY CHECK
                    |
                    +--> MCP SERVER
                            |
                            +--> RESOURCE
                            +--> PROMPT
                            +--> TOOL
```

## Controles mínimos

El host debe explicar qué datos se compartirán, qué operación se ejecutará y qué resultado se espera. Las herramientas que escriben, eliminan, publican o envían información deben tener una ruta de aprobación explícita.

La especificación de MCP destaca la necesidad de consentimiento del usuario, control sobre los datos y precaución frente a la ejecución arbitraria de herramientas.[1] Meridian adopta ese principio mediante capacidades acotadas por tarea, workspace, tiempo y tipo de operación.

## Skills sobre MCP

Una skill puede describir una capacidad compleja, pero debe exponer sus límites. La metadata puede incluir nombre, versión, entradas, herramientas requeridas, permisos, coste estimado y criterios de verificación. El contenido completo solo se carga cuando el router decide que la tarea es relevante.

## Estado

Este documento define una frontera conceptual. Todavía no existe aquí un servidor MCP de producción. Las implementaciones futuras deberán incluir pruebas de autorización, manejo de errores, timeouts, cancelación y logs sin secretos.

## Referencias

[1]: https://modelcontextprotocol.io/specification/2026-07-28 "Model Context Protocol Specification"
