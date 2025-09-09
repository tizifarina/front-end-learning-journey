//1: Sommare tutti i numeri di un array

const prices = [10, 20, 30, 40];
const total = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})


// 2: Ridurre un array con un valore iniziale

const bonusPoint = [5, 10, 15];

const finalScore = bonusPoint.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 50); 

console.log(finalScore);