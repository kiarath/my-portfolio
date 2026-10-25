# kiara///correa — portfolio

Portfolio de Kiara Correa (UX/UI & product designer), construido con **Astro + Tailwind CSS v4 + TypeScript** a partir del archivo de Figma *Portafolio* (página **Desarollo**).

## Scripts

| Comando           | Qué hace                                   |
| ----------------- | ------------------------------------------ |
| `npm install`     | Instala dependencias                       |
| `npm run dev`     | Servidor local en `http://localhost:4321`  |
| `npm run build`   | Chequeo de tipos + build estático a `dist/` |
| `npm run preview` | Previsualiza el build                      |

## Estructura

```
src/
  assets/projects/   imágenes exportadas de Figma (Astro las optimiza a WebP)
  assets/icons/      SVGs (iconos del footer, robot, cursor, pixel)
  components/        Header, Footer, Hero (animación Figma), Marquee, AiButton (modal "use ai"), ProjectCard
  components/case/   bloques de los casos de estudio (cards, barras, flujos, sitemap, personas…)
  data/site.ts       links globales (mail, LinkedIn, CV, GitHub, Behance) y textos EN/ES
  data/projects.ts   grilla de la home y orden de "next project"
  data/cases/*.ts    contenido de cada caso (SUMUN, Jodify, Cine.AR, Santillana, Veggy)
  pages/             index, projects/[slug], 404
```

### Agregar o editar un caso

1. Exportá las imágenes a `src/assets/projects/`.
2. Duplicá un archivo de `src/data/cases/` y editá el contenido (los bloques están tipados en `src/data/types.ts`).
3. Sumalo a `cases` en `src/data/projects.ts` y poné `caseSlug` en su card.

### Idiomas

El toggle Español/English guarda la preferencia en `localStorage`. Todo el sitio está en inglés y español: los textos cortos usan `<T en="" es="" />` y cada caso tiene su versión en `src/data/cases/es/`.

## Deploy

El workflow `.github/workflows/deploy.yml` publica en **GitHub Pages** en cada push a `main`
(en el repo: *Settings → Pages → Source: GitHub Actions*). `SITE_URL` y `BASE_PATH` se completan solos,
así que funciona tanto en `usuario.github.io` como en `usuario.github.io/repo`.

## Pendientes

Buscá `TODO` en `src/data/` — faltan algunos links (mail, LinkedIn, CV, GitHub, Behance, sitios de clientes).
