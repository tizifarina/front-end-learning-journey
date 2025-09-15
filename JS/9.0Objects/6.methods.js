// Creare e invocare un metodo su un oggetto

const securityBot = {
    model : 'Guardian-X',
    alert : console.log('Intruder detected! Activating defense mode.')
}
 

securityBot.alert;

//Aggiungere un metodo a un oggetto esistente

const drone = {
    id : 'DR-22'
}

securityBot['fly'] = console.log('Drone in flight. ID: DR-22');

drone.fly;