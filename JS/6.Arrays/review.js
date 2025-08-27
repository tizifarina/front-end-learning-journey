//1: Crea e manipola un array base

let colors = ['red', 'blue', 'green', 'yellow'];

console.log(colors.length);
console.log(colors[2]);

colors[1] = 'purple';
console.log(colors);

// 2: Metodi degli array e array annidati
let numbers = [10, 20, 30];
numbers.push(40);
numbers.shift();

console.log(numbers);

let nestedNumbers = [[1, 2], [3, 4]];
console.log(nestedNumbers[0]);
console.log(nestedNumbers[1][1]);

