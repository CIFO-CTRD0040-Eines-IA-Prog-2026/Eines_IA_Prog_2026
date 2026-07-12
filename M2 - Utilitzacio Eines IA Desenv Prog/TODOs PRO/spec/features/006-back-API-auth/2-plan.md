# Pla — 006 API d'autenticació

- Fitxers (a backend/):
  - `package.json` — afegir `bcrypt` i `express-session`.
  - `server.js` — muntar `express.json()` i `express-session` (secret de `.env`) i el router d'auth.
  - `routes/auth.js` — router amb `POST /api/registre`, `POST /api/login`, `POST /api/logout`, `GET /api/jo`. Usa el pool de `db.js` (005).
  - `middleware/sessio.js` — dues guàrdies: `requereixSessio` (API → 401 JSON; exportat per a la 007) i `requereixSessioPagina` (pàgina → 302 a `/login`).
  - `.env` / `.env.example` — afegir `SESSION_SECRET`.

- Decisions:
  - **Sessió amb cookie** (no JWT): la webapp la serveix el mateix Express, així que `express-session` amb cookie httpOnly és el més simple i el front no ha de gestionar cap token. El front farà `fetch(..., { credentials: 'same-origin' })`. A la sessió només hi desem `req.session.userId`.
  - **Hash**: `bcrypt` amb ~10 salt rounds. Mai es guarda ni es retorna la contrasenya en clar. La comparació al login és `bcrypt.compare`.
  - **Missatge de login neutre**: email inexistent i contrasenya dolenta retornen el mateix 401, per no revelar quins emails estan registrats.
  - **Duplicats**: es confia en la constraint `uk_users_email` de la DB (004). Si l'INSERT dona `ER_DUP_ENTRY`, es tradueix a 409; així no hi ha condició de carrera entre comprovar i inserir.
  - **Validació**: camps obligatoris i format d'email bàsic al servidor (el front ja valida, però el backend no s'hi refia). Contrasenya amb un mínim de longitud raonable.
  - **Cookie**: `httpOnly: true`; `secure` lligat a producció (en local, HTTP, ha de funcionar). `sameSite: 'lax'`.
  - **Fora d'abast**: rutes de tasques (007), recuperació de contrasenya, verificació d'email, "recorda'm". Aquí només registre/login/logout/sessió.

- Precondicions:
  - Servidor Express + pool `db.js` de la 005 en marxa; DB `todos_pro` amb la taula `users` (004).

- Eines de referència (tech-stack):
  - **Context7 (MCP)**: sintaxi al dia d'`express-session` (config de la cookie i el store) i de `bcrypt` (`hash`, `compare`).
  - **Skill mysql**: consultes parametritzades (`pool.execute` amb `?`), mai concatenar l'email a la query.
  - **Skill fetch-api**: forma de les respostes i codis d'estat que el front consumirà.

- Verificació (MCP mysql + navegador/HTTP):
  - Registre d'un usuari nou → 201; comprovar amb el MCP mysql que la fila existeix i que `password_hash` és un hash bcrypt (comença per `$2`), no la contrasenya.
  - Segon registre amb el mateix email → 409, sense fila nova.
  - Login correcte → 200 + sessió; login dolent → 401 (mateix missatge).
  - `GET /api/jo` abans i després de login/logout: 401 → 200 → 401.
  - Cap resposta conté `password_hash`.
