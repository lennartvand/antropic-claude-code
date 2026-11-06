# Lesmateriaal Rijn: waterstanden, diepte en verwachtingen

Oct 6, 2026 · @Lennart

## Inleiding

In negen lessen leer je een Rijnpegel te lezen zoals de waterbeheerder hem bedoelt: van pegelnulpunt tot zes-wekenverwachting, van Basel tot Rotterdam. Het lesmateriaal hoort bij Rijnsim; waar het kan, oefen je het geleerde daar.

Elke les heeft dezelfde opbouw:

- **Leerdoelen**: wat je na de les kunt.
- **Uitleg voor de kapitein**: wat je aan boord nodig hebt.
- **Rekenvoorbeeld**: met echte getallen.
- **Voor de die-hards**: de techniek en wetenschap erachter. Mag je overslaan.
- **Controlevragen**: met de antwoorden eronder.

| Les | Onderwerp |
| --- | --- |
| 1 | Pegels lezen: nulpunt, stand en afvoer |
| 2 | Kenmerkende waterstanden: GlW, OLR, MW en waarom ze elke tien jaar veranderen |
| 3 | Vaargeul en streefdiepte per traject, Basel – Rotterdam |
| 4 | Aflaaddiepte berekenen: rekenregel, kielspeling, squat en dalend water |
| 5 | Bodem en peilingen: minst gepeilde diepte, Tiefenatlas, zandgolven |
| 6 | Stroming: wat er wel en niet bestaat, en hoe Rijnsim rekent |
| 7 | Hoogwater: Marke I en II volgens RPR 10.01 |
| 8 | Verwachtingen: hoe BfG, HVZ en Rijkswaterstaat ze maken en hoe je ze leest |
| 9 | Zijrivieren: waar het water vandaan komt en wie ze voorspelt |

**Bronnen.** Alleen officiële bronnen: CCR, WSV/GDWS, BfG, BAW, Rijkswaterstaat en Deltares in opdracht van Rijkswaterstaat. Getallen uit eigen berekeningen met Rijnsim staan er als zodanig bij. Wat niet in een bron te vinden was, wordt gemeld en niet ingevuld.

## Les 1 — Pegels lezen: nulpunt, stand en afvoer

Een pegelstand is de hoogte van het water boven een vast nulpunt. Het is geen waterdiepte. Kaub 77 cm betekent dus niet dat er 77 cm water staat.

### Leerdoelen

Na deze les kun je:

1. uitleggen wat het pegelnulpunt is en waarom een stand geen diepte is;
2. een pegelstand omrekenen naar een hoogte boven NHN, en standen van twee pegels vergelijken;
3. het verschil uitleggen tussen waterstand (W) en afvoer (Q);
4. inschatten hoe oud en hoe betrouwbaar het getal op je scherm is.

### Uitleg voor de kapitein

