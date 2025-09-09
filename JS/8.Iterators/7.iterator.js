//1: Usa il metodo .map()

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(numbers => {
    return numbers * 2;

});
console.log('numbers', numbers)
console.log('doubledNumbers', doubledNumbers);

// 2: Filtra parole corte con .filter()

const words = ['apple', 'dog', 'cat', 'banana', 'bat'];

const shortWords = words.filter(words => {
    return words.length < 5;
})

console.log(words);
console.log(shortWords);