# 001 — Pàgina inicial

## Objectiu

Una pàgina única (`index.html`) amb capçalera, menú de navegació responsiu i les 7 seccions de temes, cadascuna amb definició i exemple de codi.

## Requisits funcionals

1. **Capçalera sticky** amb el títol "Fonaments de Programació I i II" i una descripció breu.
2. **Menú de navegació** amb un enllaç per tema (àncora `#id`). En pantalla gran, horitzontal i visible; al mòbil, darrere d'un botó hamburguesa que s'obre i es tanca en triar un enllaç.
3. **7 seccions**, en aquest ordre, amb aquests `id`: `programacio`, `variables`, `condicionals`, `bucles`, `funcions`, `arrays`, `poo`.
4. **Cada secció**: títol, una intro curta i un o dos blocs (definició/llista i exemple de codi).
5. **Peu** amb una línia de crèdit.

## Contingut

El text i els exemples de cada tema els redacta l'agent amb el seu coneixement de programació: per a cada tema, una intro curta i clara i un exemple de codi senzill i correcte (JavaScript), en català i coherent amb el nivell de *Fonaments de Programació I i II*.

## Requisits no funcionals

- **Disseny:** skill `disseny-web` (mode fosc, paleta i tokens). Cap color fora d'aquesta guia.
- **Responsive:** graella d'1 → 2 → 3 columnes (mòbil → tauleta → pantalla gran).
- **Accessibilitat:** contrast suficient, focus visible, botó del menú amb `aria-label`.

## Fora d'abast

Cerca, filtres, mode clar/fosc, múltiples pàgines, backend.

## Criteris d'acceptació

- [ ] Els enllaços del menú salten a la secció correcta.
- [ ] Al mòbil, el menú s'obre i es tanca amb el botó hamburguesa.
- [ ] Es veuen els 7 temes amb intro i exemple de codi.
- [ ] La graella passa d'1 a 2 a 3 columnes.
- [ ] Els colors coincideixen amb els tokens de `disseny-web`.
