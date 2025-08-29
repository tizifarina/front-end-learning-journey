// 1: Usa break per interrompere un ciclo for

for(let i = 0; i < 10; i++){
    if(i == 4){
        break;
    } else {
        console.log(i);
    }
}

// 2: Interrompi un ciclo while usando break quando una condizione è soddisfatta
let counter = 0;
while(counter < 10){
    if(counter == 6){
        break;
    } else {
        console.log(counter);
    }

    counter++;
}