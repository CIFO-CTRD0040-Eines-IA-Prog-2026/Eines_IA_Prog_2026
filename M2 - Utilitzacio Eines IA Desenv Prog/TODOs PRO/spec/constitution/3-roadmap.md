# Roadmap

Ordre estricte: primer el bloc FRONT (001-003), després el BACKEND (004-...)
Document viu: pendent -> en curs (en començar) -> feta

## bloc FRONT
001-front-vista-tasques - ESTAT FETA
Vista principal estàtica: capçalera, afegir, llista i estats.

002-front-vista-auth - ESTAT FETA
Login i registre amb validació completa i missatges. 

003-front-interaccions - ESTAT FETA
La llista que funciona contra la maquetació; fixa el contracte de dades.

## bloc BACKEND
004-back-disseny-DB - ESTAT FETA
Disseny de la base de dades MySQL: taules users i todos amb la seva relació.

005-back-servidor-express - ESTAT PENDENT
Servidor Express que serveix el FRONT (public/) i té la connexió a la DB preparada, amb /health que fa ping a MySQL.

006-back-API-auth - ESTAT PENDENT
API d'autenticació: registre, login, logout i sessió amb cookie contra la taula users. Deixa el middleware de sessió a punt per protegir les tasques.

007-back-API-tasques - ESTAT PENDENT
API REST de tasques (/api/tasques) protegida per la sessió: cada usuari només veu i modifica les seves. CRUD amb el contracte del front (id, title, done, created_at).

## bloc INTEGRACIÓ
008-front-connexio-backend - ESTAT PENDENT
El front deixa el mock i parla amb el backend real (auth + tasques). Registre, login, logout i CRUD de tasques persistit a MySQL, verificat des de la UI.
