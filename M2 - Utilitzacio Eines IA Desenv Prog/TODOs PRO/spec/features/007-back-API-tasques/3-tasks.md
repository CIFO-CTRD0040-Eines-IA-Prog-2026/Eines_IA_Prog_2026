# Tasques — 007 API de tasques

[ ] T1 — backend/routes/tasques.js: crear el router i protegir-lo tot amb `requereixSessio` (006).
[ ] T2 — GET /api/tasques: SELECT parametritzat `WHERE user_id = ?` (de la sessió), ordenat per created_at; retorna `[{id,title,done,created_at}]` amb `done` booleà.
[ ] T3 — POST /api/tasques: validar `title` no buit (si no, 400); INSERT amb el `user_id` de la sessió i `done=0`; 201 amb la tasca creada.
[ ] T4 — PATCH /api/tasques/:id: UPDATE `done` `WHERE id = ? AND user_id = ?`; si affectedRows=0 → 404; si no, 200 amb la tasca.
[ ] T5 — DELETE /api/tasques/:id: DELETE `WHERE id = ? AND user_id = ?`; si affectedRows=0 → 404; si no, 204.
[ ] T6 — Muntar el router de tasques a server.js.
[ ] T7 — Verificar amb dos usuaris: sense sessió→401; A crea/llegeix/modifica/esborra les seves; A no veu ni toca les de B (PATCH/DELETE alien→404). Usa les tools del MCP MySQL per a les verificacions.
[ ] T8 — Si tot passa, roadmap: 007 a «feta».
