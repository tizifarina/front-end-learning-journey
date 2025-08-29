//1: Confronta elementi comuni in due array

let inventoryA = [12, 45, 33];
let inventoryB = [77, 33, 12];

for(let i = 0; i < inventoryA.length; i++){
    for(j = 0; j < inventoryB.length; j++){
        if(inventoryA[i] === inventoryB[j]){
            console.log('Match found:' + inventoryA[i]);
        }
    }
}

//2: Trova nomi duplicati tra due liste

let listA = ['Anna', 'Luca', 'Paolo'];
let listB = ['Luca', 'Maria', 'Anna'];

for(let a = 0; a < listA.length; a++){
    for(let b = 0; b < listB.length; b++){
        if(listA[a] === listB[b]){
            console.log('Duplicate name: ' + listA[a]);
        }
    }
}