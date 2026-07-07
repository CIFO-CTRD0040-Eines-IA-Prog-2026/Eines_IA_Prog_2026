# Feature: SEO i Dades Estructurades

Configuració de meta tags, JSON-LD, sitemap i robots.txt per a totes les pàgines del site.

## abast

1. **Meta tags** a cada HTML:
   - `title` descriptiu per pàgina
   - `meta description` única
   - `link rel="canonical"`
   - Open Graph (`og:title`, `og:description`, `og:image`, `og:url`)
   - Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
   - `meta robots` (index, follow)
2. **JSON-LD al index.html:**
   - `DentalClinic` (adreça, telèfon, horari, geo, URL)
   - `Physician` (Dra. DEMO, COEC xxxx)
   - `FAQPage` (7 preguntes)
   - `ItemList` (serveis)
   - `WebPage`
3. **JSON-LD a cada fitxa de servei:**
   - `MedicalProcedure` amb position, name, description, url
4. **sitemap.xml:**
   - Totes les URLs del site amb priority i changefreq
5. **robots.txt:**
   - Allow: /
   - Sitemap: https://dentaldemo.com/sitemap.xml
6. **hreflang:**
   - `ca` + `x-default`
