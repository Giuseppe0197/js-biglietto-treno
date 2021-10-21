/* calcolatore prezzo biglietto del treno in base a età e chilometri da percorrere */


/* definizione elemento nell'html */
 
let prezzoFinale = document.getElementById("prezzo_totale")

/* chiedere all'utente quanti chilometri vuole percorrere */

let chilometri = prompt("Quanti chilometri vuoi percorrere?");
console.log(chilometri);

/* chiedere all'utente quanti anni ha */

let age = prompt("Quanti anni hai?");
console.log(age);

/* calcolare il prezzo del biglietto intero */

let prezzoNormale = chilometri * 0.21;
prezzoNormale = prezzoNormale.toFixed(2);
console.log(prezzoNormale);

/* calcolare il prezzo del biglietto per minorenni */

let prezzoMinorenni = prezzoNormale - (prezzoNormale * 20 / 100);
prezzoMinorenni = prezzoMinorenni.toFixed(2);
console.log(prezzoMinorenni);

/* calcolare il prezzo del biglietto per over 65 */

let prezzoOver = prezzoNormale - (prezzoNormale * 40 / 100);
prezzoOver = prezzoOver.toFixed(2);
console.log(prezzoOver);

/* prezzo finale in base a età e chilometri */

if (age <= 17) {
    prezzoFinale.innerHTML = `Il prezzo del suo biglietto è di: ${prezzoMinorenni}€. Complimenti, hai ricevuto uno sconto del 20%!`
} else if (age >= 65) {
    prezzoFinale.innerHTML = `Il prezzo del suo biglietto è di: ${prezzoOver}€. Complimenti, hai ricevuto uno sconto del 40%!`
} else {
    prezzoFinale.innerHTML = `Il prezzo del suo biglietto è di: ${prezzoNormale}€. Purtroppo non è riuscito ad usufruire dello sconto, ci dispiace per il disagio.`
}