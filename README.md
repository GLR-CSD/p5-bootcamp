## Visuals programmeren met p5.js — Tutorial project

Een verzameling interactieve lespagina's om de basis en intermediate technieken van generative art met p5.js te leren. De site is statisch (HTML/CSS/JS) en heeft geen build‑stap nodig.

### Snel starten
- **Optie 1 — Dubbelklik:** open `index.html` direct in je browser.
- **Optie 2 — Lokale server (aanbevolen):** serveer de map met een simpele webserver zodat paden en iframes zeker goed werken.
  - Gebruik de Visual Studio code extensie “Live Server” en start op de root van dit project.


### Technische vereisten
- Een moderne browser (Chrome, Firefox, Safari, Edge)
- Geen extra installatie nodig; p5 wordt lokaal geladen via `libraries/p5.min.js`

### Projectstructuur
- `index.html` — Hoofdpagina met zijbalk en een `<iframe>` dat lespagina's laadt
- `pages/` — Alle lesonderdelen, gegroepeerd per onderwerp (basis, vormen, interactiviteit, teken‑technieken)
- `resources/` — Statische assets
  - `css/` — Stijlen van de site
  - `fonts/` — Gebruikte lettertypen
  - `images/` — Afbeeldingen voor voorbeelden
  - `javascript/` — Hulpscripts zoals de code viewer en sitescripts
- `libraries/` — Externe libs (zoals `p5.min.js`)

### Navigatie en inhoud
De zijbalk in `index.html` linkt naar individuele lespagina's in `pages/…/*.html`. Elke les heeft doorgaans:
- Een `*.html` met structuur en een `<script>` tag naar de p5‑schets
- Een bijbehorend `*.js` bestand met de p5‑code (`setup()`/`draw()` en aanvullende logica)

Voorbeelden van categorieën:
- Basis: canvas, draw‑loop, kleurmodus (RGB/HSL), fill/stroke, random
- Vormen: cirkel, lijn, rechthoek, driehoek, tekst, afbeelding, custom vorm
- Teken‑technieken: buffers, for‑loops, grid
- Interactiviteit: muisklik, slepen, toetsenbord, cursor volgen

### Nieuwe les/pagina toevoegen
1. Maak een nieuwe map in de juiste sectie, bijv. `pages/basis/voorbeeld/`
2. Voeg `voorbeeld.html` en `voorbeeld.js` toe
3. Koppel het script in de HTML, bijvoorbeeld:
   ```html
   <script src="voorbeeld.js"></script>
   ```
4. Voeg een link naar je nieuwe pagina toe in de zijbalk van `index.html` (kopieer een bestaande `<li>` en pas het pad aan)

### p5‑versie
Het project gebruikt de lokale bundel `libraries/p5.min.js`. Vervang dit bestand met een nieuwere versie van p5 als je wil upgraden.

### Probleemoplossing
- Lege of niet‑geladen pagina in het iframe: start een lokale server (zie Snel starten — Optie 2)
- 404's op assets: controleer relatieve paden t.o.v. `index.html` of de betreffende lespagina
- Font‑ of afbeelding‑issues: check bestandsnamen en extensies in `resources/`

### Credits
- p5.js — `https://p5js.org`
- Dit project is bedoeld als onderwijs/tutorial‑materiaal voor het programmeren van visuele projecten met p5.


