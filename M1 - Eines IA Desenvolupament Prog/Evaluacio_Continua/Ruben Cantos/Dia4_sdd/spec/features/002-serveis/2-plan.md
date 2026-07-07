# Plan: Llistat de Serveis

## estructura del fitxer

`codi/serveis.html` — HTML semàntic amb Tailwind CSS.

## blocs a construir

1. **Header:** Copiar el header de index.html, ajustant enllaços nav a `index.html#...`
2. **Breadcrumb:** `<nav aria-label="breadcrumb">` amb schema.org BreadcrumbList
3. **Page Header:** Fons degradat teal, text blanc
4. **Graella:** Grid 3 columnes (lg:grid-cols-3) amb 7 targetes
   - Cada targeta amb gradient de fons i color específic (rosa, teal, morat, groc, verd, blau, indi)
5. **Secció per Edats:** 3 columnes amb icones + bullet lists
6. **CTA Banner:** Fons teal amb text «Demana info per WhatsApp»
7. **Footer:** Copiar de index.html
8. **WhatsApp button:** Flotant, fix inferior dret

## estils

- Targetes: `bg-gradient-to-br from-{color}-50 to-white`, `service-card` class
- Breadcrumb: text gris, enllaç actiu teal
- Responsive: 1 col mòbil, 2 col tauleta, 3 col desktop
