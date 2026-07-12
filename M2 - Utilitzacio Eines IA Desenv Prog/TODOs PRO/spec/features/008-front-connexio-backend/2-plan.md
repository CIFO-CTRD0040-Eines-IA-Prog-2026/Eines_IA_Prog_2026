# Pla — 008 Connexió del FRONT al backend real

- Fitxers (a public/):
  - `app.js` — únic fitxer que canvia. Es reescriuen les 4 funcions de dades i el bloc auth; el DOM (pintaLlista, mostraEstat, comptador) i la validació de la 002 es mantenen.
  - `index.html` — assegurar que el botó "Surt" té un id estable (p. ex. `boto-surt`) per enganxar-hi el logout. (Si ja hi és, no es toca.)

- Decisions:
  - **fetch real (skill fetch-api)**: `async/await` amb `try/catch`; comprovar `response.ok` abans de `.json()`; totes les crides amb `credentials: 'same-origin'` perquè viatgi la cookie. Missatges d'error en català, mai el text tècnic de l'excepció.
  - **Treure el mock**: fora `SIMULA_ERROR`, `tasquesInicials`, `MOCK_LATENCIA`, `nextId`, `copiarTasques`, `retard`. El contracte de dades ja el va fixar la 003; el mock ja no cal.
  - **Auth**: després de validar (002), `form-login` fa `POST /api/login` i `form-registre` `POST /api/registre`. Segons l'status: OK → `window.location.href`; KO → missatge a la zona d'error del formulari. 401→"Email o contrasenya incorrectes"; 409→"Aquest email ja està registrat".
  - **Sessió a la llista**: `getTodos` distingeix el 401 de la resta d'errors. Si és 401 → `window.location.href = 'login.html'`. Qualsevol altre error → `estat-error` (com fins ara).
  - **Logout**: "Surt" → `POST /api/logout` → `login.html`.
  - **done booleà**: l'API ja retorna `done` com a booleà (007); el DOM ja el tracta així. Cap canvi al pintat.
  - **Fora d'abast**: editar el text d'una tasca, "recorda'm", refresc de token. Només connectar el que ja existeix.

- Precondicions:
  - 006 (auth + sessió) i 007 (API tasques) fetes i el servidor Express (005) servint public/. La verificació es fa sempre contra el servidor viu (http://localhost:3000), no obrint el fitxer .html directament (si no, no hi ha cookies ni API).

- Eines de referència (tech-stack):
  - **Skill fetch-api**: patró de les crides, estats i missatges en català.
  - **Skill loop-verificacio-front**: bucle de verificació amb el navegador (Playwright MCP) contra els criteris de la spec.
  - **Context7 (MCP)**: sintaxi al dia de `fetch` (opcions, `credentials`).

- Verificació (Playwright MCP contra el servidor viu + cec creuat amb MySQL MCP):
  - El navegador condueix el flux real; el MCP MySQL confirma l'efecte a la DB a cada pas.
  - Registre/login/logout, alta/toggle/esborrat de tasques, redirecció per 401, i aïllament entre dos usuaris.
