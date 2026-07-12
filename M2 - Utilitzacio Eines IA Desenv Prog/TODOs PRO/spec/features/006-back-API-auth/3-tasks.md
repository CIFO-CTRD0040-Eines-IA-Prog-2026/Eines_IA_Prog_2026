# Tasques — 006 API d'autenticació

[ ] T1 — backend/package.json: afegir `bcrypt` i `express-session`; `npm install` sense errors.
[ ] T2 — backend/.env i .env.example: afegir `SESSION_SECRET` (valor local a .env; documentat, sense valor, a .env.example).
[ ] T3 — server.js: muntar `express.json()` i `express-session` (cookie httpOnly, sameSite lax) abans de les rutes.
[ ] T4 — middleware/sessio.js: `requereixSessio` (API → 401 JSON; exportat per a la 007) i `requereixSessioPagina` (pàgina → 302 a `/login`). Tots dos exportats; l'aplicació a `GET /todos` es fa a la 008.
[ ] T5 — routes/auth.js: `POST /api/registre` — validar camps, hash bcrypt, INSERT parametritzat; 201 + sessió; `ER_DUP_ENTRY`→409.
[ ] T6 — routes/auth.js: `POST /api/login` — `bcrypt.compare`; 200 + sessió o 401 amb missatge neutre.
[ ] T7 — routes/auth.js: `POST /api/logout` (destrueix sessió → 200) i `GET /api/jo` (200 amb usuari o 401).
[ ] T8 — Muntar el router a server.js; comprovar que cap resposta retorna `password_hash`.
[ ] T9 — Verificar: registre→201 i fila amb hash bcrypt; duplicat→409; login ok/ko; /api/jo 401→200→401 amb logout. Usa les tools del MCP MySQL per a les verificacions.
[ ] T10 — Si tot passa, roadmap: 006 a «feta».
