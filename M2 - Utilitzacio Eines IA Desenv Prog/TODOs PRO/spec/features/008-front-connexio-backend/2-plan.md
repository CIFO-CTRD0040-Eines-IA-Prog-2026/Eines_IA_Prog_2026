# Pla — 008 Connexió del FRONT al backend real

- Fitxers:
  - `public/app.js` — reescriure les 4 funcions de dades i el bloc auth; el DOM i la validació (002) es mantenen.
  - `public/*.html` — `href` i botó "Surt" cap a `/todos`, `/login`, `/registre` (sense `.html`); "Surt" amb id estable per al logout.
  - `backend/server.js` — aplicar `requereixSessioPagina` (006) a `GET /todos`.

- Decisions:
  - **fetch real (skill fetch-api)**: `async/await` amb `try/catch`, `response.ok` abans de `.json()`, `credentials: 'same-origin'` a cada crida. Errors en català, mai el text de l'excepció.
  - **Treure el mock**: fora `SIMULA_ERROR`, `tasquesInicials`, `MOCK_LATENCIA`, `nextId`, `copiarTasques`, `retard`. El contracte ja el fixa la 003.
  - **Auth**: després de validar (002), login i registre criden l'API i naveguen a `/todos` si va bé; si no, missatge a la zona d'error (401→credencials, 409→email existent).
  - **Sessió**: un 401 d'`/api/tasques` (sessió caducada en ple ús) redirigeix a `/login`; la resta d'errors → `estat-error`. L'accés inicial ja el barra el servidor (006).

- Precondicions:
  - 006 i 007 fetes; el servidor (005) servint public/. La verificació és sempre contra el servidor viu, no obrint el .html.

- Eines (tech-stack):
  - **Skill fetch-api** — patró de crides, estats i missatges.
  - **Skill loop-verificacio-front** — verificació amb el navegador (Playwright MCP).
  - **Context7 (MCP)** — sintaxi de `fetch`.

- Verificació (Playwright MCP contra el servidor viu, creuant amb MySQL MCP):
  El navegador condueix el flux real (registre, login, logout, CRUD, redirecció per 401, aïllament entre dos usuaris) i el MCP MySQL confirma l'efecte a la DB a cada pas.
