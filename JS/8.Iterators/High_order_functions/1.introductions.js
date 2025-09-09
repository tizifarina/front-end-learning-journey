//1: Funzione come variabile

const lavoroImportante = () => {
    console.log('Sto lavorando!');
}

lavoroImportante();

//2: Funzione di ordine superiore con funzione anonima
// 1. Definisco una funzione che accetta un callback
function eseguiCallBack(callback){
     // 2. Invoco il callback
    callback();
}
// 3. Chiamo eseguiCallback passando una funzione anonima
eseguiCallBack(function() {
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
});