# Ballastsysteem S-serie

Leidingschema's en een interactieve oefensimulator voor het ballasten (met de ballastpompen) en ontballasten (met de ejectors) van de ruimen en de U-tank van de S-serie.

**Status:** versie 2.2 (concept), 01-11-2026
**Doel:** (A) opleiding van nieuwe bemanning en (B) betrouwbare naslag aan boord. De simulator mag versimpelen, maar mag niets verkeerds aanleren.

---

## Bestanden

| Bestand | Wat |
|---|---|
| `ballast_simulator.html` | De simulator. Eén los bestand, werkt offline op een pc; openen in een browser. Bevat ook de afdrukbladen. |
| `bladen/ballast_in_2.2.pdf` / `.svg` | A3-blad Ballast in (blad 1: schema, blad 2: standen, volgorde, routekeuze, invulvakken, blad 3: ballastplan en tanktabellen) |
| `bladen/ontballasten_2.2.pdf` / `.svg` | A3-blad Ontballasten (zelfde opbouw) |
| `bladen/ruststand_2.2.pdf` / `.svg` | A3-blad Ruststand |
| `bladen/controleblad_2.2.pdf` / `.svg` | Controleblad: genummerde afsluiters om aan boord na te lopen + open vragen + invulvakken |
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

- **peil:** hoogwateralarm, maximaal niveau en doelpeil per ruim en U-tank (cm).
- **zaadhout_cm:** hoogte van het zaadhout (nu 140 cm, uit het hoofd). Grijze streep bij de meters en een melding als het peil erboven komt.
- **meting_lading_ton:** lading die nog aan boord was tijdens de metingen van het ballastplan (13,5 t). Die zit in de totalen van het ballastplan; de simulator trekt hem eraf om de ballast te tonen. Voor de geschatte diepgang vul je in de simulator in hoeveel lading er nu aan boord is.
- **utank_ton:** inhoud van de U-tank bij max. niveau (nog onbekend; de simulator rekent dan indicatief met 50 t).
- **tanktabel:** per ruim de punten peil (cm) → ton. Tussenliggende waarden worden lineair geïnterpoleerd, zoals in de spreadsheet. Boven de hoogste tabelwaarde wordt de laatste helling doorgetrokken (onzeker, grijs op het blad).
- **ballastplan:** per diepgang de peilen BB/SB per ruim, het totaal in ton (ballast + lading tijdens de meting) en de gemeten inzinking en trim (buiten en binnen).
- **diepgang:** regels met omschrijving, diepgang en Sygo-stand.
- **capaciteit (optioneel):** pomp- en ejectorcapaciteit (m³/h). Zijn beide ingevuld, dan rekent de simulator met echte tijden (1 m³ ≈ 1 t).
- **namen:** alleen afsluiters die aan boord anders heten dan de standaardnaam, bv. `ze1: "Zuig ejector voor"`.
- **controle:** de controlestatus per onderdeel (eigen administratie).

Een leeg veld (`null`) geeft in de simulator "–" en op de bladen een leeg invulvak. Zolang het max. niveau niet is ingevuld, loopt de balk van de meters tot 300 cm. Er staan dus geen verkeerde getallen meer op die er geloofwaardig uitzien.

Na het invullen van het profiel in `bron/sim_template.html`: `python3 bron/build.py` en `node bron/export.js` voor nieuwe bladen. Of simpeler: in de simulator **Afdrukken (A3)** kiezen en in de browser als PDF opslaan.

---

## Simulator

- **Situatie:** Ballast in (lege ruimen), Ontballasten (ruimen geballast) of Vrij oefenen.
- **Taak:** kies de ruimen (ruim 3, U-tank, ruim 2, ruim 1) en de pomp (achter, voor, beide). Daaruit berekent de simulator de doelstand, inclusief de deelafsluiters. Bij Ballast in kies je als doel een **diepgang uit het ballastplan** (de ruimen en doelpeilen worden dan overgenomen) of je stelt per ruim zelf een doelpeil in (cm, met de tonnen erbij).
- **Peilen:** per ruim in cm en ton (via de tanktabel), met de totale ballast en de geschatte diepgang uit het ballastplan (rekening houdend met de lading die nu aan boord is).
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

### Technisch

- Het leidingnet is een graaf van knopen en leidingen (`EDGES`); elke leiding kan een afsluiter hebben. Zee, pompen, tanks, ejector-aansluitingen en overboord zijn eindpunten.
- `solve()` zoekt in twee stappen (diepte-eerst): **persen** vanuit de pompen (alleen als buitenboord open is) naar tanks met ruimte en ejectors met Pers overboord open; daarna **zuigen** vanuit de actieve ejectors naar tanks met water. Debiet wordt per ruim verdeeld, niet per open leiding.
- Peilen worden intern per tank als fractie van de inhoud bij max. niveau bijgehouden en via de tanktabel omgerekend naar cm en ton. Pompen en ejectors verplaatsen ton per seconde.
- De geschatte diepgang wordt lineair geïnterpoleerd tussen de totalen in het ballastplan (gemeten inzinking buiten).
- Coördinaten in eenheden van 2000 × 1414 (A3-verhouding), gelijk aan de originele Illustrator-tekening.

---

## Open punten

1. **Alarm, max. niveau en Sygo-stand** opzoeken in het tabellenboek en invullen.
2. **Zaadhout:** 140 cm controleren, en wat het betekent voor het ballasten (lopen BB en SB erboven in elkaar over?).
3. **Tanktabellen:** het aantal ton per cm neemt af naarmate het ruim voller is (ruim 1: 2,9 t/cm bij 70 cm, 1,0 t/cm boven 145 cm; ruim 2: 0,7 t/cm bij 245–250 cm). Bij een ruim met rechte wanden verwacht je ongeveer gelijke tonnen per cm. Controleren in het tabellenboek.
4. **Ballastplan:** de binnen-meting bij 1,50 m is onvolledig (in de spreadsheet geeft dat inzinking 126,5 en trim −77) en bij 1,80 m ontbreekt hij; beide zijn leeg gelaten.
5. **U-tank:** inhoud (t) en eventueel een tanktabel.
6. **Controleblad** aan boord nalopen: plek en naam van elke afsluiter, DN-maten.
7. **U-tank:** één vul/zuigleiding bevestigen; drainleiding aanwezig? waar? afsluiter?
8. **Capaciteiten** (optioneel) voor echte tijden.
9. Bladen naast de oude Illustrator-bladen leggen: ontbreekt er iets dat in v1.0 / v1.0.8 wel stond?

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
  - invulscherm "Gegevens invullen…" dat een nieuw simulatorbestand met de gegevens maakt;
  - dikkere stromingslijnen.
- **v2.2** (01-11-2026):
  - tanktabellen (cm → ton) en ballastplan per diepgang uit `ballast.xlsx`;
  - peilen in cm en ton, totale ballast en geschatte diepgang (lading tijdens de meting: 13,5 t, apart gehouden);
  - Ballast in: doel kiezen als diepgang uit het ballastplan;
  - zaadhout (140 cm) bij de meters;
  - blad 3 bij Ballast in en Ontballasten: ballastplan en tanktabellen per 10 cm;
  - invulscherm uitgebreid met tanktabellen en ballastplan (plakken uit Excel kan);
  - "Over dit project" verwijderd.
