//Funzione Espressa e Richiamo


const multiply = function(a, b){
    return a * b;
}

console.log(multiply(4, 3));



// 4: Funzione Freccia e Valore Predefinito
 const greet = ( name = 'amico') => {
    return `Ciao, ${name}`;
 }
 console.log(greet());
 console.log(greet('Luca'));