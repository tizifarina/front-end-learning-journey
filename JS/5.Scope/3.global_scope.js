//1: Utilizzare una variabile globale dentro una funzione
const planet = 'Earth';
function logPlanet(){
    console.log(planet);
}

logPlanet();

 // Accedere a una variabile globale da diversi blocchi

 let language = 'Javascript'
 function showLanguage(){
    console.log(language)
 }

 showLanguage();

 if(language == 'Javascript'){
    console.log(language);
 }