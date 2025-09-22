//  1: Verifica delle proprietà con .hasOwnProperty() e accesso ai valori con .valueOf()

const robot = {
    model: 'RX-78',
    energyLevel: 85
}

const robotProperty = robot.hasOwnProperty('speed');
console.log(robotProperty);

const robotValue = robot.valueOf(robot);
console.log(robotValue);

// 2: Uso di Object.keys() e Object.entries()

const robotKeys = Object.keys(robot);
console.log(robotKeys);

const robotEntries = Object.entries(robot);
console.log(robotEntries);

const upgradedRobot = Object.assign(robot,{upgraded: true});
console.log(upgradedRobot);

