# Fonaments de Programació I i II — Documentació del disseny

## Concepte

**"Quadern Tècnic"** — Una pàgina d'apunts que fon el llenguatge visual dels editors de codi amb la claredat d'un quadern tècnic imprès. Les capçaleres en monospace, la guia vertical (indent-guide) i l'accent porpra evoquen l'entorn de treball del programador sense caure en el clixé del terminal fosc.

## Stack

- HTML5 semàntic
- CSS3 pur (Custom Properties + Media Queries)
- **Sense** JavaScript, frameworks, llibreries ni CDNs

## Paleta de colors

| Token         | Hex       | Ús                                              |
|---------------|-----------|-------------------------------------------------|
| `--page`      | `#F9F8F6` | Fons de pàgina (paper càlid molt subtil)        |
| `--ink`       | `#1E1B1A` | Text principal (negre càlid)                    |
| `--accent`    | `#7C3AED` | **Accent porpra elèctric** — etiquetes, codi inline, guies, focus |
| `--surface`   | `#EDE9E2` | Fons de blocs de contingut                      |
| `--rule`      | `#D4C9B8` | Línies de separació i vores                     |
| `--code`      | `#3B3B3B` | Text dins de blocs de codi                      |
| `--code-bg`   | `#F0EDE6` | Fons de blocs de codi                           |
| `--guide`     | `20%`     | Indent-guide (porpra al 20% d'opacitat)          |
| `--guide-strong` | `40%`  | Indent-guide en hover (porpra al 40%)            |

El porpra elèctric (#7C3AED) és el **risc estètic** justificat: no és un color típic per a material educatiu, però prové directament de la sintaxi dels editors de codi moderns (Dracula, Tokyo Night), on coloreja paraules clau com `function`, `class` o `import`. La paleta base, càlida i neutra, fa que l'accent destaqui sense saturar.

## Tipografia

| Rol       | Font stack                                                    |
|-----------|---------------------------------------------------------------|
| Display   | `'Cascadia Code', 'Consolas', 'Courier New', monospace`       |
| Cos       | `'Segoe UI', system-ui, -apple-system, sans-serif`            |
| Codi      | Mateix stack monospace que display                            |

- **Capçaleres** (`h1`, `h2`, `.bloc-etiqueta`): monospace, que evoca immediatament el codi font
- **Cos**: sans-serif llegible per a paràgrafs i llistes
- **Bloc de codi** (`<pre>`): monospace amb fons lleugerament diferenciat i vora subtil
- **Codi inline** (`<code>` dins paràgraf): monospace amb fons i color accent

## Arquitectura visual

```
┌──────────────────────────────────────────┐
│  Fonaments de Programació I i II          │  ← h1 monospace
│  Conceptes fonamentals...                 │  ← descripció en accent, cursiva
│──────────────────────────────────────────│  ← rule
│                                           │
│  ┃  Què és la programació?               │  ← h2 monospace
│  ┃  La programació és el procés...        │  ← intro
│  ┃                                        │
│  ┃  ┌────────────────────────────────┐    │
│  ┃  │ DEFINICIÓ                      │    │  ← etiqueta monospace uppercase
│  ┃  │ Programar consisteix...        │    │  ← bloc amb fons surface
│  ┃  └────────────────────────────────┘    │
│  ┃                                        │
│  ┃  ┌────────────────────────────────┐    │
│  ┃  │ EXEMPLE                        │    │
│  ┃  │ ┌─ codi ───────────────────┐   │    │
│  ┃  │ │ console.log(...);        │   │    │
│  ┃  │ └──────────────────────────┘   │    │
│  ┃  └────────────────────────────────┘    │
│                                           │
│  ┃  Variables i tipus de dades            │  ← següent tema
│  ┃  ...                                   │
└──────────────────────────────────────────┘
```

La `┃` representa la **indent-guide**: una línia vertical fina (border-left) que recorre cada tema i es reforça en hover. És l'element signatura de la pàgina.

## Estructura de classes (kebab-case)

| Classe            | Element                    |
|-------------------|----------------------------|
| `.pagina`         | Contenidor principal       |
| `.capcalera`      | Header del lloc            |
| `.capcalera-titol`| `h1` del header            |
| `.capcalera-desc` | `p` descriptiu del header  |
| `.contingut`      | `main` amb tots els temes  |
| `.tema`           | `section` d'un concepte    |
| `.tema-titol`     | `h2` del tema              |
| `.tema-intro`     | `p` d'introducció del tema |
| `.bloc`           | `div` de definició/exemple |
| `.bloc-etiqueta`  | `h3` de la capçalera del bloc |
| `.peu`            | Footer del lloc            |

## Decisions de disseny

- **0 border-radius, 0 box-shadow**: la pàgina rebutja les cantonades arrodonides i les ombres suaus (marca d'eines tipogràfiques genèriques) a favor d'una estètica neta, precisa i técnica.
- **Hover a la indent-guide i al bloc de codi**: micro-interaccions subtils que donen vida a la pàgina sense distreure.
- **Transicions respectuoses**: `prefers-reduced-motion` anul·la totes les transicions.
- **Responsive**: punt de trencament a 600px amb reducció de padding, font-size i gap.
- **Accessibilitat**: `:focus-visible` amb outline porpra.

## Contingut

7 temes de Fonaments de Programació I i II, en català:

1. Què és la programació?
2. Variables i tipus de dades
3. Condicionals
4. Bucles
5. Funcions
6. Arrays
7. POO bàsica

Cada tema segueix l'estructura: **títol → introducció → bloc(s) de contingut** (definició, exemple, o tots dos).
