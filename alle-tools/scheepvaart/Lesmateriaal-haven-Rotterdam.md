# Lesmateriaal haven Rotterdam

Oct 13, 2026 · @Lennart

## Inleiding

Zes lessen voor de kapitein die van de Rijn de haven van Rotterdam in vaart: getij, stroom, indeling, verkeersposten en de regels van het BPR. Elke les heeft dezelfde opbouw als het lesmateriaal voor de Rijn: leerdoelen, uitleg voor de kapitein, een rekenvoorbeeld, een stuk voor de die-hards en controlevragen met antwoorden.

De getallen komen uit dezelfde gegevens als de Havensim (Botlek en Europoort): de IENC Port of Rotterdam van het Havenbedrijf (25-08-2026), de astronomische getijreeksen 2026 van Rijkswaterstaat en de stroommeting bij Spijkenisse. Wetsartikelen zijn letterlijk geciteerd uit de versie die geldt sinds 17-06-2026. Waar een getal een benadering of een keuze van de simulator is, staat dat erbij.

**Oefenen in de Havensim:** elke les noemt een rit die je erbij kunt varen. Kies bij *Nieuwe rit* het gebied, de startplek en het tijdstip.

## Les 1 — Getij en waterdiepte in de Rijnmond

In de haven tel je de waterstand op bij de kaartdiepte: de dieptes op de havenkaart gaan uit van ongeveer het laagste getij (LAT), en het water staat bijna altijd hoger. In de Botlek scheelt dat in 2026 tussen 0 en 2,27 m.

### Leerdoelen

- Je kent het verschil tussen NAP, LAT en kaartdiepte.
- Je rekent de waterdiepte uit met de waterstand in cm NAP.
- Je weet waarom de gemeten waterstand afwijkt van het getij in de tabel.
- Je herkent het dubbele laagwater in de Rijnmond.

### Uitleg voor de kapitein

Op de Rijn werk je met een pegel en een gegarandeerde vaargeuldiepte. In de haven is het anders: daar is de diepte op de kaart gegeven ten opzichte van **LAT** (Lowest Astronomical Tide, de laagste stand die het getij kan geven). De havenkaart van het Havenbedrijf noemt dat "Approximate LAT": het is per plek een benadering.

De waterstand zelf wordt opgegeven in **cm NAP**. Om de waterdiepte te weten, heb je dus nodig hoeveel cm LAT onder NAP ligt. Dat verschilt per plek:

| Peil | LAT (cm NAP) | Gemiddeld LW (cm NAP) | Gemiddeld HW (cm NAP) | HAT (cm NAP) |
| --- | --- | --- | --- | --- |
| Botlek Geulhaven | −76 | −43 | +116 | +151 |
| Hoek van Holland | −90 | −53 | +108 | +155 |
| Europahaven | −95 | −61 | +116 | +169 |
| Rozenburgsesluis | −95 | −60 | +118 | +174 |

De tabel is afgeleid uit de astronomische reeks 2026 van Rijkswaterstaat: LAT en HAT zijn hier de laagste en hoogste stand van dat jaar. De echte LAT gaat over 18,6 jaar en ligt nog iets lager; voor de praktijk scheelt dat enkele centimeters.

**Astronomisch is niet gemeten.** Het getij in de tabel is wat de maan en de zon doen. Wind en rivierafvoer komen erbovenop. In de week van 3 tot 10 oktober 2026 lag de meting in de Botlek mediaan 0 cm, maar soms 29 cm lager en 74 cm hoger dan het astronomische getij. Bij Hoek van Holland en Rozenburgsesluis was dat −24 tot +77 en −41 tot +84 cm. Westenwind stuwt het water op; oostenwind en weinig rivierwater laten het zakken.

**Dubbel laagwater.** Rond laagwater blijft het water in de Rijnmond lang laag en zakt het soms twee keer, met een kleine opleving ertussen: het dubbele laagwater (agger). In de astronomische reeks 2026 heeft 31% van de laagwaters bij Hoek van Holland zo'n tweede dal van minstens 3 cm; in de Botlek is dat 9%. Reken bij een krappe diepgang dus niet op een snelle stijging direct na laagwater.

**In de Havensim:** de chip bovenaan toont de stand in cm NAP en hoeveel meter dat boven LAT is. Lichtblauw op de kaart is te ondiep voor jouw diepgang bij de huidige stand.

### Rekenvoorbeeld

Je ligt in de Geulhaven (Botlek). De kaart geeft daar 4,0 m. Het is 10 oktober 2026, 12:00: de stand is −21 cm NAP. Je diepgang is 3,60 m, en bij 6 km/u reken je 0,10 m inzinking (squat).

