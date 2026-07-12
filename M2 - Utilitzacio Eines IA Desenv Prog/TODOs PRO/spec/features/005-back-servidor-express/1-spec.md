# 005 — Servidor Express i connexió a la DB

Segon pas del BACKEND: aixecar un servidor Express que serveixi el FRONT (public/) amb URLs netes i tingui la connexió a `todos_pro` (004) preparada i verificable. Encara no hi ha rutes d'API ni d'auth.

- Contingut
Servidor Express en un port configurable (per defecte 3000).
Serveix el FRONT amb URLs netes (sense `.html`): `/todos` (llista), `/login`, `/registre`. Els assets (style.css, app.js) com a estàtics de `public/`.
Connexió a MySQL amb un pool (`mysql2`), amb les credencials a `.env` (mai al codi).
`GET /health` que fa un ping a la DB i respon l'estat de la connexió.

- Contracte
Rutes de pàgina amb `res.sendFile` (l'HTML no es serveix per estàtics): `GET /todos`→index.html, `GET /login`→login.html, `GET /registre`→registre.html, `GET /`→redirigeix a `/todos`.
`GET /health` → 200 `{ estat: "ok", db: "ok" }` si la DB respon; 500 `{ estat: "error", db: "ko" }` si no.
Les credencials viuen a `.env` (fora del repo); un `.env.example` documenta les variables.
Nota: la protecció de sessió de `/todos` l'aplica la 008 (amb el middleware que crea la 006). Aquí `/todos` encara serveix sense comprovar sessió.

- Criteris d'acceptació
[ ] `npm install` instal·la express, mysql2 i dotenv sense errors.
[ ] `npm start` aixeca el servidor al port de `.env` (o 3000) sense petar.
[ ] `/todos`, `/login` i `/registre` mostren la seva pàgina i `/` redirigeix a `/todos`; cap URL porta `.html`. (`/todos` encara sense protecció de sessió; l'afegeix la 008.)
[ ] Amb `todos_pro` i credencials correctes, `GET /health` respon 200 amb `db: "ok"`.
[ ] Amb credencials dolentes o la DB apagada, `GET /health` respon 500 amb `db: "ko"` (el servidor no peta).
[ ] Cap credencial dins del codi; tot a `.env`.
