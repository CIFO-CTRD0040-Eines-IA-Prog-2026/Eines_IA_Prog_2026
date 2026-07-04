# Tech Stack

## Llenguatges i eines

- **HTML5** semàntic.
- **Tailwind CSS** via CDN (`<script src="https://cdn.tailwindcss.com"></script>`), configurat amb un bloc `tailwind.config` inline dins de l'`index.html`.
- **CSS propi** a `style.css` només per al que Tailwind no cobreix còmodament (p. ex. estils de `<pre><code>`, ajustos de scroll o transicions concretes).
- **JavaScript** mínim i sense llibreries, només per a obrir/tancar el menú de navegació al mòbil.

## Estructura de fitxers

```
Dia4_SDD/
├── index.html      ← tota la pàgina
└── style.css       ← estils extra puntuals
```

## Disseny visual

El disseny **no s'improvisa**. La font de veritat és la skill **`disseny-web`** (`.agents/skills/disseny-web/SKILL.md`): paleta en mode fosc, tokens de color registrats a `tailwind.config`, targetes, grid responsiu i tipografia. Cal seguir-la al peu de la lletra i no inventar colors ni estils fora d'aquesta guia.

## Documentació de referència

Quan calgui la sintaxi o exemples actualitzats de Tailwind (config inline via CDN, breakpoints, classes d'utilitat), consulta el **MCP context7** abans de respondre, en lloc de confiar en la memòria.

## Convencions de codi

- Contingut **en català**.
- Codi net i indentat de manera consistent.
- Mobile-first: classes base per a mòbil, s'amplia amb breakpoints (`md:`, `lg:`).
