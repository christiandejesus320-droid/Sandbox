# MCP Context Skill

## Objetivo

Describir cómo un agente puede descubrir contexto y herramientas MCP sin asumir que toda capacidad descubierta está autorizada.

## Metadata mínima

Cada herramienta debe declarar nombre, versión, entradas, salidas, permisos requeridos, efectos externos, límites de tiempo y criterio de verificación.

## Flujo

El agente lee metadata, compara la tarea con las capacidades disponibles, solicita autorización si la operación tiene efectos externos y ejecuta solo la herramienta aprobada. El resultado debe incluir estado, evidencia y errores normalizados.

## Límites

La skill no permite compartir datos privados de forma implícita, ejecutar herramientas desconocidas, pasar credenciales en texto plano ni convertir una descripción de herramienta en una autorización permanente.

## Estado

Propuesta experimental alineada conceptualmente con la especificación pública de Model Context Protocol. Requiere pruebas de autorización y manejo de errores antes de considerarse utilizable.
