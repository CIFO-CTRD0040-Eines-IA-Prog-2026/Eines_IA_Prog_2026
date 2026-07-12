# 006 — API d'autenticació (registre, login, sessió)

Tercer pas del BACKEND: sobre el servidor Express de la 005, afegir les rutes d'autenticació contra la taula `users` (004). Un usuari es pot registrar, entrar i sortir, i el servidor sap qui és a cada petició via una sessió amb cookie. Encara no hi ha rutes de tasques: això és el pas previ perquè la 007 pugui filtrar les tasques per usuari.

- Contingut
Registre: crea un usuari nou a `users` amb la contrasenya xifrada (hash amb `bcrypt`, mai en clar).
Login: valida email + contrasenya i obre sessió.
Sessió: cookie httpOnly (paquet `express-session`), amb el secret a `.env`. El servidor recorda l'usuari entre peticions.
Logout: tanca la sessió.
`GET /api/jo`: retorna l'usuari de la sessió actual (o 401 si no n'hi ha).
Middleware `requereixSessio`: reutilitzable, protegirà l'API de tasques de la 007.

- Contracte (el front ja existeix: registre.html, login.html — camps nom, email, contrasenya)
`POST /api/registre` amb `{ nom, email, contrasenya }`
  → 201 `{ id, nom, email }` i obre sessió.
  → 409 `{ error: "Aquest email ja està registrat" }` si l'email ja existeix.
  → 400 `{ error: "..." }` si falta algun camp o el format és invàlid.
`POST /api/login` amb `{ email, contrasenya }`
  → 200 `{ id, nom, email }` i obre sessió.
  → 401 `{ error: "Email o contrasenya incorrectes" }` (mateix missatge per email inexistent i contrasenya dolenta: no filtrem quins emails existeixen).
`POST /api/logout` → 200 `{ estat: "ok" }` i destrueix la sessió.
`GET /api/jo` → 200 `{ id, nom, email }` si hi ha sessió; 401 `{ error: "No autenticat" }` si no.
La contrasenya (ni el seu hash) no surt mai en cap resposta.
Aquesta feature crea i exporta `requereixSessioPagina` (redirigeix 302 a `/login` sense sessió, per protegir la pàgina `/todos` sense "flash"), però l'aplica la 008; aquí no toca cap ruta de pàgina.

- Criteris d'acceptació
[ ] `npm install` afegeix `bcrypt` i `express-session` sense errors.
[ ] `POST /api/registre` amb dades noves crea la fila a `users`, retorna 201 i deixa sessió oberta (`GET /api/jo` → 200).
[ ] A la DB, `users.password_hash` és un hash bcrypt, mai la contrasenya en clar.
[ ] Registrar dos cops el mateix email dona 409 (no crea duplicat; respecta `uk_users_email`).
[ ] `POST /api/login` amb credencials correctes dona 200 i obre sessió; amb email inexistent o contrasenya dolenta dona 401 amb el mateix missatge.
[ ] `GET /api/jo` sense sessió dona 401; després de login/registre dona 200 amb `{ id, nom, email }`.
[ ] `POST /api/logout` tanca la sessió: la crida següent a `GET /api/jo` dona 401.
[ ] Cap resposta inclou `password_hash` ni la contrasenya. El `SESSION_SECRET` viu a `.env`, no al codi.
