//1: Modificare un array all’interno di una funzione

const colors = ['red', 'green', 'blue'];
function addColor(arr){
    arr.push('yellow');
}

addColor(colors);
console.log(colors);

//2: Mutazioni multiple di un array all’interno di funzioni
let numbers = [1, 2, 3, 4, 5];

function removeLast(arr){
    arr.pop();
}

function addNumber(arr, num){
    arr.push(num);
}

removeLast(numbers);
addNumber(numbers, 10);

console.log(numbers);