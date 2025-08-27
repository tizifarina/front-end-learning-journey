//1: Rimuovi l’ultimo elemento con .pop()
const fruits = ['apple', 'banana', 'cherry', 'date'];
let lastFruit = fruits.pop();

console.log(lastFruit);

//2: Usa .pop() due volte e memorizza gli elementi rimossi
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let removedFirst = colors.pop();
let removedSecond = colors.pop();
console.log(colors);
console.log(removedFirst);
console.log(removedSecond);
