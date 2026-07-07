# Roadmap — Clínica Dental DEMO

> Pla de desenvolupament del projecte · Versió catalana monolingüe

---

## fase 0 — definició i preparació

- [ ] Definir marca: colors corporatius (teal), tipografia (Inter), to de veu
- [ ] Recopilar continguts:
  - Texts de cada servei, biografia, FAQ, valors
  - Fotografies: interior clínica, retrat doctora, 6 fotos serveis, foto consulta adults
  - Infografies: calendari erupció dental, connexió salut bucal-general
- [ ] Preparar entorn: Git, editor de codi, estructura de carpetes


---

## fase 1 — fonaments tècnics 

- [ ] Crear estructura de fitxers (11 HTML, CSS, JS, img/)
- [ ] Configurar Tailwind CSS via CDN amb paleta teal personalitzada
- [ ] Escriure `styles.css`: scroll reveal, FAQ acordió, hover cards, animacions
- [ ] Escriure `scripts.js`: menú mòbil, smooth scroll, scroll reveal, WhatsApp flotant
- [ ] Crear `robots.txt` i `sitemap.xml`
- [ ] Crear plantilla de header (fix, logo, nav, telèfon, CTA) i footer reutilitzable

---

## fase 2 — pàgina principal index.html 

- [ ] **Header fix:**
  - Logo (icona dent + «Clínica Dental DEMO»)
  - Nav: Serveis, Nosaltres, FAQ, Guia de Salut, Contacte
  - Telèfon + CTA «Demanar cita»

- [ ] **Hero:**
  - Background: foto interior clínica (1920×1080, WebP + JPG)
  - H1: «La teva salut dental, la nostra prioritat»
  - Subtítol + 2 CTAs (cita / trucada)
  - Stats: +22 anys, 3.200+ pacients, 98% satisfets
  - Retrat Dra. DEMO (320×384, WebP + JPG) + badge COEC xxxx

- [ ] **Serveis** (6 targetes en graella 3 columnes):
  1. Odontologia Pediàtrica i Familiar (rosa)
  2. Implantologia i Rehabilitació Oral (teal)
  3. Ortodòncia Invisible (morat)
  4. Odontologia Cosmètica i Estètica (groc)
  5. Neteja Professional i Prevenció (verd)
  6. Odontologia General i Restauradora (blau)
  - Cada targeta: icona, títol, descripció, foto, «Llegir més →»

- [ ] **Nosaltres:**
  - Biografia Dra. DEMO, timeline formació, valors (professionalitat, confiança, tecnologia, accessibilitat)

- [ ] **FAQ** (acordió):
  - 7 preguntes: ubicació, edat pacients, freqüència revisions, implants, ortodòncia, preus, tractaments

- [ ] **Contacte:**
  - Adreça: Plaça del Comte de Sert, 25, Sarrià-Sant Gervasi, 08035 Barcelona
  - Google Maps embed + telèfon + WhatsApp
  - Horari: Dll-Dv 10:30-19:30

- [ ] **Footer:**
  - Nom, adreça, copyright 2025/2026, enllaç a política de privacitat

