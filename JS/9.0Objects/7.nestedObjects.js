// Accedere a proprietà annidate all'interno di un oggetto

const labUnit = {
    equipment : {
        microscope : {
            model : 'ZoomMax',
            lens : 'Ultra Sharp'
        },
    },
    technicians : {
        lead : {
            name : 'Marco',
            field : 'Biology'
        }
    }
}

const leadField = labUnit.technicians.lead.field;

console.log(leadField);

//Accedere a proprietà annidate con notazione a parentesi quadre
 
labUnit.storage = {
    'cold-room' : {
        temperature : -20,
        status : 'active'
    }
}

const coldRoomTemp = labUnit.storage['cold-room'].temperature;
console.log(coldRoomTemp);