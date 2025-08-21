//: Verificare il valore truthy di una variabile
// Scrivi una struttura condizionale che controlla se una variabile contiene un valore truthy.

const userMessage = '';
if(userMessage){
    console.log('User has sent a message');
} else {
    console.log('No message receveid');
}

const valueZero = 0;
const emptyString = '';
const valueNull = null;
const valueUndefined = undefined;
const valueNan = NaN;

if(valueZero){
    console.log('Truthy');
} else {
    console.log('Falsy');
}

if(emptyString){
    console.log('Truthy');
} else {
    console.log('Falsy');
}

if(valueNull){
    console.log('Truthy');
} else {
    console.log('Falsy');
}

if(valueUndefined){
    console.log('Truthy');
} else {
    console.log('Falsy');
}

if(valueNan){
    console.log('Truthy');
} else {
    console.log('Falsy');
}