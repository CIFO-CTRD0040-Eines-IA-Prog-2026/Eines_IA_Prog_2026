# Pla — 009 App d'escriptori (Electron)

- Fitxers:
  - `desktop/main.js` — nou: finestra, cicle de vida del backend (fork + espera de `/health` + kill en tancar), diàleg d'error si el backend no arrenca, links externs al navegador del sistema.
  - `package.json` (arrel) — nou: electron i electron-builder com a devDependencies, scripts `desktop` i `dist`, i el bloc `build` amb els tres targets (mac/dmg, win/nsis, linux/AppImage).
  - `backend/server.js` (o el mòdul de connexió a la DB) — carregar dotenv amb ruta segons `DB_TARGET`: `.env.local` per defecte, `.env.railway` si `DB_TARGET=railway`.
  - `backend/.env.local` i `backend/.env.railway` — les dues configuracions; l'actual `.env` passa a ser `.env.local`. Cap dels dos es puja al git.
  - `.github/workflows/dist.yml` — 3 jobs (macos/windows/ubuntu), cadascun `npm run dist` i puja el seu instal·lador com a artifact.

- Decisions:
  - **Electron i no Tauri/PWA**: tot l'stack ja és JS/Node; el main process resol qui arrenca el backend. El front no es toca: la finestra és Chromium real i la cookie de sessió, les URLs netes i els redirects (006/008) funcionen idèntics al navegador.
  - **Arrencada ordenada**: `fork` de `backend/server.js`, polling a `http://localhost:3000/health` (que ja pinga MySQL, 005); la finestra només es mostra amb OK. Timeout → diàleg d'error (`dialog.showErrorBox`) i sortir. En tancar la finestra, `kill` del procés fill.
  - **Renderer web pura**: `contextIsolation: true`, sense `nodeIntegration` ni preload — el front no sap que és desktop. `setWindowOpenHandler` → `shell.openExternal` per als links externs.
  - **Un sol dato per canviar de DB**: `DB_TARGET` tria el fitxer d'entorn. Local i Railway són dues DB independents amb el mateix `schema.sql`; no hi ha migració de dades entre elles, per això canviar no perd res.
  - **Instal·lador segons plataforma**: `npm run dist` sense flags — electron-builder construeix el target del S.O. actual. Els tres instal·ladors surten del workflow d'Actions (cada job en màquina nativa); mai cross-compile local. Sense signatura de codi: es documenta el pas extra de Gatekeeper/SmartScreen. Només l'instal·lador del S.O. de la màquina de desenvolupament es prova instal·lat de debò; per als altres dos, el criteri és que el workflow els generi.

- Precondicions:
  - 005–008 fetes: servidor, auth, API de tasques i front connectat, verificats.
  - MySQL local en marxa (`mysqladmin ping` ha de retornar OK). Per a la via Railway: servei MySQL creat a Railway, `schema.sql` aplicat i credencials a `.env.railway`.
  - Binari d'Electron instal·lat: `npm install` baixa el binari automàticament si no es fa amb `--ignore-scripts`. Si es va usar `--ignore-scripts`, cal executar `node node_modules/electron/install.js` després de l'install (pot trigar 2-5 min, ~100 MB). Sense el binari, `npm run desktop` falla amb "Electron failed to install correctly".
  - `backend/.env.local` ha d'existir amb les credencials MySQL correctes (veure `.env.example`). Si no existeix o MySQL no està en marxa, el backend surt amb codi 1 i l'app mostra un diàleg d'error.

- Eines (tech-stack):
  - **Context7 (MCP)** — sintaxi actualitzada d'Electron (app, BrowserWindow, dialog, shell, utilityProcess/fork) i d'electron-builder (bloc `build`, targets).
  - **Skill loop-verificacio-front** — reverifica el cicle de la 008 contra el servidor que l'app ha aixecat. Nota: el Playwright MCP obre el seu propi navegador, no pot entrar a la finestra d'Electron; els criteris propis d'Electron es comproven a mà.

- Verificació:
  Dues parts. (1) Amb l'app desktop engegada, la skill loop-verificacio-front repeteix el flux de la 008 contra `http://localhost:3000`, creuant amb el MCP MySQL — això valida que el servidor aixecat per l'app és el de sempre. (2) A mà, dins la finestra: el mateix cicle clicant a la UI, el diàleg d'error amb MySQL aturat, i `lsof -i :3000` net després de tancar. Després, un cicle curt amb `DB_TARGET=railway` confirmant que les dades locals no canvien. Finalment `npm run dist`, instal·lar l'instal·lador del S.O. actual i repetir un login + una tasca des de l'app instal·lada.
