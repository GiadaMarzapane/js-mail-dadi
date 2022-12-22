const mailClasse = ['pinco.pallino@gmail.com', 'giada.pallino@gmail.com', 'martina.pallino@gmail.com', 'stefania.pallino@gmail.com', 'giuseppe.pallino@gmail.com'];
// console.log(mailClasse);

const mailUtente = prompt('Inserisci la tua mail:');
console.log('La mail inserita è: ', mailUtente);

for (let index = 0; index < mailClasse.length; index++) {
    console.log(index);
    const utenteClasse = mailClasse[index];

    if (mailUtente == utenteClasse){
    console.log(mailUtente, "fai parte di questa classe, procedi con il login");
    }
    else if (mailUtente != utenteClasse) {
        console.log(mailUtente, 'Ci spiace! Non fai parte di questa classe!')
    }
}