//1. Crea una costante `robot` e assegnale un oggetto con le seguenti proprietà:

let robot = {
    'status' : 'offline',
    'battery' : 15
}

function activateRobot(machine){
    machine.status = 'active';
}

activateRobot(robot);
console.log(robot);

//Tentativo di riassegnazione di oggetto all'interno di una funzione

let vehicle = {
    'type' : 'truck',
    'inUse' : 'true'
}

function replaceVehicle(machine){
    type : 'drone'
    inUse : 'false',
    console.log(machine);
}

replaceVehicle(vehicle);
console.log(vehicle);

