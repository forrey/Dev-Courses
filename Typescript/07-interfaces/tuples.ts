// We could use an object to define properties for a type of drink
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// But we could also use a tuple, where we basically remove the keys and place the values in an array
// Note that here, the order is critical, it always has to stay the same.
// The problem is, we don't remember the keys, and we can freely change values which will mess up our order
const pepsi = ['brown', true, 40];

// So we can use Typescript
// This will preserve our order and types
const cocaCola: [string, boolean, number] = ['brown', true, 40];

// We can also create a type
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 35];
const tea: Drink = ['brownish', false, 0];
