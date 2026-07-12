# Tasques — 008 Connexió del FRONT al backend real

[ ] T1 — app.js: treure el mock (SIMULA_ERROR, tasquesInicials, MOCK_LATENCIA, nextId, copiarTasques, retard).
[ ] T2 — app.js: getTodos → `GET /api/tasques` (fetch-api, credentials same-origin); 401 → redirigeix a `/login`; altre error → estat-error.
[ ] T3 — app.js: createTodo → `POST /api/tasques`; toggleTodo → `PATCH /api/tasques/:id`; deleteTodo → `DELETE /api/tasques/:id`. Mateixa firma, el DOM no canvia.
[ ] T4 — app.js: form-login → `POST /api/login` (OK→/todos; 401→"Email o contrasenya incorrectes") i form-registre → `POST /api/registre` (OK→/todos; 409→"Aquest email ja està registrat"). Manté la validació (002).
[ ] T5 — server.js: aplicar `requereixSessioPagina` (006) a `GET /todos`. html: `href` i botó "Surt" a `/todos`, `/login`, `/registre` (sense `.html`); "Surt" → `POST /api/logout` → `/login`.
[ ] T6 — Verificar el flux sencer amb la skill loop-verificacio-front (Playwright MCP) contra el servidor viu. Usa les tools del MCP MySQL per confirmar cada efecte a la DB i l'aïllament entre dos usuaris.
[ ] T7 — Si tot passa, roadmap: 008 a «feta».