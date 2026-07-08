# AGENTS.md — TODOs Lite

Projecte: **TODOs Lite**, una app web de gestió de tasques personals, versió **Lite** (només frontend, sense backend). L'usuari pot afegir tasques, marcar-les com a fetes i esborrar-les; Camp buit validat mab missatge. Tot es desa al navegador amb localStorage, de manera que la llista es conserva entre sessions. A la capçalera, un widget mostra el temps actual de la ciutat que triï l'usuari. És una aplicació d'una sola pàgina, senzilla i en català.

## Stack
- HTML5 semàntic, CSS3 i JavaScript vanilla. Sense frameworks, llibreries ni CDNs externs.
- Persistència amb **localStorage**.
- APIs externes: només **Open-Meteo**, sense API keys al codi. Endpoints:
  - Ciutat → coordenades: `https://geocoding-api.open-meteo.com/v1/search?name={ciutat}&count=1&language=ca`
  - Coordenades → temps actual: `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true`
- Les crides de xarxa es fan amb `fetch` natiu seguint la skill **fetch-api**.

## Estructura
- `index.html`, `style.css` i `app.js` a l'arrel d'aquesta carpeta.

## Funcionalitat
- **Tasques**: afegir, marcar com a feta i esborrar. La llista es desa a **localStorage** i es recupera en obrir la pàgina.
- **Widget del temps** (a la capçalera, al costat del títol):
  - Camp de text per escriure la ciutat i botó per consultar-la.
  - Mostra la temperatura actual i una icona/emoji segons el cel (sol, núvols, pluja...).
  - Si la ciutat no existeix o falla la xarxa, mostra un missatge d'error amable al mateix widget.
  - Recorda la darrera ciutat consultada a localStorage i la carrega en obrir la pàgina.

## Disseny
- Segueix la **skill d'estil** (paleta blava, fons clar). No inventis colors fora d'aquesta guia.
- La pantalla té: capçalera (amb el widget del temps), camp d'afegir una tasca, llista de tasques i estat buit.

## Convencions
- Classes CSS en minúscules amb guionets (kebab-case).
- Contingut en català. Codi net i ben indentat.

## Flux
- Abans d'un canvi important al codi, proposa un pla i espera la meva validació.

## Regles IMPORTANT
- Si et pregunto alguna cosa sobre el codi, **només respon**: no facis cap acció ni cap canvi.
- Treballa només dins d'aquesta carpeta.
- Aplica els skills afegides al projecte
