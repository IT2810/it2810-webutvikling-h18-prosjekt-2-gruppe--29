Prosjekt 2, Gruppe 29

## Dependencies
For AJAX calls: [Axios](https://github.com/axios/axios)




## React
React er et Javascript-bibliotek, og det er dette vi har brukt for å utvikle løsningen vår. For metoder og logikk har vi brukt Javascript (ES6). 
React baserer seg på komponenter og gjenbruk av kode, og vi har forsøkt å dele opp våre komponenter i en logisk hierarkisk struktur, som tillater oss så mye gjenbruk som mulig. For å håndtere tilstand har vi brukt Reacts tilhørende måte å behandle tilstand, altså state (og props). Når vi måtte sende state mellom komponenter, opprettet vi metoder og logikk som sender states mellom de aktuelle komponentene. Metoder er plassert i de komponentene deres logikk tilhører.

## Responsivt design
For å få løsningen til å skalere etter skjermstørrelse på en fin og fornuftig måte har vi brukt CSS-grid. I tillegg har vi en egen menykomponent for skjermer under 800px (som er mer tilpasset mobil), og en annen menykomponent som er lagd for desktop/skjermer på størrelse over 800px. 

## Dynamisk innlastning av elementer - Ajax
For dynamisk innlastning av elementer har vi brukt Ajax og rammevervet Axios. Dette rammeverket lot oss gjøre enkle og korte kall for å få hentet dataen vi trengte. I tillegg blir filer som er lastet inn lagret lokalt på klienten, slik at filer kun trenger å lastes inn èn gang. I tillegg laster vi inn filer kun når det skiftes tabs, noe som gjør at vi kun laster inn filer vi faktisk bruker. Vi har kun brukt Ajax og Axios for å hente data av typen bilde (svg) og tekst (json). Hva som lastes inn kontrolleres av hvilke radiobuttons som er valgt i menykomponentene. 
Metodene som brukes for å hente dataen dynamisk og å lagre lokalt er i `pictureFrame.js`


## Versjonskontroll
Som versjonskontroll har gruppen brukt Git. Vi har hatt [oversikt over våre issues](https://github.com/IT2810/it2810-webutvikling-h18-prosjekt-2-gruppe--29/issues) på github. Vi har også forsøkt så godt som mulig å knytte commits til issues. Et issues tilhørene commit(s) finner du inne på det aktuelle issuet. 
 

##  Testing
Under utviklingen av komponenter og containere har vi testet om de er responsive, slik at vi ikke måtte sitte med dette til slutt da det kan bli vanskelig. Vi har også underveis jevnlig åpnet løsningen i forskellige browsere (Chrome, Mozilla Firefox, IE og Safari). Dette for å sørge for at alle browsere har lik oppførsel og at brukere får det samme innhold uavhengig av browser. 

Når man åpner konsollen når løsningen er oppe i en browser, kan man teste hvordan løsningen ser ut på andre skjermstørrelser/enheter. Dette har vi også vært opptatt av å gjøre mye underveis. Her testet vi på skjermstørrelsen for iPhone 5, siden det er den minste skjermen vår løsning på tilpasses for. Vi har også sjekket hvordan det ser ut på tablet. Både på tablet og mobil ble løsningen testet med enhetene både liggende og stående. 

Vi forsøkte etter beste evne å alltid sjekke at vår kode var responsiv før det ble pushet og merget inn til master. 

