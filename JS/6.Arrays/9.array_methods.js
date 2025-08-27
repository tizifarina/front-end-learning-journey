const groceries = ['milk', 'bread', 'eggs', 'butter', 'cheese'];
console.log(groceries.join());

let morningGroceries = groceries.slice(0, 3);
console.log(morningGroceries);

let additionalGroceries = ['coffee', 'tea'];
let fullList = morningGroceries.concat(additionalGroceries);
console.log(fullList);

//2: Usa .splice(), .shift() e .unshift() sugli array
let snacks = ['chips', 'cookies', 'popcorn', 'nuts'];
snacks.splice(1, 1, 'granola bar', 'fruit snack');
console.log(snacks);

let firstSnack = snacks.shift();
console.log(firstSnack);

snacks.unshift('pretzels');
console.log(snacks);
