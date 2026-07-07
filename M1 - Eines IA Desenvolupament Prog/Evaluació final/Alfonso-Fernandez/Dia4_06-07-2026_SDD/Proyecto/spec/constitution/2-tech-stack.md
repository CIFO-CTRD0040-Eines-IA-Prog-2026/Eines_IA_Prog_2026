# Tech Stack

- Lenguajes y herramientas
HTML5 semántico.
Tailwind CSS vía CDN (<script src="https://cdn.tailwindcss.com"></script>), configurado con un blog tailwind.config inline dentro del index.html.
CSS propio en style.css sólo para lo que Tailwind no cubre cómodamente (p. ej. estilos de <pre><code>, ajustes de scroll o transiciones concretas).
Uso de JavaScript apoyado con librerías.

- Estructura de archivos
Proyecto/
├── index.html ← toda la página
└── style.css ← estilos extra puntuales


- Diseño visual
El diseño no se improvisa. La fuente de verdad es la skill diseno-web (.agents/skills/diseno-web/SKILL.md): paleta en modo oscuro, tokens de color registrados en tailwind.config, tarjetas, grid responsivo y tipografía. Es necesario seguirla al pie de la letra y no inventar colores ni estilos fuera de esta guía.

- Documentación de referencia
Consulta el MCP context7 antes de responder, en lugar de confiar en la memoria.

- Convenciones de código
Contenido en castellano.
Código limpio y sangrado de forma consistente.
Mobile-first: clases base para móvil, se amplía con breakpoints (md:, lg:).