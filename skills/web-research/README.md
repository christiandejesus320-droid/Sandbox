# Web Research Skill

## Objetivo

Ayudar a un agente a investigar una pregunta actual sin ocultar las fuentes utilizadas.

## Entrada

La skill recibe una pregunta, el idioma, la región, el periodo de interés, los dominios preferidos y el nivel de profundidad.

## Procedimiento

Primero divide la pregunta en subpreguntas. Después genera consultas, recupera resultados mediante un proveedor autorizado, filtra fuentes irrelevantes y conserva la fecha de acceso. Finalmente redacta una síntesis que conecte cada afirmación importante con una fuente.

## Salida

La salida debe incluir las consultas, las fuentes, los hallazgos, las contradicciones, las limitaciones y las preguntas pendientes. Si no se puede verificar una afirmación, debe marcarse como no verificada.

## Límites

La skill no debe publicar contenido, enviar formularios, iniciar sesión, descargar código ejecutable ni revelar secretos. Las integraciones de búsqueda deben recibir credenciales desde el servidor y no desde el prompt.

## Estado

Propuesta experimental. Falta implementar el adaptador de búsqueda y un conjunto de evaluaciones.
