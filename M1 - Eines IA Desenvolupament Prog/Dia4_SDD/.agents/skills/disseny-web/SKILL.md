---
name: disseny-web
description: Guia de disseny visual del projecte (paleta, tipografia, estil). S'ha d'utilitzar sempre que es creï o modifiqui HTML/CSS, es donin estils amb Tailwind, o es parli de colors, layout o aspecte visual de la pàgina d'apunts.
---

# Guia de disseny — Apunts de Fonaments de Programació

Aquesta és la guia de disseny del projecte. Segueix-la sempre que generis o modifiquis codi visual (HTML, CSS, classes de Tailwind). No inventis colors ni estils fora d'aquesta guia.

## Paleta (mode fosc)

La web és en **mode fosc**. Colors exactes:

| Token      | Hex       | Ús                                        |
|------------|-----------|-------------------------------------------|
| `fons`     | `#0F172A` | Fons general de la pàgina                 |
| `fons-alt` | `#1E293B` | Fons de targetes i blocs de codi          |
| `text`     | `#E2E8F0` | Text principal                            |
| `text-suau`| `#94A3B8` | Text secundari, peus, metadades           |
| `primari`  | `#22D3EE` | Títols destacats, enllaços, icones        |
| `accent`   | `#A78BFA` | Elements d'èmfasi, badges, hover          |

Registra aquests colors a la configuració de Tailwind (script inline al `index.html` si es fa servir el CDN) perquè es puguin usar com a classes: `bg-fons`, `bg-fons-alt`, `text-text`, `text-primari`, `bg-accent`, etc. **No utilitzis hex solts a les classes** (`bg-[#...]`) ni colors per defecte de Tailwind que no siguin d'aquesta paleta.

## Estil: targetes (cards)

- Cada tema dels apunts va dins d'una **targeta**: fons `fons-alt`, cantonades arrodonides (`rounded-xl`), ombra suau i una mica de padding generós (`p-6`).
- Les targetes es disposen en **grid responsiu**: 1 columna en mòbil, 2 en tauleta, 3 en pantalles grans (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- Efecte hover subtil: lleuger canvi de vora o ombra amb `accent`. Res d'animacions estridents.

## Tipografia i jerarquia

- Font del sistema o una sans-serif neta (p. ex. `font-sans` de Tailwind).
- `h1` gran i en `primari`; `h2` per a cada tema dins la seva targeta; text de cos en `text` amb interlineat còmode (`leading-relaxed`).
- Els **exemples de codi** van en `<pre><code>` amb font monoespaiada, fons `fons` (més fosc que la targeta), vora subtil i `rounded-lg`.

## Regles generals

- Contrast suficient: mai text `text-suau` sobre `fons-alt` per a contingut important.
- Mobile-first: primer que es vegi bé en mòbil, després amplia amb breakpoints.
