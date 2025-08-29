//1: Stampa i numeri da 10 a 6 con un ciclo for e break  

for(let i = 10; i >= 1; i--){
if(i < 6){
    break;
}
console.log(i);
}

//
// 2: Usa un ciclo while con break e contatore
let counter = 3;
while(counter < 10){
    if(counter == 7){
        break;
    } else {
        console.log(counter);
    }

    counter++;
}