# JSON Fetching with TypeScript and Axios

## Part 1

We started by installing typescript, type-node, and axios.

```
$ npm install -g typescript type-node
$ npm install axios@0.27.2
```

_Note that we used 0.27.2 because there are breaking changes in later versions._

---

Then we used [jsonplaceholder](https://jsonplaceholder.typicode.com/) to get dummy API data.

We created an index.ts file in the project root and used axios to fetch the API data of a single entity and log it.

```
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  console.log(response.data);
});
```

---

Then we learned how to compile the TypeScript and execute the code via two methods:

1. Two commands: `$ tsc index.ts` then `$ node index.js`
2. One command: `$ ts-node index.ts`

## Part 2

Now we started actually using some TypeScript.
We created an interface to show how we can define what types of data we expect to recieve from [our API call](https://jsonplaceholder.typicode.com/todos/1):

```
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const { id, title, completed } = response.data as Todo;

  console.log(`
    The Todo with ID: ${id}
    Has a title of ${title}
    Is it finished? ${completed}
  `);
});
```

## Part 3

Finally, we broke out our console.log into a re-usable function and added type annotation to its parameters.
This ensures that we can validate that we've entered parameters of the correct type in the correct order.

```
axios.get(url).then((response) => {
  const { id, title, completed } = response.data as Todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of ${title}
  Is it finished? ${completed}
`);
};
```
