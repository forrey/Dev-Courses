# Annotations with Functions and Objects

In this section, we added two files:

- annotations/functions.ts
- annotations/objects.ts

## Part 1

We looked at the type annotation syntax for functions of all types.

```
const add = (a: number, b: number): number => {
  return a + b;
};
```

We also looked at cases like `: void` and `: never`

## Part 2

We looked at destructuring, from simple cases like:

```
const { age }: { age: number } = profile;
```

To more complex examples like:

```
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```
