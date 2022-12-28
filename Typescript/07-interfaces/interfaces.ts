// Let's start by creating a car object
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// We could create a function with type annotations like this.
// It takes our vehicle as a parameter and prints its properties.
// The problem is, the function definition becomes super long with Typescript annotation.
const printVehicleOld = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Is it broken? ${vehicle.broken}`);
};

printVehicleOld(oldCivic);

// We can fix this by creating an interface
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// Now our function definition is much more concise
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Is it broken? ${vehicle.broken}`);
};

// And when we use our function, TypeScript will check that the passed object has all the defined properties and types
printVehicle(oldCivic);

// We can also use interfaces to design more advanced properties and even methods
interface Vehicle2 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

// Note the use of Date and the function
const newCivic = {
  name: 'civic',
  year: new Date(2001, 12, 34),
  broken: false,
  summary(): string {
    return `${this.name} is from the year ${this.year}. Is it broken? ${this.broken}`;
  },
};

// Now we can much more concisely return a summary
const printVehicle2 = (vehicle: Vehicle2): void => {
  console.log(vehicle.summary());
};

// However, now we don't actually use the name, year, and broken properties in our function
// So we don't actually need them in our interface
// We could just write:
interface Vehicle2Updated {
  summary(): string;
}

// But now, it's weird that an interface that just has a summary function that returns a string is so specific.
// Why just a vehicle?
// It'd be better to make this something more generic:

interface Reportable {
  summary(): string;
}

// Our function also could be more generic
const itemReport = (item: Reportable): void => {
  console.log(item.summary());
};

// Now we can use a totally different object and still use the Reportable interface
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink is ${this.color} and has ${this.sugar} grams of sugar`;
  },
};

itemReport(drink);
