//Assegnare un valore predefinito con if...else

    let userInput = '';
    let customName;

    if(userInput){
        customName === userInput
    } else {
        customName = 'Guest';
    }

    console.log(customName);

    //Usare l’operatore || per una valutazione abbreviata
let nickname = '';
let finalName = nickname || 'Anonymous';

console.log(finalName);