**Het nulpunt.** Elke Duitse pegel heeft een eigen pegelnulpunt (PNP). Dat is een vaste hoogte in meters boven NHN, het Duitse landelijke hoogtestelsel. De stand is de loodrechte afstand van het wateroppervlak tot dat nulpunt. Het nulpunt ligt meestal onder de laagste stand die er ooit langdurig gemeten is, zodat de stand bijna altijd positief is ([PEGELONLINE](https://www.pegelonline.wsv.de/gast/hilfe)).

**Negatief kan ook.** Op 6 oktober 2026 rond 13:30 uur stond Worms op −25 cm en Emmerich op −20 cm (PEGELONLINE, ruwe data). Het nulpunt ligt dus "meestal" onder de laagste stand, niet altijd. Een negatieve stand is geen meetfout: het water staat dan onder het nulpunt van de pegel. Worms stond toen 93 cm onder zijn GlW van 68 cm.

**Elke pegel is anders.** Omdat elke pegel een eigen nulpunt heeft, zegt het getal alleen iets in vergelijking met de eigen kenmerkende waarden van die pegel. Maxau 372 cm en Kaub 77 cm zijn allebei precies GlW, de lage referentiestand (les 2). Wie de getallen naast elkaar legt zonder het nulpunt, vergelijkt appels met peren.

| Pegel | Rijn-km | PNP (m NHN) | PNP geldig sinds | GlW2022 (cm) |
| --- | --- | --- | --- | --- |
| Maxau | 362,3 | 97,721 | 18-07-2017 | 372 |
| Speyer | 400,6 | 88,467 | 18-07-2017 | 237 |
| Mannheim | 424,7 | 85,117 | 18-07-2017 | 155 |
| Worms | 443,4 | 84,112 | 18-07-2017 | 68 |
| Mainz | 498,3 | 78,373 | 01-11-2019 | 171 |
| Bingen | 528,4 | 76,185 | 01-11-2019 | 97 |
| Kaub | 546,2 | 67,669 | 01-11-2019 | 77 |
| Koblenz | 591,5 | 57,692 | 01-11-2019 | 77 |
| Köln | 688,0 | 35,038 | 01-11-2019 | 139 |
| Duisburg-Ruhrort | 780,8 | 16,106 | 01-11-2019 | 227 |
| Emmerich | 851,9 | 7,998 | 01-11-2019 | 74 |

Bronnen: PNP en km uit de [PEGELONLINE-API](https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json) (opgehaald 6-10-2026); GlW2022 uit [CCR-protocol 2022-II-19](https://ccr-zkr.org/files/infovoiedeau/Resolution2022-II-19_de.pdf).

**Nederland werkt anders.** Nederlandse peilschalen geven de stand direct in centimeters boven NAP. Lobith 733 betekent dus 7,33 m boven NAP (CCR-protocol 2022-II-19: "Niederländische Werte sind cm + NAP"). Daardoor zijn Nederlandse standen veel grotere getallen dan Duitse.

**Hoe vers is het getal?** De pegels in het binnenland geven meestal elke 15 minuten een nieuwe waarde. Wat je downloadt, zijn "ungeprüfte Rohdaten": ongecontroleerde meetwaarden, waar uitschieters en meetfouten in kunnen zitten ([PEGELONLINE](https://www.pegelonline.wsv.de/gast/hilfe)). Een enkele vreemde sprong is dus eerst een vraag, geen feit.

**Stand en afvoer.** Schippers denken in waterstand (W, in cm). Hydrologen rekenen in afvoer (Q, in m³/s): hoeveel water er per seconde langs stroomt. Hun model rekent een afvoer uit, en die wordt met de afvoerkromme van de pegel omgezet in een stand. Die kromme verandert in de loop der jaren, door bouwwerken en door bodem die bij hoogwater verschuift. Bij dezelfde afvoer kan de stand dus over de jaren veranderen ([BfG, FAQ 6-Wochen-Vorhersage](https://vorhersage.bafg.de/6-Wochen-Vorhersage/FAQ_6Wochen.pdf), stand 2-4-2025).

&#91;embedded content: Eigen afvoerkromme Rijnsim (uurwaarden PEGELONLINE 2019–2026); controlepunt CCR-protocol 2022-II-19\]

De kromme loopt steeds steiler: rond GlW hoort bij 10 cm stand ongeveer 50 m³/s, rond 300 cm ongeveer 72 m³/s.

### Rekenvoorbeeld

**1. Stand naar hoogte.** Kaub staat op 150 cm. De hoogte van het water bij de pegel is 67,669 + 1,50 = **69,169 m boven NHN**.

**2. Twee pegels vergelijken.** Kaub en Koblenz hebben allebei GlW 77 cm. Bij GlW staat het water bij Kaub op 67,669 + 0,77 = 68,439 m NHN. Bij Koblenz staat het op 57,692 + 0,77 = 58,462 m NHN. Dat is 9,98 m verval over 45,3 km: gemiddeld **ongeveer 22 cm per kilometer**. Hetzelfde getal op twee pegels betekent dus niet hetzelfde water.

**3. Stand naar afvoer** (eigen afvoerkromme, zie Voor de die-hards). Kaub 150 cm geeft ongeveer **1170 m³/s**.

**Oefenen in Rijnsim.** Kies zone 5, zet pegel Kaub op 77 cm en open de Expert-info. Daar zie je de afvoer die bij die stand hoort (ongeveer 777 m³/s) en de vaargeuldiepte op de plek van je schip.

### Voor de die-hards

**Een nulpunt heeft een datum.** PEGELONLINE geeft bij elk nulpunt een datum van geldigheid: voor de pegels tot en met Worms 18-07-2017, vanaf Mainz 01-11-2019. Reken je oude standen om naar NHN, gebruik dan het nulpunt dat toen gold.

**De afvoerkromme van Kaub.** Voor Rijnsim is uit de uurwaarden van stand en afvoer van 2019–2026 een kromme gefit: Q = 0,1445 · (W + 166)^1,5637, met W in cm en Q in m³/s. De mediane afwijking is 0,4 %. Een onafhankelijke controle is de CCR: bij GlW2022 (77 cm) hoort GlQ2022 = 773 m³/s. De kromme geeft 777 m³/s, een verschil van een half procent. Let op: dit is een eigen benadering, niet de officiële afvoerkromme van de WSV.

**Waarom de kromme buigt.** Bij lage standen is de rivier smal en ondiep; tien centimeter extra water voegt dan relatief weinig doorstroomoppervlak toe. Daarom wordt de kromme steeds steiler, zoals de grafiek laat zien.

**Waarom de BfG in afvoer rekent.** Afvoer is de grootheid die de natuur behoudt: wat bij Kaub langs stroomt, komt (plus de zijrivieren) ook bij Köln langs. Een stand hangt daarnaast af van de plaatselijke bodem en de vorm van de rivier. Daarom rekent het model in afvoer en wordt pas aan het eind, met de actuele kromme, omgerekend naar een stand (BfG, FAQ).

### Controlevragen

1. Kaub staat op 80 cm. Staat er 80 cm water in de vaargeul?
2. Kaub staat op 150 cm. Hoe hoog staat het water bij de pegel boven NHN?
3. Maxau staat op 400 cm en Kaub op 100 cm. Is het bij Maxau "hoger water"?
4. Lobith staat op 900. Wat betekent dat getal?
5. Op je scherm springt Kaub in een kwartier 30 cm omhoog en daarna weer terug. Hoe ga je daarmee om?
6. Waarom rekent de BfG haar verwachtingen eerst in afvoer uit en niet meteen in stand?

**Antwoorden**

1. Nee. De stand is de hoogte boven het pegelnulpunt. De diepte in de vaargeul reken je pas uit met de vaargeuldiepte bij GlW (les 3 en 4).
2. 67,669 + 1,50 = 69,169 m NHN.
3. Dat kun je zo niet zeggen. Elke pegel heeft een eigen nulpunt. Vergelijk elke stand met de GlW van die pegel: Maxau staat 28 cm boven zijn GlW (372), Kaub 23 cm boven zijn GlW (77). Beide pegels staan dus ongeveer even ver boven hun lage referentiestand.
4. 9,00 m boven NAP. Nederlandse peilschalen meten ten opzichte van NAP, niet ten opzichte van een eigen nulpunt.
5. Als een mogelijke meetfout: de waarden zijn ongecontroleerde ruwe data. Kijk of de buurpegels hetzelfde laten zien voordat je erop handelt.
6. Omdat afvoer de hoeveelheid water is die van pegel tot pegel meegaat. De stand hangt ook af van de plaatselijke bodem, die verandert. Het model rekent in afvoer en zet die aan het eind met de actuele afvoerkromme om in een stand.

## Les 2 — Kenmerkende waterstanden: GlW, OLR en MW

GlW (Duitsland) en OLR (Nederland) zijn dezelfde afspraak: de lage stand die gemiddeld op 20 ijsvrije dagen per jaar wordt onderschreden. Alle vaargeuldieptes op de Rijn worden ertegen afgemeten. Sinds 1 januari 2023 gelden GlW2022 en OLR2022, tot en met 2031.

### Leerdoelen

Na deze les kun je:

1. uitleggen wat GlW en OLR zijn en hoe vaak het water lager staat;
2. uitleggen waarom ze elke tien jaar opnieuw worden vastgesteld;
3. MW, MNW, HSW en de hoogwatermerken plaatsen;
4. een actuele stand beoordelen ten opzichte van GlW of OLR.

### Uitleg voor de kapitein

**De afspraak.** De Centrale Commissie voor de Rijnvaart (CCR) omschrijft de GlW als "der Wasserstand, der bei einem gleichwertigen niedrigen Abfluss mit einer Unterschreitungsdauer von 20 Tagen im langjährigen Mittel längs des Rheins auftritt" ([CCR-protocol 2022-II-19](https://ccr-zkr.org/files/infovoiedeau/Resolution2022-II-19_de.pdf)). Eerst wordt de bijbehorende afvoer bepaald, de GlQ: de afvoer die over een reeks van honderd jaar gemiddeld 20 ijsvrije dagen per jaar wordt onderschreden. Daarna volgt per pegel de stand die bij die afvoer hoort. In Nederland heet de afvoer OLA en de stand OLR. Voor Lobith is de OLA 1020 m³/s.

**Hoe vaak lager?** Twintig dagen per jaar is ongeveer 5 % van de tijd. Rijkswaterstaat schrijft dat de vaardiepte in die periode minder mag zijn dan de norm ([RWS, toelichting waterdieptekaarten 2018](https://geoweb.rijkswaterstaat.nl/ExterneDocumenten/ON_Waterdieptekaarten_Rijntakken/Toelichting%20Waterdieptekaarten%20Rijntakken%202018.1.pdf)). Onder GlW of OLR vaar je dus zonder garantie op de normdiepte.

**Elke tien jaar opnieuw.** De CCR stelt GlQ en GlW elke tien jaar opnieuw vast. Daarbij tellen twee dingen mee. Er komt langzaam minder water (de CCR noemt "Klimaveränderungen"), en de rivierbodem verandert, vooral door erosie. De herziening kwam een jaar later dan het ritme voorschrijft. Om dat ritme te houden, geldt GlW2022 maar negen jaar (CCR).

| Pegel | GlW2012 (cm) | GlW2022 (cm) | Verschil (cm) |
| --- | --- | --- | --- |
| Maxau | 369 | 372 | +3 |
| Speyer | 241 | 237 | −4 |
| Mannheim | 160 | 155 | −5 |
| Worms | 72 | 68 | −4 |
| Mainz | 168 | 171 | +3 |
| Kaub | 78 | 77 | −1 |
| Koblenz | 78 | 77 | −1 |
| Köln | 139 | 139 | 0 |
| Duisburg-Ruhrort | 233 | 227 | −6 |
| Emmerich | 84 | 74 | −10 |
| Lobith (cm+NAP) | 739 | 733 | −6 |
| Nijmegen (cm+NAP) | 523 | 516 | −7 |

Bron: CCR-protocol 2022-II-19, bijlage.

**De andere kenmerkende waarden.**

- **MW en MNW**: gemiddelde stand en gemiddelde laagwaterstand over een periode. In de verwachtingen van de BfG gaat het om 1-11-2010 tot en met 31-10-2020 ([BfG, FAQ](https://vorhersage.bafg.de/6-Wochen-Vorhersage/FAQ_6Wochen.pdf)).
- **MQ en MNQ**: hetzelfde, maar voor de afvoer en over veel langere reeksen. Voor Kaub loopt de reeks van 1930 tot en met 2020 (BfG, FAQ).
- **HSW**: de hoogste scheepvaartwaterstand, gebruikt voor verkeersregels ([PEGELONLINE](https://www.pegelonline.wsv.de/gast/hilfe)).
- **Hoogwaterpeil I en II** (Marke I en II): vanaf deze standen gelden de beperkingen van RPR 10.01. Dat komt in les 7.

&#91;embedded content: CCR-protocol 2022-II-19, bijlage: vastgestelde waarden 1932–2022\]

De grootste daling ligt vóór 1962 en na 1982. Voor Lobith is de OLA sinds 2002 gelijk gebleven (1020 m³/s). De 19 cm daling sindsdien komt daar dus uit de bodem (Deltares 2022, bijlage A).

### Rekenvoorbeeld

**1. Boven of onder GlW?** Duisburg-Ruhrort staat op 256 cm. GlW2022 is 227 cm, dus de stand ligt 29 cm boven GlW. Voor het rekenen met de vaargeul (les 4) is dat verschil het enige getal dat je nodig hebt.

**2. Lobith.** Lobith staat op 700 cm+NAP. De OLR is 733, dus het water staat 33 cm onder OLR. De normdiepte van 2,80 m in de vaargeul geldt dan niet meer.

**3. Een nieuwe GlW verandert je getal.** Emmerich staat op 80 cm. Onder GlW2012 (84) lag dat 4 cm onder GlW. Onder GlW2022 (74) ligt het 6 cm erboven. Gebruik daarom altijd de GlW die nu geldt.

### Voor de die-hards

**Waarom honderd jaar?** Een lange reeks maakt de GlQ ongevoelig voor een paar natte of droge jaren. De CCR schrijft dat de werkwijze langjarige trends meeneemt "und ist dennoch ausreichend stabil bzw. unempfindlich gegenüber kurz- und mittelfristigen hydrologischen Schwankungen". De keerzijde: de GlQ2022 ligt maar 5–19 m³/s lager dan de GlQ2012. Kaub bijvoorbeeld ging van 784 naar 773 m³/s.

**Achter de feiten aan.** Deltares deed in opdracht van Rijkswaterstaat onderzoek naar de OLA. Volgens dat onderzoek loopt een tienjaarlijkse herziening bij snelle klimaatverandering "achter de feiten aan". Met de huidige methode neemt de OLA richting 2050 met enkele tientallen m³/s af. Deltares raadt aan de OLA vaker dan eens per tien jaar bij te stellen, of de middelingsperiode korter te maken ([Deltares 2022](https://publications.deltares.nl/11208077_005_0003.pdf)).

**Ud-dagen.** De waterspiegels van de BfG (FLYS) zijn genoemd naar het aantal onderschrijdingsdagen: Ud=1, Ud=5 … Ud=360. De GlQ hoort daarbij bij 20 dagen. Rijnsim rekent met deze toestanden (les 6).

**Oude Duitse waarden.** In de historische tabel van de CCR staan voor 1932 getallen als Worms −86 en Mainz −17 cm. Die zijn niet zonder meer te vergelijken met de huidige waarden, en de bron licht ze niet toe. De Nederlandse waarden staan in cm+NAP en zijn wél vergelijkbaar; daarom laat de grafiek die zien.

### Controlevragen

1. Hoeveel dagen per jaar staat het water gemiddeld onder GlW?
2. Waarom wordt de GlW elke tien jaar opnieuw vastgesteld? Noem twee redenen.
3. Tot wanneer geldt GlW2022?
4. Lobith staat op 760 cm+NAP. Boven of onder OLR, en hoeveel?
5. Waarom zakt de OLR in Nederland al decennia, terwijl de OLA sinds 2002 op 1020 m³/s staat?

**Antwoorden**

1. Gemiddeld 20 ijsvrije dagen, ongeveer 5 % van de tijd.
2. De afvoer verandert langzaam, onder meer door klimaatverandering, en de rivierbodem verandert, vooral door erosie.
3. Tot en met 31 december 2031.
4. 27 cm boven OLR (760 − 733).
5. Door bodemerosie: bij dezelfde afvoer staat het water lager. Dat is een van de redenen om de OLR elke tien jaar opnieuw vast te stellen (Deltares 2022).

## Les 3 — Vaargeul en streefdiepte per traject

De vaarwegbeheerder houdt de vaargeul bij GlW of OLR op een afgesproken diepte. Die diepte loopt langs de Rijn uiteen van 1,90 m tussen Mainz en St. Goar tot 2,80 m van Duisburg tot in Nederland. Het smalste en ondiepste stuk, de Rheingau en de Gebirgsstrecke, bepaalt voor veel reizen hoeveel je kunt laden.

### Leerdoelen

Na deze les kun je:

1. voor elk traject tussen Iffezheim en de Nederlandse takken de vaargeuldiepte noemen;
2. uitleggen waarom het traject Mainz – St. Goar het knelpunt is, en wat de Abladeoptimierung daaraan doet;
3. het verschil uitleggen tussen de vaargeul en de rest van de vaarweg;
4. weten welke getallen de WSV en Rijkswaterstaat publiceren.

### Uitleg voor de kapitein

**Wat de beheerder belooft.** De vaargeul is het deel van de rivier dat de beheerder op diepte houdt. Die diepte geldt bij GlW (Duitsland) of OLR (Nederland). Staat het water hoger, dan is de vaargeul dieper. Staat het lager, dan geldt de belofte niet (les 2).

&#91;embedded content: ELWIS Fahrrinnensituation; GDWS Mittelrheinoptimierung; Deltares 2022 (Nederland)\]

| Traject | Rijn-km | Diepte | Breedte | Bron |
| --- | --- | --- | --- | --- |
| Iffezheim – Budenheim (Mainz) | 334 – 508 | 2,10 m onder GlW | — | ELWIS, GDWS |
| Budenheim – St. Goar | 508 – 557 | 1,90 m onder GlW | — | ELWIS, GDWS |
| St. Goar – Koblenz | 557 – 592 | 2,10 m onder GlW | — | ELWIS, GDWS |
| Koblenz – Duisburg | 592 – 763 | 2,50 m onder GlW | — | ELWIS |
| Duisburg – grens | 763 – 857 | 2,80 m onder GlW | — | ELWIS |
| Boven-Rijn en Waal tot nabij Tiel | tot 917 | 2,80 m onder OLR | 150 m | Deltares 2022 |
| Pannerdensch Kanaal | — | 2,80 m onder OLR | 80 m | Deltares 2022 |
| Neder-Rijn tot Driel | tot 890 | 2,80 m onder OLR | — | Deltares 2022 |
| IJssel tot Wijhe | tot 967 | 2,50 m onder OLR, daarna oplopend tot 3,50 m | — | Deltares 2022 |

Bronnen: [ELWIS, Fahrrinnensituation](https://www.elwis.de/DE/Service/Telematikanwendungen/Inland-ECDIS/Allgemeines/ARGO/Fahrrinnensituation/Fahrrinnensituation-node.html); [GDWS, Mittelrheinoptimierung](https://www.gdws.wsv.bund.de/Webs/Projektseite/Mittelrheinoptimierung/DE/01_Startseite/startseite_node.html); [Deltares 2022](https://publications.deltares.nl/11208077_005_0003.pdf). Benedenstrooms van Tiel en Driel wordt de diepte groter. Voor Basel – Iffezheim, het gestuwde deel met sluizen, staat geen vaargeuldiepte in de gebruikte bronnen.

**Waarom 1,90 m tussen Mainz en St. Goar?** In de Rheingau en de Gebirgsstrecke laat de vorm van de rivierbodem 2,10 m niet toe (ELWIS). De WSV maakt hier alleen de diepte onder GlW bij de pegels Kaub en Oestrich bekend. ELWIS schrijft erbij dat het daarom aan de streekkundige schipper is om de werkelijke diepten zo goed mogelijk te benutten.

**De Abladeoptimierung Mittelrhein.** Dit project moet de vaargeul tussen Budenheim en St. Goar (km 508,0 – 557,0) verdiepen van 1,90 naar 2,10 m onder GlW. Er zijn drie deeltrajecten: Oestrich/Kemptener Fahrwasser (km 508–528), Lorcher Werth/Bacharacher Werth (km 528–547,5) en Jungferngrund/Geisenrücken (km 547,5–557). Voor het eerste deeltraject was in april 2026 de scoping. Er is nog geen datum waarop de diepere vaargeul klaar is (GDWS).

**Buiten de vaargeul.** In Nederland is er buiten de vaargeul geen harde norm. Rijkswaterstaat houdt voor de Waal OLR − 2,0 m aan en elders OLR − 1,8 m ([RWS, toelichting 2018](https://geoweb.rijkswaterstaat.nl/ExterneDocumenten/ON_Waterdieptekaarten_Rijntakken/Toelichting%20Waterdieptekaarten%20Rijntakken%202018.1.pdf)). Wie de vaargeul verlaat, kan dus op minder diepte rekenen.

### Rekenvoorbeeld

**Hoeveel vaargeul bij Kaub 120 cm?** De vaargeul is 1,90 m onder GlW, en GlW Kaub is 77 cm. Het water staat 120 − 77 = 43 cm boven GlW. De vaargeul is dan 1,90 + 0,43 = **2,33 m** diep. In les 4 gaat hier de veiligheidsmarge nog af.

**Oefenen in Rijnsim.** Zet in zone 5 pegel Kaub op 120 cm. Vaar bij Oberwesel (km 550) en lees in de Expert-info de vaargeuldiepte af: 2,33 m, precies de som hierboven.

### Voor de die-hards

**Twee doelen in één project.** De Abladeoptimierung kent twee doelen: 2,10 m onder GlW20 bij laag water, en 3,40 m onder GlW183 bij middenafvoer (GDWS). Naar analogie van GlW20 is GlW183 de stand die op 183 dagen per jaar wordt onderschreden, ongeveer de helft van het jaar. De GDWS-pagina geeft die definitie niet zelf. Het project moet dus ook bij gewoon water meer lading mogelijk maken.

**Van 2,50 naar 2,80 m in Nederland.** In de jaren negentig werd voor de Waal een toekomstbeeld geschetst: in 2010 een vaargeul van 2,80 m diep en 170 m breed bij OLR, in plaats van 2,50 m en 150 m. Volgens Deltares bestaat er geen CCR-besluit dat de verandering naar 2,80 m expliciet vastlegt. De CCR nam het getal over na bilaterale afspraken tussen Nederland en Duitsland, het Rhein-Waal-protocol. Het toekomstbeeld voor de breedte is 170 m ([Deltares 2022](https://publications.deltares.nl/11208077_005_0003.pdf)).

**Het baggerreferentievlak.** Rijkswaterstaat houdt de vaargeul op diepte tot het vlak OLR − 2,80 m. Komt dat vlak onder de gemiddelde bodem in de vaargeul te liggen, dan is baggeren niet meer genoeg. Knelpunten zijn plekken waar niet gebaggerd wordt, sluisdrempels, voorhavens en de vaste lagen bij Nijmegen en Erlecom (Deltares 2022).

**Rijnsim.** De vaargeul in Rijnsim komt uit de officiële vaarwegkaart (Inland ENC) van de WSV. Zone 7 heeft overal 2,10 m onder GlW; in zone 5 wisselen 2,10, 1,90 en 2,50 m elkaar af. Binnen de vaargeul is Rijnsim nooit ondieper dan die garantie. Waar de gemeten bodem (DGM-W, 2003–2010) dieper is, geldt de gemeten diepte. In zone 7 is de vaargeul bij GlQ in de mediaan 3,0 m diep, en 99,3 % is minstens 2,10 m. Tot 6 oktober 2026 telde Rijnsim 0,3 m bij de garantie op; dat is weggehaald, zodat de ondiepe plekken nu met de meting kloppen.

### Controlevragen

1. Hoe diep is de vaargeul tussen Koblenz en Duisburg bij GlW?
2. Waarom is het traject Budenheim – St. Goar maar 1,90 m?
3. Kaub staat op 95 cm. Hoe diep is de vaargeul tussen Mainz en St. Goar?
4. Je moet bij laag water op de Waal uitwijken buiten de vaargeul. Op welke diepte kun je volgens de norm nog rekenen?
5. Wat wil de Abladeoptimierung Mittelrhein bereiken, en hoe ver is het project?

**Antwoorden**

1. 2,50 m onder GlW.
2. De vorm van de rivierbodem in de Rheingau en de Gebirgsstrecke laat 2,10 m niet toe.
3. 1,90 + (0,95 − 0,77) = 2,08 m.
4. Er is buiten de vaargeul geen harde norm. Rijkswaterstaat houdt voor de Waal OLR − 2,0 m aan: bij OLR dus 2,0 m water, 80 cm minder dan in de vaargeul.
5. Een vaargeul van 2,10 m onder GlW tussen km 508 en 557, plus 3,40 m bij middenafvoer. Het project zit in de planfase; er is nog geen datum waarop het klaar is.

## Les 4 — Aflaaddiepte berekenen

Je maximale diepgang is de vaargeuldiepte bij de huidige stand, min een veiligheidsmarge van minstens 30 cm, min wat je onderweg verliest: dalend water en het inzinken van je schip in de vaart (squat). Het ondiepste traject van je reis bepaalt de uitkomst.

### Leerdoelen

Na deze les kun je:

1. met de rekenregel van de WSV de vaargeuldiepte bij de actuele stand uitrekenen;
2. het knelpunt van je reis vinden;
3. uitleggen waarom de marge van 30 cm soms te krap is;
4. dalend water en squat meenemen in je beslissing.

### Uitleg voor de kapitein

**De rekenregel.** De GDWS geeft deze regel ([GDWS, FAQ Fahrrinnentiefe](https://www.gdws.wsv.bund.de/SharedDocs/FAQs/DE/2_Niedrigwasser/Berechnung_Fahrrinnentiefe_faq.html)):

```latex
\text{vaargeuldiepte} = \text{vaargeuldiepte bij GlW} + (\text{stand} - \text{GlW})
```

Het voorbeeld van de GDWS: Duisburg-Ruhrort op 2 juli 2023 om 5:00 uur, stand 2,56 m. De vaargeul is daar 2,80 m bij GlW 2,27 m. Dan is de vaargeul 2,80 + (2,56 − 2,27) = 3,09 m.

**De veiligheidsmarge.** Van die 3,09 m gaat volgens de GDWS minstens 30 cm af. In het voorbeeld blijft dan 2,79 m diepgang over. De GDWS schrijft erbij: "In besonderen Situationen kann auch ein deutlich höherer Sicherheitsabstand erforderlich sein." De BAW noemt zo'n situatie: boven een rotsige bodem of grof grind is duidelijk meer water onder de kiel nodig dan boven zand of fijn grind ([BAW, Engpassanalyse Rhein](https://izw.baw.de/publikationen.php?file=kolloquien%2F0%2Fkurzfassung_soehngen_dettmann_kluepfel.pdf)). De Gebirgsstrecke is zo'n plek.

**Squat: je schip zakt in de vaart.** Een varend schip zakt dieper dan stilliggend. De BAW mat dat in 2003 bij GlW in de Gebirgsstrecke. Een groot motorschip (GMS) zakte in een knelpunt gemiddeld 0,2 tot 0,3 m in. Door langzamer te varen kan dat naar ongeveer 0,1 m: ongeveer 10 km/u door het water in plaats van de 14 km/u uit de proeven, en minstens 5 km/u over de grond ([BAW-kolloquium 2005](https://izw.baw.de/publikationen/kolloquien/0/squat-Soehngen_niesler.pdf)). Of de 30 cm van de GDWS voor squat bedoeld is, staat niet in de bron. Reken het dus apart.

**Dalend water onderweg.** Daalt het water terwijl je onderweg bent, dan is het knelpunt ondieper als je er aankomt. De BAW rekende uit hoeveel dat gemiddeld scheelt, bij de afvoer waarbij een GMS net 3,0 m kan laden. Tussen Koblenz en Mainz is dat ongeveer 12 cm per dag, op de Niederrhein ongeveer 6 cm per dag. Wie een dag onderweg is naar het knelpunt, laadt daar dus ongeveer 12 cm minder (BAW, Engpassanalyse). De verwachting van de BfG (les 8) laat zien of het water daalt of stijgt.

**Het knelpunt van je reis.** Reken de vaargeuldiepte uit voor elk traject waar je langs komt, elk met de stand en de GlW van de pegel van dat traject. Het kleinste getal is je knelpunt. Voor de Rheingau en de Gebirgsstrecke publiceert de WSV de streefdiepte bij Kaub en Oestrich (ELWIS). Bij elke Rijnpegel geeft PEGELONLINE de vaargeuldiepte onder GlW die de WSV daar aanhoudt (kenmerkende waarde "TuGLW"): 2,10 m van Maxau tot Mainz, 1,90 m bij Oestrich, Bingen en Kaub, 2,10 m bij Koblenz, 2,50 m van Andernach tot Düsseldorf en 2,80 m van Ruhrort tot Emmerich. Reken dus per pegel op je route.

### Rekenvoorbeeld

Reis Rotterdam – Mannheim. Aan de start staan de pegels zo: Duisburg-Ruhrort 300 cm, Köln 200 cm, Kaub 110 cm, Maxau 450 cm.

| Traject | Pegel | Stand − GlW | Vaargeul bij GlW | Vaargeul nu |
| --- | --- | --- | --- | --- |
| Duisburg – grens | Ruhrort | 300 − 227 = +73 cm | 2,80 m | 3,53 m |
| Koblenz – Duisburg | Köln | 200 − 139 = +61 cm | 2,50 m | 3,11 m |
| Budenheim – St. Goar | Kaub | 110 − 77 = +33 cm | 1,90 m | **2,23 m** |
| Iffezheim – Budenheim | Maxau | 450 − 372 = +78 cm | 2,10 m | 2,88 m |

1. **Knelpunt**: Budenheim – St. Goar, 2,23 m.
2. **Veiligheidsmarge** 30 cm: 2,23 − 0,30 = 1,93 m.
3. **Dalend water**: je bent ongeveer twee dagen onderweg naar de Gebirgsstrecke. Reken 12 cm per dag: 1,93 − 0,24 = **1,69 m**.
4. **Squat**: vaar door de knelpunten langzaam. De BAW meet dan nog ongeveer 0,1 m inzinking. Of je dat bovenop de 30 cm wilt rekenen, beslis je zelf, en het hangt af van de bodem op die plek.

Geeft de BfG-verwachting een stijgende Kaub, dan valt stap 3 gunstiger uit. Daalt Kaub sneller dan 12 cm per dag, dan ongunstiger.

**Oefenen in Rijnsim.** Open in Rijnsim het venster Aflaaddiepte en kies Hele Duitse Rijn. Vul de standen van dit rekenvoorbeeld in, of haal de actuele standen op (alleen in het offline bestand met internet). De rekenhulp zoekt het knelpunt en trekt marge en reserves af. Met Neem over zet je die diepgang op je eigen schip. Of zet zone 5 op Kaub 110 cm en de diepgang van je eigen schip op 2,20 m (Instellingen). Binnen de vaargeul kom je overal door. Vaar je er bij de Werthen buiten, dan kun je vastlopen waar de gemeten bodem te hoog ligt. Rijnsim rekent squat mee: zakt het water onder de kiel in de vaart onder 0,30 m, dan waarschuwt de coach. Minder vaart geeft minder inzinking.

### Voor de die-hards

**Hoe squat ontstaat.** Rond een varend schip daalt de waterspiegel, omdat het water versneld langs de romp moet. Het schip zakt mee met die daling. De BAW benadert de inzinking als evenredig met die waterspiegeldaling. Daar komt extra inzinking bij aan boeg en hek, door de dwarsstroming en de zuiging van de schroef. Het model van de BAW (BSquat) rekent met de echte dwarsprofielen, inclusief de luwte achter de kribben. Het voorspelt de squat tot op 6 à 8 cm nauwkeurig (BAW 2005).

**Waarom de Gebirgsstrecke extra lastig is.** Bij GlW stroomt het daar ongeveer 1,4 m/s (BAW 2005). Wie langzamer door het water vaart om squat te beperken, gaat over de grond haast niet meer vooruit. Daarom gaat de BAW uit van minstens 5 km/u over de grond.

**Het knelpunt verhuist.** De bodem van de Gebirgsstrecke ligt niet vast. Bij de peiling van 1990 lag het abladebepalende punt bij GlW tussen Bingen en de Geisenrücken. Bij de peiling van 1995 lag het bij de Klein Lorcher Werth en de Geisenrücken (BAW, Engpassanalyse). De garantie onder GlW geldt voor de hele vaargeul, maar het werkelijk ondiepste punt verschuift.

**Hydrologisch risico.** In het rekenvoorbeeld van de BAW kan een GMS met 3,0 m diepgang in de Gebirgsstrecke maar ongeveer een derde van het jaar volgeladen varen. Op de Niederrhein kan hij op ongeveer 20 % van het jaar niet volgeladen varen. Op de Niederrhein daalt het water bij die stand ook trager. De Gebirgsstrecke dwingt dus om voorzichtiger te laden (BAW, Engpassanalyse).

### Controlevragen

1. Ruhrort staat op 260 cm. Hoe diep is de vaargeul Duisburg – grens, en wat is je maximale diepgang met de marge van de GDWS?
2. Kaub staat op 95 cm. Je bent anderhalve dag onderweg naar de Gebirgsstrecke. Wat is je maximale diepgang zonder squat?
3. Waarom is 30 cm marge in de Gebirgsstrecke soms te weinig?
4. Hoeveel zakt een GMS volgens de BAW in een knelpunt in, en hoe beperk je dat?
5. Je reist van Rotterdam naar Basel. Waarom kijk je naar Kaub en niet naar Lobith?

**Antwoorden**

1. 2,80 + (2,60 − 2,27) = 3,13 m; min 0,30 = 2,83 m.
2. 1,90 + (0,95 − 0,77) = 2,08 m; min 0,30 = 1,78 m; min 1,5 × 12 cm = 0,18 m: ongeveer 1,60 m.
3. Boven een rotsige of grofkorrelige bodem is meer water onder de kiel nodig dan boven zand of grind (BAW). De GDWS zegt zelf dat de marge in bijzondere situaties duidelijk groter moet zijn.
4. Gemiddeld 0,2–0,3 m. Langzamer varen brengt het terug tot ongeveer 0,1 m.
5. Omdat de Rheingau en de Gebirgsstrecke (1,90 m onder GlW, pegel Kaub) bijna altijd het knelpunt zijn. Lobith zegt iets over de Boven-Rijn en de Waal, waar de vaargeul 2,80 m is.

## Les 5 — Bodem en peilingen

De rivierbodem ligt niet stil. Daarom peilen de beheerders de vaargeul regelmatig. Rijkswaterstaat maakt bij laag water elke dag de minst gepeilde diepte (MGD) per traject bekend. De WSV publiceert dieptekaarten per kaartblad, elk met een eigen peildatum.

### Leerdoelen

Na deze les kun je:

1. uitleggen wat de minst gepeilde diepte is en wanneer Rijkswaterstaat hem publiceert;
2. de MGD-trajecten op de Rijntakken noemen;
3. inschatten hoe oud en hoe betrouwbaar een dieptekaart is;
4. uitleggen waarom het ondiepste punt van een traject verschuift.

### Uitleg voor de kapitein

**Minst gepeilde diepte (MGD).** Rijkswaterstaat peilt op de Rijntakken systematisch de kleinste waterdiepte in de vaargeul en maakt per riviertak de grootste beperking bekend. Dat gebeurt zodra en zolang die diepte ergens in de vaargeul onder een kritische grens komt. Volgens de Staatscourant is dat voor Millingen – Loevestein bij 350 cm of minder. Sinds augustus 2018 stelt Rijkswaterstaat de MGD voor de Boven-Rijn en de Waal dagelijks vast, en niet meer voor één traject maar voor drie ([Deltares 2020, i.o.v. RWS](https://open.rijkswaterstaat.nl/publish/pages/117985/verwachting_waterdiepte_rijntakken.pdf)). Zo zie je ook wat de beperking is als je maar een deel van de Waal vaart.

| Riviertak | MGD-trajecten |
| --- | --- |
| Boven-Rijn en Waal | Lobith – Maas-Waalkanaal · Maas-Waalkanaal – Amsterdam-Rijnkanaal · Amsterdam-Rijnkanaal – Loevestein |
| Pannerdensch Kanaal | Pannerdensche Kop – IJsselkop |
| Neder-Rijn | IJsselkop – Driel · Driel – Amsterdam-Rijnkanaal |
| Lek | Amsterdam-Rijnkanaal – Hagestein · Hagestein – Schoonhoven |
| IJssel | IJsselkop – Twentekanaal · Twentekanaal – Zwolle-IJsselkanaal · Zwolle-IJsselkanaal – Ketelmeer |

Bron: Deltares 2020, tabel 1-1. Hagestein – Schoonhoven staat niet als officiële MGD-traject in de Staatscourant; Deltares nam het wel mee.

**Hoe er gepeild wordt.** Rijkswaterstaat peilt het hele zomerbed met multibeam, tussen de normaallijnen, op een raster van 1 bij 1 meter. Dat gebeurt tegenwoordig twee keer per jaar, in het voorjaar en het najaar. Zo'n peiling duurt enkele weken en is dus geen momentopname. Daarnaast zijn er de CoVadem-gegevens: schepen met CoVadem-apparatuur meten de diepte onder de kiel, en die wordt omgerekend naar een waterdiepte (Deltares 2020).

**Zandgolven.** Op de bodem liggen zandgolven van meer dan een meter hoog. Ze schuiven met ongeveer een kilometer per jaar stroomafwaarts. Rijkswaterstaat baseert beslissingen daarom niet alleen op de nieuwste peiling ([RWS, toelichting 2018](https://geoweb.rijkswaterstaat.nl/ExterneDocumenten/ON_Waterdieptekaarten_Rijntakken/Toelichting%20Waterdieptekaarten%20Rijntakken%202018.1.pdf)).

**Duitsland: de Tiefenatlas.** De WSV publiceert de dieptes als pdf-kaarten in de Tiefenatlas op ELWIS. Elk kaartblad heeft een eigen datum en de bladen worden niet in een vaste volgorde bijgewerkt. Het blad Rhein km 350–360 is bijvoorbeeld gepeild in januari 2025 ([ELWIS, Tiefenatlas](https://www.elwis.de/DE/Service/Tiefenatlas-BWaStr/Rhein/20250804-350-360.pdf?__blob=publicationFile&v=3)). Kijk dus altijd naar de datum op het blad.

### Rekenvoorbeeld

**1. Een MGD gebruiken.** Rijkswaterstaat meldt voor Lobith – Maas-Waalkanaal een MGD van 2,90 m. Met dezelfde 30 cm marge als de GDWS hanteert, kun je op dat traject 2,60 m diep varen. Let op: een Nederlandse marge staat niet in de gebruikte bronnen.

**2. Hoe oud is je kaart?** Een zandgolf schuift ongeveer 1 km per jaar. Op een peiling van zes maanden oud kan de top van een zandgolf dus ongeveer 500 m verder liggen dan de kaart laat zien.

### Voor de die-hards

**CoVadem.** De gegevens van CoVadem zijn lijnen langs de vaarroutes van de schepen die meten. Daartussen is geen informatie over de bodem. Deltares noemt nog meer nadelen ten opzichte van multibeam: ze vragen meer verwerking, dekken niet altijd en overal goed, zijn van mindere kwaliteit en zijn geen eigendom van Rijkswaterstaat. De dekking wordt beter als je ook de lijnen van voorgaande dagen meeneemt (Deltares 2020).

**Een verwachting van de diepte.** Na de droogte van 2018 onderzocht Deltares voor Rijkswaterstaat of er een verwachting van de waterdiepte op de Rijntakken kon komen, 6 tot 8 weken vooruit. Het advies: in 2021 als proef zulke verwachtingen afgeven tijdens droogte, met een vaste bodem. Of dat inmiddels gebeurt, staat niet in de gebruikte bronnen (Deltares 2020).

**De dieptekaarten Rijntakken.** De kaartenset van 2018 vergelijkt de bodem met de scheepvaartnormen. Hij is gebaseerd op peilingen uit 1999–2012. Voor elke gridcel middelt Rijkswaterstaat de bodemhoogte over een strook van 500 m lang en 20 m breed. Een nieuwe versie stond gepland voor eind 2025, na de grote projecten van Ruimte voor de Rivier en de nieuwe OLR (RWS, toelichting 2018).

**Rijnsim.** Rijnsim gebruikt de gemeten bodem uit het DGM-W van de BfG/WSV: 1 m resolutie, opnames 2003–2010 ([Weber 2020, PANGAEA](https://doi.org/10.1594/PANGAEA.919308), CC-BY 4.0). In zone 7 is 99,3 % van de vaargeul bij GlQ minstens 2,10 m diep. De plekken die ondieper zijn, liggen bij de bekende gronden: Zollgrund, Karlsruher Grund en Maxauer Grund (km 353–359).

### Controlevragen

1. Wanneer maakt Rijkswaterstaat de MGD bekend?
2. Je vaart van Lobith naar het Maas-Waalkanaal. Welke MGD is voor jou van belang?
3. Waarom is een multibeampeiling geen momentopname?
4. Je dieptekaart van de Waal is een jaar oud. Waar moet je rekening mee houden?
5. Waar vind je de Duitse dieptekaarten, en waar let je op?

**Antwoorden**

1. Zodra en zolang de diepte ergens in de vaargeul onder een kritische grens komt; voor Millingen – Loevestein is dat 350 cm of minder.
2. De MGD van het traject Lobith – Maas-Waalkanaal. Sinds 2018 wordt die apart bekendgemaakt.
3. Omdat het peilen van het hele zomerbed enkele weken duurt.
4. Zandgolven van meer dan een meter kunnen ongeveer een kilometer verschoven zijn.
5. In de Tiefenatlas op ELWIS. Elk kaartblad heeft een eigen peildatum; kijk hoe oud het is.

## Les 6 — Stroming

Voor de vrije Rijn bestaan geen openbare stroomkaarten per plek. Wel openbaar zijn de waterstand per 100 m (FLYS van de BfG) en de gemeten bodem (DGM-W). Rijnsim rekent daar de stroming mee uit: de afvoer verdeeld over de echte dwarsdoorsnede.

### Leerdoelen

Na deze les kun je:

1. noemen welke stromingsinformatie openbaar is en welke niet;
2. uitleggen waarom het op de ene plek harder stroomt dan op de andere;
3. uitleggen hoe Rijnsim de stroming berekent en hoe nauwkeurig dat is.

### Uitleg voor de kapitein

**Wat er is.**

- **Duitsland**: geen openbare stroomkaarten. De BAW heeft eigen vaardynamische modellen, zoals VSCHIFF (squat, snelheid, vermogen, aflaaddiepte) en PeTra (benodigde vaarbreedte, met de stroming erin) ([BAW, Engpassanalyse](https://izw.baw.de/publikationen.php?file=kolloquien%2F0%2Fkurzfassung_soehngen_dettmann_kluepfel.pdf)). Die zijn niet vrij beschikbaar.
- **Openbaar**: de waterspiegellijnen van de BfG (FLYS), voor 30 afvoertoestanden, elke 100 m van km 336,2 tot 865,7. Ze zijn te krijgen via het R-pakket hyd1d. Daarnaast de gemeten rivierbodem: het DGM-W, Iffezheim – Kleve, opnames 2003–2010.
- **Nederland**: Waterinfo van Rijkswaterstaat heeft een stromingskaart met losse meetpunten ([waterinfo.rws.nl](https://waterinfo.rws.nl/#!/kaart/stroming)).

Hoe vaak de BfG de FLYS-lijnen bijwerkt, staat niet in de gebruikte bronnen.

**Waarom het overal anders stroomt.** Het water dat bij een pegel langskomt, moet overal door de rivier. Is de rivier smal of ondiep, dan moet het harder stromen. Is ze breed of diep, dan stroomt het trager. Daarbij komt het verval: tussen Kaub en Koblenz zakt de waterspiegel bij GlW ongeveer 22 cm per kilometer (les 1). Bij GlW stroomt het in de Gebirgsstrecke ongeveer 1,4 m/s, ruim 5 km/u ([BAW-kolloquium 2005](https://izw.baw.de/publikationen/kolloquien/0/squat-Soehngen_niesler.pdf)).

&#91;embedded content: Eigen berekening Rijnsim (DGM-W + FLYS), BOUWLOG 6-10-2026; benadering, geen meting\]

In het oude, geschatte model van Rijnsim stroomde het overal ongeveer even hard: bij MW 7,5–8,8 km/u boven Mannheim. Met de gemeten bodem komen de verschillen tussen de trajecten naar voren.

### Rekenvoorbeeld

**Gemiddelde stroom uit afvoer en doorsnede.** Bij Kaub 200 cm stroomt ongeveer 1474 m³/s (les 1). Is de rivier op een plek 250 m breed en gemiddeld 3,5 m diep, dan is de doorsnede 875 m². De gemiddelde stroom is 1474 / 875 = 1,7 m/s, ongeveer 6 km/u. Midden in de vaargeul, waar het dieper is, gaat het harder, langs de oever trager.

**Oefenen in Rijnsim.** Vaar in zone 7 bij MW (Maxau 496 cm) eerst bij km 350 en daarna bij km 430. Lees de stroom af in de Expert-info. Bij km 350 is hij ruim twee keer zo groot als bij km 430.

### Voor de die-hards

**De formule van Rijnsim.** Rijnsim verdeelt de afvoer Q over de dwarsdoorsnede volgens de formule van Manning. Daarin is de stroom op een punt evenredig met de diepte tot de macht 2/3. Voor elke rij van 10 m:

```latex
v(d) = \frac{Q}{\sum_j h_j^{5/3}\,\Delta d}\; h(d)^{2/3}
```

Hierin is h de diepte op elk punt dwars op de rivier en Δd = 4 m. De som over de breedte zorgt dat de totale afvoer klopt. Q is de afvoer op die plek: de referentiepegel plus of min de zijrivieren ertussen (les 9). Daarna past Rijnsim een paar correcties toe, en die zijn benaderingen, geen metingen: boven MW tot 18 % sneller (meer verval), trager vlak langs de oever, voor havenmonden en in kribvakken.

**De diepte per plek.** De diepte is de waterstand min de bodem. De waterstand komt uit FLYS: Rijnsim zoekt de twee afvoertoestanden waartussen de pegelstand valt, en interpoleert daartussen. Zo doet het R-pakket hyd1d het ook. De bodem komt uit het DGM-W.

**Hoe nauwkeurig?** Eigen toetsen tegen gemeten dagwaarden:

| Omgerekend vanaf | Gemeten bij | Mediane afwijking |
| --- | --- | --- |
| Kaub | Mainz | 5 cm |
| Kaub | Bingen | 10 cm |
| Kaub | Koblenz | 12 cm |
| Maxau | Speyer | 10 cm |
| Maxau | Mannheim | 13 cm |
| Maxau | Worms | 13 cm |

Vanaf Maxau zit FLYS systematisch ongeveer 10 cm te hoog, waarschijnlijk door bodemerosie sinds 2012. Bij hoogwater wijken Mannheim en Worms meer af, mede door de Neckar. Een tweede beperking: FLYS rekent met GlQ2012, Rijnsim met de GlW2022-standen (les 2). Het verschil is per pegel 1 tot 5 cm.

**Wat Rijnsim niet doet.** Rijnsim is geen 2D-stromingsmodel. Dwarsstromen en neren zitten er niet in, behalve een vereenvoudigde neer voor havenmonden. De stroming is een benadering, geen meting.

### Controlevragen

1. Bestaat er voor de Duitse Rijn een openbare stroomkaart per plek?
2. Waarom stroomt het bij km 350 harder dan bij Mannheim, bij dezelfde afvoer?
3. Een plek is 200 m breed en gemiddeld 4 m diep, de afvoer is 1200 m³/s. Wat is de gemiddelde stroom?
4. Waar komen in Rijnsim de waterstand en de bodem vandaan?
5. Hoe groot is de afwijking als Rijnsim de stand van Kaub omrekent naar Mainz?

**Antwoorden**

1. Nee. De BAW heeft eigen modellen, maar die zijn niet openbaar. Openbaar zijn de FLYS-waterspiegels en het DGM-W.
2. Boven Maxau is het verval groter en de rivier gemiddeld ondieper. Volgens FLYS zakt de waterspiegel bij MQ tussen km 340 en 360 ongeveer 37 cm per km, tussen km 420 en 440 ongeveer 12 cm. Tussen Speyer en Mannheim is de rivier ook dieper.
3. 1200 / (200 × 4) = 1,5 m/s, ongeveer 5,4 km/u.
4. De waterstand uit FLYS (BfG), omgerekend vanaf de pegel; de bodem uit het DGM-W (BfG/WSV, 2003–2010).
5. In de mediaan 5 cm.

## Les 7 — Hoogwater: Marke I en II

Tussen hoogwaterpeil I en II gelden extra regels: zo veel mogelijk in het midden, hooguit twee schepen naast elkaar, maximaal 20 km/u over de grond en marifoon verplicht. Vanaf peil II is varen verboden. Elk vak heeft eigen peilen, afgelezen aan een eigen pegel.

### Leerdoelen

Na deze les kun je:

1. de regels tussen peil I en II opnoemen;
2. voor elk vak tussen Iffezheim en het Spijksche Veer de pegel en de peilen opzoeken;
3. bepalen of je bij een gegeven stand mag varen, en onder welke voorwaarden;
4. de laagwaterregel van RPR 10.02 noemen.

### Uitleg voor de kapitein

**Tussen peil I en II** gelden volgens RPR 10.01, eerste lid:

- **Plaats**: in de afvaart zo veel mogelijk het midden van de rivier, in de opvaart zo veel mogelijk het middelste derde. De breedte is de afstand tussen de oeverlijnen.
- **Naast elkaar**: hooguit twee eenheden, ook tijdens het voorbijlopen.
- **Dichter bij de oever**: alleen als de plaatselijke omstandigheden dat nodig maken. Blijf dan zo ver mogelijk van de oever en verminder vaart.
- **Gebergte**: artikel 9.04 blijft gelden. Tussen Lorch (km 540,2) en St. Goar (km 556) houdt de opvaart in het middelste derde zo dicht de linkeroever aan, dat ontmoeten met de afvaart veilig bakboord op bakboord kan.
- **Snelheid**: niet sneller dan 20 km/u ten opzichte van de oever. Uitzondering: de afvaart tussen Bingen (km 528,5) en St. Goar (km 556) mag 24 km/u.
- **Marifoon**: verplicht en voor ontvangst ingeschakeld op de kanalen voor nautische informatie. Dit geldt niet voor kleine schepen op spierkracht.
- **Snelle schepen**: verboden.

**Vanaf peil II** mag je in dat vak niet meer varen. Oversteken mag wel (tweede lid).

| Vak | Rijn-km | Pegel | Peil I (m) | Peil II (m) |
| --- | --- | --- | --- | --- |
| Sluizen Iffezheim – Germersheim | 334,0 – 384,0 | Maxau | 6,20 | 7,50 |
| Germersheim – Mannheim-Rheinau | 384,0 – 410,5 | Speyer | 6,20 | 7,30 |
| Mannheim-Rheinau – Mannheim-Sandhofen | 410,5 – 431,5 | Mannheim | 6,50 | 7,60 |
| Mannheim-Sandhofen – Gernsheim | 431,5 – 462,0 | Worms | 4,40 | 6,50 |
| Gernsheim – Eltville | 462,0 – 511,0 | Mainz | 4,75 | 6,30 |
| Eltville – Lorch | 511,0 – 540,0 | Bingen | 3,50 | 4,90 |
| Lorch – Bad Salzig | 540,0 – 566,0 | Kaub | 4,60 | 6,40 |
| Bad Salzig – Engers | 566,0 – 601,0 | Koblenz | 4,70 | 6,50 |
| Engers – Bad Breisig | 601,0 – 624,0 | Andernach | 5,50 | 7,60 |
| Bad Breisig – Mondorf | 624,0 – 660,0 | Oberwinter | 4,90 | 6,80 |
| Mondorf – Dormagen | 660,0 – 710,0 | Köln | 6,20 | 8,30 |
| Dormagen – Krefeld | 710,0 – 763,0 | Düsseldorf | 7,10 | 8,80 |
| Krefeld – Orsoy | 763,0 – 794,0 | Duisburg-Ruhrort | 9,30 | 11,30 |
| Orsoy – Rees | 794,0 – 837,0 | Wesel | 8,70 | 10,60 |
| Rees – Spijksche Veer | 837,0 – 857,4 | Emmerich | 7,00 | 8,70 |

Bron: RPR (Nederlandse tekst), artikel 10.01, derde lid. Voor Basel – sluizen Kembs geldt pegel Basel-Rheinhalle, peil I 7,00 en II 8,20. Tussen Kembs en Iffezheim regelt het vierde lid de vaart bij hoogwater per sluispand.

**Ook laag water heeft een regel.** Tussen St. Goar en Bingen is stroomopwaarts slepen 's nachts verboden zodra Kaub onder 1,00 m staat. Dat geldt van een half uur na zonsondergang tot een half uur voor zonsopgang. Uitgezonderd zijn slepen van hooguit twee schepen en een gesleept duwstel (RPR 10.02).

### Rekenvoorbeeld

**1. Kaub 5,10 m.** Je vaart af van Bingen naar Koblenz. Kaub ligt tussen peil I (4,60) en II (6,40) van het vak Lorch – Bad Salzig. Blijf in het midden, met hooguit twee naast elkaar en de marifoon aan. Tot St. Goar mag je in de afvaart 24 km/u over de grond, daarna 20 km/u. Kijk voor het vak Bad Salzig – Engers naar Koblenz, niet naar Kaub.

**2. Wesel 10,80 m.** Peil II van het vak Orsoy – Rees is 10,60. Tussen km 794 en 837 is varen verboden, alleen oversteken mag. Rees – Spijksche Veer valt onder pegel Emmerich en kan nog open zijn.

**Oefenen in Rijnsim.** Zet zone 5 op Kaub 480 cm. Rijnsim meldt dat Marke I is overschreden en waarschuwt als je harder vaart dan toegestaan.

### Voor de die-hards

**Peilen omgerekend naar één pegel.** Rijnsim heeft per zone één referentiepegel. De peilen van de andere vakken zijn daarom omgerekend: met uurwaarden uit 2011–2026 is gekeken welke stand van de referentiepegel hoort bij de peilen van de vakpegel, inclusief de looptijd van de golf.

| Vak (zone 7) | Eigen peilen I / II | Omgerekend naar Maxau |
| --- | --- | --- |
| Iffezheim – Germersheim | Maxau 6,20 / 7,50 | 620 / 750 cm |
| Germersheim – Mannheim-Rheinau | Speyer 6,20 / 7,30 | 716 / 786 cm |
| Mannheim-Rheinau – Mannheim-Sandhofen | Mannheim 6,50 / 7,60 | 773 / 823 cm |
| Mannheim-Sandhofen – Gernsheim | Worms 4,40 / 6,50 | 705 / 825 cm |

De tabel laat zien hoe ongelijk de vakken zijn. Staat Maxau op 7,50 m (peil II van het eigen vak), dan zit het vak Germersheim – Mannheim-Rheinau nog onder zijn peil II.

**Wie voorspelt het hoogwater?** De BfG geeft geen verwachtingen boven Marke II; daarvoor zijn de deelstaten verantwoordelijk ([BfG, 14-Tage-Vorhersage](https://bafg.de/DE/5_Informiert/1_Portale_Dienste/14Tagevorhersage/14tagevorhersage_node.html)). Het Nederlandse WMCN geeft bij hoogwater vier keer per dag een verwachting voor Lobith (les 8).

### Controlevragen

1. Welke pegel geldt voor het vak Lorch – Bad Salzig, en wat zijn de peilen?
2. Je vaart af tussen Bingen en St. Goar, met de stand tussen peil I en II. Hoe hard mag je over de grond?
3. Düsseldorf staat op 8,90 m. Mag je tussen Dormagen en Krefeld varen?
4. Mag je bij een stand tussen peil I en II met drie schepen naast elkaar varen als je voorbijloopt?
5. Kaub staat op 0,95 m. Wat verandert er voor een sleep van drie schepen tussen St. Goar en Bingen?

**Antwoorden**

1. Kaub; peil I 4,60 m, peil II 6,40 m.
2. Maximaal 24 km/u ten opzichte van de oever.
3. Nee. Peil II is 8,80 m, varen is verboden; alleen oversteken mag.
4. Nee. Ook tijdens het voorbijlopen hooguit twee eenheden naast elkaar.
5. Stroomopwaarts slepen is 's nachts verboden, van een half uur na zonsondergang tot een half uur voor zonsopgang.

## Les 8 — Verwachtingen lezen

De BfG maakt drie verwachtingen voor de Rijn: 4 dagen, 14 dagen en 6 weken. Hoe verder vooruit, hoe grover. De 4-daagse geeft een getal per tijdstip, de 6-weekse een kansverdeling van weekgemiddelden. Voor Lobith maakt Rijkswaterstaat een eigen 4-daagse verwachting.

### Leerdoelen

Na deze les kun je:

1. uitleggen hoe de BfG van weer naar pegelstand komt;
2. de drie verwachtingen van de BfG en die van Rijkswaterstaat noemen, met wanneer ze verschijnen;
3. het verschil tussen "Vorhersage" en "Abschätzung" toepassen;
4. een boxplot van de 6-wekenverwachting lezen en er een worstcase uit halen.

### Uitleg voor de kapitein

&#91;embedded content: Modelketen BfG en Rijkswaterstaat · BfG-FAQ, BfG 14-Tage-Vorhersage, RWS, IKSR\]

Zo beschrijft de BfG de 14-daagse en de 6-weekse verwachting. Voor de 4-daagse geven de gebruikte bronnen geen modelbeschrijving. De verwachtingen verschillen in hoe ver ze vooruitkijken en hoe ze de onzekerheid tonen.

**4 dagen (BfG).** Voor Rijnpegels zoals Kaub, via ELWIS. Dag 1 en 2 heten "Vorhersage": in 80 % van de gevallen klopt de stand binnen 10 cm. Dag 3 en 4 heten "Abschätzung": in 80 % van de gevallen binnen 20 cm ([BfG, Vorhersagegenauigkeit](https://www.bafg.de/DE/5_Informiert/7_Fachglossar/Vorhersagegenauigkeit/vorhersagegenauigkeit_text.html)). Op 6 oktober 2026 stond de verwachting voor Kaub op ELWIS met de tijd 07:00 uur. ELWIS toont standaard 5 dagen; wat dag 5 precies is, staat niet in de gebruikte bronnen.

**14 dagen (BfG).** Sinds juli 2022 voor Oestrich, Kaub, Koblenz, Köln, Düsseldorf, Duisburg-Ruhrort en Emmerich. Ze verschijnt elke dag laat in de ochtend. Ze rekent met meetwaarden van ongeveer 50 pegels, meer dan 1000 weerstations en meerdere weerensembles. De onzekerheid staat erin als een waaier, die steeds verder opengaat ([BfG, 14-Tage-Vorhersage](https://bafg.de/DE/5_Informiert/1_Portale_Dienste/14Tagevorhersage/14tagevorhersage_node.html)).

**6 weken (BfG).** Sinds juli 2022 voor Kaub, Köln en Duisburg-Ruhrort, en voor Maxau en Worms alleen de stand. Ze verschijnt dinsdag- en vrijdagochtend. Het is een trendverwachting met weekgemiddelden, geen stand per dag ([BfG, FAQ](https://vorhersage.bafg.de/6-Wochen-Vorhersage/FAQ_6Wochen.pdf)).

**Lobith (Rijkswaterstaat).** De 4-daagse verwachting is de eindverwachting die het Watermanagementcentrum Nederland (WMCN) heeft gecontroleerd. De 15-daagse pluimverwachting komt rechtstreeks uit de modellen van Rijkswaterstaat, zonder controle door een expert ([Rijkswaterstaat](https://www.rijkswaterstaat.nl/water/waterdata/waterstanden-en-afvoeren-rivieren)).

**Maxau en de Oberrhein (HVZ Baden-Württemberg).** De Hochwasservorhersagezentrale van de LUBW geeft voor ongeveer 110 pegels, waaronder Maxau, een verwachting tot 10 dagen vooruit. Ze wordt elk uur bijgewerkt en geldt bij laag en gemiddeld water. De rode lijn is de "best guess" voor de periode die als redelijk betrouwbaar geldt. De gele stippellijn daarna is de "Abschätzung der weiteren Tendenz", met een gele band voor de waarschijnlijke bandbreite. Anders dan de BfG toont de HVZ ook een scenario zonder regen in de komende 10 dagen. Dat is bedoeld om te zien hoe laag het water kan zakken als de voorspelde regen uitblijft ([HVZ, Hinweise zu den Vorhersagen](https://hvz.lubw.baden-wuerttemberg.de/pdf/Hinweise-WHM-Vorhersage.pdf), 4-3-2025). De grafiek voor Maxau staat op de [pegelpagina van de HVZ](https://www.hvz.baden-wuerttemberg.de/pegel.html?id=09016).

**Het boxplot lezen.** Per week staat er een doos met twee antennes. Met 50 % kans valt het weekgemiddelde in de doos, met 90 % kans tussen de antennes. Volgens de BfG is de onderkant van het boxplot het beste worstcasescenario. Een verwachting zonder regen geeft de BfG niet, omdat die over zes weken onrealistisch is (BfG, FAQ).

### Rekenvoorbeeld

**1. De 4-daagse gebruiken.** Je bent over twee dagen bij Kaub. De BfG geeft voor dag 2 een stand van 90 cm. In 80 % van de gevallen ligt de werkelijke stand tussen 80 en 100 cm. Reken voorzichtig met 80 cm: vaargeul 1,90 + (0,80 − 0,77) = 1,93 m, min 30 cm marge = 1,63 m diepgang.

**2. De 6-weekse voor planning.** Voor week 3 staat bij Kaub de doos van 70 tot 100 cm, de antennes van 55 tot 130 cm. Met 90 % kans ligt het weekgemiddelde tussen 55 en 130 cm. Worstcase is 55 cm: vaargeul 1,90 + (0,55 − 0,77) = 1,68 m, dus 1,38 m diepgang. Let op: dit is een weekgemiddelde, en op een losse dag kan de stand lager zijn.

**3. Maxau bij uitzonderlijk laag water.** Op 6 oktober 2026 om 13:30 uur stond Maxau op 286 cm (HVZ, ongecontroleerde ruwe data). De vaargeul Iffezheim – Budenheim is dan 2,10 + (2,86 − 3,72) = 1,24 m. Met 30 cm marge blijft 0,94 m diepgang over. Dat is lager dan de laagste standen die de HVZ-grafiek voor Maxau noemt; de laagste daarvan is 289 cm op 4 maart 1963. Bij zo'n stand kan het knelpunt boven Mainz liggen in plaats van bij Kaub: reken elk traject door (les 4).

### Voor de die-hards

**Waarom zes weken kan, terwijl het weer maar een paar dagen goed te voorspellen is.** Volgens de BfG is een rivier trager en eenvoudiger dan het weer: het gaat alleen om het stroomgebied. De eerste dagen hangen vooral af van de toestand van nu en van de neerslag die al gevallen is. Dat "hydrologische geheugen" maakt een trend over weken mogelijk. Een exacte stand op een vaste dag kan het niet geven (BfG, FAQ).

**Ensembles.** Het Europese weercentrum ECMWF rekent 101 even waarschijnlijke weersverlopen voor de komende 46 dagen door. Voor elk weersverloop berekent het model van de BfG een afvoer. Het verloop op maandag wordt 's nachts aangeleverd en dinsdag gepubliceerd; dat van donderdag op vrijdag. Tot augustus 2023 waren het 51 leden met vergelijkingsperiode 1968–2018; nu 101 leden met 1991–2020 (BfG, FAQ).

**Drie soorten boxplots.** Rood is de verwachting met de weersverwachting van het ECMWF. Blauw is ESP: het weer van vroegere jaren op dezelfde tijd van het jaar, met de toestand van nu als start. Zo zie je wat er zou gebeuren als het nu zou gaan zoals in 2018. Zwart is wat er in de vergelijkingsperiode werkelijk gemeten is (BfG, FAQ).

**Vijf klassen.** De BfG deelt de verwachting ook in vijf klassen in, van laag tot hoog. Elke klasse bevat een vijfde van de gemeten weekwaarden voor die week van het jaar. Het percentage ensembleleden in een klasse is de kans op die klasse. Staat er 100 %, dan liggen alle leden in die klasse; het boxplot laat zien hoe zeker dat is (BfG, FAQ).

**Van afvoer naar stand.** Het model levert afvoer. Met de actuele afvoerkromme wordt die omgezet in een stand (les 1). Boven Marke II geeft de BfG geen verwachting; daarvoor zijn de deelstaten verantwoordelijk.

**Rijkswaterstaat.** Het WMCN rekent normaal elke werkdag om 7:00 uur, bij hoogwater vier keer per dag. Het gebruikt onder meer de verwachting van de Hochwasservorhersagezentrale Baden-Württemberg (Maxau en Rockenau), de standen uit PEGELONLINE en neerslagverwachtingen van het KNMI en de DWD ([IKSR](https://www.iksr.org/en/topics/floods/flood-warning-and-forecasting-centres/rws-wmcn-lelystad)). Volgens die pagina, die ouder lijkt, gebruikt het WMCN bij laag en gemiddeld water een statistisch model.

**De HVZ-modellen.** De HVZ rekent met metingen van neerslag, temperatuur, instraling, wind, luchtvochtigheid, luchtdruk en waterstanden. Voor de toekomst gebruikt ze verwachtingen van de DWD, MeteoGroup en het ECMWF. Een waterhuishoudingsmodel (LARSIM) rekent op een raster van 1 bij 1 km de sneeuw, verdamping, bodemvocht en afvoer uit. Voor de pegels aan de Oberrhein gebruikt de HVZ het "Synoptische Modell". De band is volgens de HVZ geen harde boven- of ondergrens. Bij hoogwater werkt de HVZ elk uur bij; voor Maxau is dan het betrouwbare deel 24 uur en de Abschätzung 48 uur. Bij de HVZ-pegelpagina staan ook kenmerkende waarden. Voor Maxau zijn dat onder meer MW 516 cm, MNW 380 cm en MQ 1226 m³/s (1991–2020), en een laagste afvoer van 405 m³/s op 26-11-2018 ([HVZ, Hinweise](https://hvz.lubw.baden-wuerttemberg.de/pdf/Hinweise-WHM-Vorhersage.pdf); pegelgegevens HVZ, opgehaald 6-10-2026).

**Hoe de HVZ-band ontstaat.** Sinds augustus 2022 telt de HVZ twee onzekerheden op. De weersonzekerheid komt statistisch uit 30 weersverwachtingen: de ensembleverwachting ICON-D2-EPS van de DWD plus losse verwachtingen. De modelonzekerheid wordt bepaald uit de verwachting zelf. De best guess hoeft niet midden in de band te liggen. Het scenario zonder regen kan er zelfs buiten vallen, als bijna alle verwachtingen regen geven ([HVZ, Neuerungen](https://www.hvz.baden-wuerttemberg.de/pdf/Info-HVZ-Neuerungen.pdf), 7-1-2025). De HVZ bestaat sinds 1991. Ze verwerkt standen van ongeveer 380 pegels en neerslag van ongeveer 390 stations, en adviseert over de inzet van de retentieruimtes aan de Oberrhein ([HVZ, Info](https://www.hvz.baden-wuerttemberg.de/info.html)).

### Controlevragen

1. Wat is het verschil tussen "Vorhersage" en "Abschätzung"?
2. Op welke dagen verschijnt de 6-wekenverwachting, en waarom niet op maandag?
3. Het boxplot voor week 2 loopt van 85 tot 110 cm, met antennes van 70 tot 140 cm. Met welke stand reken je als worstcase?
4. Welke verwachting voor Lobith is door een expert gecontroleerd?
5. Waarom geeft de BfG geen verwachting zonder regen?

**Antwoorden**

1. Vorhersage is dag 1 en 2 (80 % binnen 10 cm), Abschätzung dag 3 en 4 (80 % binnen 20 cm).
2. Dinsdag en vrijdag. Het ECMWF rekent op maandag en donderdag en levert 's nachts; daarna rekent het model van de BfG nog.
3. Met de onderkant: 70 cm. Dat is een weekgemiddelde; op een losse dag kan het lager zijn.
4. De 4-daagse, door het WMCN. De 15-daagse pluim is niet gecontroleerd.
5. Zes weken zonder regen zou ook de wind, de temperatuur en de instraling beïnvloeden. Zo'n verwachting is daarom onrealistisch. De onderkant van het boxplot is een beter worstcasescenario.

## Les 9 — Zijrivieren: waar het water vandaan komt

Bij laag water komt ongeveer de helft van het water bij Lobith uit Basel, dus uit de Alpen en het Zwitserse voorland. De andere helft leveren de zijrivieren: vooral Neckar, Main, Moezel en Lahn. Wie wil weten waarom Kaub zakt of stijgt, moet ook naar die zijrivieren kijken.

### Leerdoelen

Na deze les kun je:

1. de belangrijkste zijrivieren noemen en zeggen tussen welke pegels ze instromen;
2. uitleggen waarom de Rijn bij laag water vooral op Alpenwater draait;
3. weten wie de verwachtingen voor de zijrivieren maakt;
4. de stand van een zijrivier gebruiken om te snappen wat er stroomafwaarts gebeurt.

### Uitleg voor de kapitein

**Twee soorten rivieren.** De Rijn bij Basel is een sneeuwrivier: laag water in de winter, wanneer de neerslag als sneeuw blijft liggen, en veel water na de sneeuwsmelt in de zomer. Neckar, Main, Nahe, Lahn en Moezel zijn regenrivieren: hoog water in de winter, laag water in de zomer. Stroomafwaarts mengen de twee, en daardoor is de afvoer bij Köln gelijkmatiger over het jaar ([IKSR-rapport 248](https://www.iksr.org/fileadmin/user_upload/DKDM/Dokumente/Fachberichte/DE/rp_De_0248.pdf), 2018).

**Het aandeel van Basel.** Bij laag water levert Basel bij Worms nog bijna drie kwart van de afvoer, bij Mainz ongeveer twee derde en bij Lobith ongeveer de helft. De grote zijrivieren verhogen de lage afvoer gemiddeld met 12 % (Neckar) tot 18 % (Main en Moezel). Volgens de IKSR ontstaat echt laag water als de Alpen vanaf september en oktober minder water leveren, en de regenrivieren tegelijk droog staan (IKSR 248).

&#91;embedded content: IKSR-rapport 248 (2018), tabel 3: MNQ 1961–2010; zijrivieren per traject uit hoofdstuk 5.1\]

De grootste stappen bij laag water komen van de Main (+130 m³/s tussen Worms en Mainz) en van Lahn en Moezel samen (+143 m³/s tussen Kaub en Andernach). Tussen Mainz en Kaub is de MNQ gelijk.

| Zijrivier | Stroomt in tussen | Verwachting door (ELWIS) | Afvoerpegel | Afvoer 6-10-2026 (m³/s) |
| --- | --- | --- | --- | --- |
| Aare | Rekingen en Basel | niet in de ELWIS-lijst (Zwitserland) | — | — |
| Murg, Kinzig, Alb, Ill e.a. | Basel en Maxau | HVZ Baden-Württemberg | — | — |
| Neckar | Maxau en Worms | HVZ Baden-Württemberg | Rockenau | 32,9 |
| Main | Worms en Mainz | HVZ Baden-Württemberg en Hessen (HLNUG) | Raunheim | 78,2 |
| Nahe | Mainz en Kaub | Rijnland-Palts (LfU) | Dietersheim | 4,2 |
| Lahn | Kaub en Andernach | Rijnland-Palts en Hessen | Kalkofen | 8,7 |
| Moezel (met Saar) | Kaub en Andernach | Rijnland-Palts | Cochem | 42,2 |
| Ahr | Andernach en Köln | Rijnland-Palts | Altenahr | 0,6 |
| Sieg | Andernach en Köln | Rijnland-Palts, Noordrijn-Westfalen | Betzdorf (bovenloop) | 2,0 |
| Ruhr | Köln en Lobith | Noordrijn-Westfalen (LANUK) | Hattingen | 17,4 |
| Wupper, Erft, Lippe | Köln en Lobith | Noordrijn-Westfalen (LANUK) | alleen standen openbaar | — |

Bronnen: instroom tussen pegels uit IKSR 248; verwachtingsdiensten uit [ELWIS, Hochwasserzentralen](https://www.elwis.de/DE/Service/Wasserstaende/Hochwasserzentralen/Hochwasserzentralen-node.html); afvoer uit PEGELONLINE en het [dataportaal van het LfU Rijnland-Palts](https://geodaten-wasser.rlp-umwelt.de/wasserstand/2540082600) (Nahe, Ahr, Sieg), ruwe data van 6-10-2026 rond 13:00 uur. Het [hoogwaterportaal van Noordrijn-Westfalen](https://hochwasserportal.nrw/lanuv/webpublic/index.html) publiceert alleen standen, geen afvoer.

**Wie voorspelt wat.** De deelstaten maken de verwachtingen voor de zijrivieren en zijn verantwoordelijk bij hoogwater. Volgens ELWIS doet Baden-Württemberg de Rijn, de Neckar en de Main. Rijnland-Palts doet de Rijn van de Neckarmonding tot de Nederlandse grens, plus Moezel, Saar, Lahn, Nahe en Sieg. Hessen doet onder meer de Main en de Lahn, en Noordrijn-Westfalen onder meer Ruhr en Lippe. De BfG maakt elke werkdag de verwachting bij laag en gemiddeld water voor de Rijnpegels van Oestrich tot Emmerich. Haar systeem rekent de Main en de Moezel mee ([BfG, Vorhersagegebiete](https://www.bafg.de/DE/5_Informiert/7_Fachglossar/__Vorhersagegebiete/vorhersagegebiete_node.html)).

### Rekenvoorbeeld

**1. Wat doet de Neckar?** Bij laag water (MNQ, 1961–2010) is de afvoer bij Maxau 618 m³/s en bij Worms 694 m³/s (IKSR 248). Tussen die twee pegels komt dus 76 m³/s bij, voor het grootste deel uit de Neckar. Bij Rockenau is de MNQ van de Neckar 41,5 m³/s (1981–2010, [IKSR-rapport 297](https://www.iksr.org/fileadmin/user_upload/DKDM/Dokumente/Fachberichte/DE/rp_De_0297.pdf)).

**2. Waar zit het laag water nu?** Op 6 oktober 2026 rond 13:00 uur:

| Pegel | Afvoer nu (m³/s) | MNQ 1981–2010 (m³/s) | Nu als deel van MNQ |
| --- | --- | --- | --- |
| Maxau (Rijn) | 335 | 618,6 | 54 % |
| Kaub (Rijn) | 441 | 836,1 | 53 % |
| Köln (Rijn) | 577 | 1001 | 58 % |
| Rockenau (Neckar) | 32,9 | 41,5 | 79 % |
| Raunheim (Main) | 78,2 | 70,7 | 111 % |

De Rijn staat ver onder zijn gemiddelde laagwaterafvoer, de Main juist erboven. Dit laag water komt dus vooral uit het Alpengebied. De Moezel bij Cochem gaf 42,2 m³/s. De MNQ van Trier, dat verder stroomopwaarts ligt, is 49,4 m³/s; de Moezel zit dus ook laag. Let op: de afvoeren van nu zijn ruwe data, en de MNQ's komen uit IKSR 297.

**3. De kleinere zijrivieren.** Dezelfde dag, vergeleken met de kenmerkende waarden die de deelstaten zelf publiceren:

| Zijrivier, pegel | Nu | Vergelijking | Bron |
| --- | --- | --- | --- |
| Nahe, Dietersheim | 4,2 m³/s | MNQ 5,0 m³/s (83 %); laagste ooit 2,6 m³/s op 14-8-2022 | LfU RLP, reeks 2002–2022 |
| Ahr, Altenahr | 0,62 m³/s | MNQ 0,89 m³/s (70 %); laagste ooit 0,29 m³/s op 8-7-1976 | LfU RLP, reeks 1947–2022 |
| Sieg, Betzdorf | 2,0 m³/s | MNQ 1,6 m³/s (126 %) | LfU RLP, reeks 1951–2022 |
| Sieg, Menden | stand 18 cm | MNW 18 cm: precies op de gemiddelde laagwaterstand | LANUK NRW |
| Lippe, Schermbeck | stand 131 cm | MNW 136 cm: 5 cm eronder | LANUK NRW |
| Wupper, Opladen | stand 40 cm | MNW 40 cm | LANUK NRW |
| Erft, Neubrück | stand 57 cm | MNW 57 cm | LANUK NRW |

Alle kleinere zijrivieren zitten rond hun gemiddelde laagwater, maar niet ver eronder. Ze verklaren het lage water op de Rijn dus niet. Let op: bij Bad Bodendorf, stroomafwaarts op de Ahr, meldde het LfU tegelijk 0,19 m³/s. Dat is minder dan bij Altenahr stroomopwaarts, en minder dan het laagste ooit gemeten (0,27 m³/s). Waarschijnlijk is dat een meetfout in de ruwe data. Het laat zien waarom je een vreemde waarde eerst naast een buurpegel legt (les 1).

### Voor de die-hards

**Wat er tussen de pegels gebeurt.**

| Pegel | MQ (m³/s) | MNQ (m³/s) | NQ (m³/s) | MNQ als % van Basel |
| --- | --- | --- | --- | --- |
| Basel | 1065 | 508 | 319 | 100 |
| Maxau | 1255 | 618 | 373 | 82 |
| Worms | 1431 | 694 | 400 | 73 |
| Mainz | 1671 | 824 | 501 | 62 |
| Kaub | 1713 | 824 | 525 | 62 |
| Andernach | 2115 | 967 | 622 | 53 |
| Köln | 2175 | 999 | 644 | 51 |
| Lobith | 2287 | 1066 | 665 | 48 |

Bron: IKSR 248, tabel 3 en 4, periode 1961–2010, waterhuishoudkundig jaar 1 april – 31 maart. De IKSR waarschuwt dat het aandeel van Basel tijdens een echt laagwaterevenement afwijkt, en in de zomer vaak hoger is.

**Gletsjers en stuwmeren.** In het extreme laag water van 2003 kwam op sommige dagen tot een derde van het water bij Basel en een vijfde bij Lobith uit gletsjersmelt. In gewone jaren is dat bij Lobith minder dan 2 %. De stuwmeren in de Alpen houden water vast in de zomer en geven het af in de winter. Daardoor is de winterafvoer bij laag water met ongeveer 120 m³/s toegenomen (IKSR 248).

**Water van buiten.** Via de Main krijgt de Rijn tot 15 m³/s uit het Donaugebied, via het Main-Donaukanaal. Uit het Inngebied komt bijna 8 m³/s. Naar Ticino en de Rhône gaat ongeveer 5 m³/s verloren (IKSR 248).

**Klimaat.** Volgens de IKSR-projecties neemt de jaarlijkse laagwaterafvoer (MNQ) tegen 2071–2100 af, met een spreiding tot −48 % bij Maxau en Lobith. Neckar en Moezel krijgen juist een hogere gemiddelde afvoer. De zijrivieren kennen meer onzekerheid dan de hoofdstroom (IKSR 297, 2024).

**Rijnsim.** Rijnsim telt de afvoer van de zijrivieren per traject erbij of eraf: de Neckar in zone 7, en Main, Nahe, Lahn en Moezel in zone 5. De afvoer van een zijrivier schaalt mee met de referentiepegel, tussen zijn eigen MNQ en MQ. Een zijrivier die op een dag afwijkt van normaal, zit er dus niet in. De waterstand per plek komt nog steeds uit FLYS.

### Controlevragen

1. Tussen welke pegels komt de Moezel bij de Rijn?
2. Hoeveel van het water bij Lobith komt bij laag water uit Basel?
3. Waarom heeft de Rijn bij Basel laag water in de winter, terwijl de Moezel laag water in de zomer heeft?
4. Wie maakt de verwachting voor de Moezel?
5. Kaub staat laag, maar de Main voert meer dan zijn MNQ. Waar komt het laag water vandaan?

**Antwoorden**

1. Tussen Kaub en Andernach, samen met de Lahn.
2. Ongeveer de helft (48 % van de MNQ, IKSR 248).
3. Basel is een sneeuwrivier: in de winter blijft de neerslag als sneeuw liggen. De Moezel is een regenrivier: die heeft volgens de IKSR het meeste water in de winter en het minste in de zomer.
4. Rijnland-Palts (Landesamt für Umwelt), volgens ELWIS.
5. Van de Rijn boven Mainz, dus uit het Alpengebied en het zuidelijke deel van het stroomgebied.

## Bronnen

Alle bronnen zijn geraadpleegd op 6 oktober 2026. Lokale kopieën staan in Rijnsim, map `bron/data/naslag/`.

| Bron | Uitgever, datum | Gebruikt in les |
| --- | --- | --- |
| [Protocol 19, GlW des Rheins 2022](https://ccr-zkr.org/files/infovoiedeau/Resolution2022-II-19_de.pdf) ([NL](https://ccr-zkr.org/files/infovoiedeau/Resolution2022-II-19_nl.pdf)) | CCR, besluit 2022-II-19 | 1, 2, 3 |
| [PEGELONLINE, Hilfe](https://www.pegelonline.wsv.de/gast/hilfe) en [REST-API](https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations.json) | WSV | 1 |
| [FAQ zur 6-Wochen-Vorhersage](https://vorhersage.bafg.de/6-Wochen-Vorhersage/FAQ_6Wochen.pdf) | BfG, stand 2-4-2025 | 1, 2, 8 |
| [14-Tage-Vorhersage](https://bafg.de/DE/5_Informiert/1_Portale_Dienste/14Tagevorhersage/14tagevorhersage_node.html) | BfG | 7, 8 |
| [Fachglossar Vorhersagegenauigkeit](https://www.bafg.de/DE/5_Informiert/7_Fachglossar/Vorhersagegenauigkeit/vorhersagegenauigkeit_text.html) | BfG | 8 |
| [Pegelvorhersage Kaub](https://www.elwis.de/DE/dynamisch/Wasserstaende/Pegelvorhersage:KAUB) | ELWIS / BfG | 8 |
| [Fahrrinnensituation](https://www.elwis.de/DE/Service/Telematikanwendungen/Inland-ECDIS/Allgemeines/ARGO/Fahrrinnensituation/Fahrrinnensituation-node.html) | ELWIS / WSV | 3, 4 |
| [Tiefenatlas Rhein km 350–360](https://www.elwis.de/DE/Service/Tiefenatlas-BWaStr/Rhein/20250804-350-360.pdf?__blob=publicationFile&v=3) | ELWIS / WSV | 5 |
| [Wie lässt sich die Fahrrinnentiefe errechnen?](https://www.gdws.wsv.bund.de/SharedDocs/FAQs/DE/2_Niedrigwasser/Berechnung_Fahrrinnentiefe_faq.html) | GDWS | 4 |
| [Mittelrheinoptimierung](https://www.gdws.wsv.bund.de/Webs/Projektseite/Mittelrheinoptimierung/DE/01_Startseite/startseite_node.html) | GDWS | 3 |
| [Modellansätze zur Berechnung des fahrdynamischen Einsinkens](https://izw.baw.de/publikationen/kolloquien/0/squat-Soehngen_niesler.pdf) | BAW (Niesler, Söhngen, Merkel), 16-6-2005 | 4, 6 |
| [Fahrdynamische Untersuchungen zur Engpassanalyse Rhein](https://izw.baw.de/publikationen.php?file=kolloquien%2F0%2Fkurzfassung_soehngen_dettmann_kluepfel.pdf) | BAW (Söhngen, Dettmann, Klüpfel), jaartal niet vermeld | 4, 6 |
| [Methode, effecten en houdbaarheid van de OLA/OLR](https://publications.deltares.nl/11208077_005_0003.pdf) | Deltares i.o.v. RWS, 21-11-2022 | 2, 3 |
| [Verwachting waterdiepte Rijntakken](https://open.rijkswaterstaat.nl/publish/pages/117985/verwachting_waterdiepte_rijntakken.pdf) | Deltares i.o.v. RWS, 18-12-2020 | 5 |
| [Toelichting Waterdieptekaarten Rijntakken 2018.1](https://geoweb.rijkswaterstaat.nl/ExterneDocumenten/ON_Waterdieptekaarten_Rijntakken/Toelichting%20Waterdieptekaarten%20Rijntakken%202018.1.pdf) | RWS Oost-Nederland, 1-11-2018 | 2, 3, 5 |
| [Waterstanden en afvoeren rivieren](https://www.rijkswaterstaat.nl/water/waterdata/waterstanden-en-afvoeren-rivieren) | Rijkswaterstaat | 8 |
| [Waterinfo, stroming](https://waterinfo.rws.nl/#!/kaart/stroming) | Rijkswaterstaat | 6 |
| [RWS WMCN Lelystad](https://www.iksr.org/en/topics/floods/flood-warning-and-forecasting-centres/rws-wmcn-lelystad) | IKSR, pagina lijkt ouder | 8 |
| Rijnvaartpolitiereglement, artikelen 10.01 en 10.02 | CCR, Nederlandse tekst, uitgave 2026 | 7 |
| [DGM-W Rhein](https://doi.org/10.1594/PANGAEA.919308) | Weber 2020, PANGAEA, CC-BY 4.0 | 5, 6 |
| FLYS-waterspiegellijnen, via het R-pakket [hyd1d](https://cran.r-project.org/package=hyd1d) | BfG | 2, 6 |
| Eigen berekeningen Rijnsim (afvoerkromme Kaub, FLYS-toetsen, stroming, Marken omgerekend) | BOUWLOG Rijnsim, 4–6 oktober 2026 | 1, 3, 5, 6, 7 |

Aanvulling bij les 8: [Hinweise zu den Wasserstands- und Abflussvorhersagen](https://hvz.lubw.baden-wuerttemberg.de/pdf/Hinweise-WHM-Vorhersage.pdf) (HVZ/LUBW, 4-3-2025) en de [pegelpagina Maxau](https://www.hvz.baden-wuerttemberg.de/pegel.html?id=09016) (HVZ, opgehaald 6-10-2026).

Aanvulling bij les 9: [IKSR-rapport 248, Bestandsaufnahme zu den Niedrigwasserverhältnissen am Rhein](https://www.iksr.org/fileadmin/user_upload/DKDM/Dokumente/Fachberichte/DE/rp_De_0248.pdf) (IKSR, 2018); [IKSR-rapport 297, Klimawandelbedingte Abflussszenarien](https://www.iksr.org/fileadmin/user_upload/DKDM/Dokumente/Fachberichte/DE/rp_De_0297.pdf) (IKSR, 2024); [ELWIS, Hochwasserzentralen](https://www.elwis.de/DE/Service/Wasserstaende/Hochwasserzentralen/Hochwasserzentralen-node.html); [BfG, Vorhersagegebiete](https://www.bafg.de/DE/5_Informiert/7_Fachglossar/__Vorhersagegebiete/vorhersagegebiete_node.html); [HVZ, Neuerungen](https://www.hvz.baden-wuerttemberg.de/pdf/Info-HVZ-Neuerungen.pdf) (7-1-2025) en [HVZ, Info](https://www.hvz.baden-wuerttemberg.de/info.html). Actuele afvoeren: PEGELONLINE, 6-10-2026.
