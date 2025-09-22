//1: Convenzione di privacy con underscore

let user = {
    _password: 'abc123',
    showPassword: function(){
        console.log('La password e\'', this._password);
    }
}

user.showPassword();

user._password = 'hack999';

user.showPassword();

// 2: Conseguenze dell'accesso diretto

let account = {
    _balance: 500,
    displayBalance: function(){
        console.log('Saldo corrente: ', this._balance);
    }
}

account.displayBalance();

account._balance = 99999;
account.displayBalance();

/*
6. Spiegazione:
Permettere modifiche dirette a _balance è rischioso perché chiunque può
cambiare il valore senza controlli. In un vero sistema bancario, questo 
potrebbe portare a frodi o inconsistenze. 
Per sicurezza si usano metodi dedicati (es. deposit(), withdraw()) che 
applicano regole di validazione invece di modificare la proprietà direttamente.
*/