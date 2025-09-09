//1: Usare .map() per modificare i valori

const prices = [5, 10, 15];
const discountedPrices = prices.map(prices =>{
    return prices / 5;
});

console.log(discountedPrices);

//2: Creare un array trasformato da stringhe

const foods = ['apple', 'banana', 'carrot'];
const shoutedFoods = foods.map(foods => {
    return foods.toUpperCase();
});

console.log(foods);
console.log(shoutedFoods);