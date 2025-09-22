// 1: Utilizzare `this` nei metodi di un oggetto


let robot = {
    model : 'T-850',
    status : 'online',
    reportStatus(){
        console.log('Model', this.model, 'is currently', this.status);
    }
}

robot.reportStatus();


// 2: Modificare proprietà con `this` in un metodo
robot.shutDown = function(){
        this.status = 'offline';
}
robot.shutDown();
robot.reportStatus();


