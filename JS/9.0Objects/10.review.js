//1: Oggetti in JavaScript


let robot = {
    model: 'RX-78',
    'energy level': 85,
    status: function(){
        console.log('Sistema operativo attivo');
    },
}

let robotModel = robot.model;
console.log(robotModel);

robot['origin'] = 'Giappone';

robot['energy level'] = 100;

delete robot.model;

for(let key in robot){
    console.log(key);
}

//2: Oggetto 'student'

let student = {
    name: 'Giulia',
    age: 21,
    greet: function(){
        console.log('Ciao, piacere di conoscerti!');
    }
}

let studentName = student.name;
console.log(studentName);

student['university'] = 'Universita\' di Bologna';

student.age = 22;

delete student.greet;

for(let key in student){
    console.log(key);
}