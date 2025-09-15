//1. Crea un oggetto `car` con le seguenti proprietà:

let car = {
   brand : 'Ferrari',
   year : 2022,
   startEngine: function(){
    console.log('Motore acceso');
    },
};
let carYear = car.year;
console.log(carYear);

// 3. Aggiungi proprietà color
car['color'] = 'rosso';

// 4. Modifica brand
car.brand = 'Lamborghini';

// 5. Elimina startEngine
delete car.startEngine;

// 6. Ciclo for...in per stampare le chiavi
for(let key in car) {
    console.log(key);
}





