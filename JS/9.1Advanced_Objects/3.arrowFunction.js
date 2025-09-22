//1: Definire metodi con `this`
let car = {
    brand: 'Fiat',
    model: 'Punto',
    start: function(){
        console.log(this.brand, this.model, 'is starting');
    }
}

car.start();

// 2: Effetto delle arrow function

car[engineStatus] = 'ready';

car.checkStatus = () => {
    console.log('Engine is', this.engineStatus);
}

car.checkStatus();
//con una arrow function () => { ... } → this non punta a CAR, ma al contesto esterno.