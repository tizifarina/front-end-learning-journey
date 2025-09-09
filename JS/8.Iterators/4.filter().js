// 1: Filtrare le parole brevi

const items = ['table', 'cup', 'bottle','lamp', 'box','mirror'];
const shortItems = items.filter(items => {
    return items.length < 5;
});

console.log(shortItems);

// 2: Filtrare i numeri positivi

const temperatures = [-5, 10, -3, 0, 7, -8, 15];

const positiveTemperatures = temperatures.filter(temperatures => {
    return temperatures > 0;
})

console.log(positiveTemperatures);