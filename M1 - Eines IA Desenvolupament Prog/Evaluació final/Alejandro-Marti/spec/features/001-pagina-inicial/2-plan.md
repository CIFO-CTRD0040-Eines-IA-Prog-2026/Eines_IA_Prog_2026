# 001 — Pla d'implementació: Pàgina inicial

## Objectiu del pla
Construir una pàgina inicial única, coherent i accessible, que compleixi el spec de la funcionalitat i deixi la base preparada per a la posterior execució de tasques de desenvolupament.

## Abast del pla
Aquest pla cobreix:
- l'estructura HTML de la pàgina principal;
- l'estil visual, el disseny responsive i els elements d'ambientació;
- la interacció del menú de navegació en escriptori i mòbil;
- la integració d'elements visuals addicionals (sol animat, cub 3D i decoració d'ambient);
- la verificació de l'experiència amb criteris d'acceptació senzills.

## Estratègia general
La implementació es farà en cinc fases sequencials per reduir el risc i assegurar que cada increment sigui verificable:

1. Estructura base
   - Crear l'HTML semantic amb capçalera, menú, introducció i seccions de contingut.
   - Assignar els identificadors de secció necessaris per als enllaços d'àncora.
   - Preparar el contingut inicial amb text introductori i seccions temàtiques coherents amb el context de Barcelona.

2. Disseny i presentació
   - Definir una tipografia, paleta i estructura visual coherent.
   - Implementar el capçalera sticky, el layout adaptable i la navegació visible en pantalla gran.
   - Incorporar l'estil dels elements visuals destacats: sol animat, decoració ambiental i seccions gràfiques.

3. Interaccions i comportament
   - Afegir el menú hamburguesa per a mòbil i la lògica d'obertura/tancament.
   - Garantir que la navegació funcioni amb enllaços interns correctes.
   - Preparar l'animació del sol vinculada al scroll per donar una sensació de progressió visual.

4. Integració de contingut i experiència
   - Incorporar la skill 3d-web-experience al final de la pàgina per mostrar un cub 3D que resumeixi dades rellevants.
   - Ajustar l'experiència visual perquè la pàgina sembli atractiva sense perdre llegibilitat.
   - Revisar que el contingut sigui creïble i coherent amb l'estat climàtic de Barcelona.

5. Validació i millora
   - Comprovar el funcionament del menú en desktop i mòbil.
   - Revisar accessibilitat: contrast, focus visible, aria-label al botó del menú.
   - Validar que els enllaços de navegació apunten a la secció correcta.

## Entregables
- Un fitxer HTML amb estructura completa i seccions ben definides.
- Un fitxer CSS amb estil responsive, capçalera sticky i components visuals.
- Un fitxer JavaScript amb la lògica del menú i les animacions relacionades amb el scroll.
- Contingut textual i visual coherent amb el tema climàtic de Barcelona.

## Criteris de verificació
- Els enllaços del menú dirigeixen a la secció corresponent.
- El menú mòbil s'obre i es tanca correctament amb el botó hamburguesa.
- El disseny manté una bona legibilitat i contrast en diferents mides de pantalla.
- La pàgina incorpora els elements visuals sol·licitats sense comprometre l'accessibilitat.

## Riscos i mitigacions
- Risc: l'excés de decoració pot afectar la llegibilitat. Mitigació: prioritzar el contingut i mantenir l'animació subtila.
- Risc: la integració del cub 3D pot incrementar la complexitat. Mitigació: integrar-lo com a element final i independent, sense afectar la navegació principal.
- Risc: el menú responsive pot ser poc intuïtiu. Mitigació: validar el flux d'usuari en pantalla petita amb proves simples.

## Seqüència recomanada de treball
1. Preparar l'estructura HTML i els enllaços d'àncora.
2. Implementar l'estil base i la disposició responsive.
3. Afegir la interacció del menú i l'animació del sol.
4. Incorporar el cub 3D i la decoració ambiental.
5. Revisar accessibilitat i criteris d'acceptació.
