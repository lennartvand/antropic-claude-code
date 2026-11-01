# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Taal
Antwoord altijd in het Nederlands, tenzij de gebruiker expliciet om een andere taal vraagt.

## Codeerstijl
- Gebruik duidelijke, leesbare code met commentaar in het Nederlands
- Geef de voorkeur aan eenvoud boven complexiteit
- Gebruik semantische HTML en moderne CSS waar mogelijk

## Algemeen
- Stel verduidelijkende vragen als de opdracht niet duidelijk is
- Geef bij grotere wijzigingen eerst een korte uitleg van de aanpak voordat je begint

---

## Dit project: Reizenregistratie (lokale versie)

**Map:** `~/HQ/reizenregistratie/lokaal/`
**Doel:** Transport management systeem voor binnenvaart schippers

### Twee versies
| | Lokale versie (deze map) | Online versie |
|---|---|---|
| **Map** | `~/HQ/reizenregistratie/lokaal/` | `~/HQ/reizenregistratie/oud/` |
| **Gebruik** | Browser openen, geen server | `node --env-file=.env server.js` |
| **Data** | localStorage | SQLite (test) / MySQL (productie) |
| **Login** | Nee | Ja (JWT) |

### Tech stack (lokale versie)
- **Alleen frontend:** HTML / CSS / Vanilla JS
- **Geen server, geen Node.js, geen login**
- **Gedeeld stylesheet:** `unified-style.css`
- **Gedeelde scripts:**
  - `app.js` — **verbruik/efficiëntie (één bron, v3.13):** `verbruikVanReis` (null bij open of onvolledige reis), `efficientieVanReis` (kg/ton-km), `formatEff` (weergave in kg/1000 tkm), `kgPerKmVanReis`, `trimVanReis`, `diepsteDiepgang`, `reisIsOpen`/`openReizen`, `reizenMetVerbruik`, `herberekenReis` (status + afgeleide velden bij opslaan), `controleerGasolie`, `vergelijkMetTraject` (eerlijk vergelijken: kg/km t.o.v. hetzelfde traject, anders dezelfde richting), `binnenRichting` (richtingseffect eruit halen vóór een correlatie), `verbruikTussenReizen`, `mediaan`; aankomst-modal `toonAankomstInvoer` en `toonOpenReizen`. **Reken nooit zelf `begin − eind + bunkering` of `fuelEfficiency` uit in een pagina — gebruik deze helpers.** Verder: helpers (parseNum/formatNum/escapeHTML/normaliseerDatum, formatDatumNL voor weergave als DD-MM-JJJJ), statistiek-helpers (berekenVerband: Pearson-correlatie + Fisher-significantie; partieleCorrelatie: verband x–y gecorrigeerd voor een derde variabele — gedeeld door `analyse.html` en `dashboard.html`, geen eigen kopieën definiëren), localStorage-toegang (loadTrips/saveTrips/loadShipProfile), schepen-beheer (loadSchepen/saveSchepen/getActiefSchip/setActiefSchip/tripsVoorSchip), ijkschaal-berekeningen uit de meetbrief (ijkschaalLading/ijkschaalDiepgang met `WATER_DICHTHEID` zoet/brak/zout), notificaties (showNotification), grafiekkleuren (`KLEUR`), Basis/Geavanceerd-toggle en JSON-backup/herstel; ingeladen door **alle** pagina's als eerste script in de `<body>`
  - `vaarwegen.js` — vaarweg-netwerk (plaatsenlijst + afstand/richting via Dijkstra) plus `PEILSCHALEN` (Maxau, Kaub, Köln, Duisburg-Ruhrort, Wesel, Nijmegen op de Rijn-km-as; Lith beneden op de Maas, sinds v3.14) en `peilPassages()` (welke peilschalen een traject passeert en op hoeveel km vanaf de laadplaats; bij een `route_variant` per "been" aan beide kanten van het kanaal); ingeladen door `index.html`, `database.html`, `waterstand.html`, `dashboard.html`, `instellingen.html` en `START HIER.html`
  - `waterstanden.js` (na app.js + vaarwegen.js) — waterstand bij peilschaalpassage: passeermoment = reisdatum + vertrektijd + afstand ÷ snelheid (op/af, instelbaar); `werkWaterstandenBij()` haalt ontbrekende waarden van de Duitse peilschalen op bij **Pegelonline** (CORS open, werkt vanaf file://; stil bij openen van START HIER/dashboard/waterstand, max 1×/uur): passages < 30 dagen via de REST-API, oudere via de **historie-download** in twee stappen, want die server stuurt `Access-Control-Allow-Origin` dubbel (browser → `*, *` → CORS-fout, dus **niet via fetch**): `downloadHistorieViaBrowser()` verstuurt per peilschaal het formulier (POST `/gast/historische-zeitreihen/prepare-download`, station-`uuid` uit `PEILSCHALEN`) als gewone download in een verborgen iframe, `importeerHistorieZip()` leest de opgeslagen zip's (CSV `timestamp;value` in MEZ/MESZ, peilschaal herkend aan `station_uuid` in `zeitreiheninformation.txt`, uitpakken via `pakZipUit()` met `DecompressionStream`); de waterstandpagina toont een gele melding met beide knoppen zolang oude reizen waarden missen; van historie worden alleen uren rond reizen bewaard en de ingelezen vensters onthouden in `waterstand_historie_bereik`; `importeerWaterstandCSV()` leest een CSV (waterinfo.rws.nl voor Nijmegen — RWS-API blokkeert CORS, dus geen live ophalen; tijden met MET/CET-kop = UTC+1)
- **Lokale libraries in `lib/`:** Chart.js, SheetJS (xlsx), jsPDF, html2canvas — geen CDN, alles werkt offline
- **Data opslag:** `localStorage` in de browser
  - Reizen: sleutel `scheepsdata` (JSON-array)
  - Schepen: sleutel `scheepsdata_schepen` (JSON-array van scheepsprofielen, elk met `id` en optioneel `ijkschaal`) + `actief_schip_id`; het actieve schip wordt gespiegeld naar de legacy-sleutel `scheepsdata_profiel` (compatibiliteit). Een oud enkel profiel wordt bij eerste gebruik automatisch gemigreerd door `loadSchepen()`.
  - UI-voorkeuren: `app_mode` (`'basic'` of `'advanced'`), `app_thema` (`'licht'` of `'donker'`), `anomaly_sensitivity`, `database_visible_columns`
  - Centrale waterstanden-bron (v3.17): openbare repository **`lennartvand/waterstanden`** haalt elke nacht Rijkswaterstaat (`lith.beneden` = zelfde metingen als `lith.sluis` maar met historie, `nijmegen.waal` — bevestigd aan boord 01-11-2026) en Pegelonline op en publiceert via GitHub Pages; RWS zelf is **niet vanuit de browser** bereikbaar (geen CORS). App: `werkCentraleBronBij()`, sleutels `waterstand_bron_url` (adres, standaard `https://lennartvand.github.io/waterstanden/data/`), `waterstand_bron_info`, `waterstand_bron_stempel`. Er gaat nooit reisdata naar de bron.
  - Teletekst 720: `teletekst_laatste` (`{tijd, bron: 'opgehaald'|'geplakt'|'centraal', waarden: {NIJMEGEN, LITH, WESTSLUIS, WAAL_MIN: {cm, regel}}, ruw}`); functies in waterstanden.js. Opmaak (gecontroleerd 01-11-2026): subpagina 1 en 2 pegels in **twee kolommen per regel** ("Nijmegen 472 471 Zwartsl. bu -34", kolommen 7 uur en nu), subpagina 9 "Minst gepeilde diepten" met puntjes en **zonder kopjes per rivier** (indelen op vaknaam: `ttRivierVanVak`), subpagina 10 verwachtingen Rijn 06:00. Kan de browser NOS niet bereiken, dan `haalCentraleDieptes()` (bron `centraal`).
  - Dubbele reizen (v3.18.1): een reis is dubbel bij gelijke `reisVingerafdruk()` (niet het id). CSV-import slaat zulke reizen over; Database en Opzoeken tonen `toonDubbeleReizenMelding()`. Nieuwe importroutes moeten ook op vingerafdruk ontdubbelen.
  - Dieptes en Westsluis (v3.18): de centrale bron bewaart Teletekst 720 dagelijks om 08:43 UTC (`data/dieptes/<jaar>.json`) en levert `data/westsluis/<jaar>.json` = Nijmegen − verschil (afgeleid; verschil + aantal kalibratiedagen in `index.json`). App: `westsluisAfgeleid(trip)` met `waterstand_bron_info.westsluisVerschil`.
  - Waterstanden: `waterstand_metingen` (`{PEILCODE: {"JJJJ-MM-DDTHH" (UTC-uur): cm}}`, uurgemiddelden), `waterstand_laatste_update`, `waterstand_historie_bereik`, instellingen `waterstand_vertrektijd` (standaard 12:00), `waterstand_snelheid_op` (10) / `waterstand_snelheid_af` (16 km/u); alle in `BACKUP_KEYS`
  - Backup-administratie: `last_backup_date`
  - Tijdelijk: `reis_voorinvulling` — door database.html gezet bij "dupliceer als nieuwe reis"; index.html leest én verwijdert de sleutel bij het laden

### Pagina's
`START HIER.html` (startpagina/launcher — het bestand dat gebruikers dubbelklikken) · `dashboard.html` · `index.html` (registratie) · `opzoeken.html` (matroos-opzoekpagina: zoek een eerdere reis → compact tankstanden-overzicht) · `database.html` · `analyse.html` · `waterstand.html` (eerste tab "Waterstand bij reizen": per reis de waterstand + geschat passeermoment per peilschaal, lege cellen handmatig in te vullen, scatter diepgang vs waterstand; daarna route/richting/trim-analyse) · `rapporten.html` · `schip.html` · `draagvermogen.html` · `records.html` · `help.html` (handleiding met twee tabbladen — Matroos/stuurman en Kapitein/bevrachter — en echte schermafbeeldingen uit `img/help/`; link staat in de nav op **alle** pagina's, zichtbaar in zowel basis- als geavanceerde modus) · `versies.html` ("Wat is er nieuw": wijzigingen per versie in gewone taal, data in de `VERSIES`-array; bereikbaar via Instellingen → Over deze app en de voettekst van START HIER) · `instellingen.html` ("Instellingen" in de nav op alle pagina's, beide modi: anomalie-gevoeligheid en waterstand-aannames (vertrektijd, snelheden) alleen geavanceerd; backup maken/terugzetten)

> Oude/vervangen bestanden staan in `_archief/` (o.a. `analyse_new.html`, een niet-afgemaakt WIP-alternatief voor `analyse.html`).

### Aandachtspunten
- **Nieuwe versie uitbrengen:** `APP_VERSIE` in `app.js` ophogen, bovenaan `VERSIES` in `versies.html` een gebruikersvriendelijke entry toevoegen (soort: nieuw/verbeterd/opgelost/beveiliging) én de technische changelog in `PROJECT_DOCUMENTATIE.md` §9 bijwerken. START HIER toont dan eenmalig "Bijgewerkt naar versie …" (sleutel `laatst_geziene_versie`).
- Bestanden rechtstreeks openen in de browser (geen webserver nodig)
- Geen `js/auth.js` of `js/api.js` — data gaat direct via localStorage
- Wijzigingen hier **niet** automatisch doorvoeren in de online versie (aparte codebase)
- Volledige projectdocumentatie: zie `PROJECT_DOCUMENTATIE.md`

### Gebruikerscontext
De gebruiker is **rederij-schipper** (loondienst): geen zicht op kosten, bunkerprijzen of vrachttarieven. Stel dus **geen financiële features** voor — focus op operationele waarde: verbruik/efficiency, trim, wachttijden, vaar-/rusttijden, onderhoud, en rapportages richting de rederij.

### Besloten plan: databeveiliging & kantoor (grill-sessie 01-11-2026, nog niet gebouwd — wacht op akkoord)
**Uitgangspunt:** de app is voor het eigen schip; het schip is de enige bron van data. Disponenten op kantoor krijgen later alleen wat de schipper bewust stuurt. Geen server, geen cloud (ook geen OneDrive), geen tweerichtings-sync.

| # | Besluit |
|---|---|
| 1 | Eén schrijvende laptop aan boord (Chrome, rederij-laptop); andere computers alleen lezen → geen sync-conflicten, geen `updated_at` nodig |
| 2 | `localStorage` blijft de werkopslag; de app schrijft na elke wijziging (`saveTrips`/`saveSchepen`) automatisch een JSON-spiegel naar een **zelfgekozen map** (File System Access API, map-handle in IndexedDB; beschikbaar vanaf `file://` in Chromium) |
| 3 | Dagversies: laatste **14 dagen + 1 per maand** bewaren. Schrijven via tijdelijk bestand; **lege data overschrijft nooit gevulde data** |
| 4 | Bij opstarten: browser leeg maar map gevuld → herstel aanbieden. Map niet bereikbaar / toestemming verlopen → vriendelijk opnieuw laten kiezen, nooit de registratie blokkeren |
| 5 | **Maandelijkse herinnering** om de backupmap buiten de laptop te zetten (stick / mail aan jezelf) — vervangt de huidige 7-dagen-backupwaarschuwing. Handmatige JSON-download blijft als noodroute |
| 6 | Knop **"Klaarzetten voor kantoor"**: zet Excel (code uit `database.html`) + PDF (code uit `rapporten.html`) in de map; de schipper mailt zelf. Geen JSON mee naar kantoor |
| 7 | PDF-inhoud kiest de gebruiker zelf per keer via **vinkjes** (bv. reisoverzicht, verbruik, diepgang vs waterstand, records); laatste keuze onthouden |
| 8 | **Geen kantoormodus** (alleen-lezen app voor kantoor) — geschrapt |
| 9 | De publieke-deployment-roadmap (`PROJECT_DOCUMENTATIE.md` §8) en de online versie vervallen; documentatie opschonen bij de bouw (ook de kop "Versie 3.11" in `PROJECT_DOCUMENTATIE.md`) |

**Volgorde:** v3.19 = spiegeling naar map + dagversies + herstel + maandherinnering · v3.20 = "Klaarzetten voor kantoor" met PDF-vinkjes. (v3.17/v3.18 werden de centrale waterstanden-bron en de dieptes; v3.18.1 dubbele reizen.) (v3.13 werd de stijl- en rekenronde, v3.14 "afgeladen op" en waterstanden.)
**Eerst testen bij bouwen:** onthoudt Chrome op Windows de maptoestemming na een herstart (`queryPermission`/`requestPermission` met klik)?

### Mogelijke volgende features (besproken, nog niet gebouwd)
1. **Wacht- en laad/lostijden per terminal** — 4 tijdstippen per reis (aankomst/vertrek bij laden en lossen) → gemiddelde wachttijd per terminal. Eerste keus (geparkeerd op verzoek, 01-10-2026). Basis ligt er sinds v3.13: `vertrektijd`, `aankomst_datum`/`aankomst_tijd` per reis (vertrektijd wordt al gebruikt in `vertrekMoment()`); nog toe te voegen: aankomst bij de laadplaats en vertrek na het lossen.
2. **Vaar- en rusttijden** — vaaruren per dag registreren met signaal bij de grens van de exploitatiewijze (A1/A2/B).
3. **Onderhoudslogboek** — onderhoudsmomenten (schroef, motor, romp) vastleggen en koppelen aan de bestaande degradatie-detector op het dashboard.

---

## Architectuur

### Structuur per HTML-bestand
Elke pagina bevat zijn eigen HTML-structuur, pagina-specifieke `<style>`-blokken en pagina-logica inline onderaan in een `<script>`-tag. Gedeelde logica staat in `app.js` (alle pagina's) en `vaarwegen.js` (index + database). Definieer in pagina-scripts **geen** eigen kopieën van functies die al in `app.js` staan.

**Typisch patroon:**
```html
<head>
  <link rel="stylesheet" href="unified-style.css">
  <!-- Optioneel: lokale libraries -->
  <script src="lib/chart.umd.min.js"></script>
  <style>/* Pagina-specifieke stijlen */</style>
</head>
<body>
  <!-- Navigatiebalk (zelfde structuur op alle pagina's) -->
  <nav class="app-nav">...</nav>
  <script src="app.js"></script> <!-- gedeelde helpers + mode-init -->
  <!-- Inhoud -->
  <script>/* Pagina-specifieke JS inline */</script>
</body>
```

### Design system (`unified-style.css`)
CSS Custom Properties (tokens) gedefinieerd op `:root`:
- **Kleuren:** `--navy-*` (primair), `--ocean-*` (accent blauw), `--neutral-*`, `--success/warning/danger/info/purple-*`
- **Legacy aliassen:** `--bg`, `--panel`, `--primary`, `--blue`, `--ok`, `--bad`, `--warn`, `--border`, `--text`
- **Spacing (8px grid):** `--space-1` (8px) t/m `--space-6` (48px)
- **Typografie:** `--text-xs` t/m `--text-4xl`, `--font-*`, `--tracking-*`
- **Overige:** `--radius-*`, `--elevation-*`, `--z-*`, `--transition-*`

- **Thema (v3.13):** licht "Rust" (neutraal grijs met één petrol-accent, kleine hoeken 3–6 px, geen schaduwen, geen pil-vormen, menu en tabbladen met onderstreping, lettertype IBM Plex Sans uit `lib/ibm-plex-sans-*.woff2`) en donker "Nachtwacht" via `<html data-thema="donker">` (sleutel `app_thema`, schakelaar in de nav, gezet door `app.js`). De schalen heten nog navy/ocean maar bevatten inkt/petrol-tinten; in donker zijn ze omgekeerd (50 = donker). **Geen emoji of iconen** in de interface, labels en koppen in zinsvorm ("Gem. verbruik", niet "Gem. Verbruik"), alleen de hoofdactie als gevulde knop (`btn-primary`), gekleurde zijstreep (3 px) alleen voor meldingen met een status. Gebruik voor tekst op een gevulde knop/tegel `var(--on-accent)` (nooit `white`), voor achtergronden `var(--panel)`/`var(--surface)` (nooit `#fff`), en geen gradients — anders klopt het donkere thema niet.

Gebruik altijd tokens uit `unified-style.css`; voeg geen hardcoded kleur- of spacingwaarden toe. De notificatie-styling (`.notification-container`, `.notification`) staat ook in `unified-style.css` en werkt daardoor op elke pagina.

**Kleuren in code:**
- **Grafieken (Chart.js):** canvas kan geen CSS-variabelen lezen — gebruik het gedeelde `KLEUR`-object uit `app.js`: `KLEUR.blauw(0.7)`, `KLEUR.rood()`, `KLEUR.palet` (vast palet voor taart-/donutgrafieken). Geen losse rgba-strings toevoegen.
- **Inline styles / JS-stijltoewijzingen:** gebruik CSS-variabelen, bv. `element.style.color = 'var(--warn)'` of `style="background: var(--success-100)"`.

**Meldingen:** gebruik `showNotification(bericht, type)` (`success` / `warning` / `error`) uit `app.js` — **nooit `alert()`**, dat blokkeert de pagina. `confirm()` alleen voor destructieve acties (verwijderen, overschrijven).

**Veiligheid innerHTML:** gebruikersdata (namen, opmerkingen, tags, reisnummers) die in `innerHTML` of HTML-attributen belandt altijd door `escapeHTML()` halen — een naam met `"` of `<` breekt anders de weergave. **Uitzondering — een string als argument in een inline `onclick`:** gebruik `onclick="fn(${escapeHTML(JSON.stringify(waarde))})"`, niet `'${escapeHTML(waarde)}'`. De HTML-parser decodeert entiteiten (`&#39;`→`'`) vóór de JS draait, dus `escapeHTML` alleen laat een id als `'); code(); //` alsnog uitvoeren; `JSON.stringify` levert een correct ge-escapete JS-string die dat afvangt. Beter nog: geen inline `onclick` maar `element.onclick = () => fn(waarde)` of een event-listener met `dataset`.

### Basis / Geavanceerd modus
De app heeft een toggle (`app_mode` in localStorage). Elementen met CSS-klasse `advanced-only` worden verborgen in de basisstand:

```css
body.basic-mode .advanced-only { display: none !important; }
```

`body.basic-mode` wordt ingesteld via JS bij pagina-load op basis van `localStorage.getItem('app_mode')`. Zet nieuwe geavanceerde features altijd in een element met klasse `advanced-only`.

De modus is ook een rolverdeling: **basis = matroos/stuurman** (laden aan de hand van eerdere reizen), **geavanceerd = kapitein/bevrachter** (alle analyses). Concreet:
- In de navigatiebalk hebben Dashboard, Analyse, Waterstand, Rapporten, Draagvermogen en Records de klasse `advanced-only`; in basis-modus blijven Registratie, Opzoeken, Database, Schip en Help over (zelfde indeling op `START HIER.html`). Help staat in béíde modi in de nav — zet ook eventuele toekomstige help-content nooit in `advanced-only`.
- Analyse bevat geen tabblad Doelen en geen beladingscalculator meer (verwijderd in v3.13: vaste getallen, verkeerde eenheid).
- `toonReisDetail()` (app.js) toont in basis-modus een compact matroos-overzicht (`_reisDetailMatroosHTML`: diepgang v/a, gasolie v/a, drinkwater, ballast MK v/a, ruimen — grote cijfers, één blik zonder scrollen op laptop; "geen" bij bewust lege ballast, "–" alleen bij niet-geregistreerd) en in geavanceerde modus het volledige overzicht met ladingtank-bovenaanzicht plus de tabel "Vorige keren op dit traject" (laatste 5 reizen zelfde traject+product+schip).
- Analysepagina's (`rapporten`, `analyse`, `waterstand`, `dashboard`) rekenen alleen met reizen van het actieve schip via `tripsVoorSchip()`; `database.html` heeft een schip-keuzelijst maar exporteert altijd álle reizen.

### Lokale libraries (`lib/`)
- **Chart.js** (`lib/chart.umd.min.js`) — grafieken (dashboard, analyse, draagvermogen, waterstand, rapporten, schip)
- **SheetJS** (`lib/xlsx.full.min.js`) — Excel-export in `database.html`
- **jsPDF + html2canvas** (`lib/jspdf.umd.min.js`, `lib/html2canvas.min.js`) — PDF-export in `rapporten.html`

Alle libraries staan lokaal in `lib/` en worden in de `<head>` geladen; er zijn geen CDN-afhankelijkheden, de app werkt volledig offline.

### Backup (JSON)
`app.js` bevat `exportAllJSON()` en `importAllJSON(file)`: een volledige backup van álle localStorage-sleutels (reizen, scheepsprofiel, voorkeuren) als JSON-bestand, en herstel daarvan. Knoppen staan op `database.html` (backup + herstel) en `dashboard.html` (backup). Elke export (ook CSV/Excel) zet `last_backup_date`; het dashboard waarschuwt als de laatste backup >7 dagen oud is.

De CSV-export in `database.html` bevat alle reisvelden en is daarmee ook een volwaardig herimporteerbaar formaat; de parser (`parseCSV`) verwerkt quotes, komma's en regeleindes binnen velden correct. De import ontdubbelt op `id` (dezelfde export nogmaals importeren geeft geen duplicaten), detecteert het scheidingsteken (komma of puntkomma, i.v.m. Nederlandse Excel), zet komma-decimalen om naar punten en normaliseert datums via `normaliseerDatum()` uit `app.js` (DD-MM-JJJJ → ISO).

### Reis-sjablonen (snel starten)
Bovenaan `index.html` staat een "Snel starten"-blok met de meest gevaren traject+product-combinaties (minimaal 2× gevaren, top 5, afgeleid uit `scheepsdata` — geen aparte opslag). Eén klik vult de vaste gegevens in (route, product, SG, bedrijven, tags, routevariant) uit de recentste reis van die combinatie; datum wordt vandaag en de gebruiker vult gewichten en gasolie aan. `database.html` heeft per rij een knop "Kopie" (dupliceer als nieuwe reis) die via de sleutel `reis_voorinvulling` hetzelfde invulmechanisme (`vulReisIn()`) gebruikt.

### Datumnotatie
Opslag in localStorage en JSON-backup blijft **ISO (JJJJ-MM-DD)** — alle berekeningen en `<input type="date">` rekenen daarmee. Op schermen en in exports tonen we **DD-MM-JJJJ** via `formatDatumNL()` (database-tabel, vergelijk-modal, reisdetail, CSV- en Excel-export). De CSV-import zet DD-MM-JJJJ via `normaliseerDatum()` weer om naar ISO.

### Anomalie detectie
In `index.html`: bij het opslaan van een reis wordt het ingevoerde verbruik en de efficiency vergeleken met het historisch gemiddelde (uit `scheepsdata`). De gevoeligheidsdrempel (`anomaly_sensitivity` in localStorage, in te stellen op `instellingen.html`) bepaalt wanneer een waarschuwing getoond wordt: `strict` (>15%), `normal` (>25%), `loose` (>40%), `off`.

### Data model (lokaal)
Elk reis-object in de `scheepsdata`-array bevat onder andere:
`id`, `created_at`, `datum`, `reisnummer`, `product`, `soortelijk_gewicht`, `laadbedrijf`, `laadplaats`, `losbedrijf`, `losplaats`, `rkm_laad`, `rkm_los`, `afstand_km`, `richting`, `route_variant`, `bl_gewicht`, `scheepsgewicht`, `gewicht_verschil`, `gewicht_verschil_percentage`, `volume_geladen`, `diepgang_voor`, `diepgang_achter`, `gasolie_tank_voor`, `gasolie_tank_achter` (standen per gasolietank bij vertrek; de som vult `gasolie_begin` automatisch in het formulier), `gasolie_begin`, `gasolie_eind`, `gasolie_bunkering`, `gasolie_verbruik`, `fuelEfficiency`, `drinkwater` (drinkwatertank achterschip, ton), `ballast`, `ballast_gewicht` (legacy totaal, incl. ruimen), `ballast_voor`/`ballast_achter` (machinekamer voor/achter), `ruim1_ballast`/`ruim2_ballast`/`ruim3_ballast` (ballastwater in de ruimen, ton; velden zichtbaar o.b.v. `ruim_aantal` van het schip), `lading_type`, `lading_adr`, `tags`, `opmerkingen`, `waterstand_handmatig` (optioneel `{PEILCODE: cm}`, gaat vóór opgehaalde metingen), `schip_id` (koppeling aan het actieve schip; oudere reizen missen dit veld en tellen bij elk schip mee via `tripsVoorSchip()`)

Sinds v3.15: `tt_tijd`, `tt_nijmegen`, `tt_lith`, `tt_westsluis`, `tt_waal_min` — momentopname van Teletekst 720 bij het opslaan van de reis (cm).

Sinds v3.14: `afgeladen_peil` (peilschaalcode), `afgeladen_stand` (cm), `afgeladen_bron` (`'invoer'`/`'benadering'`) — de bepalende (laagste) peilschaal op de route en de stand (vaak een verwachting) waarop de schipper de lading bepaalde; weergave via `afgeladenTekst()`, voorstel via `voorgesteldePeilschaal()` in vaarwegen.js. Dit is het beslisgetal; de gemeten stand bij passage (waterstanden.js) is alleen voor analyses.

Sinds v3.13 ook: `status` (`'open'` zolang gasolie eind ontbreekt, anders `'afgerond'`; gezet door `herberekenReis`), `vertrektijd` (HH:MM, gaat vóór de vaste `waterstand_vertrektijd`), `aankomst_datum`, `aankomst_tijd`. Een reis wordt in twee stappen geregistreerd: bij vertrek en na aankomst (eindstand gasolie). Open reizen tellen niet mee in verbruiksanalyses.

Eenheden: diepgang in **cm**, gasolie in **ton**, gewichten in **ton**, afstand in **km**. Efficiëntie wordt opgeslagen als kg/ton-km maar **getoond in kg/1000 tkm** (`formatEff`, lager = zuiniger). Alle tankstanden zijn de situatie **bij vertrek na het laden**; gasolie eind is de stand **bij aankomst**.

**Verbruik vergelijken:** vergelijk nooit reizen van verschillende trajecten of richtingen met elkaar (opvaart kost tot ~70% meer dan afvaart). Gebruik `vergelijkMetTraject` voor een losse reis en `binnenRichting` vóór een correlatie.

Let op: getallen kunnen als string (formulier-invoer) óf als number (CSV-import) opgeslagen zijn — gebruik altijd `parseNum()` bij het lezen. Afgeleide velden (`gasolie_verbruik`, `fuelEfficiency`, `volume_geladen`, `trim`) worden door `verrijkReizen()` in `app.js` berekend als ze ontbreken.

Scheepsprofiel (in `scheepsdata_schepen`, gespiegeld naar `scheepsdata_profiel`): `id`, `naam`, `eni`, `type`, `bouwjaar`, `lengte`, `breedte`, `max_tonnage`, `max_diepgang` (cm), `leeg_gewicht` (ton), `gasolie_tank` (ton), `motor_vermogen`, `motor_type`, `tank_aantal`, `ruim_aantal` (0-3: hoeveel ruimen ballastwater kunnen bevatten; bepaalt welke ruim-velden op index.html verschijnen), `rederij`, `eigenaar`, `schipper`, `ijkschaal` (optioneel: gesorteerde array `[{cm, ton}, ...]` uit de meetbrief, geldig voor zoet water; invoer via schip.html → tab Meetbrief)
