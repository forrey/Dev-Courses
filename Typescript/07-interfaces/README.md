# Interfaces

In this section, we added the file:

- interfaces.ts

## Part 1

We looked at the basics of interfaces, starting with defining them:

```
interface Dog {
  name: string;
  age: number;
  isTrained: boolean;
}
```

And then using them:

```
const delta = {
  name: 'Delta',
  age: 10,
  isTrained: true
}

const callDog = (dog: Dog): string => {
  return `Come here ${dog.name}`;
}
```

## Part 2

The we looked at using advanced data types and functions in interfaces

```
Interface Dog {
  name: string;
  age: number;
  dateOfBirth: Date;
  isTrained: boolean;
  callDog(): string;
}
```

And using them:

```
const delta = {
  name: 'Delta',
  age: 10,
  dateOfBirth: new Date(2017, 12, 05),
  isTrained: true;
  callDog(): string {
    return `C'mere ${this.name}!`
  }
}

const callDog = (dog: Dog): void => {
  console.log(dog.callDog);
}

callDog(delta);
```

# Part 3

In part 3 we basically talked about proper usage, aka making interfaces and functions generic.

So for example, we don't need all the parameters of Dog (because we don't actually use them in our final function), and we can make it generic for other uses:

```
Interface Pet {
  callPet(): string;
}
```

Then we can use one interface and one function for multiple types of objects.

```
const delta = {
  name: 'Delta',
  dateOfBirth: new Date(2017, 12, 05),
  isTrained: true;
  call(): string {
    return `C'mere ${this.name}!`
  }
}

const Marley = {
  name: 'Marley',
  breed: 'Ginger cat,'
  likesPets: true,
  call(): string {
    return `Pss Pss ${this.name}`
  }
}

const callPet = (pet: Pet): void => {
  console.log(pet.call());
}
```
