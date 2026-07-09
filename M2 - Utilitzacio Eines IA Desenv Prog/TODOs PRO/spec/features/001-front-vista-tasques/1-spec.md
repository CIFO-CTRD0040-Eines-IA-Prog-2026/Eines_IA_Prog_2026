# 001 — Vista de tasques (estàtica)

- Contingut
Capçalera: títol "Les meves tasques" i comptador "2 pendents".
Targeta d'afegir: camp de text (placeholder "Escriu una tasca…"), botó "Afegir" i, ocult, el missatge "Escriu alguna cosa abans d'afegir".
Llista amb 3 tasques d'exemple escrites a l'HTML.
Afegir confirm quan eliminem una tasca
Estats ocults: buit ("Encara no hi ha tasques"), carregant i error de xarxa.

- Criteris d'acceptació (SKILL loop-verificacio)
[ ] Es veuen la capçalera amb el comptador, el camp + botó i la llista amb les 3 files.
[ ] "Estudiar CSS" es veu feta (verd, apagada, ratllada); les altres dues, pendents.
[ ] Només colors dels tokens de la skill estil-todos: cap bg-[#…] ni blue-500 i similars.
[ ] Cada bloc ocult es veu bé en treure-li la classe hidden.
[ ] Bé a 375px i a 1280px, sense scroll horitzontal.
[ ] aria-label a checkbox i paperera; focus visible a tot.