//1: Convertire un if...else in un operatore ternario

let isOnline = false;
/*
if(isOnline){
    console.log('User is active');
} else {
    console.log('User is offline');
}*/

    
isOnline ? console.log('User is active') : console.log('User is offline');  

let userRole = 'guest';
userRole === 'admin' ? console.log('Access granted') : console.log('Access denied');


