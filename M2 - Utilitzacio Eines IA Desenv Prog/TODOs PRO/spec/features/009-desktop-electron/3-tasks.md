# Tasques — 009 App d'escriptori (Electron)

## T1 — package.json arrel
[x] Crear `package.json` a l'arrel amb `electron` i `electron-builder` (devDependencies), scripts `desktop` (electron .) i `dist` (electron-builder), `main: desktop/main.js`.
[] **IMPORTANT**: `npm install` baixa el binari d'Electron (~100 MB) automàticament. Si es fa amb `--ignore-scripts`, executar `node node_modules/electron/install.js` després (2-5 min). Sense el binari, `npm run desktop` falla amb "Electron failed to install correctly".

## T2 — desktop/main.js (finestra)
[x] BrowserWindow amb `contextIsolation: true`, `nodeIntegration: false`, `sandbox: true`.
[x] Carrega `http://localhost:3000/todos`.
[x] `setWindowOpenHandler` → `shell.openExternal`.
[x] En producció (app.isPackaged), resoldre ruta del backend amb `process.resourcesPath`; en dev amb `path.join(__dirname, '..')`.

## T3 — desktop/main.js (cicle de vida del backend)
[x] `fork` de `backend/server.js` en arrencar.
[x] Polling a `/health` (30 intents × 1s). Timeout → `dialog.showErrorBox` i `app.quit()`.
[x] Kill del procés fill en tancar la finestra.
[x] **Capturar stderr del backend**: afegir `backendProc.stderr.on('data', ...)` per mostrar errors concrets (ex: "MySQL no disponible", port en ús) al diàleg, no només "Backend sortit amb codi 1".
[] **Verificar MySQL abans**: idealment comprovar connectivity abans de fork. Si MySQL no està en marxa, el backend llança una excepció al requerir `db.js` i surt amb codi 1.

## T4 — Selector de DB
[x] Renombrar `backend/.env` → `backend/.env.local`.
[x] Crear `backend/.env.railway` amb credencials de Railway (placeholder).
[x] Modificar `backend/server.js` per carregar el `.env` segons `DB_TARGET` (local/railway).
[x] Afegir `.env.local` i `.env.railway` al `.gitignore` del backend.
[ ] **Assegurar que `.env.local` existeix amb credencials vàlides** abans de provar `npm run desktop`.

## T5 — Railway
[ ] Crear servei MySQL a Railway, aplicar `schema.sql` i omplir `.env.railway`.
[ ] Provar `DB_TARGET=railway npm run desktop` i confirmar que al tornar a local les dades hi són intactes.

## T6 — Build electron-builder
[x] Bloc `build` al `package.json` amb `asarUnpack: ["backend/**/*"]`.
[x] Tres targets: mac/dmg, win/nsis, linux/AppImage.
[x] `npm run dist` per generar l'instal·lador del S.O. actual.

## T7 — GitHub Actions
[x] `.github/workflows/dist.yml` amb 3 jobs (macos-latest, windows-latest, ubuntu-latest).
[x] Cada job: checkout, setup-node, npm ci, npm run dist, upload-artifact.

## T8 — Verificació
[ ] (a) Amb l'app desktop engegada, skill loop-verificacio-front + MCP MySQL contra `http://localhost:3000`: registre, login, CRUD, logout, aïllament.
[ ] (b) A mà: finestra s'obre sola, cicle clicant a la UI, diàleg d'error amb MySQL aturat, `lsof -i :3000` net després de tancar, `DB_TARGET=railway` sense afectar dades locals.
[ ] (c) **Comprovar previ**: `mysqladmin ping` abans de tot. Si falla, engegar MySQL (`brew services start mysql` o equivalent).

## T9
[ ] Si tot passa, roadmap: 009 a «feta».