1. Water boven LAT: −21 − (−76) = 55 cm = 0,55 m.
2. Waterdiepte: 4,0 + 0,55 = 4,55 m.
3. Onder de kiel: 4,55 − 3,60 − 0,10 = 0,85 m.

Zelfde plek bij LAT (de laagste stand): 4,0 − 3,60 − 0,10 = 0,30 m. Bij laagwater met oostenwind kan het nog 0,3 m lager staan dan het getij: dan raak je de grond.

### Voor de die-hards

- De havenkaart (IENC Port of Rotterdam) geeft het verticale referentievlak als code VERDAT 42 = "Approximate Lowest Astronomical Tide" (IENC Encoding Guide 2.4.1). LAT verschilt per plek: in Europoort ligt hij lager dan in de Botlek, omdat het getijverschil richting zee groter is.
- De Havensim rekent de waterstand per plek: tussen twee peilen lineair met de afstand (Europoort: Europahaven, Hoek van Holland, Rozenburgsesluis). In werkelijkheid loopt de getijgolf van zee naar binnen; HW is in de Botlek later dan bij Hoek van Holland: in de reeksen van 2026 mediaan 50 minuten.
- De kaartdiepte is per cel van 5 bij 5 m: het dieptevlak van de kaart (ondergrens) verfijnd met de gepeilde dieptes, nooit dieper dan de bovengrens van dat vlak.

### Controlevragen

1. De kaart geeft 5,2 m. De stand bij Hoek van Holland is +30 cm NAP. Hoeveel water staat er?
2. Waarom kun je niet zeggen: "de stand is −40 cm NAP, dus het water is ondieper dan de kaart"?
3. Het getij voorspelt laagwater −50 cm NAP. Er staat al twee dagen stevige oostenwind. Wat verwacht je?
4. Na laagwater wil je over een drempel waar je 0,2 m te kort komt. Waar moet je in de Rijnmond rekening mee houden?

**Antwoorden**

1. LAT bij Hoek van Holland is −90 cm NAP. Boven LAT: 30 + 90 = 120 cm. Waterdiepte 5,2 + 1,2 = 6,4 m.
2. Omdat de kaart uitgaat van LAT, niet van NAP. Bij −40 cm NAP staat het water in de Botlek nog 36 cm boven LAT, dus dieper dan de kaart.
3. Lager water dan voorspeld. In de week van 3–10 oktober lag de meting bij de Rozenburgsesluis tot 41 cm onder het getij.
4. Het dubbele laagwater: het water kan na het eerste laagwater nog even blijven hangen of opnieuw zakken. Wacht op de stijging, niet op de klok.

## Les 2 — Getijstroom en kentering

In de Rijnmond loopt de vloed het hardst rond hoogwater en de eb rond laagwater, en de eb duurt veel langer dan de vloed: op 10 oktober 2026 in Het Scheur ongeveer 8 uur eb tegen 4,5 uur vloed.

### Leerdoelen

- Je weet wanneer de stroom het sterkst is en wanneer hij kentert.
- Je kent de orde van grootte van de stroom op de hoofdvaarwegen en in de havens.
- Je begrijpt waarom het Beerkanaal en het Calandkanaal bijna geen stroom hebben.

### Uitleg voor de kapitein

Op de Rijn loopt de stroom altijd dezelfde kant op. In de Rijnmond keert hij twee keer per getij om. Belangrijk verschil met wat je misschien verwacht: de stroom kentert **niet** bij hoog- en laagwater. Bij Spijkenisse (Oude Maas) loopt de stroom vrijwel gelijk op met de waterstand bij de Botlek: hoe hoger het water, hoe harder de vloed; hoe lager, hoe harder de eb. De stroom kentert halverwege, als de Botlek rond +0,45 m NAP staat.

De eb duurt langer en is sterker, omdat het rivierwater van Rijn en Maas er altijd bovenop komt. Netto stroomt door Het Scheur ongeveer 1.100 tot 1.500 m³/s richting zee, afhankelijk van de rivierafvoer.

| Waar | Max eb (m/s) | Max vloed (m/s) | Toelichting |
| --- | --- | --- | --- |
| Hoek van Holland, Nieuwe Waterweg | 0,9 | 0,9 | Havensim, gemiddeld over de doorsnede (rekenmodel ZWENDL: 1,08 / 0,96) |
| Het Scheur bij km 1015 | 1,0 | 0,8 | Havensim, midden in de geul, 10 oktober 2026 |
| Oude Maas bij km 1005 | 0,75 | 0,6 | Havensim, 10 oktober 2026 |
| Maasmond | 0,5 | 0,7 | Havensim, gemiddeld over de doorsnede |
| Beerkanaal, Calandkanaal | 0,10 | 0,15 | Havensim: alleen het water dat het bekken in en uit gaat |
| Havenbekkens | — | — | in de Havensim geen stroom |

