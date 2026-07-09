# Comprehensive Visual & Technical Specifications

## 0. Responsive

## 1. Global Visual Layout Elements
All generated pages must inherit their framework wrapper structural boundaries from a common identity profile:
* **Header Core Design:**
    * Left side: Site brand signature logo format: `<span>&lt;/&gt; CodeAcademy</span>`.
    * Right side: Horizontal plain navigation elements matching static direct page file targets (`index.html`, `level-1.html`, `level-2.html`).
    * Active State Rule: The active link relative to the loaded page must apply a dedicated target flag `class="nav-link active"`.
* **Footer Core Design:**
    * A centered grid mapping complete link trees to all three internal paths.
    * Plain-text string explicitly tracking system design standards: `© 2026 CodeAcademy. Built with HTML5 & CSS3. Clean, responsive, and framework-free.`

## 2. Page Specific Visual Design Maps

### A. Landing Dashboard Page (`index.html`)
* **Hero Section Block:**
    * An unambiguous top-aligned area layout containing an `<h1>` element holding text wrapped inside a semantic accent class wrapper: `<span class="hero-gradient-text">Programming Concepts</span>`.
    * A subtitle `<p class="hero-subtitle">` explaining structural scope boundaries.
* **Levels Content Navigation Grid:**
    * A grid containment envelope styled via `class="levels-grid"`.
    * Individual tracking blocks built as semantic `<article class="level-card">`.
    * Card internal child layout order must absolutely mirror:
        1. `<span class="card-badge">Level [X]</span>`
        2. `<h2 class="card-title">[Title Description]</h2>`
        3. `<p class="card-desc">[Text Baseline]</p>`
        4. `<ul class="card-topics-list">` container containing precisely target topics.
        5. `<a class="card-btn">` acting as a clear direct navigation button hook.

### B. Level Documentation System Pages (`level-1.html`, etc.)
* **Dual-Column Viewport Split Plan:**
    * Contained within an outermost element styled as `class="doc-container"`.
    * **Left-Aligned Column (`<aside class="sidebar">`):** Sticky table-of-contents anchor element matrix mapping out to internal target markers (e.g., `href="#variables"`). Followed by explicit site-wide stepping routes.
    * **Right-Aligned Column (`<main class="main-content">`):** Structured technical text block matching structural code modules.
* **Standard Component Render Protocols:**
    * **Tables:** Must use explicit table blocks contained within a responsive `.table-wrapper` wrapper, enforcing precise column assignments: `Type`, `Description`, `Common Sizes`, and `Examples`.
    * **Multi-Language Syntax Visualizations:** Structured as a wrapper containing header meta bands and pre-formatted code outputs. Text content must not omit language scopes:
        ```html
        <div class="code-container">
          <div class="code-header">
            <span class="code-lang-tag">[Language Target Profile]</span>
          </div>
          <pre><code>[Token-highlighted text code block]</code></pre>
        </div>
        ```
    * **Visual Notice Banners:** Custom layout breakout highlights targeting exact type contexts via `class="callout info"` or `class="callout warning"`, utilizing text emoji headers (💡, ⚠️) followed by instructional insights.

## Out of scope
Search or filter mechanisms or backend.

## Acceptance criteria
[ ] The menu links jump to the correct Level.
[ ] On mobile, the menu is opened and closed with the hamburger button.
[ ] The topics are visible with intro and code examples.
[ ] The grid goes from 1 to 2 to 3 columns.
[ ] The colors match the web-design tiles.