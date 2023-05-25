console.log('JS OK');


// Recupero il placeholder dal DOM
const password = document.getElementById('password');
console.log(password);

//Chiediamo il nome dell'utente
const userName = (prompt ('Come ti chiami?', 'Mario'));
console.log(userName);

//Chiediamo il cognome dell'utente
const userSurname = (prompt ('Qual è il tuo cognome?','Rossi'));
console.log(userSurname);

//Chiediamo il colore preferito dell'utente
const userColor = (prompt('Qual è il tuo colore preferito?','Viola'));
console.log(userColor);

//Calcoliamo la Password dell'utente
const userPassword = userName + userSurname + userColor + '74'
console.log(userPassword)

//Inseriamo la Password del DOM
password.innerText += ' ' + userPassword;