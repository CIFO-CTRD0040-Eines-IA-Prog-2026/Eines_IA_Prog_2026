---
name: diseno-web
description: Guía de diseño visual del proyecto (paleta, tipografía, estilo). Debe utilizarse siempre que se cree o modifique HTML/CSS, se den estilos con Tailwind, o se hable de colores, layout o aspecto visual de la página de apuntes.
---

# Guía de diseño — Apuntes de Fundamentos de Programación

Ésta es la guía de diseño del proyecto. Síguela siempre que generes o modifiques código visual (HTML, CSS, clases de Tailwind). No inventes colores ni estilos fuera de esta guía.

## Paleta (modo oscuro)

La web está en **modo oscuro**. Colores exactos:

| Token | Hex | Uso |
|------------|-----------|-----------------------------------------------|
| `fondo` | `#0F172A` | Fondo general de la página |
| `fondo-alto` | `#1E293B` | Fondo de tarjetas y blogs de código |
| `texto` | `#E2E8F0` | Texto principal |
| `text-suave`| `#94A3B8` | Texto secundario, pies, metadatos |
| `primario` | `#22D3EE` | Títulos destacados, enlaces, iconos |
| `acento` | `#A78BFA` | Elementos de énfasis, badges, hover |

Registra estos colores en la configuración de Tailwind (script inline en `index.html` si se utiliza el CDN) para que se puedan usar como clases: `bg-fons`, `bg-fons-alt`, `text-text`, `text-primario`, `bg-accent`, etc. **No utilices hex sueltos en las clases** (`bg-[#...]`) ni colores por defecto de Tailwind que no sean de esta paleta.

## Estilo: tarjetas (cards)

- Cada tema de los apuntes va dentro de una **tarjeta**: fondo `fondo-alto`, esquinas redondeadas (`rounded-xl`), sombra suave y algo de padding generoso (`p-6`).
- Las tarjetas se disponen en **grid responsivo**: 1 columna en móvil, 2 en tableta, 3 en pantallas grandes (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
- Efecto hover sutil: ligero cambio de borde u sombra con 'acento'. Nada de animaciones estridentes.

## Tipografía y jerarquía

- Fuente del sistema o una sans-serif limpia (p. ej. `font-sans` de Tailwind).
- `h1` grande y en `primario`; `h2` para cada tema dentro de su tarjeta; texto de cuerpo en `texto` con interlineado cómodo (`leading-relaxed`).
- Los **ejemplos de código** van en `<pre><code>` con fuente monoespaciada, fondo `fondo` (más oscuro que la tarjeta), borde sutil y `rounded-lg`.

## Reglas generales

- Contenido siempre en **castellano**.
- Contraste suficiente: nunca texto `text-suave` sobre `fondo-alto` para contenido importante.
- Mobile-first: primero que se vea bien en móvil, después amplía con breakpoints.
- Mantén la simplicidad: sólo HTML + Tailwind (CDN) + `style.css` para lo que Tailwind no cubra bien.