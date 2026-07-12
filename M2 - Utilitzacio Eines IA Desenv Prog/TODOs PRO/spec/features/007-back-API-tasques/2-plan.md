# Pla — 007 API de tasques

- Fitxers (a backend/):
  - `routes/tasques.js` — router amb `GET/POST/PATCH/DELETE /api/tasques`, tot darrere `requereixSessio`. Usa el pool de `db.js` (005).
  - `server.js` — muntar el router de tasques (com el d'auth de la 006).

- Decisions:
  - **Protecció**: totes les rutes passen pel middleware `requereixSessio` (006). L'usuari surt de `req.session.userId`, mai del body ni de la URL.
  - **Aïllament per usuari**: cada query porta `WHERE user_id = ?`. En PATCH/DELETE, el `WHERE id = ? AND user_id = ?`: si `affectedRows === 0` → 404 (l'id no existeix o és d'un altre; no distingim, per no filtrar existència).
  - **Contracte**: la resposta segueix el mock d'app.js — `{ id, title, done, created_at }`. `done` es retorna com a booleà (`!!row.done`) encara que a la DB sigui TINYINT(1).
  - **Consultes parametritzades** (skill mysql): sempre `pool.execute(sql, [params])` amb `?`, mai concatenar l'id ni el títol. `POST` fa INSERT i després retorna la fila (o la construeix amb l'`insertId` i `created_at`).
  - **Validació**: `title` obligatori i no buit (trim) al servidor → 400. `:id` ha de ser numèric; si no, 404.
  - **Ordre**: `GET` ordena per `created_at` (o `id`) per a una llista estable.
  - **Fora d'abast**: connectar el front (008), edició del text d'una tasca, paginació, filtres. Aquí només el CRUD del contracte actual.

- Precondicions:
  - 005 (servidor + pool) i 006 (sessió + `requereixSessio`) fetes. Taula `todos` amb `user_id` FK a `users` (004).

- Eines de referència (tech-stack):
  - **Context7 (MCP)**: sintaxi al dia d'Express (router, `req.params`, `res.status`) i de `mysql2` (`pool.execute`, `insertId`, `affectedRows`).
  - **Skill mysql**: consultes parametritzades i filtre per `user_id`; res de concatenar entrada del client.
  - **Skill fetch-api**: la forma i els codis d'estat que el front (008) espera consumir.

- Verificació (MCP mysql + crides HTTP):
  - Amb dos usuaris registrats (via 006), obtenir la cookie de cadascun.
  - Sense cookie: cada ruta → 401.
  - `POST` d'A → 201; el MCP mysql confirma la fila amb el `user_id` d'A i `done=0`.
  - `GET` d'A retorna només les seves; `GET` de B no veu les d'A.
  - `PATCH` d'A sobre la seva tasca → `done=1` a la DB; `PATCH` d'A sobre una de B → 404 i la fila de B intacta.
  - `DELETE` → 204 i la fila desapareix a la DB; `DELETE` d'una tasca aliena → 404.
