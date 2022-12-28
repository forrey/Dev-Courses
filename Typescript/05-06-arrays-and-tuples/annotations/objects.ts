// We'll start with an object.
// Note we just use annotations here for the setAge method
const profile = {
  name: 'Delta',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// For destructuring, we start with our property
// Then after, we annotate (in curly braces) the type annotation
const { age }: { age: number } = profile;

// Here's what it looks like with a more complex example
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
