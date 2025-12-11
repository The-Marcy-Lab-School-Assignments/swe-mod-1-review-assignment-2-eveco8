# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):

- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?

Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1`.songCount? Write the corrected code below your response (we've provided the broken code again for you to fix).

### Response 1

`console.log(playlist1.songCount)` would log 15 to the console because doing `playlist2 = playlist1` doesn't create a new object but instead copies the reference so the memory that is referenced is still the same. One way to modify the code so that reassigning `playlist2.songCount` does not affect `playlist1.songCount` is to use the **_spread operator_**. This will make a shallow copy of the original object and make it so that each object has it's own reference.

**Corrected Code:**

```js
// fix this!
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = { ...playlist1 };
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true },
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85.
2. You need to find the student named "Destiny" and update their grade to 90.
3. You need to calculate the average grade of all students.
4. You need to create an array of strings in the format: "Maya: 92"

### Response 2

1. I would use the filter method because I want to get a new array that passes a condition.
2. I would use the find method because I want to find a specific item and then update that item.
3. I would use the reduce method because I want to calculate the average and reduce the array into one value.
4. I would use the map method because I want a new array that transforms each element into strings.

---

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ["a", "b", "c", "d"];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

This error occurs because when you do `capitalize()` it runs that function first and then `.map`. This would cause the input for `.map` put to be **_undefined_** since `capitalize()` needs an input. To fix this you would need to get rid of the parenthesis so that `.map` can run the capitalize function and automatically put each element as an argument.A way to avoid this error in the future is to know that **_callback functions_** are **_references_** and should not be called immediately so the `()` is not necessary.

---

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 },
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs?
- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
- Part C: Walk through what happens in the FIRST iteration of reduce:
  - What is the value of sum?
  - What is the value of order?
  - What gets returned?

### Response 4

`grandTotal` will equal `135` because the `reduce` **_array method_** adds up all the total values in the array. The `0` at the end is the `initial value` of the accumulator (`sum`) which is important because it guarantees that the calculation starts at zero instead of the first object being used as the starting value. On the first iteration, `sum` starts off as `0` and it looks at the first object for `order.total` which is `45` then the callback returns `0 + 45 = 45`. Then the `45` gets saved in the `sum` and the `order.total` value is now the value in the next object which is `45 + 23 = 68`. This continues to happen on each iteration until the callback is done.
