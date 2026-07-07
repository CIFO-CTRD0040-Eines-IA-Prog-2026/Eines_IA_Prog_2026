# Pla d'implementació — 001 Pàgina inicial

Com construir el que descriu `1-spec.md`. El contingut dels temes i els criteris viuen a la spec; aquí només l'estructura tècnica i les decisions.

## Fitxers

- **`index.html`** — tota la pàgina: `<head>` amb CDN de Tailwind + `tailwind.config` inline, `<header>` amb nav, `<main>` amb les 7 seccions, `<footer>`, i un `<script>` petit per al menú.
- **`style.css`** — només estils que Tailwind no dóna còmode: aparença de `<pre><code>` (scroll horitzontal, `white-space`), i qualsevol transició concreta del menú.

## Configuració de Tailwind

Registrar els tokens de color de la skill `disseny-web` dins `tailwind.config` perquè es puguin usar com a classes (`bg-fons`, `bg-fons-alt`, `text-text`, `text-suau`, `text-primari`, `bg-accent`…). No fer servir hex solts (`bg-[#...]`) ni colors per defecte de Tailwind fora de la paleta.

> Si hi ha dubte sobre com definir `theme.extend.colors` amb el CDN, consultar el MCP context7.

## Estructura HTML

```
<body class="bg-fons text-text">
  <header>            → sticky dalt, fons fons-alt
    <h1>              → títol, en primari
    <nav>             → enllaços #programacio … #poo
    <button>          → hamburguesa (només mòbil, aria-label)
  <main>              → grid-cols-1 md:grid-cols-2 lg:grid-cols-3
    <section id="…">  → una targeta per tema (×7)
      <h2>            → títol del tema
      <p>             → intro
      <div>          → bloc definició/llista
      <pre><code>    → exemple
  <footer>            → crèdit
```

## Menú responsiu (JS mínim)

- El `<nav>` porta una classe que l'amaga al mòbil (`hidden`) i el mostra a partir de `md:` (`md:flex`).
- El botó hamburguesa (visible només fins a `md`) fa toggle d'una classe al `<nav>` per obrir/tancar.
- En triar un enllaç, es torna a amagar el menú al mòbil.
- Sense llibreries: un `addEventListener` de `click`.

## Decisions

- **Single-page amb àncores:** els 7 `id` de la spec són el contracte entre menú i seccions; han de coincidir exactament.
- **Targetes en grid:** cada tema és una targeta segons la skill (`rounded-xl`, `p-6`, hover subtil amb `accent`).
- **Capçalera sticky sense tapar títols:** com que la capçalera queda fixa a dalt, cada `<section>` porta `scroll-margin-top` perquè, en saltar-hi, el títol no quedi amagat sota la capçalera. Scroll suau amb `scroll-behavior: smooth`.

## Verificació

Obrir `index.html` al navegador i comprovar, un per un, els criteris d'acceptació de la spec.