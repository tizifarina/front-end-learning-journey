//1: Stampa ogni elemento con .forEach()

const colors = ['rosso', 'verde', 'blu'];

colors.forEach(colors => {
    console.log(colors);
})

//2: Somma tutti i numeri con .reduce()

const scores = [10, 20,30];

const totalScore = scores.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(scores);
console.log(totalScore);
