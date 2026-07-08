# HTML

## `<header>`, `<main>`, `<section>`
**Definició:** etiquetes semàntiques d'HTML5 que descriuen l'estructura del document.
**Explicació:** Milloren l'accessibilitat i el SEO en donar significat a les parts de la pàgina: `header` per a la capçalera, `main` per al contingut principal, `section` per a agrupar contingut relacionat.
**Exemple:**
```html
<header>
  <h1>Títol</h1>
</header>
<main>
  <section>
    <p>Contingut</p>
  </section>
</main>
```

# CSS

## Flexbox (`display: flex`)
**Definició:** un model de disseny unidimensional que distribueix els elements fills en fila o columna.
**Explicació:** Permet alinear i distribuir espai entre elements dins d'un contenidor de manera flexible, sense necessitat de floats o posicionament manual.
**Exemple:**
```css
.contenidor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

## `box-sizing: border-box`
**Definició:** propietat que canvia com es calcula l'amplada d'un element.
**Explicació:** Amb `border-box`, el `padding` i el `border` s'inclouen dins de l'amplada total, evitant que un element es faci més gran del que es vol.
**Exemple:**
```css
* {
  box-sizing: border-box;
}
```

## `border-radius`
**Definició:** arrodoneix les cantonades d'un element.
**Explicació:** S'usa per donar un aspecte més suau i modern a botons, targetes i inputs.
**Exemple:**
```css
button {
  border-radius: 6px;
}
```

# JavaScript

## `localStorage`
**Definició:** API del navegador que permet desar dades de manera persistent al navegador de l'usuari.
**Explicació:** Les dades es guarden com a parelles clau-valor en text. Només pot emmagatzemar cadenes, per això s'usa `JSON.stringify` per desar objectes i `JSON.parse` per recuperar-los.
**Exemple:**
```js
localStorage.setItem('clau', JSON.stringify({ a: 1 }));
const data = JSON.parse(localStorage.getItem('clau'));
```

## `async / await`
**Definició:** sintaxi de JavaScript per treballar amb promeses de manera més llegible.
**Explicació:** `async` marca una funció com a asíncrona (retorna una promesa). `await` pausa l'execució fins que la promesa es resol, fent que el codi sembli síncron.
**Exemple:**
```js
async function obtenirDades() {
  const res = await fetch('https://api.exemple.cat/dades');
  const data = await res.json();
  return data;
}
```

## `try/catch`
**Definició:** bloc de control d'errors en JavaScript.
**Explicació:** Permet capturar excepcions que es puguin llançar dins del bloc `try` i gestionar-les al bloc `catch` sense que el programa es trenqui.
**Exemple:**
```js
try {
  const data = JSON.parse(text);
} catch {
  console.error('JSON invàlid');
}
```

## `fetch`
**Definició:** API nativa de JavaScript per fer peticions HTTP.
**Explicació:** Permet obtenir recursos de la xarxa (APIs, fitxers, etc.) de manera asíncrona. Retorna una promesa que es resol amb un objecte `Response`.
**Exemple:**
```js
const res = await fetch('https://api.exemple.cat/dades');
if (!res.ok) throw new Error('Error de xarxa');
const data = await res.json();
```

## `encodeURIComponent`
**Definició:** funció que codifica un text perquè sigui segur dins d'una URL.
**Explicació:** Converteix caràcters especials (espais, accents, etc.) en el seu equivalent percentual (`%20`, `%E0`, etc.) per evitar errors a la petició HTTP.
**Exemple:**
```js
const url = `https://api.exemple.cat/search?q=${encodeURIComponent('Barcelona')}`;
```

## `DOMContentLoaded`
**Definició:** esdeveniment que es dispara quan el document HTML s'ha carregat i analitzat completament.
**Explicació:** S'usa per executar codi JavaScript només quan el DOM està llest, abans que es carreguin imatges o estils externs.
**Exemple:**
```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('El DOM està llest');
});
```

# API

## Open-Meteo
**Definició:** API meteorològica gratuïta i de codi obert que no requereix clau d'accés.
**Explicació:** Ofereix dades de geocodificació (ciutat → coordenades) i previsió del temps. Es consumeix amb `fetch` natiu. Ideal per a prototips i apps senzilles.
**Endpoints:**
- Geocodificació: `https://geocoding-api.open-meteo.com/v1/search?name={ciutat}&count=1&language=ca`
- Temps actual: `https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true`

## WMO Weather Codes
**Definició:** codis numèrics de l'Organització Meteorològica Mundial que descriuen l'estat del cel.
**Explicació:** Open-Meteo retorna el camp `weathercode` amb aquests codis (0 = cel clar, 1-3 = núvols, 45-48 = boira, 51-55 = plugim, 61-65 = pluja, 71-77 = neu, 80-82 = xàfecs, 95-99 = tempesta).
**Exemple:**
```js
function getWeatherEmoji(code) {
  if (code === 0) return '\u2600\uFE0F'; // sol
  if (code <= 3) return '\u26C5';         // parcialment ennuvolat
  if (code <= 65) return '\uD83C\uDF27\uFE0F'; // pluja
  return '\uD83C\uDF21\uFE0F';
}
```
