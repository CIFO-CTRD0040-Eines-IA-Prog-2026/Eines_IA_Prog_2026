# CONTEXT — NutriVida

## Projecte
Pàgina web estàtica amb temàtica d'alimentació saludable (`PRD.md`).

## Stack
HTML i CSS pur. Sense JS, frameworks ni llibreries.

## Estructura
- `index.html` — HTML5 semàntic
- `style.css` — CSS3 amb classes en kebab-case
- `PRD.md` — Requisits del producte
- `AGENTS.md` — Regles de treball de l'agent

## Contingut (català)
- **Consells diaris:** Hidratació, plat d'Harvard, greixos saludables (3 targetes)
- **Superaliments:** Espinacs, llavors de xia, all (3 targetes amb beneficis)
- **Receptes del mes:** Amanida de quinoa/edamame/alvocat + Crema de carbassa amb curri
- **Rutines interactives (CSS Tabs amb ràdio inputs):** Vegana (4 àpats) i Vegetariana (4 àpats)

## Disseny i Estil
- **Paleta:** Tons verds (`#2b4c2d`, `#4c7c4f`) + terracota (`#e59360`) + fons crema (`#f9f8f3`)
- **Tipografia:** Playfair Display (serif) + Plus Jakarta Sans (sans-serif)
- **Estil:** Revista digital elegant, disseny de targetes i graelles responsives

## Mode Fosc (Dark Mode) — Implementat
Dos mecanismes complementaris:

### 1. Automàtic (Preferència de Sistema)
`@media (prefers-color-scheme: dark)` redefineix les variables CSS a `:root` amb tons verd fosc.

### 2. Manual (Interruptor CSS pur)
- Checkbox `<input type="checkbox" id="dark-mode-toggle">` al principi del `<body>`
- Botó circular (Lluna/Sol) al header que activa/desactiva el checkbox
- `#dark-mode-toggle:checked ~ .page { --variable: valor }` sobreescriu les variables
- S'han afegit sobreescrites específiques per a gradients de receptes, footer i tags

## Interactivitat sense JS
- **Rutines:** Tabs funcionals amb `<input type="radio">` i selectors CSS `:checked ~`
- **Mode fosc:** Toggle amb `<input type="checkbox">` i selectors CSS `:checked ~`
- Ambdós sistemes usen l'estructura de germans (sibling combinators) per canviar estils

## Ús
Obrir `index.html` al navegador.
