// 1: Usare funzioni come dati

function greet(){
    return 'Ciao!';
}

console.log(greet());

//2: Creare una funzione di ordine superiore


function callFunction(fn){
  return fn();
}

function sayHi(){
    return 'Ciao dal Callback!';
}

console.log(callFunction(sayHi));