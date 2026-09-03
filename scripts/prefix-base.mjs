// Reescribe rutas absolutas de raíz ("/x") a "<base>/x" en el build estático.
// Solo para previews servidos en subruta (GitHub Pages). Producción no lo usa.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";

const base = (process.argv[2] || "").replace(/\/$/, "");
const root = process.argv[3] || "dist";
if (!base) { console.error("uso: prefix-base.mjs <base> [dist]"); process.exit(1); }

const attrs = ["href", "src", "action", "content", "poster"];
const reAttr = new RegExp(`\\b(${attrs.join("|")})=(["'])/(?!/)`, "g");   // href="/x"  (no "//cdn")
const reSrcset = /(srcset=["'])([^"']+)/g;                                 // srcset="/a 1x, /b 2x"
const reCssUrl = /url\((["']?)\/(?!\/)/g;                                  // url(/x)

async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else if ([".html", ".css", ".js"].includes(extname(p))) await fix(p);
  }
}

let files = 0, hits = 0;
async function fix(file) {
  const before = await readFile(file, "utf8");
  let n = 0;
  let after = before
    .replace(reAttr, (m, a, q) => (n++, `${a}=${q}${base}/`))
    .replace(reSrcset, (m, head, list) => head + list.replace(/(^|,\s*)\/(?!\/)/g, (mm, sep) => (n++, `${sep}${base}/`)))
    .replace(reCssUrl, (m, q) => (n++, `url(${q}${base}/`));
  // Módulos ESM: import("/x") y fetch("/x")
  after = after.replace(/(import\(|fetch\(|from\s)(["'])\/(?!\/)/g, (m, k, q) => (n++, `${k}${q}${base}/`));
  if (n) { await writeFile(file, after); files++; hits += n; }
}

await walk(root);
console.log(`prefix-base: ${hits} rutas reescritas en ${files} archivos → ${base}/`);
