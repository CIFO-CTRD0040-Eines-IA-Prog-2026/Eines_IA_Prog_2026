Tech Stack
Lenguajes y herramientas HTML5 semántico CSS vía CDN (<script src="https://cdn.tailwindcss.com"></script>), configurado con un blog tailwind.config inline dentro del index.html. CSS propio en style.css sólo para lo que Tailwind no cubre cómodamente (p. ej. estilos de, ajustes de scroll o transiciones concretas).
JavaScript mínimo y sin librerías, sólo para abrir/cerrar el menú de navegación en el móvil.


Estructura de archivos
project/
├── index.html ← toda la página
└── style.css ← estilos extra puntuales




Diseño visual
El diseño no se improvisa. La fuente de verdad es la skill web design (.agents/skills/web-design/SKILL.md): paleta en modo claro suava, tokens de color registrados en tailwind.config, tarjetas, grid responsivo y tipografía. Es necesario seguirla al pie de la letra y no inventar colores ni estilos fuera de esta guía.




Documentación de referencia
Cuando sea necesaria la sintaxis o ejemplos actualizados de Tailwind (config inline vía CDN, breakpoints, clases de utilidad), consulta el MCP context7 antes de responder, en lugar de confiar en la memoria.




Convenciones de código
Contenido en castellano.
Código limpio e indentado de forma consistente.
Mobile-first: clases base para móvil, se amplía con breakpoints (md:, lg:).