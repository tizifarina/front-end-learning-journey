let a = 25;
let b = 30;

if(a < b){
    console.log('a minore di b');
}

if(b > a){
    console.log('b maggiore di a');
}

if(a <= 25){
    console.log('a minore o uguale a 25');
}

if(b >= 35){
    console.log('b maggiore o uguale a 35');
}

if(a === 25){
    console.log('a uguale a 25');
}

if(b !== 25){
    console.log('b diverso da 25');
}

//Applica gli operatori === e !== su valori testuali per comprendere come si comportano con le stringhe

const fruit1 = 'apple';
const fruit2 = 'orange';

if(fruit1 === 'apple'){
  console.log('fruit1 uguale ad apple');
}

if(fruit2 !== 'apple'){
    console.log('fruit2 diverso da apple');
}

const fruit3 = 'Apple';
if(fruit1 === fruit3){
    console.log('fruit1 e fruit3 sono uguali');
}

