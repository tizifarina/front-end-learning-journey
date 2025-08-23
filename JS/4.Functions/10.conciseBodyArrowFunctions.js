// 1: Creare e invocare funzioni con la sintassi freccia
const calculateRectangleArea = (width, height) => {
    let area = (width*height);
    return area;
}

const rectangleAreaResult = calculateRectangleArea(4,6);
console.log(rectangleAreaResult);

//2: Convertire i gradi Celsius in Fahrenheit con funzioni di supporto
// Funzione helper per moltiplicare per 9/5
const multiplyByNineFifths = number => (number*(9/5));

// Funzione principale per convertire Celsius -> Fahrenheit
const getFahreneit = celsius => multiplyByNineFifths(celsius) + 32;

const fahreneitResult = getFahreneit(25);

console.log(fahreneitResult);