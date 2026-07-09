# 004 — Disseny de la base de dades (MySQL)

Primer pas del BACK: dissenyar l'esquema que guardarà usuaris i tasques. Encara no hi ha servidor; només la base de dades i les seves taules.

- Contingut
Base de dades `todos_pro`.
Taula `users` i `todos`.
Els camps de `todos` respecten el contracte del FRONT (app.js): id, title, done, created_at.
Un fitxer schema.sql que crea la base de dades i les dues taules.

- Criteris d'acceptació
[ ] schema.sql crea `todos_pro` amb `users` i `todos` sense errors.
[ ] `users.email` és únic.
[ ] `todos.user_id` és clau forana cap a `users.id`.
[ ] Inserir una tasca amb un user_id inexistent falla; amb un de vàlid, funciona.
[ ] Segueix la skill mysql: PK BIGINT UNSIGNED AUTO_INCREMENT, utf8mb4, NOT NULL, DATETIME.
