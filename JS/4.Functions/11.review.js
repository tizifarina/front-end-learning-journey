// 1: Dichiarare e Richiamare Funzioni

function showMessage() {
    console.log("JavaScript è divertente!");
}

showMessage();

//2: Parametri, Valori di Default, Return e Funzioni Freccia
const calculateDiscount = (price, discount = 10) =>
    price - (price * discount / 100); 


const printFinalPrice = finalPrice =>
    console.log(`Il prezzo finale e: ${finalPrice}`);


printFinalPrice(calculateDiscount(100));