**Doodlopende kanalen.** Het Calandkanaal loopt dood op de Rozenburgsesluis, en het Beerkanaal met alle Europoorthavens heeft maar één uitgang: de Maasmond. Het enige water dat er stroomt, is het water dat bij stijgend tij het bekken in moet en bij dalend tij eruit. Dat is weinig stroom, maar bij de ingang van een havenbekken kan je achterschip nog in de stroom staan terwijl je boeg in stil water zit. Dan draait het schip.

**In de Havensim:** de chip "Het Scheur eb · kentering 14:40" (Botlek) of "Hoek van Holland" (Europoort) geeft de richting en de volgende kentering. De stroompijlen zet je aan bij *Nieuwe rit*. Oefenrit: Botlek, Het Scheur km 1015 bij 16:30 (volle vloed) en dan de Botlek-zwaaikom in.

### Rekenvoorbeeld

Hoeveel stroom staat er in het Calandkanaal als het water bij Hoek van Holland 0,8 m per uur stijgt?

1. Achter de doorsnede bij Calandkanaal x ≈ 3 km ligt 4,1 km² water (kanaal plus havens tot de sluis).
2. Dat moet 0,8 m per uur stijgen: 4.100.000 × 0,8 / 3.600 = 911 m³/s naar binnen.
3. De doorsnede is daar 10.700 m²: 911 / 10.700 = 0,085 m/s, ongeveer 0,3 km/u.

Ter vergelijking: in Het Scheur, waar het rivierwater er ook doorheen moet, is het tien keer zoveel.

### Voor de die-hards

- Meting Spijkenisse (Rijkswaterstaat, oktober 2025 – oktober 2026, ruim 40.000 waarden): stroom = 0,77 − 1,68 × waterstand Botlek (m NAP, 10 minuten eerder), eb positief. Getoetst op juli–oktober: 94% van de variatie verklaard, gemiddelde afwijking 0,31 m/s (wind, opzet, rivierafvoer).
- Dat de stroom in fase loopt met de waterstand, past bij een getijgolf die het land in loopt. Bij een staande golf (een afgesloten bekken) kentert de stroom juist bij hoog- en laagwater; dat zie je terug in het Calandkanaal.
- Het Scheur in de Havensim = debiet Nieuwe Maas + Oude Maas − wat de Botlekhavens bergen (6,4 km² × stijgsnelheid). De debieten zijn geijkt op het rekenmodel ZWENDL van Rijkswaterstaat (2004) bij een Rijnafvoer van 2.200 m³/s.

### Controlevragen

1. Het is hoogwater bij de Botlek. Kentert de stroom nu?
2. Waarom is de eb in Het Scheur langer dan de vloed?
3. Je vaart het Beerkanaal in. Verwacht je dezelfde stroom als op de Nieuwe Waterweg?
4. Je draait met je boeg een havenbekken in terwijl er 0,8 m/s vloed staat. Wat gebeurt er met je achterschip?

**Antwoorden**

1. Nee. Rond hoogwater staat juist de meeste vloed. De stroom kentert halverwege het dalende water, rond +0,45 m NAP bij de Botlek.
2. Het rivierwater stroomt altijd zeewaarts en komt bij de eb op, en gaat van de vloed af.
3. Nee. Het Beer- en Calandsysteem is doodlopend: alleen het bergingswater stroomt, rond 0,1 m/s.
4. Het achterschip wordt door de vloed meegenomen, de boeg niet: het schip draait. Houd daar rekening mee met roer en boegschroef.

## Les 3 — Indeling van Botlek en Europoort

De Rijn-km loopt door tot zee: de Botlek ligt bij km 1011–1017 aan Het Scheur, de Maasmond bij km 1030–1035. Europoort is één groot bekken met alleen de Maasmond als uitgang.

&#91;embedded content: vaarwegen Botlek en Europoort · schema, niet op schaal\]

Het schema volgt de vaarwegassen uit de havenkaart. Het Hartelkanaal verbindt Europoort via de achterkant met de Oude Maas bij Spijkenisse.

### Leerdoelen

- Je weet welke vaarwegen bij de Botlek en Europoort samenkomen en welke doodlopen.
- Je kent de draaikommen en waar je ze vindt.
- Je schat een vaartijd in met de stroom mee of tegen.

### Uitleg voor de kapitein

**Botlek.** Het Scheur (km 1011–1017) is de doorgaande vaarweg tussen de Nieuwe Waterweg en de Nieuwe Maas. Bij de Botlek takt de Oude Maas af naar het zuiden. De Botlek-zwaaikom ligt aan de monding van de Botlekhavens; daaromheen liggen de petroleumhavens, de werkhavens, de Torontohaven, de St. Laurenshaven en de Chemiehaven. In de Havensim zie je van de Oude Maas km 1003–1006 en het oostelijke stuk van het Hartelkanaal.

