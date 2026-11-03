# Ballastsysteem S-serie – projectdocumentatie

Leidingschema's en een interactieve oefensimulator voor het ballasten (met de ballastpompen) en ontballasten (met de ejectors) van de ruimen en de U-tank van de S-serie. De simulator rekent met de echte tanktabellen en met metingen van de diepgang en trim.

Dit document is de **overdracht**: alles wat nodig is om verder te werken, ook op een andere machine of met een ander account. Lees het helemaal voordat je iets verandert.

| | |
|---|---|
| **Versie** | 2.2 (concept), laatst bijgewerkt 03-11-2026 |
| **Eigenaar** | Lennart (vakkennis, controle) |
| **Gemaakt met** | Claude Code (tekenen, programmeren, rekenmodel) |
| **Code** | GitHub `lennartvand/antropic-claude-code`, branch `claude/sharp-cannon-9vxvab`, map `ballastsysteem/` |
| **Status** | Werkt. Systeemopbouw, werkwijze en tankgegevens zijn ingevoerd. Alarm, max. niveau en stabiliteitsgegevens ontbreken nog (zie [Open punten](#10-open-punten)). |

---

## Inhoud

1. [Doel en uitgangspunten](#1-doel-en-uitgangspunten)
2. [Snel starten](#2-snel-starten)
3. [Bestanden](#3-bestanden)
4. [Het systeem aan boord](#4-het-systeem-aan-boord)
5. [Werkwijze en besluiten](#5-werkwijze-en-besluiten)
6. [Gegevens: scheepsprofiel en bronnen](#6-gegevens-scheepsprofiel-en-bronnen)
7. [De simulator](#7-de-simulator)
8. [Rekenmodel](#8-rekenmodel)
9. [Code-overzicht](#9-code-overzicht)
10. [Open punten](#10-open-punten)
11. [Ideeën voor later](#11-ideeën-voor-later)
12. [Verder werken met Claude](#12-verder-werken-met-claude)
13. [Historie](#13-historie)

---

## 1. Doel en uitgangspunten

- **A. Opleiding** van nieuwe bemanning (matroos, deksman): begrijpen hoe het systeem werkt en in welke volgorde je bedient. Foute handelingen moeten opvallen en uitgelegd worden.
- **B. Betrouwbare naslag** aan boord: de A3-bladen moeten kloppen met het schip.
- **Regel:** de simulator mag versimpelen, maar mag **niets verkeerds aanleren**. Getallen die niet zeker zijn, staan er niet in (leeg veld) of zijn gemarkeerd als schatting ("≈", "doorgetrokken", grijs).
- **Gebruik:** op een pc, offline. Eén los HTML-bestand, geen installatie en geen internet nodig.
- **Eén bron:** de A3-bladen komen rechtstreeks uit de simulator. Schema en simulator kunnen dus nooit van elkaar afwijken.
- **Universeel voor de S-serie:** de opbouw is voor alle schepen gelijk. Alles wat per schip verschilt (namen, peilen, tabellen) staat in één **scheepsprofiel**.
- Bij interesse wordt het getoond aan IT als voorbeeld van wat met AI kan. Verder is het geen promotie.

---

## 2. Snel starten

### Alleen gebruiken
Open `ballastsysteem/ballast_simulator.html` in een browser (Chrome, Edge of Firefox). Meer is niet nodig.

### Verder ontwikkelen op een andere machine
```bash
git clone https://github.com/lennartvand/antropic-claude-code.git
```
```bash
cd antropic-claude-code && git checkout claude/sharp-cannon-9vxvab
```

**Na een wijziging in `bron/sim_template.html`:** bouw het simulatorbestand opnieuw (Python 3, geen extra pakketten).
```bash
python3 ballastsysteem/bron/build.py
```

**Nieuwe A3-bladen (PDF en SVG) maken:** hiervoor is Node.js met Playwright en Chromium nodig.
```bash
npm install playwright && npx playwright install chromium
```
```bash
node ballastsysteem/bron/export.js T3,UT,T2,T1 beide
```
De argumenten zijn de ruimen en de pomp (`achter`, `voor` of `beide`) waarvoor de bladen getekend worden. Zonder argumenten: alle ruimen, beide pompen.

**Zonder Node:** in de simulator **Afdrukken (A3)** kiezen en in de browser "Opslaan als PDF".

> **Let op:** wijzig nooit alleen `ballast_simulator.html`. Die wordt bij `build.py` overschreven. Het origineel is `bron/sim_template.html`. Uitzondering: het scheepsprofiel invullen via het invulscherm (zie §6). Neem die waarden daarna over in de template.

---

## 3. Bestanden

| Bestand | Wat |
|---|---|
| `ballast_simulator.html` | De simulator (gebouwd, ±245 kB). Bevat ook de afdrukbladen en het invulscherm. |
| `PROJECT_DOCUMENTATIE.md` | Dit document. |
| `bladen/ballast_in_2.2.pdf` / `.svg` | A3 Ballast in. Blad 1: schema met O/D bij elke afsluiter. Blad 2: standen, volgorde, routekeuze, invulvakken. Blad 3: ballastplan en tanktabellen per 10 cm. |
| `bladen/ontballasten_2.2.pdf` / `.svg` | A3 Ontballasten, zelfde opbouw. |
| `bladen/ruststand_2.2.pdf` / `.svg` | A3 Ruststand. |
| `bladen/controleblad_2.2.pdf` / `.svg` | Controleblad: genummerde afsluiters om aan boord na te lopen, open vragen, invulvakken. |
| `bron/sim_template.html` | **De broncode** van de simulator (HTML, CSS, JavaScript), zonder pompplaatjes. |
| `bron/build.py` | Zet de pompplaatjes (`__PUMPL__`, `__PUMPR__`) in de template en schrijft `ballast_simulator.html`. |
| `bron/export.js` | Maakt met Playwright de PDF- en SVG-bladen uit de simulator. |
| `bron/pumpL.b64`, `bron/pumpR.b64` | Pompplaatjes (PNG als data-URI) uit de originele Illustrator-PDF. |
| `bron/ballast.xlsx` | Brongegevens: tanktabellen en metingen van diepgang en trim (zie §6.3). |
| `bron/ballast_simulator_2.0.html` | Versie 2.0, ter vergelijking. |

**Niet in de repository** (staan bij Lennart):
- de originele Illustrator-bladen `ballast_in_1.0.8.pdf` (22-02-2025) en "ontballasten S-serie ruimen met de ejector" `ballast_uit_1.0.pdf` (21-04-2025);
- de Word-schema's `Ballastsysteem_Ballast_IN.docx` en `Ballastsysteem_ontballasten.docx`. Die zijn van een ander schip en dienen alleen voor de **opbouw** van het systeem, niet voor getallen.

---

## 4. Het systeem aan boord

Van achter naar voor: **Ruim 3 – U-tank – Ruim 2 – Ruim 1**. Alle schepen van de S-serie hebben dezelfde opbouw.

- **Twee ballastpompen:** MK-achter (achterschip) en MK-voor (voorschip).
  - Elke pomp zuigt **buitenboord** aan via een eigen keten per machinekamer: buitenboord, wierpot, verdeelblok. Het schema toont alleen de buitenboordafsluiter.
  - **Pers ballast** gaat naar de hoofdleiding, om te vullen. Voor is dat DN150.
  - **Pers ejector** levert drijfwater (DN125) aan de eigen ejector, om leeg te maken.
- **Hoofdleiding** dwars door alle ruimen, gedeeld door twee afsluiters:
  - **Deelafsluiter 2-3**, tussen ruim 3/U-tank en ruim 2;
  - **Deelafsluiter 1-2**, tussen ruim 2 en ruim 1.
- **Per ruim:**
  - **Ballast n BB** en **Ballast n SB**: DN100-zuigmonden, één aan elke kant. Ze worden gebruikt voor vullen én leegmaken.
  - **Strip n BB** en **Strip n SB**: DN50-stripleidingen voor de laatste restjes.
- **Zaadhout:** een **dicht schot in de lengte, tussen BB en SB**, tot ±140 cm hoog. Daaronder zijn BB en SB gescheiden: als je één kant leegpompt, kom je scheef te liggen. Daarboven loopt het water over het schot.
- **U-tank:** de ballastruimte rond de methanoltank, aan de zijkanten en de bodem. Ballast komt nooit in de methanoltank zelf. Er is één leiding voor vullen en zuigen, met één afsluiter "U-tank". Een eventuele drainleiding is nog niet bekend.
- **Twee ejectors:**
  - ejector 3 (achter, gevoed door pomp achter): pers DN200 omhoog naar overboord;
  - ejector 1 (voor, gevoed door pomp voor): pers DN200 omlaag naar overboord.

  Elke ejector heeft een **Zuig ejector** vanaf de hoofdleiding, een terugslagklep en **Pers overboord**.
- **Werking van de ejector:** het drijfwater spuit door de straalpijp. De onderdruk die daardoor ontstaat, zuigt het ballastwater mee naar overboord.

### Afsluiters (standaardnamen, nummer = nummer op het controleblad)

| Nr | Code | Naam | Nr | Code | Naam |
|---|---|---|---|---|---|
| 1 | `bu_a` | Buitenboord achter | 14 | `bal2sb` | Ballast 2 SB |
| 2 | `pe_a` | Pers ejector achter | 15 | `str2bb` | Strip 2 BB |
| 3 | `pb_a` | Pers ballast achter | 16 | `str2sb` | Strip 2 SB |
| 4 | `po3` | Pers overboord 3 | 17 | `bal1bb` | Ballast 1 BB |
| 5 | `ze3` | Zuig ejector 3 | 18 | `bal1sb` | Ballast 1 SB |
| 6 | `ut` | U-tank | 19 | `str1bb` | Strip 1 BB |
| 7 | `d23` | Deelafsluiter 2-3 | 20 | `str1sb` | Strip 1 SB |
| 8 | `d12` | Deelafsluiter 1-2 | 21 | `pb_v` | Pers ballast voor |
| 9 | `bal3bb` | Ballast 3 BB | 22 | `pe_v` | Pers ejector voor |
| 10 | `bal3sb` | Ballast 3 SB | 23 | `ze1` | Zuig ejector 1 |
| 11 | `str3bb` | Strip 3 BB | 24 | `po1` | Pers overboord 1 |
| 12 | `str3sb` | Strip 3 SB | 25 | `bu_v` | Buitenboord voor |
| 13 | `bal2bb` | Ballast 2 BB | | | |

---

## 5. Werkwijze en besluiten

Besproken met Lennart (30-10 t/m 03-11-2026). Deze punten zijn **uitgangspunt**. Verander ze niet zonder overleg.

| Onderwerp | Besluit |
|---|---|
| Ruststand | Pompen uit, alle afsluiters dicht. **Buitenboord altijd open** (brandbluswater stand-by). |
| Starten | **Eerst alles klaarzetten, dan pas de pomp starten.** De pomp start dus tegen open afsluiters. |
| Stoppen | Pomp stoppen, daarna alles terug in de ruststand. |
| Deelafsluiters | Dit is een **routekeuze**. Meestal draait één pomp. Een deelafsluiter gaat alleen open als het water verder moet (zie tabel hieronder). |
| Stripleidingen | Hulpmiddel voor restjes. De DN100's maken in de praktijk goed leeg. Standaard dicht, geen verplichte stap. |
| Wierpot | Controle 1× per half jaar, geen onderdeel van de bediening. |
| Machinekamer | Buiten het schema, op de buitenboordafsluiter na. Dekwaspomp, sprinkler en MK-ballasttanks vallen erbuiten. |
| Word-schema's | Van een ander schip. Alleen voor de opbouw, niet voor de getallen. |
| Tekening | Een **bovenaanzicht**: BB boven, SB onder. De stroken "Ballast" boven en onder de methanoltank zijn de zijkanten van de U-tank. |
| Gebruik en verspreiding | Op een pc, offline, één bestand. Een telefoonindeling is niet nodig. |
| Afsluiternamen | Standaardnamen voor de S-serie. Alleen afwijkingen komen in het profiel. |

**Routekeuze deelafsluiters**

| Pomp | Ruimen | Deelafsluiter 2-3 | Deelafsluiter 1-2 |
|---|---|---|---|
| Achter | alleen ruim 3 / U-tank | dicht | dicht |
| Achter | tot en met ruim 2 | open | dicht |
| Achter | tot en met ruim 1 | open | open |
| Voor | alleen ruim 1 | dicht | dicht |
| Voor | tot en met ruim 2 | dicht | open |
| Voor | tot en met ruim 3 / U-tank | open | open |
| Beide | alle ruimen | open | open |

---

## 6. Gegevens: scheepsprofiel en bronnen

### 6.1 Waar staan de gegevens?
Alles wat per schip verschilt, staat in **één blok bovenin `ballast_simulator.html`** (en in `bron/sim_template.html`): `<script id="profiel"> const PROFIEL = { … } </script>`. Simulator en afdrukbladen lezen alleen daaruit.

**Invullen (aanbevolen):**
1. Klik in de simulator onder *Scheepsgegevens* op **Gegevens invullen…**.
2. Vul de vakjes in. Komma of punt mag allebei, en leeg betekent "nog niet bekend". Tanktabellen en ballastplan kun je rechtstreeks uit Excel plakken (tab of puntkomma).
3. Klik op **Opslaan als nieuw bestand**. De browser downloadt `ballast_simulator_<schip>.html`, met de gegevens erin.
4. Vervang het oude bestand door het nieuwe.

Foute waarden (geen getal, alarm of doelpeil boven het max. niveau, tonnen die niet oplopen met het peil) worden rood gemarkeerd en niet opgeslagen.

**Of met de hand:** het bestand in een teksteditor openen en het blok aanpassen. Let op: één vergeten komma en het bestand opent niet meer.

> Na het invullen via het scherm staat het nieuwe profiel alleen in het gedownloade bestand. **Kopieer het blok `const PROFIEL = {…};` ook naar `bron/sim_template.html`**, anders gaat het bij de volgende `build.py` verloren.

### 6.2 Velden van het profiel

| Veld | Eenheid | Huidige waarde | Betekenis |
|---|---|---|---|
| `schip` | tekst | leeg | Naam van het schip, komt in de titel en de bestandsnaam. |
| `versie` | tekst | `2.2 (concept)` | Komt op de bladen. |
| `peil.T3/T2/T1/UT.alarm` | cm | leeg | Hoogwateralarm. Oranje streep bij de meters en een alarmmelding. |
| `peil.*.max` | cm | leeg | Maximaal niveau. Leeg: de balk loopt tot 300 cm (`BALK_CM`). |
| `peil.*.doel` | cm | leeg | Standaard doelpeil bij Ballast in. Leeg: 150 cm. |
| `zaadhout_cm` | cm | 140 | Hoogte van het schot tussen BB en SB (uit het hoofd, nog controleren). |
| `meting_lading_ton` | t | 13,5 | **Lading** die nog aan boord was tijdens de metingen van het ballastplan. Zit in `ballastplan[].ton`. Het is geen ballast. |
| `utank_ton` | t | leeg | Inhoud van de U-tank bij max. niveau. Leeg: indicatief 50 t, peil in %. |
| `helling_graden_per_100t` | ° | leeg | Gemeten helling bij 100 t meer aan één kant. Leeg: alleen het verschil in ton. |
| `tanktabel.T1/T2/T3` | `[cm, ton]` | uit `ballast.xlsx` | Peil in het ruim → ton ballastwater (hele ruim, BB+SB). |
| `ballastplan[]` | zie §6.3 | 8 regels uit `ballast.xlsx` | Metingen per diepgang. Bron voor het doel "diepgang", de diepgangschatting en de trim. |
| `diepgang[]` | m, mt | leeg | Vrije regels met diepgang en Sygo-stand (uit het tabellenboek). |
| `capaciteit.pomp_m3h`, `.ejector_m3h` | m³/h | leeg | Ingevuld: echte tijden (1 m³ ≈ 1 t, 1× = echte tijd). Leeg: indicatief 2,0 en 1,7 t/s. |
| `namen` | `{code: "naam"}` | leeg | Alleen afsluiters die aan boord anders heten (codes in §4). |
| `controle[]` | | | Eigen administratie: per onderdeel status, datum en opmerking. Alleen zichtbaar in het invulscherm. |

### 6.3 Bron `bron/ballast.xlsx` en hoe die gelezen is
Drie tabbladen met dezelfde metingen:

**Blad1** is de werkversie, met formules. Er is één blok per doeldiepgang T = 1,40 / 1,50 / 1,60 / 1,70 / 1,80 / 1,90 / 2,00 / 2,20 m. Elk blok bevat:
- **"In ruim centimeters":** het peil BB en SB per ruim, en het gemiddelde.
- **"Tanktabel":** het aantal kg bij dat peil, geïnterpoleerd uit twee tabelwaarden per 5 cm. Bijvoorbeeld "Interpoleren ruim 1 tussen 70 en 75 per cm": 202 745 en 217 243 kg, dus 2 899,6 kg/cm.
- **"Tonnen totaal inclusief voorlading"** = (som kg)/1000 + 13,5. De 13,5 t is **lading die nog aan boord was**.
- **Rechts twee blokken van 3×2 diepgangsmetingen** (cm), het ene "Buiten" en het andere "Binnen".
  - Rijen: voor (ruim 1), midden (ruim 2), achter (ruim 3). Kolommen: BB en SB. Blad2 bevestigt de volgorde.
  - **Gem. inz.** = gemiddelde van de 6 metingen.
  - **Trim** = gemiddelde achter − gemiddelde voor. Plus betekent achter dieper.

**Blad2** is hetzelfde, gegroepeerd per ruim. **Blad3** is het overzicht per diepgang.

**Overgenomen in het profiel:**
- `tanktabel`: alleen de **echte tabelwaarden** (de grenzen van de interpolatie), niet de geïnterpoleerde peilen.
  - ruim 1: 70, 75, 80, 85, 125, 130, 145, 225 cm
  - ruim 2: 45, 75, 80, 95, 100, 110, 115, 155, 160, 235, 240, 245, 250 cm
  - ruim 3: 10, 15, 20, 25, 60, 65, 70, 115, 120 cm
  - De waarden staan in ton (kg/1000).
- `ballastplan`: per diepgang de peilen [BB, SB], `ton` (totaal incl. 13,5 t lading), `buiten: [gem. inz. cm, trim cm]` en `binnen: [...]`.

**Bewust anders dan de spreadsheet:**
- **Binnen-meting bij 1,50 m:** onvolledig, er ontbreekt één cel. Daardoor geeft de spreadsheet inzinking 126,5 en trim −77. In het profiel staat `binnen: null`.
- **Binnen-meting bij 1,80 m:** leeg in de spreadsheet, in het profiel `null`.
- **De 13,5 t:** in de spreadsheet heet die "voorlading". Het profiel behandelt hem als lading, niet als ballast.

**Opvallend, nog te controleren:**
- **Het aantal ton per cm neemt af met de hoogte.** Ruim 1 gaat van 2,9 t/cm bij 70 cm naar 1,0 t/cm boven 145 cm, en ruim 2 is maar 0,7 t/cm bij 245–250 cm. Bij rechte wanden verwacht je dat het ongeveer gelijk blijft.
- **Het ballastplan is niet oplopend.** Bij 1,70 m staat ruim 1 op 82,5 cm, bij 1,80 m op 72,5 cm met ruim 2 op 247 cm.

---

## 7. De simulator

### Bediening
- **Afsluiter:** klik op de afsluiter of op de naam om hem open of dicht te zetten.
- **Pomp:** klik op de pomp om hem aan of uit te zetten.
- **Situatie:**
  - **Ballast in** begint met lege ruimen.
  - **Ontballasten** begint met geballaste ruimen, op het doelpeil met een maximum van 90 %. De U-tank staat op 60 %.
  - **Vrij oefenen**: alles zelf, zonder stappenplan.
- **Taak:**
  - de ruimen (ruim 3, U-tank, ruim 2, ruim 1);
  - de pomp (achter, voor of beide);
  - bij Ballast in het **doel**: een diepgang uit het ballastplan (ruimen en doelpeilen worden dan overgenomen), of een eigen doelpeil per ruim in cm, met de tonnen erbij.

  De simulator berekent daaruit de **doelstand**, inclusief de deelafsluiters.
- **Hulp:**
  - een stappenplan dat zichzelf afvinkt;
  - oranje ringen rond alles wat nog anders moet;
  - de knop **Zet alles in doelstand**;
  - de knop **Ruststand**.
- **Peilen en simulatie:**
  - knoppen "Ruimen leeg" en "Ruimen geballast";
  - pauze;
  - snelheid van 1× tot 300×;
  - het vakje **Lading aan boord** (t), dat meetelt voor de diepgang.
- **Scheepsgegevens:** overzicht van het profiel, met de knop **Gegevens invullen…**.
- **Afdrukken (A3):** Ballast in, Ontballasten, Ruststand of Controleblad, voor de gekozen ruimen en pomp.

### Weergave
- **Schema:** groene afsluiter = open, rode = dicht. Blauwe streepjes laten de stroming in de stroomrichting zien. De ruimen kleuren per BB- en SB-helft met het peil. Een actieve ejector kleurt lichtblauw.
- **Meters:**
  - per ruim de bovenste helft voor BB en de onderste voor SB;
  - tekst als "77 cm · 223 t", of "BB 38 / SB 140 cm · 224 t" als de kanten verschillen;
  - een groene streep voor het doelpeil, grijs gestreept voor het zaadhout, oranje voor het alarm (als ingevuld).
- **Totaalregel:** de ballast in ton, de diepgang, de trim (voorover of achterover in cm), de diepgang voor en achter, en de slagzij (in ton, of in graden als dat is ingevuld).

### Stappenplannen
**Ballast in:**
1. Ruststand controleren.
2. Ballastafsluiters van de gekozen ruimen open.
3. Deelafsluiters volgens de route.
4. Pers ballast open.
5. Pomp starten.
6. Bewaken tot het doelpeil.
7. Pomp stoppen, ruststand, diepgang controleren op de merken.

**Ontballasten:**
1. Buitenboord open en Pers ballast dicht controleren.
2. Pers overboord open.
3. Pers ejector open.
4. Zuig ejector open.
5. Ballastafsluiters en deelafsluiters.
6. Pomp starten.
7. Leegzuigen, met eventueel een strip voor de restjes.
8. Pomp stoppen, ruststand.

De voorbereidende stappen blijven "live" tot de pomp gestart is. Daarna worden ze vastgezet, zodat de ruststand aan het eind de eerdere vinkjes niet weghaalt.

### Meldingen
- **Vóór en bij het starten:**
  - de pomp is gestart terwijl nog niet alles klaarstaat (met de lijst van afsluiters);
  - de pomp draait droog omdat buitenboord dicht is;
  - buitenboord is dicht, dus het brandbluswater staat niet stand-by;
  - de pomp draait tegen dichte afsluiters.
- **Ejector:**
  - geen afvoer, want Pers overboord is dicht;
  - de ejector loopt maar zuigt niets;
  - Zuig ejector is dicht.
- **Verkeerde route:**
  - **kortsluiting**: Pers ballast is open terwijl de ejector zuigt;
  - pompwater loopt via Zuig ejector rechtstreeks overboord.
- **Peilen:**
  - doelpeil bereikt;
  - ruim leeg;
  - boven het zaadhout, zodat BB en SB in elkaar overlopen;
  - **slagzij**: vanaf 15 t verschil tussen BB en SB, met de verdeling per ruim;
  - hoogwateralarm;
  - maximaal niveau, of einde van de balk.

### Afdrukbladen
- **Blad 1:** het schema in de doelstand, met O/D bij elke afsluiter (ook leesbaar in zwart-wit), de peilgegevens met invulvakken en een titelblok.
- **Blad 2:** de standentabel van alle afsluiters, de volgorde, de routetabel, de scheepsgegevens en invulvakken.
- **Blad 3** (bij Ballast in en Ontballasten):
  - het ballastplan per diepgang;
  - een rekenvoorbeeld voor het interpoleren;
  - de tanktabellen per 10 cm. Vet = tabelwaarde, gewoon = geïnterpoleerd, grijs = doorgetrokken boven de tabel.
- **Controleblad:** het schema met nummers, een tabel "plek klopt / naam aan boord", open vragen en invulvakken.

---

## 8. Rekenmodel

### 8.1 Leidingnet en stroming (`solve()`)
- **Het leidingnet is een graaf.** `EDGES` zijn de leidingen, elk met een optionele afsluiter. Knopen zijn kruispunten. Eindpunten (`TERMINAL`) zijn zee (`SEAA`, `SEAV`), pompen (`PA`, `PV`), tanks (`T1`–`T3`, `UT`), de aansluitingen van de ejectors (`EJ3d`/`EJ3s`, `EJ1d`/`EJ1s`) en overboord.
- **Stap 1, persen:** vanuit elke draaiende pomp, maar alleen als buitenboord open is, zoekt de simulator diepte-eerst door open afsluiters naar afnemers. Afnemers zijn tanks met ruimte en ejectors waarvan Pers overboord open is. Het debiet wordt gelijk verdeeld over de unieke afnemers. Voor een ruim telt elke kant als aparte afnemer: de leidingen `bb*` en `st*b` gaan naar BB, `sb*` en `st*s` naar SB.
- **Stap 2, zuigen:** elke ejector die drijfwater krijgt, zuigt via Zuig ejector diepte-eerst naar tanks of kanten met water. Komt de zoektocht bij een draaiende pomp uit, dan is dat **kortsluiting**: er wordt niet gezogen en er komt een alarm.
- **Debiet:**
  - indicatief: pomp 2,0 t/s, ejector 1,7 t/s bij 1×;
  - met ingevulde capaciteit: m³/h / 3600, met 1 m³ ≈ 1 t.
  - Een open strip zuigt 30 % sneller in het laatste stuk, onder 4 % van de vulling (`STRIP_FRAC`).

### 8.2 Peilen en tonnen
- **Per ruim houdt de simulator de tonnen aan BB en SB apart bij** (`kant[t].B`, `kant[t].S`). Voor de U-tank is dat een fractie (`level.UT`).
- **Tanktabel** (`tabel`, `tonAt`, `cmAt`):
  - lineair tussen de tabelpunten, met (0,0) als eerste punt;
  - boven de hoogste tabelwaarde doorgetrokken met de laatste helling. Dat is onzeker en staat grijs op het blad.
  - **Een kant heeft de helft van de tabel.** De simulator gaat ervan uit dat het ruim symmetrisch is. Het peil van een kant = `cmAt(2 × ton van die kant)`.
- **Zaadhout** (`verdeel`): `H` = ton per kant op de hoogte van het zaadhout.
  - Is het totaal minstens 2H, dan zijn beide kanten gelijk: het water loopt over het schot.
  - Komt één kant boven H terwijl de andere eronder zit, dan stroomt het teveel over naar de andere kant.
  - Onder het zaadhout blijven de kanten gescheiden.
- **Inhoud bij max. niveau** (`capTon`): `tonAt(max)`. Zolang het max. niveau leeg is, is dat `tonAt(300 cm)`.

### 8.3 Diepgang, trim en slagzij (`LIGGING`, `ligging()`)
Allemaal **schattingen uit de metingen in het ballastplan**. In de simulator staat er "≈" bij.

- **Gewicht voor de diepgang** = ballast + lading die nu aan boord is (in te vullen). Dat wordt vergeleken met `ballastplan[].ton`, de ballast plus 13,5 t lading tijdens de meting.
- **Diepgang:**
  - tussen twee metingen: lineair op de gemeten inzinking buiten;
  - daarbuiten: doorgetrokken met de gemiddelde ton per cm inzinking. Die volgt uit een rechte lijn door alle metingen en is nu **≈ 11,9 t/cm**. Een leeg schip komt dan op **≈ 1,22 m**, ongecontroleerd.
- **Trim** (achter − voor, plus = achterover): `trim = a + b1·W1 + b2·W2 + b3·W3`, met W = ton in ruim 1, 2, 3.
  - De getallen worden met **kleinste kwadraten** (`kleinsteKwadraten`) passend gemaakt op de metingen met trim buiten. Daarvoor zijn minstens 5 metingen nodig.
  - Nu: a = +16,3 cm, b1 = −0,066, b2 = −0,011, b3 = +0,054 cm per ton.
  - De richting is logisch: voor maakt voorover, achter maakt achterover. Maar omdat alle metingen een **evenwichtige verdeling** hebben, is het verband onzeker bij een ongelijke verdeling.
  - De diepgang voor en achter = gemiddelde ∓ trim/2.
  - De U-tank telt niet mee, want er zijn geen metingen van.
- **Slagzij:** het verschil in ton tussen BB en SB, opgeteld over de ruimen. In graden alleen als `helling_graden_per_100t` is ingevuld (lineair).

**Doel (nog te bouwen, zie §10):** de schattingen vervangen door een berekening uit het **stabiliteitsboek**:
- diepgang uit de waterverplaatsing;
- **trim** = Σ W·(LCG − LCF) / MTC;
- **helling**: tan φ = (ΔW·TCG) / (Δ·GM), met GM = KM − KG − correctie voor vrije vloeistof.

---

## 9. Code-overzicht

Alles staat in `bron/sim_template.html`, in deze volgorde:

| Blok (commentaar `/* ---- … ---- */`) | Inhoud |
|---|---|
| `<script id="profiel">` | `PROFIEL`, het scheepsprofiel (§6). |
| `<script>` met `PUMP_L`, `PUMP_R` | Plaatshouders voor de pompplaatjes, ingevuld door `build.py`. |
| begin hoofdscript | `BRON_HTML`: een kopie van het hele document bij het laden, voor "Opslaan als nieuw bestand". `STANDAARDNAMEN`, `naam()`, `TK`, `TKNAAM`. |
| peilen uit het profiel | `tabel`, `interp`, `tonAt`, `cmAt`, `maxCm`, `capTon`, `fracCm`, `lvlTxt`, `cap()`. Kanten en zaadhout: `HOLDS`, `kant`, `verdeel`, `setLevel`, `meterTxt`, `slagzijTon`, `ballastTon`. Ligging: `kleinsteKwadraten`, `LIGGING`, `ligging`, `liggingTxt`. |
| svg helpers | `el`, `line`, `poly`, `text`, `tri`, `bell` (zuigmond), `checkValve`, `sea`. |
| statisch tekenwerk | Kader, ruimen (BB- en SB-helft), methanol/U-tank, doorsnede U-tank, zaadhoutlabel. |
| leidingnet | `TERMINAL`, `EDGES` met `edge(id, a, b, punten, afsluiter, dikte)`, `ADJ`. |
| symbolen | Zuigmonden, ejectors (`EJ`), terugslagkleppen, DN-labels, zee. |
| afsluiters | `valve(id, x, y, richting, hendel, label, schaal, od)`, `VALVES` (nummering = volgorde van aanmaken). |
| pompen | `pump(...)`, `PUMPS`. |
| onderbalk | Meters (`GAUGE`), peilgegevens voor de bladen (`print-only`), ejector-uitleg, legenda, titelblok. |
| toestand | `level`, `doel`, `task`, `SIDE` (afsluiters per pomp), `SEG` (deel van de hoofdleiding), `routeDeel()`, `computeTarget(kind)`, `isRust()`. |
| stromingsberekening | `solve()` (§8.1), plus de procedure- en peilmeldingen. |
| stappenplannen | `buildSteps()`, `renderSteps()`, `updateSteps()` (met vergrendeling na de start). |
| taakkeuze | Keuze van ruimen, pomp en doel; `kiesPlan(i)`. |
| weergave | `render()`: stroming, afsluiterkleuren en O/D, hints, pompen, meters, meldingen, totaalregel. |
| lus | `tick()`: `solve()`, kanten bijwerken, `render()`. |
| interactie | Klikken, tooltips, `applyState`, `setScenario`, knoppen. |
| scheepsgegevens | Zijpaneel met de profielwaarden. |
| gegevens invullen | `openGegevens`, `collectGegevens` (controles), `profielJs` (schrijft het profiel netjes terug), `bouwHtml`, `saveGegevens` (download). |
| afdrukken | `preparePrint(kind)` / `endPrint()`, `printDoc`, `peilTabel`, `planBlad`. CSS: `svg.printing`, `.print-only`, `.screen-only`, `@page A3 landscape`. |

**Conventies:**
- Coördinaten in eenheden van 2000 × 1414 (A3-verhouding), gelijk aan de originele Illustrator-tekening. De hoofdleiding ligt op y = `HDR` (675), dat is ook het hart van het schip in het bovenaanzicht.
- Commentaar en teksten zijn in het Nederlands.
- Getallen worden getoond met een komma (`fmt`).
- Nieuwe profielvelden moeten op drie plekken komen: in het `PROFIEL`-blok, in `openGegevens`/`collectGegevens` en in `profielJs`. Anders gaan ze verloren bij "Opslaan als nieuw bestand".

**Testen:** er is geen testsuite. Er is getest met Playwright-scripts die:
- het bestand openen;
- de scenario's doorlopen (Ballast in met een plan, Ontballasten, kortsluiting, droogdraaien, één kant leegpompen, overlopen bij het zaadhout);
- het invulscherm opslaan en het opgeslagen bestand opnieuw openen en opslaan (de uitkomst moet gelijk blijven).

Controleer na elke wijziging minstens of er geen JavaScript-fouten zijn (`pageerror`) en of de bladen nog op 2–3 pagina's passen.

---

## 10. Open punten

**Gegevens die Lennart nog opzoekt of controleert**

1. **Uit het tabellenboek:** alarm, max. niveau en Sygo-stand.
2. **Zaadhout:** de hoogte van 140 cm controleren.
3. **Tanktabellen:** klopt het dat het aantal ton per cm zo sterk afneemt naar boven? (§6.3)
4. **Ballastplan:** de ontbrekende binnen-metingen bij 1,50 m en 1,80 m. En is de verdeling bij 1,70 en 1,80 m de bedoeling?
5. **U-tank:** de inhoud (t) en eventueel een tanktabel. Is het echt één vul/zuigleiding? Is er een drainleiding?
6. **Stabiliteitsboek**, voor een echte berekening van trim en helling. Proefmetingen met alleen voor of alleen achter ballast zijn in de praktijk niet mogelijk. Op volgorde van belangrijkheid:
   1. **Hydrostatische tabel per diepgang** (±1,10–2,60 m): waterverplaatsing (t), ton per cm inzinking, **LCF**, **MTC** (tm/cm), **KM**.
   2. **Leeg schip:** gewicht (t), **LCG**, **KG**, lege diepgang voor en achter.
   3. **Ruimen en U-tank:** **LCG** per ruim, **TCG** per BB/SB-helft, **VCG** (per peil), vrije-vloeistofmoment.
   4. **Referentiepunten:** vanaf waar wordt gemeten en welke kant is plus, de Lpp, en de plek van de diepgangsmerken voor en achter.
   5. **Een uitgewerkte beladingstoestand** (ballastconditie), om de berekening te controleren.

   Foto's van de pagina's zijn genoeg.
7. **Helling:** als een proef wel kan, de graden bij ±100 t verschil. Anders volgt het uit punt 6.
8. **Capaciteiten** van de pomp en de ejector (m³/h), optioneel, voor echte tijden.
9. **Controleblad** aan boord nalopen: plek en naam van elke afsluiter, en de DN-maten (Pers ballast achter, drijfwater, overboord, zuigmonden, strips).
10. **Vergelijken** met de oude Illustrator-bladen v1.0 en v1.0.8: ontbreekt er iets?

**Technisch, nu bewust zo gelaten**
- **Halve tanktabel per kant:** de simulator gaat ervan uit dat BB en SB symmetrisch zijn.
- **Trim:** het verband is passend gemaakt op evenwichtige metingen. Een ongelijke verdeling is onzeker, en de U-tank telt niet mee.
- **Doelpeil:** geldt voor BB en SB samen, met het gemiddelde uit het ballastplan.
- **Lading aan boord:** telt alleen mee voor de diepgang, niet voor de trim. Waar de lading ligt is onbekend.
- **Lucht trekken:** de simulator bootst geen vacuümverlies van de ejector na. Besloten: de DN100's maken in de praktijk goed leeg.

---

## 11. Ideeën voor later

Besproken maar nog niet gebouwd, met de voorkeur van Claude tussen haakjes:
1. **Trim, helling en diepgang uit het stabiliteitsboek** (§8.3), zodra de gegevens er zijn. Dat is de grootste stap in betrouwbaarheid.
2. **Examenmodus** (hoog): geen oranje ringen, geen stappenplan en geen knop "Zet alles in doelstand". De matroos doet het zelf. Na afloop volgt een overzicht van de fouten: pomp te vroeg gestart, buitenboord dicht, kortsluiting, voorbij het doelpeil, slagzij.
3. **Storingsoefening:** halverwege valt een pomp uit, en de matroos moet het afmaken met de andere pomp via de deelafsluiters.
4. **Voorwaarden vooraf in het stappenplan**: ruim leeg van lading, luiken, diepgang of doorvaarthoogte bekend, overleg met de stuurhut. Nog navragen bij Lennart.
5. **Hoe peil je aan boord?** Peilbuis, display of vlotter, voor een realistischere bewakingsstap.
6. **Standaardkeuze van de bladen:** nu getekend voor alle ruimen met beide pompen, terwijl meestal met één pomp wordt gewerkt. Eventueel één blad per pomp.
7. **Meerdere schepen:** een keuzelijst met scheepsprofielen in één bestand.
8. **BB en SB los te kiezen in de taak**, om slagzij bewust te corrigeren.

---

## 12. Verder werken met Claude

Op een andere machine of met een ander account:
1. Clone de repository en check de branch uit (§2). Of upload `ballast_simulator.html`, `bron/sim_template.html` en dit document.
2. Begin het gesprek met iets als:

   > Lees `ballastsysteem/PROJECT_DOCUMENTATIE.md` helemaal. Dit is een ballastsimulator voor de S-serie (binnenvaart). Werk in `bron/sim_template.html`, bouw met `python3 bron/build.py` en test in de browser met Playwright (geen JavaScript-fouten). Houd je aan de besluiten in §5 en de regel "niets verkeerds aanleren". Het volgende wat ik wil: …

3. Laat Claude na elke wijziging:
   - dit document bijwerken: §6.2 bij nieuwe velden, §8 bij een rekenwijziging, §10 en §13 altijd;
   - de bladen opnieuw maken (`node bron/export.js`);
   - committen met een duidelijke Nederlandse commitboodschap.

**Werkafspraken die gelden:**
- Teksten en uitleg in het **Nederlands**.
- Vraag of zoek op in plaats van getallen te verzinnen. Onzeker = leeg veld of gemarkeerd als schatting.
- Praktisch voor de gebruiker op het water. Uitleg in gewone woorden, geen jargon zonder uitleg.

---

## 13. Historie

- **v1.0** (21-04-2025): ontballasten, Illustrator.
- **v1.0.8** (22-02-2025): ballast in, Illustrator.
- **v2.0** (30-10-2026): beide bladen in één layout, afsluiternamen en standen, interactieve simulator.
- **v2.1** (30-10-2026):
  - scheepsprofiel; getallen van een ander schip verwijderd;
  - deelafsluiters als routekeuze, met berekende doelstand;
  - buitenboordafsluiter per pomp, ruststand en volgorde "eerst klaarzetten, dan starten";
  - U-tank met één leiding en een doorsnede;
  - stripleidingen als hulpmiddel voor restjes;
  - bladen rechtstreeks uit de simulator, met O/D en een controleblad;
  - drie fouten hersteld: de stap "Klaar", Deelafsluiter 1-2 in de doelstand, de verdeling van het debiet;
  - invulscherm "Gegevens invullen…";
  - dikkere stromingslijnen;
  - "Over dit project" toegevoegd en weer verwijderd.
- **v2.2** (01-11 t/m 03-11-2026):
  - tanktabellen en ballastplan uit `ballast.xlsx`;
  - peilen in cm en ton; doel kiezen als diepgang;
  - blad 3 met ballastplan en tanktabellen;
  - de 13,5 t is lading tijdens de meting, met een vakje "Lading aan boord";
  - **zaadhout als schot tussen BB en SB**: kanten apart, overlopen boven 140 cm, melding bij slagzij;
  - diepgang onder 1,40 m doorgetrokken (≈ 11,9 t/cm);
  - **trim en diepgang voor/achter geschat** uit de metingen;
  - veld voor helling in graden;
  - deze overdrachtsdocumentatie.
