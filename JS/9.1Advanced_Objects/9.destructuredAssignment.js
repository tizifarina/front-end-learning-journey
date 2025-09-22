//1: Destructuring di proprietà principali

const wizard = {
    name: 'Merlino',
    realm: 'Avalon',
    powers: {
      main: 'illusioni',
      support: 'teletrasporto'  
    }
   } 

const {realm} = wizard;
console.log(realm);

 //2: Destructuring di proprietà annidate

const {main} = wizard.powers;
console.log(main);

const {support} = wizard.powers;
console.log(support);
