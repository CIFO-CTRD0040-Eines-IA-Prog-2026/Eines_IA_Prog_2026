---
name: termometre
description: Genera un component interactiu i animat (2D o 3D) en forma de termòmetre. La temperatura (color i nivell de líquid) s'ajusta esglaonadament segons la importància de la secció de la web on es troba el lector.
---

### Inputs
*   **nivell_importancia:** Valor enter de l'1 al 5 (1 = fred/menys important, 5 = càlid/crític).
*   **stack_tecnologic:** Tecnologies a utilitzar (ex. React + Three.js, Vanilla JS + CSS3D, SVG).
*   **estil_visual:** Estètica del component (ex. 3D realista, Neó, Minimalista).

### Instruccions de Generació
*   **Mapeig d'Estats (5 nivells):**
    *   **1:** Color blau. Líquid al 20%.
    *   **2:** Color verd. Líquid al 40%.
    *   **3:** Color groc. Líquid al 60%.
    *   **4:** Color taronja. Líquid al 80%.
    *   **5:** Color vermell. Líquid al 100% amb un efecte visual destacat (bombolles o resplendor).
*   **Animació i Físiques:** Les transicions entre nivells han de ser sempre suaus i fluides (interpolació d'alçada i color).
*   **Estructura del Codi:** Genera codi modular separant l'estructura, l'estil i la lògica de l'estat.
*   **Integració amb l'Scroll:** Inclou comentaris al codi o un petit *snippet* indicant on i com utilitzar `IntersectionObserver` per actualitzar el paràmetre `nivell_importancia` en fer *scroll* per la pàgina.

### Output Esperat
Retorna exclusivament el codi llest per a producció corresponent a l'`stack_tecnologic` indicat, juntament amb unes breus instruccions de muntatge si calen.