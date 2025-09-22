// 1: Refactoring con Property Value Shorthand

const animalFactory = (species, legs) => {
    return {
    species,
    legs
    }
};

const giraffe = animalFactory('Giraffa', 4);

console.log(giraffe.species);
console.log(giraffe.legs);

//2: Creare un secondo animale

const kangaroo =  animalFactory('Canguro', 2);
console.log(kangaroo.species);
console.log(kangaroo.legs);
