# 001 — Pàgina inicial



# Pla: Web d'Història de Barcelona

## Objectiu
Una pàgina única (index.html) amb capçalera, menú de navegació responsiu i les diferents seccions de cada segle.

## Estructura del projecte

```
Practica/
├── AGENTS.md          # Aquest fitxer de pla
├── estils.css         # Full d'estils compartit
├── index.html         # Pàgina principal amb capçalera i índex
├── segleII.html       # Segle II aC - Fundació romana
├── segleV.html        # Segle V - Període visigòtic
├── segleVIII.html     # Segle VIII - Conquesta musulmana
├── segleXII.html      # Segle XII - Comtat de Barcelona
├── segleXV.html       # Segle XV - Esplendor medieval
├── segleXVIII.html    # Segle XVIII - Guerra de Successió
├── segleXIX.html      # Segle XIX - Revolució Industrial
└── segleXX.html       # Segle XX - Modernisme i Jocs Olímpics
```

## Pàgines a crear

### index.html
- Capçalera: títol "Història de Barcelona" + subtítol "Un viatge a través dels segles"
- Índex de navegació amb enllaços interns a cada segle
- Enllaç a cada pàgina de segle
- Añade una imagen de Barcelona en el Hero

### estils
- segueix la skill Disseny-web

### Pàgines de segle (×8)
Cada pàgina conté:
- Títol del segle/període
- Mínim 10 línies de contingut històric
- Fotografia representative (placeholder) amb peu de foto
- Enllaç de retorn a index.html

## Contingut per segle

| Fitxer | Període | Tema principal |
|--------|---------|---------------|
| segleII.html | Segle II aC | Fundació de Bàrcino per August |
| segleV.html | Segle V | Caiguda de l'Imperi i domini visigòtic |
| segleVIII.html | Segle VIII | Conquesta musulmana d'Al-Àndalus |
| segleXII.html | Segle XII | Comtat i consolidació de la Corona d'Aragó |
| segleXV.html | Segle XV | Esplendor comercial i cultural |
| segleXVIII.html | Segle XVIII | Guerra de Successió i Decrets de Nova Planta |
| segleXIX.html | Segle XIX | Revolució Industrial i Eixample de Cerdà |
| segleXX.html | Segle XX | Modernisme, Jocs Olímpics i transformació |

## Disseny visual (frontend-design skill)
- en les pagines corresponents de cada Segle utilitza la imatge corresponent de cada segle i afegeix-la com a hero


### Elements clau
- **Hero**: fons slate amb patró CSS de mosaic romà (diamants discrets)
- **Índex**: targetes amb numeració romana destacada + connexió visual de línia del temps
- **Pàgines de segle**: barra cronològica horitzontal amb el segle actiu ressaltat
- **Risc estètic**: patró geomètric al hero inspirat en *opus tessellatum* romà, fet amb gradients CSS
- **Navegació**: enllaços anterior/següent a cada pàgina

## Execució
1. Crear estils.css amb el disseny complet
2. Crear index.html amb hero + graella de targetes
3. Crear cada pàgina de segle amb barra cronològica i navegació interna

## Rules
- Eines: Quan necessitis documentació o exemples actualitzats d'una llibreria (p. ex. Tailwind), utilitza el MCP context7 abans de respondre.
- Sempre fes servir el MCP Context7 per les llibreries d'estils

## requisits funcionals
Capçalera sticky amb el títol "Historia de Barcelona"
Menú de navegació amb un enllaç per tema (àncora #id). En pantalla gran, horitzontal i visible; al mòbil, darrere d'un botó hamburguesa que s'obre i es tanca en triar un enllaç.


## Requisits no funcionals
Disseny: skill disseny-web (mode fosc, paleta i tokens). Cap color fora d'aquesta guia.
Responsive: graella d'1 → 2 → 3 columnes (mòbil → tauleta → pantalla gran).
Accessibilitat: contrast suficient, focus visible, botó del menú amb aria-label.

- Fora d'abast
Cerca, filtres, mode clar/fosc, múltiples pàgines, backend.

- Criteris d'acceptació
[ ] Els enllaços del menú salten aa la pagina corresponent per cada segle.
[ ] Al mòbil, el menú s'obre i es tanca amb el botó hamburguesa.
[ ] Els colors coincideixen amb els tokens de disseny-web.

## Contingut per segle

| Fitxer | Període | Tema principal |
|--------|---------|---------------|
| segleII.html | Segle II aC | Fundació de Bàrcino per August |
| segleV.html | Segle V | Caiguda de l'Imperi i domini visigòtic |
| segleVIII.html | Segle VIII | Conquesta musulmana d'Al-Àndalus |
| segleXII.html | Segle XII | Comtat i consolidació de la Corona d'Aragó |
| segleXV.html | Segle XV | Esplendor comercial i cultural |
| segleXVIII.html | Segle XVIII | Guerra de Successió i Decrets de Nova Planta |
| segleXIX.html | Segle XIX | Revolució Industrial i Eixample de Cerdà |
| segleXX.html | Segle XX | Modernisme, Jocs Olímpics i transformació |

