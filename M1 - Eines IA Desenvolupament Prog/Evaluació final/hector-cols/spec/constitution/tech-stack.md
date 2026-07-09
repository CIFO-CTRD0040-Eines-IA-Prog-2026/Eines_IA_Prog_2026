# Technology Stack Specification

## 1. Explicitly Allowed Technologies
The system must be built exclusively using native web primitives supplemented by utility-first styling as specified below:
* **HTML5:** Pure semantic markup (`<header>`, `<main>`, `<aside>`, `<section>`, `<article>`, `<footer>`, `<table>`, `<ul>`, `<ol>`, `<code>`, `<pre>`).
* **Tailwind CSS (via CDN):** Used for all layout, structural, typography, and responsive styling. It must be loaded in the `<head>` of every HTML document using the official development script:
    ```html
    <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>```

## 2. Explicitly Banned Technologies (Strict Constraints)
The presence of any of the following artifacts constitutes a total structural failure of the agent task:
* **No JavaScript:** Absolutely no script tags, inline JS handlers (`onclick`, etc.), JS frameworks (React, Vue, Svelte), or client-side runtime manipulation.
* **No Backend Connections:** No databases, API fetch requests, server-side code execution engines, node runtimes, or backend templates.
* **No External CSS Frameworks or Preprocessors:** No Bootstrap, Sass, Less. Everything must derive from local semantic `style.css`.

## 3. Deployment & Execution Context
* **Artifact Generation Root:** All source artifacts must be generated within a dedicated root-level folder named `code/`.
* **File Architecture:** The site must read out of direct static filesystem paths:
    * `code/index.html` (Landing Dashboard)
    * `code/level-1.html` (Foundations Module)
    * `code/level-2.html` (Intermediate Module)
    * `code/level-3.html` (Advanced Module Placeholder)
    * `code/style.css` (Universal Single Stylesheet Shared by All Pages)

## 4. Visual design
The design is not improvised or ad-libbed. The source of truth is the skill web-design (.agents/skills/disseny-web/SKILL.md): light mode palette, color tokens registered in tailwind.config, cards, responsive grid and typography. You must follow it to the letter and not invent colors or styles outside of this guide.

## 5 Reference documentation
When updated Tailwind syntax or examples are needed (inline config via CDN, breakpoints, utility classes), consult the MCP context7 before responding, rather than relying on memory.

## 6 Code conventions
Content in English. From reputable sources
Clean, well formed, and consistently indented code.
Mobile-first: base classes for mobile, extends with breakpoints (md:, lg:).
