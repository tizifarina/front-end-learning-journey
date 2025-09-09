//  1: Stampare ogni voce con .forEach()

const animals = ['cat', 'dog', ' rabbit'];

animals.forEach(animals => {
    console.log('Animal: ', animals);
})

//2: Calcolare il totale con .reduce()

const expenses = [50, 20, 30];

const totalExpenses = expenses.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

console.log(totalExpenses);
