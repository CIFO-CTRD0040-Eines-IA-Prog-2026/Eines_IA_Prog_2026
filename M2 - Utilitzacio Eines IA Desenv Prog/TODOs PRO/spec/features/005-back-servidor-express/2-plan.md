# Pla — 005 Servidor Express i connexió a la DB

- Fitxers (a backend/):
  - `package.json` — dependències (`express`, `mysql2`, `dotenv`) i scripts (`start`, `dev`).
  - `server.js` — app Express: rutes de pàgina, estàtics, `/health` i `app.listen`.
  - `db.js` — pool `mysql2/promise` amb credencials de `.env`.
  - `.env` — valors locals (localhost / root / sense password / todos_pro / port 3000), coincidint amb el MCP mysql (opencode.json). `.env.example` — plantilla documentada. `.gitignore` — `node_modules/`.

- Decisions:
  - **Connexió**: pool amb `mysql.createPool` (skill mysql), no connexió única.
  - **Config**: tot per `.env` amb `dotenv`; cap credencial al codi.
  - **URLs netes**: rutes explícites amb `res.sendFile` per a l'HTML (`/todos`, `/login`, `/registre`; `/`→`/todos`); només els assets per `express.static('public')`. Servir l'HTML per estàtics deixaria obrir la llista sense passar per la ruta que la 006 protegirà.
  - **/health**: ping via el pool (`SELECT 1`) dins try/catch → 200 ok / 500 ko sense petar.
  - **Fora d'abast**: API de tasques i d'auth (features posteriors) i la protecció de sessió de `/todos` (006).

- Precondicions:
  - `todos_pro` i les taules (004) existents perquè `/health` doni `db: "ok"`.

- Eines (tech-stack):
  - **Context7 (MCP)** — sintaxi d'Express i `mysql2`.
  - **Skill mysql** — regles del pool.

- Verificació (MCP mysql + navegador):
  - `npm install` i `npm start` sense errors.
  - `/todos`, `/login`, `/registre` mostren la pàgina; `/`→`/todos`.
  - Amb `todos_pro`: `/health`→200 `db:"ok"`. Amb la DB apagada: `/health`→500 `db:"ko"` (servidor viu).
