// 1: Trovare l'indice della prima parola lunga

const tools = ['pen', 'notebook', 'eraser', 'ruler', 'sharpener', 'tape'];
const longToolIndex = tools.findIndex(tools => {
    return tools.length > 6;
})
console.log(longToolIndex);

// 2: Nessun elemento soddisfa la condizione

const ages = [3, 7, 12, 15, 20, 25];

const overHundredIndex = ages.findIndex(ages => {
    return ages > 100;
})

console.log(overHundredIndex);