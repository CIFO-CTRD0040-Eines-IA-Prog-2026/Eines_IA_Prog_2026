# 003 — Interaccions

index.html cobra vida contra un mock en memòria que imita el servidor. Recarregar la pàgina reinicia les dades: és l'esperat fins que hi hagi backend.

- Comportament
En obrir: "carregant" un instant i després les 3 tasques (o l'estat buit).
Afegir: la tasca apareix a la llista, el camp es buida i el comptador s'actualitza. Amb el camp buit: missatge "Escriu alguna cosa abans d'afegir" i cap tasca nova.
Checkbox: alterna pendent/feta, amb l'estil i el comptador al dia. Paperera: esborra la tasca.
Si l'API falla, es mostra l'estat d'error, en català.

- Criteris d'acceptació
[ ] En obrir es veu "carregant" i després les 3 tasques i "2 pendents".
[ ] Afegir "Comprar llet" la mostra a la llista, buida el camp i el comptador diu "3 pendents".
[ ] Enviar amb el camp buit mostra el missatge i no afegeix res.
[ ] El checkbox alterna l'estil de feta i recalcula el comptador.
[ ] Esborrar les 3 tasques deixa visible l'estat buit.
[ ] Amb SIMULA_ERROR = true es veu l'estat d'error en obrir (i tornar-la a false després).
[ ] El DOM no toca mai l'array de tasques: tot passa per les funcions de dades.