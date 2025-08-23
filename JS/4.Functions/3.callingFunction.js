//  Creare e chiamare una funzione più volte
function showAlert(){
    console.log('Attenzione!');
}

showAlert();
showAlert();
showAlert();

// 2: Dichiarare più funzioni e chiamarle nell'ordine corretto
function openApp(){
    console.log('Applicazione avviata');
}

function loadData(){
    console.log('Dati caricati');
}

function closeApp(){
    console.log('Applicazione chiusa');
}

openApp();
loadData();
closeApp();