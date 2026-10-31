# Ballastsysteem S-serie

Leidingschema's en een interactieve oefensimulator voor het ballasten (met de ballastpompen) en ontballasten (met de ejectors) van de ruimen en de U-tank van de S-serie.

**Status:** versie 2.1 (concept), 30-10-2026
**Doel:** (A) opleiding van nieuwe bemanning en (B) betrouwbare naslag aan boord. De simulator mag versimpelen, maar mag niets verkeerds aanleren.

---

## Bestanden

| Bestand | Wat |
|---|---|
| `ballast_simulator.html` | De simulator. Eén los bestand, werkt offline op een pc; openen in een browser. Bevat ook de afdrukbladen. |
| `bladen/ballast_in_2.1.pdf` / `.svg` | A3-blad Ballast in (blad 1: schema, blad 2: standen, volgorde, routekeuze, invulvakken) |
| `bladen/ontballasten_2.1.pdf` / `.svg` | A3-blad Ontballasten |
| `bladen/ruststand_2.1.pdf` / `.svg` | A3-blad Ruststand |
| `bladen/controleblad_2.1.pdf` / `.svg` | Controleblad: genummerde afsluiters om aan boord na te lopen + open vragen + invulvakken |
| `bron/sim_template.html` | Bron van de simulator (zonder pompplaatjes) |
| `bron/build.py` | Bouwt `ballast_simulator.html` uit de template + `pumpL.b64` / `pumpR.b64` |
| `bron/export.js` | Maakt de PDF/SVG-bladen uit de simulator |
| `bron/ballast_simulator_2.0.html` | Vorige versie, ter vergelijking |

De SVG's zijn te openen en te bewerken in Illustrator. De bladen worden niet meer apart getekend: ze komen rechtstreeks uit de simulator, zodat schema en simulator nooit van elkaar afwijken.

---

## Het systeem

Van achter naar voor: **Ruim 3 – U-tank – Ruim 2 – Ruim 1**. Alle schepen van de S-serie hebben dezelfde opbouw.

- **Twee ballastpompen** (MK-achter en MK-voor). Elke pomp zuigt **buitenboord** aan (wierpot en verdeelblok in de machinekamer vallen buiten dit schema) en heeft:
  - **Pers ballast** naar de hoofdleiding (vullen);
  - **Pers ejector**: drijfwater DN125 naar de eigen ejector (leegmaken).
- **Hoofdleiding** door alle ruimen, gedeeld door **Deelafsluiter 2-3** en **Deelafsluiter 1-2**.
- **Per ruim:** Ballast n BB en Ballast n SB (DN100-zuigmonden) en twee DN50-stripleidingen (Strip n BB, Strip n SB).
- **U-tank:** de ballastruimte rond de methanoltank (zijkanten en bodem). Ballast komt nooit in de methanoltank zelf. Eén leiding voor vullen én zuigen, met één afsluiter "U-tank".
- **Twee ejectors:** ejector 3 (achter, bij pomp achter) en ejector 1 (voor, bij pomp voor). Elk met **Zuig ejector** vanaf de hoofdleiding, een terugslagklep en **Pers overboord**.

**Werking van de ejector:** het drijfwater uit de pomp spuit door de straalpijp; de onderdruk zuigt het ballastwater mee naar overboord.

### Werkwijze (besproken 30-10-2026)

- **Ruststand:** pompen uit, alle afsluiters dicht. **Buitenboord blijft altijd open**, zodat het brandbluswater stand-by staat.
- **Starten:** eerst alles klaarzetten (afsluiters open die je nodig hebt), dan pas de pomp starten.
- **Klaar:** pomp stoppen, alles terug in de ruststand.
- **Deelafsluiters = routekeuze.** Meestal draait één pomp. Een deelafsluiter gaat alleen open als het water verder moet:

| Pomp | Ruimen | Deelafsluiter 2-3 | Deelafsluiter 1-2 |
|---|---|---|---|
| Achter | alleen ruim 3 / U-tank | dicht | dicht |
| Achter | tot en met ruim 2 | open | dicht |
| Achter | tot en met ruim 1 | open | open |
| Voor | alleen ruim 1 | dicht | dicht |
| Voor | tot en met ruim 2 | dicht | open |
| Voor | tot en met ruim 3 / U-tank | open | open |
| Beide | alle ruimen | open | open |

- **Stripleidingen (DN50):** voor de laatste restjes; in de praktijk weinig nodig omdat de DN100's goed leegmaken. Standaard dicht.
- **Wierpot:** controle 1× per half jaar (geen onderdeel van de bediening).

---

## Scheepsprofiel

Alles wat per schip kan verschillen staat in **één blok bovenin `ballast_simulator.html`** (`const PROFIEL = { … }`). Simulator én afdrukbladen gebruiken het.

**Invullen (aanbevolen):** in de simulator onder *Scheepsgegevens* op **Gegevens invullen…** klikken. Vul de vakjes in (komma of punt mag allebei; leeg = nog niet bekend) en klik op **Opslaan als nieuw bestand**. De browser downloadt een nieuwe `ballast_simulator_<schip>.html` met de gegevens erin (meestal in de map Downloads). Vervang het oude bestand door dit nieuwe. Onmogelijke waarden (geen getal, alarm of doelpeil boven het max. niveau) worden rood gemarkeerd en niet opgeslagen.