**Europoort.** Vanuit zee kom je via de Maasgeul in de Maasmond. Daar kies je: rechtdoor de Nieuwe Waterweg in (noord van de splitsingsdam) of naar het zuiden het Beerkanaal in. Vanaf het Beerkanaal loopt het Calandkanaal langs Rozenburg naar het oosten, tot de Rozenburgsesluis. Het Beerkanaal geeft toegang tot de Europoort-havens en de Maasvlakte.

**Diepte.** De Nieuwe Waterweg en Europoort zijn gebaggerd voor zeeschepen: op de havenkaart (t.o.v. LAT) ongeveer 16 m op de as van de Nieuwe Waterweg, rond 20 m in de Maasmond en op de diepste plekken in Europoort tot 31 m. In de havenbekkens en langs de kanten wordt het snel ondieper.

| Draaikom (havenkaart) | Gebied |
| --- | --- |
| Botlek-zwaaikom | Botlek, aan Het Scheur |
| 2e Werkhaven, Torontohaven, 3e Petroleumhaven | Botlekhavens |
| Beerkanaal-Noord, Beerkanaal-Zuid | Europoort, Beerkanaal |
| Beneluxhaven | Europoort, aan het Calandkanaal |
| Europahaven, Amazonehaven | Europoort |
| Yangtzekanaal-West, Prinses Arianehaven | Maasvlakte |

**In de Havensim:** kies bij *Nieuwe rit* het gebied. Oefenrit: Europoort, Maasmond, en vaar via het Beerkanaal het Calandkanaal in.

### Rekenvoorbeeld

Van de Maasmond (km 1035) naar de Botlek (km 1013) is 22 km. Je vaart 12 km/u door het water.

1. Tegen 0,8 m/s eb in (2,9 km/u): 12 − 2,9 = 9,1 km/u over de grond. 22 / 9,1 = 2,4 uur, ongeveer 2 uur 25 minuten.
2. Met 0,8 m/s vloed mee: 12 + 2,9 = 14,9 km/u. 22 / 14,9 = 1,5 uur, ongeveer 1 uur 30 minuten.

De vloed duurt maar zo'n 4,5 uur: wie op tijd vertrekt, heeft hem de hele weg mee.

### Voor de die-hards

- De splitsingsdam scheidt de Nieuwe Waterweg van het Calandkanaal, maar raakt Rozenburg net niet: de havenkaart toont daar een opening van ongeveer 200 m breed en 8 tot 10 m diep. De Havensim rekent die opening voor de stroom als dicht.
- Het Brielse Meer ligt naast het Hartelkanaal maar is niet open met de haven verbonden.
- De grenzen voor bovenmaatse schepen verschillen per vaarweg (les 5); het gebied waarin je zit, bepaalt welke grens geldt.

### Controlevragen

1. Je komt binnen van zee en moet naar het Calandkanaal. Welke vaarwegen neem je?
2. Kun je vanuit het Calandkanaal doorvaren naar de Botlek zonder terug naar de Maasmond?
3. Waar ligt de Botlek-zwaaikom?
4. Hoe lang doe je over 10 km bij 11 km/u door het water tegen 1,0 m/s eb in?

**Antwoorden**

1. Maasmond, dan het Beerkanaal in, en bij Beerkanaal-Noord het Calandkanaal in.
2. Nee, niet met een schip: het Calandkanaal loopt dood op de Rozenburgsesluis. Alleen via de sluis of terug via de Maasmond.
3. Aan Het Scheur bij de Botlek, bij de monding van de Botlekhavens en de Oude Maas.
4. 1,0 m/s = 3,6 km/u. Over de grond 11 − 3,6 = 7,4 km/u. 10 / 7,4 = 1,35 uur, ongeveer 1 uur 21 minuten.

## Les 4 — Verkeersposten en marifoon

In het havengebied luister je uit op het kanaal van de verkeerssector waar je bent; waar geen verkeerspost is, op kanaal 10. Varend van de Maasmond naar de Botlek wissel je drie keer: 3, 65, 80 en dan 61.

### Leerdoelen

- Je kent de verkeerssectoren en hun kanalen tussen de Maasmond en de Botlek.
- Je weet wanneer je moet uitluisteren en wanneer je moet melden.
- Je weet in welke taal er gesproken wordt.

### Uitleg voor de kapitein

