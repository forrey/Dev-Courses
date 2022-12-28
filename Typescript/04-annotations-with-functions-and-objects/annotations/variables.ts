// Primitives
const apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let years: number[] = [1992, 1993, 1994, 2004];
let quizAnswer: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// Note that here (i: number) is the parameters the function will accept. void is the expected output
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations?
// 1 - when a function returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// The type of coordinates will be 'any'
// Why? Because JSON.parse can return a number of different data types.
console.log(coordinates); // {x: 10, y: 20}

// 2 - When we declare a variable before initializing
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3 - When we have a variable whose type can't reasonably be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
