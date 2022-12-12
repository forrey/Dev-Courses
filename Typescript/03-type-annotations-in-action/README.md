# Type associations in action

## Part 1

We looked at the type annotation syntax for:

- Primitives
- Built-in objects (i.e. Date)
- Arrays
- Classes
- Object Literal
- Function

## Part 2

Explained when we can use type inferrence.

For example:
`let apples: number = 5;` is actually the same as `let apples = 5`
In the latter, TypeScript will infer that the type is number.

However, if we declare the variable and then assign it like this...

```
let apples;
apples = 5
```

TypeScript will interpret the type of apples as "any"

## Part 3

When to use Typescript annotations:

1. When a function returns the 'any' type

```
const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json); // The type of coordinates will be 'any'
```

Instead, we should use:

```
const coordinates: { x: number; y: number } = JSON.parse(json);
```

2. When we initialize a variable and then declare it

```
let words = ['red', 'green', 'blue'];
let foundWord; // This has no declared type.
```

Instead, we should write:

```
let foundWord: boolean;
```

3. When we have a variable whose value can't be reasonably inferred
   Here we loop through an array. If a number is above zero, we set numberAboveZero to the number. Otherwise it stays false.
   In other words, the value of numberAboveZero can either be boolean or a number.

   ```
   let numbers = [-10, -1, 12];
   let numberAboveZero: boolean | number = false;
   for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] > 0) {
       numberAboveZero = numbers[i];
     }
   }
   ```
