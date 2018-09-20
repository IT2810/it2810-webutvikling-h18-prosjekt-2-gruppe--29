Prosjekt 2, Gruppe 29

## Dependencies
For AJAX-kall: [Axios](https://github.com/axios/axios)


## React og komponentstruktur
Hensikten med React er å dele inn løsningen i uavhengige komponenter som kan gjenbrukes i ulike situasjoner. Vi valgte å dekomponere problemet vårt ned til 12 komponenter som kan finnes i `Component-mappen` i prosjektet;
![Komponentstruktur](https://user-images.githubusercontent.com/20125339/45820011-1542cf00-bce6-11e8-946a-06e7e6bc8125.png)

For å håndtere tilstanden i applikasjonen ble det brukt `state` og `callback-functions` mellom komponenter. Dette var nødvendig for at komponenten PictureFrame (som hadde ansvaret for å hente data enten via AJAX eller Cache) hentet riktig mediefil basert på valg tatt i komponenter høyere i hierarkiet.

## Responsivt design
For å få løsningen til å skalere etter skjermstørrelse på en fin og fornuftig måte har vi brukt CSS-grid. I tillegg har vi en egen menykomponent for skjermer under 800px (som er mer tilpasset mobil), og en annen menykomponent som er lagd for desktop/skjermer på størrelse over 800px. Vi startet med å utvikle løsningen for mobil, derretter for større skjermer. Dette gjorde vi da vi av erfaring har opplevd det som enklere å starte med mindre skjermstørrelser. 

## Dynamisk innlastning av elementer - Ajax
For dynamisk innlastning av elementer har vi brukt Ajax og rammevervet Axios. Dette rammeverket lot oss gjøre enkle og korte AJAX-kall for å hente data. Filer blir ved første innlastning lagret i temporary-cache (`sessionStorage`), etter dette vil filene lastes direkte derfra fremfor å gjøre nye AJAX-kall. Mediefilene blir kun etterspurt når det skiftes tabs (endring i state), noe som gjør at vi kun laster inn de filene som faktisk vises på skjermen. Vi har kun brukt Ajax og Axios for å hente data av typen bilde (svg) og tekst (json), lydfiler blir lastet direkte inn som en fil. Hva som lastes inn kontrolleres av hvilke radiobuttons som er valgt i menykomponentene, samt hvilken tab som selektert. Metodene som brukes for å hente dataen dynamisk og å lagre lokalt i sessionStorage er i `pictureFrame.js`


## Versjonskontroll
Som versjonskontroll har gruppen brukt Git. Vi har hatt [oversikt over våre issues](https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-2-gruppe--29/issues) på github. Vi har også forsøkt så godt som mulig å knytte commits til issues. Et issues tilhørene commit(s) finner du inne på det aktuelle issuet. 
 

##  Testing
Under utviklingen av komponenter og containere har vi testet om de er responsive, slik at vi ikke måtte sitte med dette til slutt da det kan bli vanskelig. Vi startet med å utvikle for Mobil, da det av erfaring har vist seg å være lettere å konstruere et responsivt design for større skjermer senere i prosessen. Underveis har vi også jevnlig åpnet løsningen i forskellige browsere (Chrome, Mozilla Firefox, IE og Safari). Dette for å sørge for at alle browsere har lik oppførsel og at brukere får det samme innhold uavhengig av browser (Cross-browser-testing). 

Når man åpner konsollen mens løsningen er oppe i en browser, kan man teste hvordan løsningen ser ut på andre skjermstørrelser/enheter. Dette har vi også vært opptatt av å gjøre mye underveis. Her testet vi på skjermstørrelsen for iPhone 5, siden det er den minste skjermen vår løsning på tilpasses for. Vi har også sjekket hvordan det ser ut på tablet. Både på tablet og mobil ble løsningen testet med enhetene både liggende og stående. 

For å teste om filene har blitt cachet riktig (kun ved innlastning ved valg av tab/kategori) har vi også brukt Google Developer Tools, nærmere betemt Application-verktøyet. Dette verktøyer lar en kontrollere hvilke elementer som til enhver tid befinner seg i sessionStorage, og også når de blir lastet inn. 


