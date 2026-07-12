# 007 — API de tasques (CRUD per usuari)

Quart pas del BACKEND: sobre el servidor de la 005 i l'autenticació de la 006, afegir les rutes REST de tasques. Cada tasca pertany a un usuari: l'API només retorna i modifica les tasques de l'usuari de la sessió. Aquest és el CRUD que la 008 farà servir per substituir el mock en memòria del front (app.js).

- Contingut
Rutes REST sota `/api/tasques`, totes protegides pel middleware `requereixSessio` (006): sense sessió → 401.
Les tasques es filtren SEMPRE pel `user_id` de la sessió (`req.session.userId`), mai per un id que vingui del client.
Les operacions respecten el contracte del FRONT (app.js): objecte `{ id, title, done, created_at }`.

- Contracte (encaixa amb getTodos/createTodo/toggleTodo/deleteTodo del mock)
`GET /api/tasques`
  → 200 `[{ id, title, done, created_at }, ...]` — només les de l'usuari de la sessió, ordenades per `created_at`.
`POST /api/tasques` amb `{ title }`
  → 201 `{ id, title, done: false, created_at }`. `done` arrenca a false; el `user_id` el posa el servidor des de la sessió.
  → 400 `{ error: "El títol no pot ser buit" }` si falta `title` o és buit.
`PATCH /api/tasques/:id` amb `{ done }`
  → 200 `{ id, title, done, created_at }` amb el nou estat.
  → 404 `{ error: "Tasca no trobada" }` si l'id no existeix O no és de l'usuari de la sessió.
`DELETE /api/tasques/:id`
  → 204 sense cos.
  → 404 `{ error: "Tasca no trobada" }` si l'id no existeix O no és de l'usuari de la sessió.
`done` viatja com a booleà a l'API; a la DB és `TINYINT(1)` (0/1): el servidor tradueix.

- Aïllament entre usuaris (clau)
Un usuari no pot llegir, modificar ni esborrar tasques d'un altre. PATCH/DELETE d'una tasca aliena → 404 (no 403: no revelem que existeix). Tota query porta `WHERE user_id = ?` amb el de la sessió.

- Criteris d'acceptació
[ ] Sense sessió, qualsevol ruta `/api/tasques` respon 401 (middleware de la 006).
[ ] Amb sessió, `GET /api/tasques` retorna només les tasques d'aquell usuari, amb la forma `{id,title,done,created_at}` i `done` com a booleà.
[ ] `POST /api/tasques` amb `{title}` crea la fila amb el `user_id` de la sessió, `done=0`, i retorna 201 amb la tasca; a la DB la fila existeix amb aquell user_id.
[ ] `POST` amb títol buit → 400 i no crea cap fila.
[ ] `PATCH /api/tasques/:id` amb `{done:true}` posa `done=1` a la DB i retorna la tasca actualitzada; amb `{done:false}` la torna a 0.
[ ] `DELETE /api/tasques/:id` esborra la fila i retorna 204; a la DB ja no hi és.
[ ] Amb dos usuaris (A i B): A no veu les tasques de B; PATCH/DELETE per A sobre una tasca de B → 404 i la fila de B no canvia.
[ ] Cap ruta confia en un `user_id` del client: sempre s'usa el de la sessió.
