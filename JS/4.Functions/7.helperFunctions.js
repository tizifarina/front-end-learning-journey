//1: Usare una funzione helper per completare un calcolo
function calculateSquare(number){
    return number *= number;
}

function sumOfSquares(a,b){
  calculateSquare(a);
  calculateSquare(b);
  return calculateSquare(a)+calculateSquare(b);
}

console.log(sumOfSquares(3,4));

//
//Combinare più funzioni helper

function addTax(prezzo){
    return prezzo + (prezzo * 0.10);
}

function applyDiscount(prezzo){
    return prezzo - (prezzo * 0.20);
}

function getFinalPrice(initialPrice){
    let priceWithTax = addTax(initialPrice);

    return applyDiscount(priceWithTax);
}

console.log(getFinalPrice(100));