// Here we use annotations to define the data types for parameters, as well as the expected data type a function will return.
const add = (a: number, b: number): number => {
  return a + b;
};

const subract = (a: number, b: number): number => {
  return a - b;
};

// The syntax works here as well
const divide = function (a: number, b: number): number {
  return a / b;
};

// This syntax also works for anonymous functions
function multiply(a: number, b: number): number {
  return a * b;
}

// We use void for functions that don't return anything
const logger = (message: string): void => {
  console.log(message);

  // void also works if we do:
  // return null;
  // return undefined;
};

// Throwing new Errors don't actually return anything
// They just stop and exit
// So for this case we use : never
const throwError = (message: string): never => {
  throw new Error(message);
};

// Sometimes the function can return either a string, or throw an error
// In this case we annotate it as a string
const throwErrorTwo = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

// Now we'll talk about destructuring
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

// Without typescript, we'd destructure like this:
const logWeatherOld = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
};

// With typescript, we use this.
// In the first part, we do the destructuring, then we add our annotation
const logWeatherNew = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
