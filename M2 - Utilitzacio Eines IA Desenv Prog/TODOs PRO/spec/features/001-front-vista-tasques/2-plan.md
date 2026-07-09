# Pla — 001 Vista de tasques

- Fitxers: public/index.html i public/style.css (per al que Tailwind no cobreixi, p. ex. el ratllat).
- Head: CDN de Tailwind + tailwind.config de la skill estil-todos (context7 si hi ha dubtes amb el CDN) + style.css.
- Main centrat amb amplada còmoda (max-w-xl mx-auto). Estats com a blocs germans de la llista, mai superposats: es mostren i s'amaguen només amb la classe hidden.
- Les 3 tasques d'exemple van a l'HTML a posta: permeten dissenyar i verificar la llista abans de tenir lògica. La 003 les traurà.
- ids (contracte estable per a la 003 i la verificació): comptador · camp-tasca · error-tasca · boto-afegir · llista · estat-buit · estat-carregant · estat-error.