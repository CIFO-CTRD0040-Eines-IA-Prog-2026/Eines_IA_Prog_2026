# 008 — Connexió del FRONT al backend real

Pas final del cicle: el front (public/) deixa de treballar contra el mock en memòria i parla amb el backend real (006 auth + 007 tasques). Login i registre criden l'API i naveguen segons la resposta; la llista de tasques es carrega, crea, alterna i esborra contra `/api/tasques`; i hi ha logout. En acabar, un usuari es pot registrar, entrar, gestionar les seves tasques i sortir, tot persistit a MySQL.

- Contingut
Treure el mock d'app.js (SIMULA_ERROR, tasquesInicials, MOCK_LATENCIA, nextId): les 4 funcions de dades (getTodos, createTodo, toggleTodo, deleteTodo) passen a fer `fetch` real amb la skill fetch-api. Es manté la seva firma: el DOM no canvia.
Auth: `form-login` crida `POST /api/login`; `form-registre` crida `POST /api/registre`. Les crides van amb `credentials: 'same-origin'` perquè viatgi la cookie de sessió (006).
Logout: el botó "Surt" d'index.html crida `POST /api/logout` i porta a login.html.
Sessió: si `GET /api/tasques` respon 401, el front redirigeix a login.html (no hi ha sessió o ha caducat).

- Contracte (rutes de 006/007; ids del DOM ja existents, no es toquen)
Login OK (200) → redirigeix a index.html. Login KO (401) → missatge "Email o contrasenya incorrectes" (a la zona d'error del formulari, en català).
Registre OK (201) → redirigeix a index.html (queda amb sessió oberta). Registre KO email repetit (409) → missatge "Aquest email ja està registrat". La validació de camps de la 002 (buit, email, mínim 8, coincideixen) es manté abans de cridar l'API.
Tasques: getTodos → `GET /api/tasques`; createTodo(title) → `POST /api/tasques {title}`; toggleTodo(id,done) → `PATCH /api/tasques/:id {done}`; deleteTodo(id) → `DELETE /api/tasques/:id`. Els estats carregant/error/buit de la llista es mantenen.

- Criteris d'acceptació (verificació amb el servidor Express viu, no obrint el .html solt)
[ ] Registre amb dades noves entra a l'app (index.html) amb la llista buida; a MySQL hi ha el nou usuari.
[ ] Registrar un email ja existent mostra "Aquest email ja està registrat" i no navega.
[ ] Login correcte porta a index.html; login incorrecte mostra "Email o contrasenya incorrectes" i no navega.
[ ] Obrir index.html sense sessió (o amb sessió caducada) redirigeix a login.html.
[ ] A la llista: afegir una tasca la crea a MySQL amb el user_id de la sessió i apareix a la UI; el comptador s'actualitza.
[ ] Marcar el checkbox posa done=1 a MySQL i l'estil de feta; desmarcar-lo, done=0.
[ ] Esborrar una tasca la treu de la UI i de MySQL.
[ ] "Surt" tanca la sessió (POST /api/logout) i porta a login.html; després, index.html torna a redirigir a login.
[ ] Dos usuaris diferents veuen cadascun només les seves tasques (aïllament de la 007, ara des de la UI).
[ ] Ja no queda cap rastre del mock (SIMULA_ERROR/tasquesInicials) a app.js.
