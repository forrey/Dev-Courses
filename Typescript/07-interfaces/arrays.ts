// We can annotate an array if we initialize it empty
// This means it will contain strings
const myArray: string[] = [];

// If we initialize with values though, we don't need an annotation
// Typescript will infer
const carMakers = ['ford', 'mazda', 'subaru'];
const dates = [new Date(), new Date()];

// This works for multi-dimensional arrays as well
const carsByMake = [['Mazda3'], ['Forester'], ['Ioniq']];

// If we initialized the above array empty, we would use annotations:
const my2DArray: string[][] = [];

// Typescript also uses inferences when extracting values
// Or when using methods
// Hover over the consts here to see
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); <- this will throw an error

// Help with map, forEach, reduce
// Typescript makes sure that the value in the function is a string
// And we have autocomplete for lots of built in methods because typescript knows car is a string
carMakers.map((car: string) => {
  return car.toUpperCase();
});

// Flexible types
// Hovering over the array name will show how Typescript recognizes multiple types
const importantDates = [new Date(), '2030-10-10'];

// If I initialize with only Date() but expect strings, I need to anotate
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); <- this will throw an error
