Plan de implementación — 001 Página principal
Cómo construir lo que describe 1-spec.md. El contenido de los temas y los criterios viven en la spec; aquí sólo la estructura técnica y las decisiones.

Archivos
index.html — toda la página: <head> con CDN de Tailwind + tailwind.config inline, <header> con nav, <main> con las 7 secciones, <footer>, y un <script> pequeño para el menú.
style.css — sólo estilos que Tailwind no da cómodo: apariencia de <pre><code> (scroll horizontal, white-space), y cualquier transición concreta del menú.
Configuración de Tailwind
Registrar los tokens de color de la skill web-design dentro de tailwind.config para que se puedan usar como clases (bg-fondo, bg-fondo-alto, texto-texto, texto-suave, texto-primario, bg-acento…). No utilizar hex sueltos (bg-[#...]) ni colores por defecto de Tailwind fuera de la paleta.

Si hay duda sobre cómo definir theme.extend.colors con el CDN, consultar el MCP context7.

Estructura HTML
<body class="bg-fondo text-text"> 
<header> → sticky arriba, fondo fondo-alto 
<h1> → título, en primario 
<nav> → enlaces #avena … #peanut butter 
<button> → hamburguesa (sólo móvil, aria-label) 
<main> → grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
<section id="…"> → una tarjeta por galleta (×6) 
<h2> → título de la galleta
<p> → intro 
<div> → bloque definición/lista 
<pre><code> → ejemplo 
<footer> → crédito

Menú responsivo (JS mínimo)
El <nav> lleva una clase que lo esconde en el móvil (hidden) y lo muestra a partir de md: (md:flex).
El botón hamburguesa (visible sólo hasta md) hace toggle de una clase en el <nav> para abrir/cerrar.
Al elegir un enlace, se vuelve a esconder el menú en el móvil.
Sin librerías: un addEventListener de click.

Decisiones
Single-page con anclas: los 6 id de la spec son el contrato entre menú y secciones; deben coincidir exactamente.
Tarjetas en grid: cada galleta es una tarjeta según la skill (rounded-xl, p-6, hover sutil con acento).
Cabecera sticky sin tapar títulos: como la cabecera queda fija arriba, cada <section> lleva scroll-margin-top para que, al saltar, el título no quede escondido debajo de la cabecera. Scroll suave con scroll-behavior: smooth.

Verificación
Abrir index.html en el navegador y comprobar, uno por uno, los criterios de aceptación de la spec (navegación, menú móvil, 6 galletas, parrilla responsiva, colores de la paleta).