//Assegnare e aggiornare proprietà di un oggetto

const robot = {
    model : 'RX-78'
}

robot.model = 'RX-79';
robot['energy level'] = 100;

const energy = robot['energy level'];
console.log(energy);

//: Eliminare una proprietà da un oggetto

const car = {
    brand : 'Fiat',
    color : 'red',
    year : 2010
}

const manufactureYear = car.year;

delete car.year;
console.log(manufactureYear, car.year);
