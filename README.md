Project 2, Group 29

## Dependencies
For AJAX calls: [Axios](https://github.com/axios/axios)

## Valg og løsninger på krav til funksjonalitet

- Samling av bilder, lyd og tekst

- Velge kategori på bilde, lyd og tekst
Her har vi brukt radiobuttons. Når man endrer valg av radiobutton i en gruppe, sendes en verdi oppover til contentContainer, slik at den nye verdien lagres i state her. Bruker så dette til å endre innhold

- Endre utstilling med tabs
Når en tab trykkes på....




## Valg og løsninger på krav til teknologi

- React
Vi har brukt react <3

- Ajax

Vi har brukt Ajax og tredjepartsbiblioteket Axios for å hente svg og tekst. Metodene for dette har vi i `pictureFrame.js`. 

Når en fil er åpnet (et bilde eller en tekst) så lagres dette i klienten. Dette er også i de tilhørende metodene i `pictureFrame.js` (caching av bilde skjer i funksjonen getImg() og caching av tekst skjer i funksjonen getText()). På denne måten lastes filen kun dersom brukeren ikke har hentet den aktuelle filen fra før av. 

- Samarbeid/bruk av Git

Vi har brukt git aktivt under prosjektet. Vi har opprettet issues, og har til beste evne knyttet commits opp mot tilhørende issues. 

- Responsiv web design
