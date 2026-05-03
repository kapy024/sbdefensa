# SBDefensa

Sitio web de **Sámano Burkolter — Defensa Fiscal & Contable**.

Firma legal y contable mexicana fundada en 2021. Cobertura nacional. Áreas: defensa fiscal, contable, aduanero/comex, seguridad social, corporativo, propiedad industrial, PIORPI, administrativo.

- **Producción:** https://sbdefensa.com.mx
- **Stack:** Astro 6 + Tailwind CSS 4
- **Idioma:** español (es-MX)

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve build
```

## Estructura

```
src/
├── components/    componentes reutilizables (Header, Footer, Hero, etc.)
├── data/          contenido estructurado (servicios, equipo, FAQ, datos del sitio)
├── layouts/       layout base con SEO/OG
├── pages/         rutas
│   ├── index.astro
│   ├── nosotros.astro
│   ├── contacto.astro
│   ├── aviso-de-privacidad.astro
│   └── servicios/[slug].astro    8 áreas de práctica generadas dinámicamente
└── styles/global.css   tokens (paleta, tipografías) + Tailwind v4
```

## Edición de contenido

Casi todo el contenido vive en `src/data/site.ts`:
- `site` → datos generales (email, teléfonos, ubicación, año fundación)
- `services` → 8 áreas de práctica con bullets de alcance
- `team` → socios directores con bio y trayectoria
- `audiences` → segmentos a los que se atiende
- `faq` → preguntas frecuentes
- `differentiators` → propuesta de valor

Editar `site.ts` y `npm run build` para regenerar.

## Despliegue

Sitio estático. Compatible con Vercel, Netlify, Cloudflare Pages u hosting tradicional.
