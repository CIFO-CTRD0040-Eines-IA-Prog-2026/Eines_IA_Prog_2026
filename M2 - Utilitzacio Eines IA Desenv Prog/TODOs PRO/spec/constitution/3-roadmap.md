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
