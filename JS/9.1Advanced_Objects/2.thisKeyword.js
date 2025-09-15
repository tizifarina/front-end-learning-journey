// 1: Utilizzare `this` nei metodi di un oggetto


let robot = {
    model : 'T-850',
    status : 'online',
    reportStatus(){
        console.log('Model', this.model, 'is currently', this.status);
    },

    shutDown(){
        this.status = 'offline';
    }
}

robot.reportStatus();
robot.shutDown();
robot.reportStatus();


// 2: Modificare proprietà con `this` in un metodo


