Prosjekt 2, Gruppe 29

## Dependencies
For AJAX calls: [Axios](https://github.com/axios/axios)




## React

## Responsivt design
For å få løsningen til å skalere etter skjermstørrelse på en fin og fornuftig måte har vi brukt CSS-grid. I tillegg har vi en egen menykomponent for skjermer under 800px (som er mer tilpasset mobil), og en annen menykomponent som er lagd for desktop/skjermer på størrelse over 800px. 

## Dynamisk innlastning av elementer - Ajax
For dynamisk innlastning av elementer har vi brukt Ajax og rammevervet Axios. Dette rammeverket lot oss gjøre enkle og korte kall for å få hentet dataen vi trengte. I tillegg blir filer som er lastet inn lagret lokalt på klienten, slik at filer kun trenger å lastes inn èn gang. I tillegg laster vi inn filer kun når det skiftes tabs, noe som gjør at vi kun laster inn filer vi faktisk bruker. Vi har kun brukt Ajax og Axios for å hente data av typen bilde (svg) og tekst (json). Hva som lastes inn kontrolleres av hvilke radiobuttons som er valgt i menykomponentene. 
Metodene som brukes for å hente dataen dynamisk og å lagre lokalt er i `pictureFrame.js`



## Samarbeid/bruk av Git

Vi har brukt git aktivt under prosjektet. Vi har opprettet issues, og har til beste evne knyttet commits opp mot tilhørende issues. 

##  Testing
Vi har testet løsningen på forskjellige skjermstørrelser i browseren (under inspisering av elementer).
