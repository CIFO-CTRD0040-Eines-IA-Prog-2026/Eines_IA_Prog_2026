# Plan: SEO i Dades Estructurades

## fitxers a crear/modificar

`codi/robots.txt` i `codi/sitemap.xml`. Modificar tots els HTML existents.

## meta tags

Plantilla per a cada pàgina:
```html
<title>Page Title — Clínica Dental DEMO</title>
<meta name="description" content="...">
<link rel="canonical" href="https://dentaldemo.com/pagina.html">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://dentaldemo.com/img/...jpg">
<meta name="twitter:card" content="summary_large_image">
```

## JSON-LD

Incloure dins `<script type="application/ld+json">` al `<head>` de cada pàgina. Validar amb Google Rich Results Test.

## sitemap.xml

Prioritats: index.html (1.0), serveis.html (0.9), fitxes servei (0.8), salut-dental-per-edats (0.7), politica-privacitat (0.3)
