# 009 — App d'escriptori (Electron)

La webapp es converteix en una aplicació d'escriptori sense tocar el front ni l'API: Electron fa de carcassa. En obrir l'app, el procés principal arrenca el backend Express com a procés fill, espera que `/health` respongui OK i llavors mostra la finestra carregant `http://localhost:3000/todos` (el servidor ja redirigeix a `/login` si no hi ha sessió, 008). En tancar la finestra, el backend s'atura. `npm run dist` genera l'instal·lador del S.O. on s'executa (`.dmg` a macOS, `.exe` a Windows, `.AppImage` a Linux) — electron-builder detecta la plataforma tot sol.

- Contingut
Carpeta nova `desktop/` amb el `main.js` d'Electron: crea la finestra, arrenca i atura el backend, i gestiona els errors d'arrencada.
`package.json` a l'arrel del projecte: dependències (electron, electron-builder), scripts (`desktop`, `dist`) i configuració de build amb els tres targets (dmg, nsis, AppImage).
Selector de base de dades amb un sol dato: el backend carrega `.env.local` (per defecte) o `.env.railway` segons la variable `DB_TARGET`. Les dues DB són independents: canviar de nube a local no perd res.
Workflow de GitHub Actions que construeix els tres instal·ladors (un job per S.O. en màquina nativa: macos, windows, ubuntu): és l'única manera de cobrir Windows i Linux des d'un sol ordinador.

- Contracte (res del cicle 001–008 es toca)
`public/` no canvia gens: ni ids del DOM, ni rutes, ni fitxers.
`backend/` només canvia com es carrega el `.env` (fitxer segons `DB_TARGET`); rutes, middleware i esquema queden intactes.
El renderer és web pura: `contextIsolation: true`, sense `nodeIntegration` ni preload. Els links externs s'obren al navegador del sistema, mai dins la finestra.

- Criteris d'acceptació
[ ] `npm run desktop` obre la finestra sense arrencar res a mà: el backend s'aixeca sol i la finestra no apareix fins que `/health` fa OK.
[ ] Tot el cicle de la 008 passa dins la finestra desktop: registre, login, CRUD de tasques, logout i aïllament entre dos usuaris, persistit a MySQL.
[ ] Tancar la finestra atura el backend: no queda cap procés node escoltant al port.
[ ] Amb MySQL aturat, l'app mostra un diàleg d'error clar (mai una finestra en blanc) amb el missatge concret (ex: "MySQL no disponible", "port 3000 en ús"), no només "codi 1", i es tanca neta.
[ ] `DB_TARGET=railway npm run desktop` funciona igual amb la DB de Railway; en tornar a executar sense la variable, les dades locals hi són intactes.
[ ] `npm run dist` genera l'instal·lador del S.O. on s'executa (`.dmg` a macOS, `.exe` a Windows, `.AppImage` a Linux); instal·lat, l'app arrenca i funciona per si sola. Com que no va signada, el primer cop cal el pas extra del S.O. (Gatekeeper a macOS, SmartScreen a Windows). Es prova end-to-end a la màquina de desenvolupament, sigui quina sigui.
[ ] El workflow de GitHub Actions acaba en verd amb els tres instal·ladors (.dmg, .exe, .AppImage) com a artifacts descarregables.
[ ] Un link extern (si n'hi ha) s'obre al navegador del sistema, no dins l'app.

- Requisits previs d'execució
[ ] MySQL local ha d'estar en marxa abans de `npm run desktop` (`mysqladmin ping`).
[ ] `npm install` baixa el binari d'Electron (~100 MB). Si es fa amb `--ignore-scripts`, executar `node node_modules/electron/install.js` després. Sense el binari, `npm run desktop` falla amb "Electron failed to install correctly".
[ ] `backend/.env.local` ha d'existir amb credencials MySQL vàlides.
