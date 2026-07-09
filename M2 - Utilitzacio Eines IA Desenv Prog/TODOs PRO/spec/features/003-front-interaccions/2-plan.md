# Pla — 003 Interaccions amb mock

- index.html perd els <li> d'exemple i carrega app.js; la part de tasques només s'activa si hi ha #llista.
- Les funcions de dades són el contracte — la spec del futur API; 004 i 006 l'implementen tal qual:
  getTodos() → Todo[]
  createTodo(title) → Todo
  toggleTodo(id, done) → Todo
  deleteTodo(id) → no retorna res
  Todo = { id: number, title: string, done: boolean, created_at: string ISO }
- Mock: les 3 tasques de la 001; latència ~300 ms perquè "carregant" es vegi; constant SIMULA_ERROR; retorna còpies, mai l'array intern.
- DOM segons la skill fetch-api: carrega(), pintaLlista(), actualitzaComptador() i mostraEstat().
- Delegació d'esdeveniments a #llista: un sol listener que sobreviu als repintats.