# Feature: Funcionalitats Interactives

Conjunt de funcionalitats JavaScript del site.

## components

1. **Menú mòbil:** Hamburguer toggle que mostra/amaga nav vertical
2. **Scroll reveal:** Animació fade-up en seccions via IntersectionObserver
3. **FAQ acordió:** Click a pregunta desplega/respon la resposta amb chevron rotat
4. **Botó WhatsApp flotant:** Botó fix inferior dret amb enllaç a `wa.me/34932541700` i animació pulse
5. **Smooth scroll:** Desplaçament suau a ancoratges `#section`
6. **Formulari de contacte:**
   - Camps: nom, email, telèfon, missatge
   - Validació client-side (HTML5 + JS)
   - Enviament via Formspree / EmailJS
   - Missatge d'èxit/error després d'enviar

## dependències

- `codi/scripts.js` (tot el JS en un sol fitxer)
- Botó WhatsApp: estil a `styles.css` + `tailwind.config`
