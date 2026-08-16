# Meridian Research Lab video demo

Esta demo muestra el principio de Meridian: una IA debe investigar, planificar, construir y verificar antes de entregar un resultado.

## Qué contiene

La composición `MeridianResearchLab` dura 30 segundos y está definida en 3840 × 2160 (4K), con una estética high-end de tecnología oscura. El MP4 incluido se entrega en 1920 × 1080 para mantenerlo ligero y compatible con el repositorio; la composición fuente está preparada para render 4K en un entorno con más memoria. No pretende representar un producto terminado; es un prototipo visual para explicar el ecosistema real de Meridian.

## Desarrollo local

Desde esta carpeta:

```bash
npm install
npx remotion skills add
npm run dev
```

Para generar el MP4:

```bash
npx remotion render MeridianResearchLab out/meridian-research-lab-1080p.mp4 --scale=0.5

# Para una salida 4K completa:
npx remotion render MeridianResearchLab out/meridian-research-lab-4k.mp4
```

Para generar un poster:

```bash
npx remotion still MeridianResearchLab out/meridian-research-lab-4k-poster.png --frame=100
```

## Skills

Las Agent Skills oficiales se encuentran en `.agents/skills`. La fuente original es el repositorio oficial de [Remotion Agent Skills](https://github.com/remotion-dev/remotion/tree/main/packages/skills). La documentación de Remotion explica el catálogo y la instalación en [Agent Skills](https://www.remotion.dev/docs/ai/skills).

## Licencia

Remotion tiene una licencia especial y algunos usos empresariales pueden requerir una licencia de compañía. Revisa [License and terms](https://www.remotion.dev/docs/license) antes de usar esta demo en un producto comercial.
