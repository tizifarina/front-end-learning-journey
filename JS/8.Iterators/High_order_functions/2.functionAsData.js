//1: Assegnazione e Invocazione di Funzioni
const showMessage = () => {
    console.log('Sto lavorando');
}

const work = showMessage;

work();

// 2: Proprietà delle Funzioni

console.log(showMessage.name);
console.log(showMessage.length);
