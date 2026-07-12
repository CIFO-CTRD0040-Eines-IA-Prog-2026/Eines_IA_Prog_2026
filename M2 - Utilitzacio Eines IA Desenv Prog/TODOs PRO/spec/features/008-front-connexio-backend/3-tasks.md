# Tasques — 008 Connexió del FRONT al backend real

[ ] T1 — public/app.js: treure el mock (SIMULA_ERROR, tasquesInicials, MOCK_LATENCIA, nextId, copiarTasques, retard).
[ ] T2 — app.js: getTodos → `GET /api/tasques` (skill fetch-api, credentials same-origin); si 401 → redirigeix a login.html; altre error → estat-error.
[ ] T3 — app.js: createTodo(title) → `POST /api/tasques {title}`; toggleTodo(id,done) → `PATCH /api/tasques/:id {done}`; deleteTodo(id) → `DELETE /api/tasques/:id`. Mateixa firma; el DOM no canvia.
[ ] T4 — app.js: form-login → `POST /api/login`. OK→index.html; 401→missatge "Email o contrasenya incorrectes". Manté la validació de camps (002) abans de cridar.
[ ] T5 — app.js: form-registre → `POST /api/registre`. OK(201)→index.html; 409→"Aquest email ja està registrat". Manté la validació (002).
[ ] T6 — index.html + app.js: botó "Surt" (id estable) → `POST /api/logout` → login.html.
[ ] T7 — Verificar el flux sencer amb la skill loop-verificacio-front (Playwright MCP) contra el servidor viu: registre/login/logout, alta/toggle/esborrat, redirecció per 401 i missatges en català. Usa les tools del MCP MySQL per confirmar cada efecte a la DB (usuari creat, tasca amb el user_id de la sessió, done 0/1, fila esborrada) i l'aïllament entre dos usuaris.
[ ] T8 — Si tot passa, roadmap: 008 a «feta».
