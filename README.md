# Descrizione

Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed attraverso javascript.

Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

Numero push minimo: 10/12

# Consigli del giorno

Ragioniamo come sempre a step.
Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.

console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

# Scomposizione del problema

Milestone 1: vado a ricreare la struttura HTML all'interno dello script così da poter stampare tutti i post presenti nell'array di oggetti

Milestone 2: utilizzando un evento click per il tasto mi piace lo faccio cambiare di colore e incremento il counter dei likes di conseguenza. Creo un nuovo array in cui ogni volta si inseriranno gli ID dei post ai quali si va a mettere like