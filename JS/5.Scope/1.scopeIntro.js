//// 1. Variabile globale
let sky = 'stars';

//// 2. Funzione cityView
function citView(){

     // Stampa della variabile locale
    let view = 'river';

    // Stampa della variabile globale
    console.log(view);
}
citView();

//console.log(view);

//
// 2: Scope e ridefinizione di variabili
let animal = 'cat';
function changeAnimal(){
    let animal = 'dog';
    console.log(animal);
}

console.log(animal);
changeAnimal();