// Accedere a proprietà con notazione tra parentesi quadre

const device = {
    'Battery Level' : 85,
    'Wi-Fi' : 'True'
}

const batteryStatus = device['Battery Level'];

console.log(batteryStatus);

const wifiStatus = device['Wi-Fi'];

console.log(wifiStatus);

//Accedere a una proprietà tramite variabile e notazione tra parentesi quadre

const book = {
    title : '1984',
    author : 'George Orwell'
}
let keyToAccess = 'author';

const bookAuthor = book[keyToAccess];

console.log(bookAuthor);