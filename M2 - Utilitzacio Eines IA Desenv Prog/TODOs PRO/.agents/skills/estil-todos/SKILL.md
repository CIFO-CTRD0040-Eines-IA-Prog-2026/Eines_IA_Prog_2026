---
name: estil-todos
description: Paleta i to visual de l'app de tasques TODOs Pro, amb els tokens per al tailwind.config. Usa-la en qualsevol canvi d'estil o de disseny (colors, layout o aspecte).
---
Paleta (fons clar + blau), sempre com a tokens de Tailwind — mai hex solts a les classes:

| Token | Hex | Ús |
|---|---|---|
| fons | #f8fafc | fons de pàgina |
| targeta | #ffffff | targetes i formularis |
| vora | #e2e8f0 | vores i separadors |
| primari | #2563eb | capçalera, botó principal, enllaços |
| primari-fosc | #1d4ed8 | hover del primari |
| primari-suau | #dbeafe | fons suaus destacats |
| tinta | #1e293b | text principal |
| suau | #64748b | text secundari |
| fet | #16a34a | tasca feta / èxit |
| perill | #dc2626 | esborrar i errors |

Bloc a copiar dins el `<head>` de cada pàgina, després del CDN de Tailwind:

```html
<script>
  tailwind.config = {
    theme: { extend: { colors: {
      fons: '#f8fafc', targeta: '#ffffff', vora: '#e2e8f0',
      primari: '#2563eb', 'primari-fosc': '#1d4ed8', 'primari-suau': '#dbeafe',
      tinta: '#1e293b', suau: '#64748b',
      fet: '#16a34a', perill: '#dc2626'
    } } }
  }
</script>
```

Regles:
- Només classes amb aquests tokens (bg-fons, text-tinta, bg-primari…). Cap bg-[#…] ni colors per defecte de Tailwind (blue-500, slate-100…).
- Capçalera blava plena (primari). Targetes blanques amb cantonades arrodonides sobre fons clar.
- Botó principal en primari amb hover primari-fosc; esborrar en perill; tasca feta en fet amb el text apagat i ratllat.
- Login i registre: targeta blanca centrada sobre fons clar, mateixos tokens i mateix to.
- Les tres pàgines porten el mateix tailwind.config: si canvies un token, canvia'l a totes.
- To sobri i llegible.
