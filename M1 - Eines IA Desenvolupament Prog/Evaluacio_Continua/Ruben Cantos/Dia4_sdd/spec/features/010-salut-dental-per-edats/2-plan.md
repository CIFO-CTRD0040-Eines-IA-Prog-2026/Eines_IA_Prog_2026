# Plan: Guia de Salut Dental per Edats

## estructura

`codi/salut-dental-per-edats.html`

## blocs

1. Header amb nav apuntant a `index.html#seccio`
2. Hero amb títol i descripció curta
3. Sistema de pestanyes (JS: amagar/mostrar panells)
4. Panel Nens (rosa): 4 targetes + infografia calendari erupció
5. Panel Adults (teal): 3 targetes + llista 5 passos rutina
6. Panel Gent Gran (ambre): 4 targetes + infografia connexió bucal-general
7. Secció compromís clínica
8. CTA WhatsApp (dinàmic segons pestanya activa)
9. Footer + WhatsApp flotant

## fonts de contingut

Tot el text de la guia (consells, símptomes, prevenció) s'extreu i adapta de `spec/constitution/4-medical-sources.md`:

| Font | Panel | Contingut a extreure |
|---|---|---|
| WHO + NHS + CDC Oral Health | Nens (0-18) | Calendari erupció, higiene infantil, segelladors |
| CDC + ADA MouthHealthy + Mayo Clinic | Adults (18-65) | Prevenció càries, malaltia periodontal, connexió sistèmica |
| EFP + NIDCR + Mayo Clinic | Gent Gran (+65) | Xerostomia, periodontitis, connexió cardiovascular/diabetis |
| Canal Salut GenCat + COOEC | Totes les edats | Adaptació al context català, recursos locals |

Cada font té enllaços directes que l'agent ha de consultar per redactar contingut precís i citar correctament.

## estils

- Pestanyes: botons amb color d'accent segons edat
- Targetes de consells amb icones
- Infografies en SVG + WebP + PNG
