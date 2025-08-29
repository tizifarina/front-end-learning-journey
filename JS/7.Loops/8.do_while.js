// 1: Stampa i numeri da 1 a 5 usando un ciclo do...while
let counter = 1;
do {
   console.log(counter);
   counter++; 
} while (counter <= 5);

// 2: Usa do...while per stampare almeno una volta un messaggio
let keepRunning = false;
do {
    console.log('Esecuzione garantita');
} while (keepRunning);