# 008 — Connexió del FRONT al backend real

Pas final del cicle: el front (public/) deixa de treballar contra el mock en memòria i parla amb el backend real (006 auth + 007 tasques). Login i registre criden l'API i naveguen segons la resposta; la llista de tasques es carrega, crea, alterna i esborra contra `/api/tasques`; i hi ha logout. En acabar, un usuari es pot registrar, entrar, gestionar les seves tasques i sortir, tot persistit a MySQL.

- Contingut
Treure el mock d'app.js: les 4 funcions de dades passen a fer `fetch` real (skill fetch-api) mantenint la firma, així el DOM no canvia.
Auth i logout criden l'API amb `credentials: 'same-origin'` perquè viatgi la cookie (006).
Tota navegació usa URLs netes (`/todos`, `/login`, `/registre`), mai `.html`.
Aplicar `requereixSessioPagina` (006) a `GET /todos` al server: sense sessió, redirigeix a `/login` abans d'enviar HTML (sense flash). Va aquí, junt amb els links nets, perquè les dues peces són la mateixa.

- Contracte (rutes de 006/007; ids del DOM no es toquen)
Login: OK → `/todos`; 401 → "Email o contrasenya incorrectes".
Registre: OK → `/todos`; 409 → "Aquest email ja està registrat". Manté la validació de camps (002).
Logout ("Surt"): `POST /api/logout` → `/login`.
Tasques: getTodos→`GET /api/tasques`, createTodo→`POST`, toggleTodo→`PATCH /:id`, deleteTodo→`DELETE /:id`. Els estats carregant/error/buit es mantenen; un 401 (sessió caducada) redirigeix a `/login`.

- Criteris d'acceptació (contra el servidor viu, mai obrint el .html solt)
[ ] Registre amb dades noves entra a `/todos` amb la llista buida; a MySQL hi ha el nou usuari.
[ ] Registrar un email existent mostra "Aquest email ja està registrat" i no navega.
[ ] Login correcte porta a `/todos`; login incorrecte mostra "Email o contrasenya incorrectes" i no navega.
[ ] Afegir una tasca la crea a MySQL amb el user_id de la sessió i apareix a la UI; el comptador s'actualitza.
[ ] El checkbox posa done a 1/0 a MySQL amb l'estil de feta; esborrar-la la treu de la UI i de MySQL.
[ ] "Surt" fa logout i porta a `/login`; després, `/todos` torna a redirigir a `/login`.
[ ] Dos usuaris veuen cadascun només les seves tasques (aïllament de la 007, des de la UI).
[ ] No queda cap rastre del mock (SIMULA_ERROR, tasquesInicials) a app.js.
