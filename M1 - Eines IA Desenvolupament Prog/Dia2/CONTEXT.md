# CONTEXT — Sessió OpenCode (web_1_opencode vs web_1_gemini)

## Objectiu
Crear una web estàtica educativa de "Fonaments de Programació I y II" amb HTML + CSS (sense JS) a `web_1_opencode/web_1_gemini/`, per comparar amb la versió original d'OpenCode a `web_1_opencode/`.

## Stack
- HTML + CSS (gens de JS ni frameworks)
- CSS class names: lowercase-hyphenated
- Contingut: Català

## Què s'ha fet
1. Proposat pla de disseny amb 8 mòduls + sidebar navegació + tema clar/fosc; aprovat per l'usuari.
2. Creat `web_1_gemini/index.html` amb 8 mòduls: Algorismes, Variables, Operadors, Condicionals, Bucles, Funcions, Arrays/Objectes, POO.
3. Creat `web_1_gemini/style.css` amb:
   - Layout: grid sidebar (300px) + contingut principal
   - Tema fosc per defecte + tema clar via `:has(#theme-checkbox:checked)`
   - Gradient accent, targetes amb hover, blocs de codi amb syntax highlighting
   - Responsive amb `auto-fit` i `minmax(400px, 1fr)`
4. Solucionat error de nom de variable JS (radi de la circumferència → radiCircumferencia)
5. Corregit desbordament de blocs de codi (`pre { max-width: 100%; overflow-x: auto; }` + `min-width: 0` al grid)

## Canvis recents CSS
- Afegit `.concept-grid > * { min-width: 0; }` per permetre que les targetes del grid es compactin
- Afegit `pre { max-width: 100%; overflow-x: auto; border-radius: 14px; }` per controlar blocs de codi llargs
- Mogut `overflow-x: auto` de `.code-block` (code) a `pre`, i afegit `display: block` a `.code-block`

## Estructura de fitxers
```
Dia2/
  web_1_opencode/
    AGENTS.md
    index.html
    style.css
    web_1_gemini/
      index.html     (8 mòduls en Català)
      style.css      (sidebar, tema clar/fosc, syntax highlight)
```

## Regles
- No JS. Temes amb `:has()` selector.
- Abans de grans canvis, proposar pla i esperar validació.
- Àmbit de lectura: `web_1_opencode/`