De Procedure VHF communication VTS and HCC van het Havenbedrijf (versie 1.4, juli 2023) zegt dat alle schepen, ook binnenschepen, moeten: "Maintain listening watch on the appropriate VHF channel while passing through the VTS area". Het BPR regelt het in artikel 9.07: een groot schip van een door de bevoegde autoriteit aangegeven categorie luistert uit op het aangewezen marifoonkanaal, en een klein schip met marifoon ook (lid 2 en 4).

| Sector | Kanaal | Waar (benadering) |
| --- | --- | --- |
| Maas Entrance | 3 | Maasmond, tot Nieuwe Waterweg km 1030 |
| Rozenburg | 65 | Nieuwe Waterweg km 1030–1028; Calandkanaal ten oosten van het Beerkanaal, met havens |
| Maassluis | 80 | Nieuwe Waterweg km 1028–1017 |
| Botlek | 61 | Het Scheur km 1017–1011, Botlekhavens, Oude Maas tot het Hartelkanaal |
| Oude Maas | 62 | Oude Maas zuidelijker, oostelijk Hartelkanaal |
| Europoort | 66 | Beerkanaal en havens, westelijk Calandkanaal |
| geen verkeerspost | 10 | westelijk Hartelkanaal (onderling) |
| Eemhaven / Waalhaven | 63 / 60 | Nieuwe Maas ten oosten van km 1011 |

De grenzen zijn afgelezen van de schematische kaart in bijlage 2 van de procedure; op de vaarweg zelf staan de borden.

**Melden.** Een bijzondere manoeuvre meld je op het sectorkanaal: "crossing the waterway, entering or leaving the harbor and any other action that deviates from a usual traffic pattern, including incidents". Binnenschepen die onder de meldplicht vallen, melden zich bij vertrek elektronisch via IVS-Next; bij een storing bij het Harbour Coordination Center op kanaal 14.

**Bruggen en sluizen** vraag je aan op hun eigen kanaal: Botlekbrug en Spijkenisserbrug 18; Calandbrug, Rozenburgsesluis en Hartelsluis 22.

**Taal.** In de sectoren Maas Approach, Pilot Maas en Maas Entrance is Engels de eerste taal en Nederlands de tweede; in alle andere sectoren Nederlands, met Engels als tweede. Duits mag ook als het niet lukt.

**In de Havensim:** zet je kanaal in het zijpaneel bij *Marifoon*. De coach meldt elke nieuwe sector. Na een minuut op het verkeerde kanaal volgt een waarschuwing, en de verkeerspost meldt naderende zeeschepen alleen als je op het goede kanaal staat. Oefenrit: Europoort, Nieuwe Waterweg bij de Maeslantkering, en vaar naar de Maasmond.

### Rekenvoorbeeld

Je vaart van de Botlek (km 1013) naar zee, 12 km/u over de grond. Wanneer wissel je van kanaal?

1. Km 1013 → 1017: nog in sector Botlek, kanaal 61. 4 km = 20 minuten.
2. Bij km 1017 naar kanaal 80 (Maassluis). Tot km 1028 is 11 km = 55 minuten.
3. Bij km 1028 naar kanaal 65 (Rozenburg), 2 km = 10 minuten.
4. Bij km 1030 naar kanaal 3 (Maas Entrance): voortaan Engels als eerste taal.

### Voor de die-hards

- Zeeschepen melden zich bij binnenkomst in het VTS-gebied: vanuit zee op kanaal 1 (Maas Approach), via de Oude Maas op 62, via de Nieuwe Maas op 81, met naam, roepnaam, diepgang, positie en bestemming.
- Waar geen VTS-dekking is: "there must be a listening watch on VHF-channel 10" (procedure, §8).
- Kanaal 19: weerbericht bij verwachte windkracht 8 of meer, tien minuten voor elk heel uur.

### Controlevragen

1. Je ligt in de Beneluxhaven en vertrekt richting zee. Op welk kanaal meld je je vertrek en op welke kanalen luister je daarna?
2. Je vaart het westelijke Hartelkanaal in. Welk kanaal?
3. Je moet de Botlekbrug laten draaien. Welk kanaal?
4. In de Maasmond roept een loods je in het Engels op. Moet je in het Nederlands antwoorden?

**Antwoorden**

1. De Beneluxhaven ligt aan het Calandkanaal: sector Rozenburg, kanaal 65 (vertrek en uitvaren van een haven melden). Bij het Beerkanaal kanaal 66, in de Maasmond kanaal 3.
2. Kanaal 10: daar is geen verkeerspost, je luistert onderling uit.
3. Kanaal 18.
4. Nee. In Maas Entrance is Engels de eerste taal.

## Les 5 — Vaarregels in het havengebied (BPR)

In de haven van Rotterdam geldt het Binnenvaartpolitiereglement (BPR) met hoofdstuk 10 voor de vaarwegen tussen zee en zeehaven: wie de stuurboordszijde van het vaarwater volgt, heeft voorrang, en elk schip moet een bovenmaats zeeschip voorrang verlenen.

