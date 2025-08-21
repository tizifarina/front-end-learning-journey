// Calcolare il prezzo della spesa
let productName = 'lime';
switch(productName){
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}

//2: Determinare il giorno della settimana

let currentDay = '';
switch(currentDay){
    case 'Monday':
        console.log('Start of the work week');
        break;
    case 'Friday':
        console.log('Almost the weekend!');
        break;
    case 'Sunday':
        console.log('Rest and recharge');
        break;
    default:
        console.log('Just a regular day');
        break;
}