// Usare && e || per verificare condizioni multiple
// Scrivi condizioni che combinano più confronti usando operatori logici && e ||

let temperature = 22;
isRaining = false;
if(temperature >= 20 && isRaining === false){
    console.log('Perfect day for a walk');
} else {
    console.log('Maybe stay inside');
}

if(temperature >= 30 || isRaining === true){
    console.log('Avoid going out now');
} else {
    console.log('The weather is manageable');
}

//Usare ! per invertire un valore booleano
 //Utilizza l’operatore ! per testare il comportamento inverso di una condizione.

const isAvailable = false;
if(!isAvailable){
    console.log('The item is currently unavailable');
} else {
    console.log('Item in stock');
}

const isWeekend = true;
if(!isWeekend){
    console.log("It's weekday");
} else {
    console.log('Weekend mode activated');
}