### Leerdoelen

- Je past de hoofdregel voor tegemoetkomende schepen toe (art. 6.04).
- Je weet wanneer een groot schip stuurboord op stuurboord mag vragen (art. 6.04a) en wanneer niet (art. 10.08 lid 3).
- Je herkent een bovenmaats zeeschip en weet wat je dan moet doen (art. 10.03, 10.08).
- Je weet wat er geldt bij het in- en uitvaren van een haven (art. 6.16) en voor golfslag (art. 6.20).

### Uitleg voor de kapitein

**Waar het geldt.** Hoofdstuk 10 is volgens bijlage 11 van toepassing op "de Maasmond, de Nieuwe Waterweg, het Scheur, de Nieuwe Maas, het Beerkanaal, het Calandkanaal, het Hartelkanaal en het Yangtzekanaal, alsmede de havens aan deze vaarwegen", en ook op de Oude Maas. Dus overal in de Havensim.

**Stuurboordszijde (6.04 lid 2).** "Indien twee schepen elkaar zodanig naderen op tegengestelde koersen, dat gevaar voor aanvaring bestaat, moet het schip dat niet de stuurboordszijde van het vaarwater volgt voorrang verlenen aan het schip dat de stuurboordszijde van het vaarwater volgt." Volgt geen van beide de stuurboordszijde, dan wijken twee grote motorschepen allebei naar stuurboord uit en passeren bakboord op bakboord (lid 4).

**Blauw bord (6.04a).** Een groot schip dat naar een haven, ligplaats of zijvaarwater aan zijn bakboordszijde wil, of daar vertrekt, mag van een tegenligger vragen om stuurboord op stuurboord te passeren. Het toont dan aan stuurboord een lichtblauw bord met een wit flikkerlicht, maar "nadat het zich er van heeft vergewist, dat het mogelijk is daaraan zonder gevaar te voldoen".

**Bovenmaats zeeschip (hoofdstuk 10).** "In afwijking van hoofdstuk 6 is een schip verplicht aan een bovenmaats zeegaand schip voorrang te verlenen" (10.08 lid 1). Je herkent het aan de tekens van art. 10.03: "’s nachts: drie rode rondom schijnende lichten in een verticale lijn" en "overdag: een zwarte cilinder". Tegenover zo'n schip werkt het blauwe bord niet: art. 6.04a is dan niet van toepassing (10.08 lid 3). Wanneer een zeeschip bovenmaats is, hangt af van de vaarweg (Regeling aanwijzing bovenmaatse schepen 2011, art. 1):

| Vaarweg (met de havens eraan) | Bovenmaats vanaf |
| --- | --- |
| Maasmond, Beerkanaal, Calandkanaal | diepgang 14,30 m (zout water) of lengte 300 m |
| Nieuwe Waterweg, Nieuwe Maas | diepgang 9 m of lengte 200 m |
| Oude Maas | diepgang 7 m of lengte 135 m |

Het Scheur noemt de regeling niet apart; de Havensim rekent het bij de Nieuwe Waterweg.

**Haven in of uit (6.16).** "Een schip mag slechts een haven of een nevenvaarwater uitvaren en daarbij een hoofdvaarwater invaren of oversteken dan wel een haven of een nevenvaarwater invaren, nadat het zich er van heeft vergewist dat dit zonder gevaar kan geschieden" (lid 1). Een klein schip verleent daarbij voorrang aan een groot schip (lid 3).

**Golfslag (6.20).** "Een schip moet zijn snelheid zodanig regelen, dat hinderlijke waterbeweging waardoor schade aan een varend of een stilliggend schip of drijvend voorwerp of aan een werk zou kunnen worden veroorzaakt wordt vermeden." Tijdig vaart minderen voor een havenmond en langs schepen die gemeerd liggen of laden en lossen. De wet noemt geen snelheid.

**In de Havensim:** de coach waarschuwt als je aan bakboordszijde vaart terwijl er een tegenligger komt, als een bovenmaats zeeschip dichtbij komt, als je een blauw bord toont tegenover een bovenmaats schip, en als je de hoofdvaarweg op vaart terwijl er binnen twee minuten een schip is. Langs ligplaatsen geeft hij boven 10 km/u door het water een advies; die grens is een keuze van de simulator. Oefenrit: Botlek, Botlek-zwaaikom (stilliggend), en vaar Het Scheur op als er verkeer komt.

### Rekenvoorbeeld

Een containerschip van 230 m met 11,5 m diepgang. Is het bovenmaats?

