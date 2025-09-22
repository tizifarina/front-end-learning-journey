//1: Creare un getter per nome completo

let employee = {
    _firstName: 'Sara',
    _lastName: 'Rossi',
    get fullName(){
        if(this._firstName && this._lastName ){
            return this._firstName + ' ' + this._lastName;
        } else {
            return 'Nome o cognome mancante';
        }
    }
}

console.log(employee.fullName);

delete employee._lastName;
console.log(employee.fullName);

//2: Getter con controllo sulla lunghezza

let book = {
    _title: 'Il Signore degli Anelli',
    get shortTitle(){
        if(this._title.length > 20){
            return 'Titolo troppo lungo';
        } else {
            return this._title;
        }
    }
}

console.log(book.shortTitle);
book._title = 'Dune';
console.log(book.shortTitle);



