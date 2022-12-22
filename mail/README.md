# js-mail-EMAIL
1- CHIEDERE ALL'UTENTE LA SUA MAIL
(es prompt: Inserisci la tua mail)
2- CREARE UNA VARIABILE CHE CONTIENE UN'ARRAY
    - NELL'ARRAY DEVONO ESSERCI x MAIL
3- SE LA MAIL INSERITA NEL PROMPT CORRISPONDE A UN VALORE DELL'ARREY:
    - L'UTENTE PUò ACCEDERE.
4- SE LA MAIL INSERITA NEL PROMPT NON CORRISPONDE A UN VALORE DELL'ARRAY:
    - L'UTENTE NON PUò ACCEDERE.

    const numbers = [2, 7, 9, 18, 47, 22, 23, 25, 100];

for (let indice = 0; indice < numbers.length; indice++) {
    if (numbers[indice] % 2 == 1) {
        console.log(numbers[indice], 'è dispari');
    }
}