1. Nieuwe Waterweg: grens 200 m of 9 m. 230 ≥ 200: **ja**, bovenmaats. Het voert een zwarte cilinder en jij verleent voorrang.
2. Even later in het Calandkanaal: grens 300 m of 14,30 m. 230 < 300 en 11,5 < 14,30: **nee**, daar gelden de gewone regels van hoofdstuk 6.

Hetzelfde schip kan dus op de ene vaarweg bovenmaats zijn en op de andere niet.

### Voor de die-hards

- "Bovenmaats schip" is in art. 1.01 van het BPR een schip "behorende tot een daartoe door de bevoegde autoriteit aangewezen categorie"; de aanwijzing staat in de Regeling uit 2011 (geldig sinds 25-05-2011).
- Art. 6.16 lid 5: wie een lateraal gemarkeerd hoofdvaarwater binnenvaart (niet vanuit een lateraal gemarkeerd nevenvaarwater), verleent voorrang aan een schip dat langs de laterale markering de stuurboordszijde volgt.
- De Havenverordening Rotterdam 2020 (versie 2023) bevat geen eigen vaarregels voor deze situaties; die staan in het BPR.

### Controlevragen

1. Je vaart opwaarts aan bakboordszijde van Het Scheur. Er komt een binnenschip tegemoet aan zijn stuurboordszijde. Wie moet voorrang verlenen?
2. Je wilt een haven aan bakboord in en ziet een bovenmaats zeeschip naderen. Mag je het blauwe bord zetten?
3. Een tanker van 150 m met 7,5 m diepgang vaart de Oude Maas op. Bovenmaats?
4. Wat toont een bovenmaats zeeschip overdag?

**Antwoorden**

1. Jij: wie niet de stuurboordszijde volgt, verleent voorrang (6.04 lid 2).
2. Nee. Tegenover een schip met de tekens van art. 10.03 geldt 6.04a niet (10.08 lid 3), en je moet het bovenmaatse schip voorrang verlenen (10.08 lid 1).
3. Ja: op de Oude Maas is de grens 7 m of 135 m, en 7,5 m ≥ 7 m (en 150 m ≥ 135 m).
4. Een zwarte cilinder.

## Les 6 — BPR en RPR: wat is anders

Op de Rijn kiest de opvaart de weg en volgt de afvaart; in de haven volg je de stuurboordszijde van het vaarwater en verleen je voorrang aan bovenmaatse zeeschepen. Het RPR geldt in Nederland alleen op de Bovenrijn, het Pannerdensch Kanaal, de Nederrijn, de Lek en de Waal; daarbuiten, ook in de Rotterdamse haven, het BPR.

### Leerdoelen

- Je weet waar het RPR ophoudt en het BPR begint.
- Je kent de verschillen bij ontmoeten en bij het blauwe bord.
- Je weet wat er verandert aan marifoon en taal.

### Uitleg voor de kapitein

| Onderwerp | Rijn (RPR, stand 1-1-2026) | Haven Rotterdam (BPR, geldend sinds 17-06-2026) |
| --- | --- | --- |
| Ontmoeten | De opvaart laat de afvaart "een geschikte weg" vrij (6.04 lid 1); de afvaart volgt de weg die de opvaart aanwijst (lid 5) | Wie niet de stuurboordszijde volgt, verleent voorrang (6.04 lid 2) |
| Blauw bord | Getoond door het opvarende schip dat aan stuurboord de weg vrijlaat; het afvarende schip herhaalt het (6.04 lid 3 en 5) | Een groot schip dat naar een plek aan bakboord wil, mag stuurboord op stuurboord vragen (6.04a); de tegenligger moet daaraan voldoen. Niet tegenover een bovenmaats zeeschip (10.08 lid 3) |
| Zeeschepen | Geen aparte regeling | Hoofdstuk 10: voorrang aan een bovenmaats zeegaand schip (10.08), herkenbaar aan de zwarte cilinder (10.03) |
| Marifoon | Uitluisteren op het kanaal schip-schip en het kanaal voor nautische informatie (4.05 lid 5) | Uitluisteren op het kanaal van de verkeerssector; waar geen verkeerspost is, kanaal 10 (VHF-procedure HbR §7, §8) |
| Taal | Met een walstation de taal van het land van dat walstation; bij problemen Duits (4.05 lid 2) | Nederlands, in de buitensectoren tot en met Maas Entrance Engels (VHF-procedure §5) |

**Vertrouwd en toch anders.** Het blauwe bord ziet er in beide reglementen hetzelfde uit: een lichtblauw bord met een wit flikkerlicht aan stuurboord. Maar op de Rijn bepaalt de opvaart ermee hoe er gepasseerd wordt; in de haven vraagt een groot schip het alleen als het naar een plek aan bakboord moet, en tegenover een bovenmaats zeeschip helemaal niet.

