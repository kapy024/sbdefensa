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

Sitio estático servido desde HostGator (`public_html/`). Cada push a `main` dispara el workflow `.github/workflows/deploy.yml` que compila y sube por FTPS vía [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action).

### Secrets requeridos (Settings → Secrets and variables → Actions → Secrets)

| Secret | Valor |
|---|---|
| `FTP_SERVER` | host FTP de HostGator (p.ej. `ftp.sbdefensa.com.mx` o `gator####.hostgator.com`) |
| `FTP_USERNAME` | usuario FTP creado en cPanel |
| `FTP_PASSWORD` | contraseña del usuario FTP |

### Variables opcionales (Settings → Secrets and variables → Actions → Variables)

| Variable | Default | Cuándo cambiar |
|---|---|---|
| `FTP_PROTOCOL` | `ftps` | Pasar a `ftp` solo si HostGator no soporta TLS en el plan |
| `FTP_PORT` | `21` | Cambiar a `22` si se usa SFTP en lugar de FTPS |
| `FTP_SERVER_DIR` | `/public_html/` | Cambiar si el dominio es addon (p.ej. `/public_html/sbdefensa.com.mx/`) |

### Deploy manual de respaldo

```sh
npm run build
cd dist && zip -r ../sbdefensa-deploy.zip . && cd ..
# subir sbdefensa-deploy.zip a public_html/ vía cPanel File Manager y descomprimir
```

Los archivos deben quedar con permisos `644` y los directorios `755`. Si subes desde macOS y ves 403, ajusta perms desde cPanel.

## Agentes (Claude Code)

`.claude/agents/content-editor.md` — agente especializado en edición de copy en español. Úsalo cuando haya cambios de redacción en `src/data/site.ts`, FAQs, descripciones de servicios o bios del equipo. No toca layout ni configuración.
