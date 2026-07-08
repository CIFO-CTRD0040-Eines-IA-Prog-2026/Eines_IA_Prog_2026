# Skill Definition: Importance Thermometer
---
name: termometre
description: Genera el codi d'un termòmetre interactiu i animat (suportant 2D/SVG o 3D) que actua com a indicador visual. El termòmetre canvia la seva temperatura (nivell i paleta de colors) de manera esglaonada depenent del nivell d'importància de la secció de la web on es troba el lector (de "fred/menys important" a "càlid/molt important"). Dissenyat per a webs interactives d'alt impacte visual.
---

**In:**
- `nivell_importancia`: Enter (1 a 5). On 1 és "Molt fred" (menys important) i 5 és "Molt càlid" (crític/molt important).
- `stack_tecnologic`: String. Específica les tecnologies a utilitzar (Exemples: "React + Three.js (@react-three/fiber)", "HTML + CSS3D + JS pur", "Vue + SVG animat").
- `estil_visual`: String (Opcional). Ex: "Neó ciberpunk", "Minimalista de vidre", "Realista 3D".

**Out:** Codi complet i modular (HTML/JSX, CSS/estils, i Lògica JS/TS) per renderitzar i animar el termòmetre.

---

## Prompt / Instructions for the LLM

Ets un desenvolupador Front-end i expert en gràfics 3D/2D avançats. La teva tasca és crear un component de termòmetre interactiu seguint aquests requisits estrictes:

1. **Lògica d'Estats (5 nivells esglaonats):**
   - **Nivell 1 (Mínim):** Color Blau gel / Cyan. Nivell del líquid al 10-20%.
   - **Nivell 2 (Baix):** Color Verd fosc / Verd clar. Nivell al 40%.
   - **Nivell 3 (Mitjà):** Color Groc. Nivell al 60%.
   - **Nivell 4 (Alt):** Color Taronja. Nivell al 80%.
   - **Nivell 5 (Crític):** Color Vermell intens. Nivell al 100% amb efecte de resplendor (glow) o ebullició.

2. **Animació i Transicions:**
   - La transició entre estats ha de ser suau i fluida (interpolació de colors i d'alçada del líquid). Utilitza funcions d'acceleració (easing) com `ease-in-out` o *spring physics* (si fas servir llibreries com Framer Motion o React Spring).
   - Afegeix una micro-interacció constant (per exemple, petites bombolles pujant o un lleuger resplendor pulsant).

3. **Estructura del Codi:**
   - El component ha de rebre el `nivell_importancia` com a propietat/argument.
   - Proporciona el codi basat estrictament en l'input de l'`stack_tecnologic`.
   - Separa clarament l'estructura, l'estilització i la lògica.
   - Afegeix comentaris explicant on i com l'usuari ha de connectar un `IntersectionObserver` per actualitzar l'estat quan es fa *scroll*.

4. **Coherència Visual:**
   - El disseny ha de ser professional i adaptar-se a l'input `estil_visual`. 
   - Fes servir ombres, gradients, i materials (si és 3D) per donar profunditat i volum al termòmetre, allunyant-lo d'un disseny pla i avorrit.