**In de Havensim:** de coach volgt de BPR-regels. Wie uit Rijnsim komt: let vooral op de stuurboordszijde (de opvaart bepaalt hier niets) en op de zwarte cilinder.

### Voorbeeld uit de praktijk

Je bent opvarend en wilt een haven aan je bakboordszijde in. Er komt een afvarend schip tegemoet.

1. Op de Waal (RPR): jij als opvaart bepaalt de weg. Je toont het blauwe bord om stuurboord op stuurboord te passeren; het afvarende schip volgt en herhaalt het bord.
2. Op Het Scheur (BPR), tegenligger is een binnenschip: je mag als groot schip stuurboord op stuurboord vragen met het blauwe bord, nadat je hebt vastgesteld dat dit zonder gevaar kan (6.04a). De tegenligger moet daaraan voldoen.
3. Op Het Scheur, tegenligger is een bovenmaats zeeschip (zwarte cilinder): geen blauw bord. Je verleent voorrang, laat het zeeschip passeren en draait daarna de haven in.

### Voor de die-hards

- Het RPR wordt vastgesteld door de Centrale Commissie voor de Rijnvaart onder de Herziene Rijnvaartakte (Akte van Mannheim); het BPR is een Nederlandse regeling onder de Scheepvaartverkeerswet. Enkele BPR-artikelen gelden ook op de Rijntakken, bijvoorbeeld 8.01 tot en met 8.08 (NIPV-overzicht).
- RPR 6.05 geeft eigen uitzonderingen op de hoofdregel: een afvarend passagiersschip in geregelde dienst met minstens 300 passagiers dat wil aanleggen, en een afvarende sleep die moet opdraaien, mogen een andere weg verlangen.
- In het RPR komt het begrip bovenmaats niet voor.

### Controlevragen

1. Op welke Nederlandse wateren geldt het RPR?
2. Je komt van de Waal en vaart via de Nieuwe Maas naar de Botlek. Welk reglement geldt in de Botlek?
3. Wie bepaalt op Het Scheur hoe twee binnenschepen elkaar passeren?
4. Mag je op Het Scheur tegenover een bovenmaats zeeschip het blauwe bord zetten?

**Antwoorden**

1. Bovenrijn, Pannerdensch Kanaal, Nederrijn, Lek en Waal.
2. Het BPR, met hoofdstuk 10 (bijlage 11 noemt Het Scheur en de Nieuwe Maas).
3. Niemand kiest zoals de opvaart op de Rijn: wie de stuurboordszijde volgt, heeft voorrang. Alleen een groot schip dat naar een plek aan bakboord moet, mag stuurboord op stuurboord vragen.
4. Nee: 6.04a geldt niet tegenover een schip met de tekens van 10.03 (10.08 lid 3).

## Bronnen

| Bron | Versie | Gebruikt in |
| --- | --- | --- |
| [Binnenvaartpolitiereglement (BPR), wetten.overheid.nl](https://wetten.overheid.nl/BWBR0003628/) | geldend sinds 17-06-2026 | les 4, 5, 6 |
| [Regeling aanwijzing bovenmaatse schepen 2011, wetten.overheid.nl](https://wetten.overheid.nl/BWBR0029944/) | geldend sinds 25-05-2011 | les 5 |
| Rijnvaartpolitiereglement (RPR), Centrale Commissie voor de Rijnvaart | stand 1 januari 2026 | les 6 |
| Procedure VHF communication VTS and HCC, Havenbedrijf Rotterdam | versie 1.4, juli 2023 | les 4, 6 |
| [Havenverordening Rotterdam 2020, Havenbedrijf Rotterdam](https://www.portofrotterdam.com/sites/default/files/2023-06/havenverordening-rotterdam-2020-versie-2023.pdf) | versie 2023 | les 5 |
| [Hiërarchie Scheepvaartverkeerswet, NIPV](https://archief.nipv.nl/documenten/hierarchie-scheepvaartverkeerswet) | overzicht | les 6 (waar RPR en BPR gelden) |
| IENC Port of Rotterdam, Havenbedrijf Rotterdam via vaarweginformatie.nl | 25-08-2026 | les 1, 3 |
| Astronomische waterstand 2026 en stroommeting Spijkenisse, Rijkswaterstaat WaterWebservices | opgehaald oktober 2026 | les 1, 2 |
| [Huidige situatie en autonome ontwikkeling Rijn-Maasmonding (ZWENDL), Rijkswaterstaat](https://edepot.wur.nl/323390) | december 2004 | les 2 |

Getallen die de Havensim zelf afleidt (stroom per vaarweg, LAT uit één jaar getij, sectorgrenzen afgelezen van een schematische kaart) zijn benaderingen en staan in de lessen als zodanig vermeld.
