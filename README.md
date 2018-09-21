Prosjekt 2, Gruppe 29

## Teknologiske avhengigheter
- AJAX-kall: [Axios](https://github.com/axios/axios)
- Node.js
- Npm

Kjør `npm install` før første bruk. 

## Funksjonalitet

Oppgaven gikk ut på å lage et bildegalleri som gir deg en fremstilling av lyd, bilde og tekst - basert på brukervalg. Vi valgte å vise hver kombinasjon som "Tabs"[1] over bildet, og kategorivalget [2] som radiobuttons i en sidemeny for desktop - og dropdown for mobil. Når bruker laster siden for første gang vil bilde, tekst og lyd - nr 1,  bli vist. Når bruker skifter kombinasjon (tab) og/eller kategori, vil en ny fremstilling genereres. 

Et av funksjonskravene var at siden skulle fungere like godt på små skjermer som store, dette kravet har vi oppfylt ved å bruke CSS-grid og Media Queries. Dette står det mer utfyllende om under punktet "Responsivt Design". 

Det var også et krav at bildefilene skulle være av typen SVG, og tekstfilene av typen JSON. Vi fant bildefiler og tekssnutter på nettet og konverterte de til riktig format. Disse blir hentet med AXIOS/cache og satt inn i web-appen Les mer opp dette under punktet "Dynamisk innlastning av elementer - Ajax".

### [1]Tabs
Hvilken kombinasjon brukeren kunne velge ble representert ved hjelp av en Tab-bar som inneholdt 4 tabs, en for hver mulige kombinasjon. Når siden laster vil komponenten `ContentContainer` sende med en funksjon nedover i hierarkiet, slik at det ved brukerklikk vil bli sendt tab.nr tilbake opp til foreldrekomponenten. 

### [2]Radiobuttons
Dette ble implementert på samme måte som med Tabs. 

## React og komponentstruktur
Hensikten med React er å dele problemer inn i uavhengige komponenter som kan gjenbrukes i ulike situasjoner. Vi valgte å dekomponere problemet vårt ned til 12 komponenter som kan finnes i `Component-mappen` i prosjektet;
![Komponentstruktur](https://user-images.githubusercontent.com/20125339/45820011-1542cf00-bce6-11e8-946a-06e7e6bc8125.png)

For å håndtere tilstanden i applikasjonen ble det brukt `state` og `callback-functions` mellom komponenter. Dette var nødvendig for at komponenten PictureFrame (som hadde ansvaret for å hente data enten via AJAX eller Cache) hentet riktig mediefil basert på valg tatt i komponenter høyere i hierarkiet.

## Responsivt design
For å få løsningen til å skalere etter skjermstørrelse på en fin og fornuftig måte har vi brukt CSS-grid. Siden designløsningen vår inneholder flere dimensjoner, så var det naturlig å bruke CSS-grid fremfor for eksempel Flexbox. 
I tillegg har vi en egen menykomponent for skjermer under 800px (som er mer tilpasset mobil), og en annen menykomponent som er lagd for desktop/skjermer på størrelse over 800px. Vi startet med å utvikle løsningen for mobil, derretter for større skjermer. Dette gjorde vi da vi av erfaring har opplevd det som enklere å starte med mindre skjermstørrelser. 

## Dynamisk innlastning av elementer - Ajax
For dynamisk innlastning av elementer har vi brukt Ajax og rammevervet Axios. Dette rammeverket lot oss gjøre enkle og korte AJAX-kall for å hente data. Filer blir ved første innlastning lagret i temporary-cache (`sessionStorage`), etter dette vil filene lastes direkte derfra fremfor å gjøre nye AJAX-kall. Mediefilene blir kun etterspurt når det skiftes tabs (endring i state), noe som gjør at vi kun laster inn de filene som faktisk vises på skjermen. Vi har kun brukt Ajax og Axios for å hente data av typen bilde (svg) og tekst (json), lydfiler blir lastet direkte inn som en fil. Hva som lastes inn kontrolleres av hvilke radiobuttons som er valgt i menykomponentene, samt hvilken tab som selektert. Metodene som brukes for å hente dataen dynamisk og å lagre lokalt i sessionStorage er i `pictureFrame.js`


## Versjonskontroll
Som versjonskontroll har gruppen brukt Git. Vi har hatt [oversikt over våre issues](https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-2-gruppe--29/issues) på github. Vi har også forsøkt så godt som mulig å knytte commits til issues. Et issues tilhørene commit(s) finner du inne på det aktuelle issuet. 
 

##  Testing
Under utviklingen av komponenter og containere har vi testet om de er responsive, slik at vi ikke måtte sitte med dette til slutt da det kan bli vanskelig. Vi startet med å utvikle for Mobil, da det av erfaring har vist seg å være lettere å konstruere et responsivt design for større skjermer senere i prosessen. Underveis har vi også jevnlig åpnet løsningen i forskellige nettlesere (Chrome, Mozilla Firefox, Microsoft Edge og Safari). Dette for å sørge for at alle browsere har lik oppførsel og at brukere får det samme innhold uavhengig av browser (Cross-browser-testing). 

Når man åpner Google Developer Tools mens løsningen er oppe i en nettleser, kan man teste hvordan løsningen ser ut på andre skjermstørrelser/enheter. Dette har vi vært opptatt av å gjøre mye underveis. Her testet vi blant annet mot Iphone 5/SE og IPad Pro. Løsningen vår er responsiv helt ned til 110px i bredden, størrelser mindre enn dette så vi ingen grunn til å ta hensyn til. Både på tablet og mobil ble løsningen testet med enhetene både liggende og stående. 

For å teste om filene har blitt cachet riktig (kun ved innlastning ved valg av tab/kategori) har vi også brukt Application-verktøyet i Google Developer Tools. Dette verktøyer lar en kontrollere hvilke elementer som til enhver tid befinner seg i sessionStorage, og også når de blir lastet inn. 

For å kontrollere state i React-komponentene har vi også benyttet oss av React-utvidelsen til Google Chrome, den lar brukeren se tilstanden til komponentene til enhver tid. 


