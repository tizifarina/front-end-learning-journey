//1: Impostare un’età valida

let user = {
    _age: 25,
    set age(newAge){
        if(typeof newAge === 'number'){
            this._age = newAge;
        } else {
            console.log('Invalid age value');
        }
    }
}

user.age = 30;
console.log(user._age);

user.age = 'trenta';
console.log(user._age);

// 2: Controllo di lunghezza del titolo
let movie = {
    _title: 'Matrix',
set title(newTitle){
    if(typeof newTitle === 'string' && newTitle.length >= 4){
        this._title = newTitle;
    } else {
        console.log('Titolo non valido');
    }
}
}

movie.title = 'Up';


console.log(movie._title);

movie.title = 'Inception';
console.log(movie._title);






