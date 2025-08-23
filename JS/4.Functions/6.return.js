//1: Usare il return per calcolare un risultato

function multiplyByTwo(number){
    return(number * 2);
}

let result = multiplyByTwo(6);
console.log(result);

function calculateDiscountedPrice(price, discount){
if( price < 0 || discount < 0){
    return 'Invalid input';
} else{
    return (price - (price * discount));
}
}
let finalPrice = calculateDiscountedPrice(100, 0.2);
console.log(finalPrice);
finalPrice = calculateDiscountedPrice(-50, 0.1)
console.log(finalPrice);
