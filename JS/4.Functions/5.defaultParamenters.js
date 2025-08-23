//Usare parametri con valori predefiniti

function introducePerson(name = 'guest'){
console.log('Benvenuto ' + name );
}

introducePerson('Giulia');
introducePerson();

// 2: Applicare valori predefiniti a più parametri
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
console.log(item1);
console.log(item2);
console.log(item3);

}

makeShoppingList('pasta', 'cheese');
makeShoppingList();