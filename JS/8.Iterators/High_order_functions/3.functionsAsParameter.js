// 1: Creare una funzione di ordine superiore

// 1-3. Definisco la funzione di ordine superiore
function executeCallback(callback){
    callback();
     // Restituisco la stringa con il nome del callback
     console.log(callback);
    return `Ho appena eseguito ${callback.name} utilizzando la proprieta'.name del callback`;
}

function sayHello(){
    return `Ciao dal callback!`;
}

//Chiamo executeCallback passando sayHello
console.log(executeCallback(sayHello));

//
//2: Funzione anonima come callback
// 1. Chiamo executeCallback con una funzione anonima

    const risultato2 = executeCallback(function() {
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }

    });

    console.log(risultato2);




