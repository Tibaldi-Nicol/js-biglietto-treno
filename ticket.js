// Chiediamo all'utente i chilometri da percorrere
const chilometri = prompt("Inserisci il numero di chilometri:");

// Chiediamo all'utente l'età del passeggero
const eta = prompt("Inserisci l'età del passeggero:");

// Calcoliamo il prezzo base: 0.21 € per km
const prezzoBase = chilometri * 0.21;
// Definiamo una variabile per il prezzo finale
let prezzoFinale;

// sconti in base all'età
if (eta < 18) {
    // Sconto del 20% per i minor


    prezzoFinale = prezzoBase - (prezzoBase * 0.2);


} else if (eta >= 65) {
    
