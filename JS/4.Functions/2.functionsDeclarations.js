function saiHello(){
    console.log('Ciao!');
}

saiHello();
saiHello();

// funzione freccia non richiesta da esercizi

// Funzione freccia equivalente
const sayHello = () => {
  console.log("Ciao!");
};

// Prima chiamata
sayHello(); // Ciao!

// Seconda chiamata
sayHello(); // Ciao!

//2: Creare più funzioni e richiamarle

function startDay(){
    console.log('Buona giornata!');
}

function endDay(){
    console.log('Buona notte!');
}

startDay();
endDay();