- [ ] **Botó WhatsApp flotant** (animació pulse, verd #25D366)

---

## fase 3 — pàgines de serveis 

### 3a — serveis.html

- [ ] Llistat complet amb 7 targetes en graella
- [ ] Secció per edats (nens, adults, gent gran)
- [ ] Breadcrumb: Inici > Serveis
- [ ] CTA WhatsApp

### 3b — 7 fitxes de servei individual

Cada fitxa inclou: breadcrumb, hero, durada/visites/pressupost (aside), descripció, beneficis, FAQ, CTA WhatsApp, footer.

- [ ] `implants-dentals-barcelona.html` — 3 fases PRF, taula comparativa
- [ ] `ortodoncia-invisible-barcelona.html` — alineadors vs brackets
- [ ] `odontopediatria-barcelona.html` — primera visita, segelladors
- [ ] `estetica-dental-barcelona.html` — carilles, blanquejament, disseny de somriure
- [ ] `neteja-dental-barcelona.html` — periodòncia, prevenció
- [ ] `empastaments-obturacions-barcelona.html` — composites, incrustacions
- [ ] `endodoncia-barcelona.html` — conductes, criteris

---

## fase 4 — pàgines secundàries 

- [ ] **salut-dental-per-edats.html:**
  - Pestanyes: Nens (0-18), Adults (18-65), Gent Gran (+65)
  - Consells, infografies (calendari erupció + connexió bucal-general)
  - CTA per a cada grup d'edat

- [ ] **politica-privacitat.html:**
  - RGPD: responsable, finalitats, drets, cookies, seguretat

---

## fase 5 — SEO i dades estructurades 

- [ ] Meta tags (title, description, canonical, OG, Twitter) a cada pàgina
- [ ] JSON-LD index.html: DentalClinic, Physician, FAQPage, ItemList, WebPage
- [ ] JSON-LD fitxes servei: MedicalProcedure
- [ ] JSON-LD salut-dental-per-edats: WebPage
- [ ] Validar tot amb Google Rich Results Test
- [ ] `sitemap.xml` i `robots.txt` funcionals

---

## fase 6 — imatges i assets 

- [ ] Hero background: 1920×1080, WebP + JPG
- [ ] Retrat doctora: 640×768 (retina), WebP + JPG
- [ ] 6 fotos serveis: 800×600, WebP + JPG
- [ ] 2 infografies: SVG + WebP + PNG
- [ ] Foto consulta adults: 1200×800, WebP + JPG
- [ ] Favicon SVG (icona dent)
- [ ] `loading="lazy"` a totes les imatges excepte hero (`eager` + `fetchpriority=high`)

---

## fase 7 — funcionalitats interactives 

- [ ] Menú mòbil (hamburger)
- [ ] Scroll reveal (Intersection Observer)
- [ ] FAQ acordió
- [ ] WhatsApp flotant amb enllaç `wa.me/34932541700`
- [ ] Smooth scroll a ancoratges
- [ ] **Formulari de contacte:**
  - Camps: nom, email, telèfon, missatge
  - Enviament via Formspree / EmailJS
  - Validació client-side + missatge d'èxit/error

---

## fase 8 — analítica i monitorització 

- [ ] Google Analytics 4 amb ID real a totes les pàgines
- [ ] Esdeveniments: clic WhatsApp, enviament formulari, clic telèfon
- [ ] Google Search Console: verificar domini, enviar sitemap
- [ ] Google Business Profile: NAP consistent amb el web

---

## fase 9 — proves i llançament 

- [ ] Navegadors: Chrome, Firefox, Safari, Edge (escriptori + mòbil)
- [ ] Responsive: 360px, 768px, 1024px, 1440px+
- [ ] Enllaços: comprovar tots (interns + externs)
- [ ] Imatges: càrrega, alt text, aspect ratio
- [ ] Lighthouse: rendiment >90 a mòbil i desktop
- [ ] Accessibilitat: contrast, ARIA, navegació teclat
- [ ] Validar JSON-LD amb Rich Results Test
- [ ] Desplegar a Cloudflare, verificar HTTPS, provar domini
- [ ] Prova final: formulari, WhatsApp, telèfon, totes les pàgines

---

## fase 10 — post-llançament (continu)

- [ ] Monitoritzar GA4 (setmanal) i Search Console (mensual)
- [ ] Blog: articles mensuals en català
- [ ] Landing pages per a campanyes estacionals
- [ ] Xarxes socials: enllaços al footer
- [ ] Newsletter: formulari de subscripció
- [ ] Testimonis de pacients reals (amb consentiment)
- [ ] Backups mensuals del site

---

## resum temporal

| Fase | Durada | Lliurable clau |
|---|---|---|
| 0 — Definició | 1 set. | Requisits + continguts |
| 1 — Fonaments | 1 set. | Estructura + CSS + JS + SEO base |
| 2 — Pàgina principal | 2 set. | `index.html` complet |
| 3 — Serveis | 2 set. | 7 fitxes de servei + llistat |
| 4 — Secundàries | 1 set. | Guia salut + privacitat |
| 5 — SEO | 1 set. | Meta tags + JSON-LD + sitemap |
| 6 — Imatges | 1 set. | Tots els assets gràfics |
| 7 — Interactivitat | 1 set. | Formulari + funcionalitats JS |
| 8 — Analítica | 1 set. | GA4 + Search Console |
| 9 — Llançament | 1 set. | Proves + desplegament |
| 10 — Post | Continu | Blog + testimonis + millores |
