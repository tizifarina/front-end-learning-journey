//1: Definire e usare un'espressione di funzione
const greetUser = function(name){
    console.log(`Welcome, ${name}`);
}

greetUser('Marco');

//
//E 2: Sommare due numeri usando un'espressione di funzione

const addNumbers = function(x,y){
    return (x+y);

}

const total = addNumbers(5,12);
console.log(total);