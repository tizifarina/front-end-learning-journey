// 1: Gestire un semaforo con più condizioni

let lightColor = 'green';
if(lightColor === 'red'){
    console.log('Stop!');
} else if(lightColor === 'yellow'){
    console.log('Slow down');
} else if(lightColor === 'green'){
    console.log('Go!');
} else {
    console.log('Caution, unknown!');
}

// 2: Classificare il punteggio dello studente
let studentScore = 83;
if(studentScore >= 90){
    console.log('Grade A');
} else if(studentScore >= 80){
    console.log('Grade B');
} else if(studentScore >= 70) {
    console.log('Grade C');
} else if(studentScore >= 60) {
    console.log('grade D');
} else {
    console.log('Grade F');
}