# Pla — 002 Vistes auth

- Fitxers: public/login.html i public/registre.html. La validació neix a app.js, que mira quin formulari hi ha a la pàgina.
- Cada pàgina duu el mateix head que index.html (amb el CDN no hi ha includes: la còpia és el preu assumit).
- Layout: body min-h-screen amb flex per centrar; targeta max-w-sm.
- Formularis amb novalidate (required, type="email" i minlength es queden): els missatges els pinta app.js al paràgraf d'error de cada camp.
- En submit: preventDefault, validar tots els camps, pintar o netejar missatges; si tot és correcte, window.location.
- ids: form-login · form-registre · camp-nom · camp-email · camp-contrasenya · camp-contrasenya2 · error-(camp).