//1: Creare robot con funzione fabbrica

const robotFactory = (id, model, energyLevel, speakMessage) => {
    return {
        id: id,
        model: model,
        energyLevel: energyLevel,
        speak(){
            console.log(speakMessage);
        }
    }
}

const robot1 = robotFactory(101, 'XR-22', 80, 'Mission ready!');

robot1.speak();
console.log(robot1.energyLevel);

//2: Creare un secondo robot con parametri diversi

const robot2 = robotFactory(202, 'MK-9', 45, 'Low battery...');

robot2.speak();
console.log(robot2.model);
console.log(robot2.id);