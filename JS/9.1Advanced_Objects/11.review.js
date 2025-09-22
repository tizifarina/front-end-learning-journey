// 1: Crea un oggetto con metodi, proprietà private e getter/setter




const user = {
    _username: 'developer_01',
    _password: 'abc123',
    get username() {
        return this._username;
    },

    set password(newPassword) {
        if(typeof newPassword === 'string' && newPassword.length >= 6){
            this._password = newPassword;
            console.log(`Password aggiornata: ${this._password}`);
        } else {
            console.log('Password non aggiornata: Invalid password');
        }
    },
    
    login() {
        if(this._password === 'abc123'){
            console.log('Tentativo di login: Access granted');
        } else {
            console.log('Tentativo di login: Acces Denied');
        }
    }
}

// 5. Usa il getter per ottenere il nome utente
console.log('Nome utente: ', user.username);

// 6. Usa il setter per cambiare la password in '123'
user.password = '123';

// 7. Cambia la password in 'newpass' con il setter
user.password = 'newpass'; //aggiorna password

// 8. Esegui il metodo login
user.login();    

// 2: Usa una funzione fabbrica con shorthand e assegnazione destrutturata

createDevice = (type, brand, batteryLevel)  => {
    return {
    type,
    brand,
    batteryLevel,

    status() {
        console.log(type, 'by', brand, 'has', batteryLevel, 'battery');
    }
    };
};

const phone = createDevice('Smartphone', 'Samsung', 85);
phone.status();

const {brand} = phone;
console.log(brand);