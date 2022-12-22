const mailClasse = ['pinco.pallino@gmail.com', 'giada.pallino@gmail.com', 'martina.pallino@gmail.com', 'stefania.pallino@gmail.com', 'giuseppe.pallino@gmail.com'];
// console.log(mailClasse);

const mailUtente = prompt('Inserisci la tua mail:');
console.log('La mail inserita è: ', mailUtente);

for (let index = 0; index < mailClasse.length; index++) {   

    if (mailUtente == mailClasse[index]){
    console.log(mailUtente, "fai parte di questa classe, procedi con il login");
        index = mailClasse.length++;
    }
    else if (index == mailClasse.length-1){
        console.log(mailUtente, "non fai parte di questa classe");
    }
}