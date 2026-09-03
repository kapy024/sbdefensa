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
├── components/
│   ├── Icon.astro       set de iconos SVG propio (línea 1.4, rejilla 24)
│   ├── PageHero.astro   cabecera de páginas internas
│   └── …                Header, Footer, Hero, secciones
├── data/site.ts         contenido estructurado
├── layouts/Layout.astro layout base: SEO, OG, JSON-LD y motor de scroll reveal
├── pages/               rutas (8 áreas de práctica generadas dinámicamente)
└── styles/global.css    sistema de diseño: tokens + base + componentes + utilidades
```

## Sistema de diseño

`src/styles/global.css` es la única fuente de verdad. No metas hex sueltos en
componentes.

**Color.** Tinta `#0b0b0c`, papel `#faf8f3` / `#f4efe4`, y tres oros con roles
distintos que **no son intercambiables**:

| Token | Uso | Contraste |
|---|---|---|
| `--color-gold` `#c9a961` | reglas y acentos **sobre tinta** | 8.74:1 sobre ink |
| `--color-gold-ink` `#7d611f` | **texto** sobre papel | 5.49:1 sobre bone |
| `--color-gold-light` `#e3cd96` | texto sobre tinta | 12.59:1 sobre ink |

`--color-gold` sobre papel da 2.12:1 — reprueba WCAG AA. Para texto sobre papel
usa siempre `gold-ink`. Toda combinación del sitio está verificada ≥4.5:1
(≥3:1 en texto grande).

**Tipografía.** Cormorant Garamond (display, pesos 300–500) e Inter (texto).
La escala es fluida por `clamp()`: `text-display`, `text-h1`, `text-h2`,
`text-h3`, `text-lead`. No uses `text-5xl` y similares en secciones.

**Ritmo.** `py-section` y `py-section-sm` para el espaciado vertical de
secciones; `.shell` y `.shell-narrow` para el ancho de contenido.

**Iconos.** Nunca emojis. `<Icon name="scale" />` — los nombres válidos están en
`src/components/Icon.astro` y el componente lanza error si pides uno inexistente.

**Movimiento.** Marca un elemento con `data-reveal` para que aparezca al entrar
en viewport; `data-reveal-stagger="80"` en el padre escalona a los hijos. El
estado oculto solo se aplica con JS activo, respeta `prefers-reduced-motion` y
tiene un failsafe a 4s: el contenido nunca puede quedarse invisible.

## Formulario de contacto

El formulario **no envía correo**: arma un mensaje redactado y abre WhatsApp
(`wa.me`) con el texto listo. Si el navegador bloquea la ventana emergente, cae
a `mailto:` con el mismo contenido. Valida en `blur`, no en cada tecla, y mueve
el foco al primer campo inválido.

## Edición de contenido

Casi todo el contenido vive en `src/data/site.ts`:
- `site` → datos generales (email, teléfonos, ubicación, año fundación)
- `services` → 8 áreas de práctica con bullets de alcance
- `team` → socios directores con bio y trayectoria
- `audiences` → segmentos a los que se atiende
- `faq` → preguntas frecuentes
- `differentiators` → propuesta de valor

Editar `site.ts` y `npm run build` para regenerar.

## Preview sin tocar producción

Cualquier push a una rama que **no** sea `main` publica un preview en GitHub Pages:

    https://kapy024.github.io/sbdefensa/

Lo hace `.github/workflows/preview-pages.yml`. Producción (HostGator) sigue
dependiendo únicamente de `deploy.yml`, que solo escucha `main`.

- El preview lleva `<meta name="robots" content="noindex, nofollow">` (se
  activa con `PUBLIC_PREVIEW=1` en el build) para no competir con el sitio real.
- Pages sirve en la subruta `/sbdefensa/` y el sitio usa rutas absolutas de
  raíz, así que `scripts/prefix-base.mjs` reescribe `href/src/srcset/url()`
  en `dist/` después del build. Producción no lo ejecuta.
- El entorno `github-pages` tiene política de ramas: `main` y `rediseno/*`.
  Para publicar preview desde otra familia de ramas, agrega la regla en
  Settings → Environments → github-pages, o con
  `gh api -X POST repos/kapy024/sbdefensa/environments/github-pages/deployment-branch-policies -f name='feature/*' -f type=branch`.
- El repo es público desde 2026-09-03 para que Pages funcione en el plan Free.
  Las credenciales FTP viven en Actions Secrets, no en el código.

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
