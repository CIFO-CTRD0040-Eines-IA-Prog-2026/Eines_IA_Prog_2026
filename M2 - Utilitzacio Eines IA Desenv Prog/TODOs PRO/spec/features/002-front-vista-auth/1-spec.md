# 002 — Login i registre (amb validació)

public/login.html i public/registre.html, maquetades i validades. Sense backend encara: si tot és correcte, naveguen (login → index.html, registre → login.html);

- Pàgines
Login: targeta centrada amb el nom de l'app, email, contrasenya, botó "Entrar" i enllaç a registre.
Registre: nom, email, contrasenya i repetir contrasenya, botó "Crear compte" i enllaç a login.
A index.html s'afegeix "Surt" a la capçalera, que porta al login.

- Validació en enviar: missatge sota cada camp que falla
Camp buit → "Aquest camp és obligatori"
Email mal format → "Escriu un email vàlid"
Contrasenya de menys de 8 → "Mínim 8 caràcters"
Repetir contrasenya no coincideix → "Les contrasenyes no coincideixen"

- Criteris d'acceptació
[ ] Les dues pàgines comparteixen estil (tokens) i s'enllacen entre elles; "Surt" d'index porta al login.
[ ] Enviar-ho tot buit mostra "Aquest camp és obligatori" a cada camp i no navega.
[ ] "aaa" com a email i "1234" com a contrasenya mostren els seus missatges.
[ ] Contrasenyes diferents al registre → "Les contrasenyes no coincideixen".
[ ] En corregir un camp i reenviar, el seu missatge desapareix.
[ ] Login vàlid porta a index.html; registre vàlid, a login.html.
[ ] Targeta centrada i llegible a 375px i a 1280px.