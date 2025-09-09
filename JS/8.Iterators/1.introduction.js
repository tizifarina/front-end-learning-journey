//1: Modificare ogni elemento con .map()

let number = [2, 4, 6];


// raddoppio ogni numero con .map()
let doubledNumbers = number.map(function(n){
    return n* 2;
});

console.log(doubledNumbers);


// 2: Filtrare elementi con .filter()

let ages = [ 12, 17, 18, 24, 15];

// Usa `.filter()` per ottenere un nuovo array con solo i valori maggiori o uguali a 18.

let adultAges = ages.filter(age => age >= 18);

console.log(adultAges);
