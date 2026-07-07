# Plan de implementación — 001 Página principal

Cómo construir lo que describe `1-spec.md`. El contenido de los temas y los criterios viven en la spec; aquí sólo la estructura técnica y las decisiones.

## Archivos

- **`index.html`** — toda la página: `<head>` con CDN de Tailwind + `tailwind.config` inline, `<header>` con nav, `<main>` con las 7 secciones, `<footer>`, y un `<script>` pequeño para el menú.
- **`style.css`** — sólo estilos que Tailwind no da cómodo: apariencia de `<pre><code>` (scroll horizontal, `white-space`), y cualquier transición concreta del menú.

## Configuración de Tailwind

Registrar los tokens de color de la skill `diseño-web` dentro de `tailwind.config` para que se puedan usar como clases (`bg-fons`, `bg-fons-alt`, `text-text`, `text-suave`, `text-primario`, `bg-accent`…). No utilizar hex sueltos (`bg-[#...]`) ni colores por defecto de Tailwind fuera de la paleta.

> Si hay duda sobre cómo definir `theme.extend.colors` con el CDN, consultar el MCP context7.

## Estructura HTML

```
<body class="bg-fondo text-text"> 
<header> → sticky arriba, fondo fondo-alto 
<h1> → título, en primario 
<nav> → enlaces #programacio … #poo 
<button> → hamburguesa (sólo móvil, aria-label) 
<main> → grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
<h2> → título del tema 
<p> → intro 
<div> → bloque definición/lista 
<footer> → crédito
```

## Menú responsivo (JS mínimo)

- El `<nav>` lleva una clase que lo esconde en el móvil (`hidden`) y lo muestra a partir de `md:` (`md:flex`).
- El botón hamburguesa (visible sólo hasta `md`) hace toggle de una clase en `<nav>` para abrir/cerrar.

## Decisiones

- **Múltiples páginas:** Muchas páginas pero se empezará desarrollando la página principal de inicio y será un TODO la creación de nuevas páginas.

## Verificación

Abrir `index.html` en el navegador y comprobar, uno por uno, los criterios de aceptación de la spec (navegación, menú móvil, parrilla responsiva, colores de la paleta).