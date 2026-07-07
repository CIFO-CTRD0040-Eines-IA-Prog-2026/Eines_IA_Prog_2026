# Feature: Imatges i Assets

Preparació i optimització de totes les imatges i recursos gràfics del site.

## llista d'imatges

1. **Hero background:** `img/clinica-dental-demo-barcelona.jpg` + `.webp` — 1920×1080
2. **Retrat doctora:** `img/DoctoraDEMO.jpg` + `.webp` — 640×768 (retina)
3. **Odontopediatria:** `img/odontopediatria-dentista-nens-barcelona-eixample.jpg` + `.webp` — 800×600
4. **Implant PRF:** `img/implant-dental-3-fases-prf-barcelona-eixample.jpg` + `.webp` — 800×600
5. **Alineadors:** `img/alineadors-transparents-ortodoncia-invisible-barcelona-eixample.jpg` + `.webp` — 800×600
6. **Blanquejament:** `img/blanquejament-dental-barcelona-eixample.jpg` + `.webp` — 800×600
7. **Neteja:** `img/neteja-dental-professional-barcelona-eixample.jpg` + `.webp` — 800×600
8. **Obturacions:** `img/obturacions-empastaments-dentals-barcelona-eixample.jpg` + `.webp` — 800×600
9. **Calendari erupció:** `img/calendari-erupcio-dental-infantil-infografia.svg` + `.webp` + `.png` — 1200×600
10. **Foto consulta adults:** `img/consulta-dental-adults-barcelona-dra-demo.jpg` + `.webp` — 1200×800
11. **Connexió bucal-general:** `img/salut-bucal-salut-general-periodontitis-seniors.svg` + `.webp` + `.png` — 1000×700
12. **Favicon:** SVG amb icona dent

## requisits tècnics

- WebP com a format principal, JPG/PNG com a fallback
- Mides màximes: hero 200KB, retrat 80KB, serveis 60KB, infografies 50KB
- `loading="lazy"` a totes excepte hero (`eager` + `fetchpriority="high"`)
- `alt` text descriptiu en català a cada imatge
- `width` i `height` explícits per evitar CLS
