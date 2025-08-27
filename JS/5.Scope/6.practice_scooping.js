// 1: Creare e utilizzare variabili con block scope all'interno di una funzione con blocco if
function checkSky(){
    let skyColor = 'blue';
    const dusk = true;
    if(dusk){
        let eveningColor = 'pink';
        console.log(eveningColor);
    }

    console.log(skyColor);
}

checkSky();

//2: Evitare l'inquinamento dello scope globale usando nomi di variabili distinti in scope separat
const globalColor = 'red';
function showColors(){
    let colorMain = 'green';
    if(globalColor == 'red'){
        let colorSecondary = 'yellow';
        console.log(colorSecondary);
        }
        console.log(colorMain);
}

showColors();
console.log(globalColor);