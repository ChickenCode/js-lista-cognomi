// Creo l'array dei cognomi
let cognomi = ["Bianchi", "Rossi", "Gialli", "Neri", "Verdi"];

// Chiedo il cognome all'utente
let mioUtente = prompt("Aggiungi il tuo cognome alla lista");

// Costruisco una variabile cognomeMaiuscola che è uguale a mioUtente ma con la prima lettera maiuscola, e lo pusho in cognomi
inizialeMaiuscola = mioUtente.charAt(0);
cognomeMaiuscola = inizialeMaiuscola.toUpperCase() + mioUtente.slice(1);
cognomi.push(cognomeMaiuscola);

// Ordino alfabeticamente l'array cognomi e 
cognomi.sort();

console.log("il tuo cognome si trova alla posizione " + cognomi.indexOf(cognomeMaiuscola))

for (i = 0; i < cognomi.length; i++) {
    console.log(cognomi[i])
}