**Of met de hand:** het bestand openen in Kladblok en het blok aanpassen. Let op: één vergeten komma of aanhalingsteken en de simulator opent niet meer.

- **peil:** hoogwateralarm, maximaal niveau en doelpeil per ruim en U-tank (meter).
- **diepgang:** regels met omschrijving, diepgang en Sygo-stand.
- **capaciteit / volume (optioneel):** pomp- en ejectorcapaciteit (m³/h) en volume per ruim (m³). Zijn alle ingevuld, dan rekent de simulator met echte tijden en toont hij m³.
- **namen:** alleen afsluiters die aan boord anders heten dan de standaardnaam, bv. `ze1: "Zuig ejector voor"`.
- **controle:** de controlestatus per onderdeel (zichtbaar onder "Over dit project").

Een leeg veld (`null`) geeft in de simulator "–" (peilen in % van max.) en op de bladen een leeg invulvak. Er staan dus geen verkeerde getallen meer op die er geloofwaardig uitzien.

Na het invullen van het profiel in `bron/sim_template.html`: `python3 bron/build.py` en `node bron/export.js` voor nieuwe bladen. Of simpeler: in de simulator **Afdrukken (A3)** kiezen en in de browser als PDF opslaan.

---

## Simulator

- **Situatie:** Ballast in (lege ruimen), Ontballasten (ruimen geballast) of Vrij oefenen.
- **Taak:** kies de ruimen (ruim 3, U-tank, ruim 2, ruim 1) en de pomp (achter, voor, beide). Daaruit berekent de simulator de doelstand, inclusief de deelafsluiters. Bij Ballast in stel je per ruim een doelpeil in.
- **Hulp:** stappenplan dat zichzelf afvinkt (voorbereidende stappen blijven "live" tot de pomp gestart is), oranje ringen rond wat nog anders moet, "Zet alles in doelstand" en "Ruststand".
- **Stroming:** vanaf buitenboord door de draaiende pomp en open afsluiters naar tanks of ejector; vanaf de lopende ejector terug naar de ruimen met water. Blauwe streepjes in de stroomrichting.
- **Meldingen:**
  - pomp gestart terwijl nog niet alles klaarstaat;
  - pomp draait droog (buitenboord dicht) en brandblus niet stand-by;
  - pomp draait tegen dichte afsluiters;
  - ejector zonder afvoer, ejector zuigt niets, Zuig ejector dicht;
  - kortsluiting: Pers ballast open terwijl de ejector zuigt;
  - pompwater loopt via de ejector overboord;
  - doelpeil bereikt, ruim leeg, hoogwateralarm en maximaal niveau.
- **Afdrukken (A3):** Ballast in, Ontballasten, Ruststand of Controleblad, voor de gekozen ruimen en pomp.
- **Over dit project:** hoe het gemaakt is en de controlestatus.

### Technisch

- Het leidingnet is een graaf van knopen en leidingen (`EDGES`); elke leiding kan een afsluiter hebben. Zee, pompen, tanks, ejector-aansluitingen en overboord zijn eindpunten.
- `solve()` zoekt in twee stappen (diepte-eerst): **persen** vanuit de pompen (alleen als buitenboord open is) naar tanks met ruimte en ejectors met Pers overboord open; daarna **zuigen** vanuit de actieve ejectors naar tanks met water. Debiet wordt per ruim verdeeld, niet per open leiding.
- Peilen worden intern als fractie van het maximale niveau bijgehouden en via het profiel omgerekend naar meters.
- Coördinaten in eenheden van 2000 × 1414 (A3-verhouding), gelijk aan de originele Illustrator-tekening.

---

## Open punten

1. **Peilen, doelpeilen, diepgang en Sygo-stand** opzoeken in het tabellenboek en invullen in het profiel.
2. **Controleblad** aan boord nalopen: plek en naam van elke afsluiter, DN-maten.
3. **U-tank:** één vul/zuigleiding bevestigen; drainleiding aanwezig? waar? afsluiter?
4. **Capaciteiten en volumes** (optioneel) voor echte tijden en m³.
5. Bladen naast de oude Illustrator-bladen leggen: ontbreekt er iets dat in v1.0 / v1.0.8 wel stond?

## Historie

- **v1.0** (21-04-2025): ontballasten, Illustrator.
- **v1.0.8** (22-02-2025): ballast in, Illustrator.
- **v2.0** (30-10-2026): beide bladen in één layout, afsluiternamen en standen, interactieve simulator.
- **v2.1** (30-10-2026):
  - scheepsprofiel met invulvelden; getallen van een ander schip verwijderd;
  - deelafsluiters als routekeuze (taak: ruimen + pomp), doelstand wordt berekend;
  - buitenboordafsluiter per pomp, ruststand (alles dicht, buitenboord open), volgorde "eerst klaarzetten, dan starten";
  - U-tank: één leiding en afsluiter, doorsnede op het blad;
  - stripleidingen als hulpmiddel voor restjes;
  - bladen (Ballast in, Ontballasten, Ruststand, Controleblad) rechtstreeks uit de simulator, met O/D bij elke afsluiter;
  - fouten hersteld: stap "Klaar" sprak de doelstand tegen, Deelafsluiter 1-2 ontbrak bij ontballasten, debiet werd per leiding in plaats van per ruim verdeeld;
  - "Over dit project".
  - invulscherm "Gegevens invullen…" dat een nieuw simulatorbestand met de gegevens maakt;
  - dikkere stromingslijnen.
