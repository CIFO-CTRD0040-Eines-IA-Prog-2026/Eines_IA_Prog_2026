
# Tech Stack — Clínica Dental DEMO 
> Decisions tècniques i arquitectura del projecte · Versió catalana monolingüe

---

## stack triat

| Capa | Tecnologia | Justificació |
|---|---|---|
| **HTML** | HTML5 semàntic | Estàndard, accessible, sense compilació |
| **CSS** | Tailwind CSS (CDN) | Utilitats ràpides, consistència visual, responsive fàcil |
| **CSS addicional** | `styles.css` propi | Scroll reveal, FAQ acordió, hover cards, animacions |
| **JavaScript** | Vanilla JS pur | Zero dependències, bundle zero, fàcil de mantenir |
| **Fonts** | Google Fonts (Inter + JetBrains Mono) | Tipografia moderna, bona llegibilitat |
| **Analytics** | Google Analytics 4 | Gratuït, estàndard del mercat |
| **Hosting** | Cloudflare | CDN, HTTPS, rendiment global |
| **Mapa** | Google Maps Embed | Gratuït, sense API key necessària per embeds |
| **Formulari** | Formspree / EmailJS (per definir) | Enviament email sense backend propi |
| **WhatsApp** | `wa.me` link | Botó flotant amb enllaç directe |
| **Versió de control** | Git | Estàndard |

---

## estructura de carpetes

```
/
├── index.html                     # Pàgina principal
├── serveis.html                   # Llistat de serveis
├── salut-dental-per-edats.html    # Guia de salut per edats
├── politica-privacitat.html       # Política de privacitat
├── implants-dentals-barcelona.html
├── ortodoncia-invisible-barcelona.html
├── odontopediatria-barcelona.html
├── estetica-dental-barcelona.html
├── neteja-dental-barcelona.html
├── empastaments-obturacions-barcelona.html
├── endodoncia-barcelona.html
├── styles.css                     # Estils propis
├── scripts.js                     # JavaScript global
├── robots.txt                     # Crawling directives
├── sitemap.xml                    # Sitemap per a Google
└── img/                           # Imatges i infografies
    ├── clinica-dental-demo-barcelona.jpg
    ├── clinica-dental-demo-barcelona.webp
    ├── DoctoraDEMO.jpg
    ├── DoctoraDEMO.webp
    ├── odontopediatria-dentista-nens-barcelona-eixample.jpg
    ├── odontopediatria-dentista-nens-barcelona-eixample.webp
    ├── implant-dental-3-fases-prf-barcelona-eixample.jpg
    ├── implant-dental-3-fases-prf-barcelona-eixample.webp
    ├── alineadors-transparents-ortodoncia-invisible-barcelona-eixample.jpg
    ├── alineadors-transparents-ortodoncia-invisible-barcelona-eixample.webp
    ├── blanquejament-dental-barcelona-eixample.jpg
    ├── blanquejament-dental-barcelona-eixample.webp
    ├── neteja-dental-professional-barcelona-eixample.jpg
    ├── neteja-dental-professional-barcelona-eixample.webp
    ├── obturacions-empastaments-dentals-barcelona-eixample.jpg
    ├── obturacions-empastaments-dentals-barcelona-eixample.webp
    ├── calendari-erupcio-dental-infantil-infografia.svg
    ├── calendari-erupcio-dental-infantil-infografia.webp
    ├── calendari-erupcio-dental-infantil-infografia.png
    ├── consulta-dental-adults-barcelona-dra-demo.jpg
    ├── consulta-dental-adults-barcelona-dra-demo.webp
    ├── salut-bucal-salut-general-periodontitis-seniors.svg
    ├── salut-bucal-salut-general-periodontitis-seniors.webp
    └── salut-bucal-salut-general-periodontitis-seniors.png
```

---

## configuració tècnica

### Tailwind CSS (via CDN)

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4',
          400: '#2dd4bf', 600: '#0d9488', 700: '#0f766e',
          800: '#115e59', 900: '#134e4a',
        },
        wa: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'wa-pulse': 'pulse2 2.2s ease-in-out infinite',
        'fade-up':  'fadeUp 0.7s ease forwards',
      },
    },
  },
}
</script>
```

---

## format d'imatges

| Tipus | Format principal | Fallback | Mida màxima |
|---|---|---|---|
| Fons hero | WebP | JPG | 200 KB / 350 KB |
| Retrat doctora | WebP | JPG | 80 KB / 130 KB |
| Fotos serveis | WebP | JPG | 60 KB / 100 KB |
| Infografies | SVG | WebP + PNG | 50 KB / 80 KB / 200 KB |
| Foto consulta | WebP | JPG | 100 KB / 180 KB |

---

## planificació SEO

- **Totes les pàgines:** meta title, meta description, canonical, og:image, twitter:image
- **index.html:** JSON-LD amb DentalClinic, Physician, FAQPage, ItemList
- **Fitxes de servei:** JSON-LD amb MedicalProcedure
- **sitemap.xml:** Totes les URLs amb priority i changefreq
- **robots.txt:** Permetre tot, apuntar a sitemap
- **hreflang:** `ca` + `x-default`


---

## manteniment

- Sense build step — obrir HTML i editar
- Sense dependències npm — zero risc de vulnerabilitats transitòries
- Canvis de contingut: edició directa dels fitxers HTML
- Canvis d'estil: modificar config Tailwind + `styles.css`
- Canvis de funcionalitat: modificar `scripts.js`
- Còpia de seguretat: còpia completa de la carpeta `/` cada mes


## Documentació de referència
Quan calgui la sintaxi o exemples actualitzats de Tailwind (config inline via CDN, breakpoints, classes d'utilitat), consulta el MCP context7 abans de respondre, en lloc de confiar en la memòria.

##  Convencions de codi
Contingut en català.
Mobile-first: classes base per a mòbil, s'amplia amb breakpoints (md:, lg:).