const giocatore = Math.floor((Math.random() * 5) + 1);
const computer = Math.floor((Math.random() * 5) + 1);

console.log('Numero Giocatore corrisponde a ', typeof giocatore, giocatore);
console.log('Numero Computer corrisponde a ', typeof computer, computer);

if (giocatore > computer){
    console.log('Giocatore VINCE');
}
else if (giocatore < computer){
    console.log('Computer VINCE');
}
else if (giocatore == computer){
    console.log('Risultato pari');
}