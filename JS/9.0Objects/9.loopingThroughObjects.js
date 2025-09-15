// 1: Stampare i ruoli dell’equipaggio

let spaceship =  {
    crew: {
      captain : {
        nome: 'Lily',
        laurea: 'Computer Engineering',  
        },
     pilot : {
        nome : 'Shawn',
        laurea : 'Aerospace Engineering',
     },

     engineer : {
        nome : 'Sofia',
        laurea : 'Mechanical Engineering'
     }
    }
}
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].laurea}`);
    console.log(`${crewMember}: ${spaceship.crew[crewMember].nome}, ${spaceship.crew[crewMember].laurea}`)
}

//2: Stampare nome e laurea di ogni membro
