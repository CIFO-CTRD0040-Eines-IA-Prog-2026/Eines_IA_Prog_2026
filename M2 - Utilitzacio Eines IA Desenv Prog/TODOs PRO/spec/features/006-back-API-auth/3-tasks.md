# Tasques — 006 API d'autenticació

[ ] T1 — backend/package.json: afegir dependències `bcrypt` i `express-session`; `npm install` sense errors.
[ ] T2 — backend/.env i backend/.env.example: afegir `SESSION_SECRET` (a .env un valor local; a .env.example documentat, sense valor real).
[ ] T3 — backend/server.js: muntar `express.json()` i `express-session` (secret de .env, cookie httpOnly, sameSite lax) abans de les rutes.
[ ] T4 — backend/middleware/sessio.js: `requereixSessio` (401 si no hi ha `req.session.userId`, si no `next()`); exportat per a la 007.
[ ] T5 — backend/routes/auth.js: `POST /api/registre` — validar camps, hash amb bcrypt, INSERT parametritzat; 201 `{id,nom,email}` + sessió; `ER_DUP_ENTRY` → 409.
[ ] T6 — backend/routes/auth.js: `POST /api/login` — buscar per email, `bcrypt.compare`; 200 + sessió o 401 amb missatge neutre.
[ ] T7 — backend/routes/auth.js: `POST /api/logout` (destrueix sessió → 200) i `GET /api/jo` (200 amb usuari o 401).
[ ] T8 — Muntar el router a server.js i comprovar que cap resposta retorna `password_hash`.
[ ] T9 — Verificar amb el MCP mysql i crides HTTP: registre→201 i fila amb hash bcrypt; duplicat→409; login ok/ko; /api/jo 401→200→401 amb logout.
[ ] T10 — Si tot passa, roadmap: 006 a «feta».
