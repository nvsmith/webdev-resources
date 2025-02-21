# JavaScript: Common Methods & Tricks Cheatsheet

<a href="https://outpostwebstudio.com" target="_blank" rel="author">Outpost Web Studio</a> | Last Updated: 21 Feb 2025

---

---

- [JavaScript: Common Methods \& Tricks Cheatsheet](#javascript-common-methods--tricks-cheatsheet)
  - [1. Data Manipulation in JavaScript](#1-data-manipulation-in-javascript)
    - [1. In-Place Modification](#1-in-place-modification)
    - [2. Shallow Copy](#2-shallow-copy)
    - [3. Mutation](#3-mutation)
    - [Common Methods \& Behavior](#common-methods--behavior)
  - [2. Common JavaScript Methods \& Tricks](#2-common-javascript-methods--tricks)
    - [1. Sorting Arrays](#1-sorting-arrays)
    - [2. Filtering Arrays](#2-filtering-arrays)
    - [3. Mapping Arrays](#3-mapping-arrays)
    - [4. Finding Array Elements](#4-finding-array-elements)
    - [5. Checking Conditions in Arrays](#5-checking-conditions-in-arrays)
    - [6. Reducing Arrays](#6-reducing-arrays)
    - [7. String Manipulation](#7-string-manipulation)
    - [8. Object Keys, Values, and Entries](#8-object-keys-values-and-entries)
    - [9. Deep Copying Objects](#9-deep-copying-objects)
    - [10. Working with Dates](#10-working-with-dates)

---

---

## 1. Data Manipulation in JavaScript

### 1. In-Place Modification

An in-place modification alters the **original object or array** directly. The original reference is updated, and no new copy is created.

```js
const arr = [3, 1, 2];
// Modify the original array
arr.sort();
console.log(arr); // [1, 2, 3]
```

### 2. Shallow Copy

A shallow copy creates a new array or object.

-   Top-level elements are copied; modifying them doesn't change the original.
-   Nested elements share their **references** with the original; so _modifications to nested data in the copy will change the original_.

```javascript
const originalArray = [1, 2, { fruit: "apple" }];

// Create a shallow copy
const shallowCopy = originalArray.slice();

// Modify a top-level element in the copy - this won't affect the original array
shallowCopy[0] = "magic";

// Modify a nested object in the copy - this will affect the original array
shallowCopy[2].fruit = "cherry";

console.log(originalArray); // [1, 2, { fruit: "cherry" }]
console.log(shallowCopy); // ["magic", 2, { fruit: "cherry" }]
```

### 3. Mutation

Mutation happens when a method modifies the contents of an object or array (not just its reference). It directly impacts the existing object or array, similar to in-place modification, but the term is often used for broader context (e.g., updating properties).

**Example**: Changing properties on an object

```js
const obj = { key: "value" };
obj.key = "new value"; // Mutates the object
console.log(obj); // { key: 'new value' }
```

### Common Methods & Behavior

| **Method**                     | **Type of Behavior**  | **Description**                                                                 |
| ------------------------------ | --------------------- | ------------------------------------------------------------------------------- |
| `.sort()`                      | In-Place Modification | Reorders the elements of the array in place.                                    |
| `.splice()`                    | In-Place Modification | Adds/removes elements and modifies the original array.                          |
| `.push()`, `.pop()`            | In-Place Modification | Adds/removes elements to/from the end of an array.                              |
| `.shift()`, `.unshift()`       | In-Place Modification | Adds/removes elements to/from the start of an array.                            |
| `.slice()`                     | Shallow Copy          | Returns a new array containing selected elements of the original.               |
| `.concat()`                    | Shallow Copy          | Returns a new array by combining arrays, but nested objects are still shared.   |
| `.map()`                       | Shallow Copy          | Returns a new array with transformed elements; doesn't mutate the original.     |
| `.filter()`                    | Shallow Copy          | Creates a new array with elements that pass the test; doesn't modify the input. |
| `.reduce()`                    | Shallow Copy          | Returns a single value based on the reducer function.                           |
| `Object.assign()`              | Shallow Copy          | Copies enumerable properties to a target object; nested objects are shared.     |
| `JSON.parse(JSON.stringify())` | Deep Copy             | Creates a completely new object by serializing and deserializing data.          |
| `structuredClone()`            | Deep Copy             | Safely clones objects and arrays, including nested structures.                  |

---

---

## 2. Common JavaScript Methods & Tricks

### 1. Sorting Arrays

Sort an array in ascending or descending order.

-   `arr.sort([compareFunction])`
-   `localeCompare()`: compare two strings.

```js
// Example 1: Sorting numbers
const numbers = [4, 2, 9, 5];
numbers.sort((a, b) => a - b); // Ascending: [2, 4, 5, 9]
numbers.sort((a, b) => b - a); // Descending: [9, 5, 4, 2]

// Example 2: Sorting with a callback function
const evens = [6, 4, 2, 8];
evens.sort((a, b) => a - b); // Ascending: [2, 4, 6, 8]
evens.sort((a, b) => b - a); // Descending: [8, 6, 4, 2]

// Example 3: Sorting strings with .localeCompare()
const names = ["Clark", "Bruce", "Diana"];
const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
console.log(sortedNames); // [ 'Bruce', 'Clark', 'Diana' ]
```

---

### 2. Filtering Arrays

Create a new array with elements that match a condition.

```js
// Example 1: Filtering numbers
const numbers = [1, 2, 3, 4];
const even = numbers.filter((num) => num % 2 === 0); // [2, 4]

// Example 2: Filtering objects
const users = [{ active: true }, { active: false }];
const activeUsers = users.filter((user) => user.active); // [{ active: true }]
```

---

### 3. Mapping Arrays

Create a new array by transforming each element.

```js
// Example 1: Transforming numbers
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]

// Example 2: Transforming objects
const users = [{ name: "Alice" }, { name: "Bob" }];
const names = users.map((user) => user.name); // ["Alice", "Bob"]
```

---

### 4. Finding Array Elements

Find the first element that matches a condition.

```js
// Example 1: Finding a number
const numbers = [5, 8, 12];
const firstEven = numbers.find((num) => num % 2 === 0); // 8

// Example 2: Finding an object
const users = [{ id: 1 }, { id: 2 }];
const user = users.find((user) => user.id === 2); // { id: 2 }
```

---

### 5. Checking Conditions in Arrays

Verify if all or some elements meet a condition.

```js
// Example 1: Check if all numbers are positive
const numbers = [1, -2, 3];
const allPositive = numbers.every((num) => num > 0); // false

// Example 2: Check if any user is active
const users = [{ active: false }, { active: true }];
const anyActive = users.some((user) => user.active); // true
```

---

### 6. Reducing Arrays

Accumulate a single value from an array.

```js
// Example 1: Summing numbers
const numbers = [1, 2, 3];
const sum = numbers.reduce((total, num) => total + num, 0); // 6

// Example 2: Combining strings
const words = ["Hello", "World"];
const sentence = words.reduce((acc, word) => acc + " " + word, ""); // "Hello World"
```

---

### 7. String Manipulation

Useful methods to manipulate strings.

```js
// Example 1: Splitting and joining strings
const sentence = "Hello World";
const words = sentence.split(" "); // ["Hello", "World"]
const joined = words.join("-"); // "Hello-World"

// Example 2: Changing case
const text = "JavaScript";
const lower = text.toLowerCase(); // "javascript"
const upper = text.toUpperCase(); // "JAVASCRIPT"
```

---

### 8. Object Keys, Values, and Entries

Extract properties and values from objects.

```js
// Example 1: Object keys and values
const user = { id: 1, name: "Alice" };
const keys = Object.keys(user); // ["id", "name"]
const values = Object.values(user); // [1, "Alice"]

// Example 2: Object entries
const entries = Object.entries(user); // [["id", 1], ["name", "Alice"]]
```

---

### 9. Deep Copying Objects

Create a deep copy of objects or arrays.

```js
// Example 1: Deep copy with JSON
const obj = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(obj)); // Deep copy

// Example 2: Deep copy with structured cloning
const array = [1, 2, { a: 3 }];
const clone = structuredClone(array); // Deep copy
```

---

### 10. Working with Dates

Create and format dates.

```js
// Example 1: Creating dates
const now = new Date(); // Current date and time
const specificDate = new Date("2023-12-25"); // December 25, 2023

// Example 2: Formatting dates
const date = new Date("2023-12-25");
const year = date.getFullYear(); // 2023
const month = date.getMonth() + 1; // 12 (0-based index)
```

---

This cheat sheet covers foundational JavaScript methods and tricks for everyday use, with concise examples to help you quickly understand and apply them!
