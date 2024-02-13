# JavaScript Arrays Cheatsheet

<a href="https://tecnate.dev" target="_blank" rel="author">Tecnate</a> | Last Updated: 2024.02.12

## Table of Contents

-   [JavaScript Arrays Cheatsheet](#javascript-arrays-cheatsheet)
    -   [Table of Contents](#table-of-contents)
    -   [About This Guide](#about-this-guide)
    -   [Identify Length, Elements, \& Indices](#identify-length-elements--indices)
        -   [.length](#length)
        -   [.includes()](#includes)
            -   [Array Includes vs. String Matches](#array-includes-vs-string-matches)
        -   [.indexOf()](#indexof)
    -   [Test Elements](#test-elements)
        -   [.every()](#every)
    -   [Add, Remove, \& Replace Elements](#add-remove--replace-elements)
        -   [.push()](#push)
        -   [.pop()](#pop)
        -   [.unshift()](#unshift)
        -   [.shift()](#shift)
        -   [.splice()](#splice)
        -   [.slice()](#slice)
    -   [Combine \& Create New Arrays](#combine--create-new-arrays)
        -   [.concat()](#concat)
        -   [(...) Spread Operator](#-spread-operator)
        -   [.filter()](#filter)
        -   [.map()](#map)
        -   [.split()](#split)
        -   [.join()](#join)

<br>

## About This Guide

Using the power of the superhuman, this document uses the following data to demonstrate common JavaScript array methods:

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];
```

Each codeblock is meant to be a stand-alone example. New information/state from prior examples will not carry over unless explicitly indicated.

<br>

## Identify Length, Elements, & Indices

### .length

`Array.length`

Identify the number of elements.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

console.log(justiceLeague.length); // 5
```

### .includes()

`Array.includes(searchElement, fromIndex)`

Determine if array has a particular element. Returns boolean.

> -   `fromIndex`: (optional) index at which to begin search.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

console.log(justiceLeague.includes("Joker")); // false
```

#### Array Includes vs. String Matches

-   `Array.includes("foo")` - Find an element.
-   `String.match("/bar/")` - Match against regex.
-   `String.match("baz")` - Find a string.

### .indexOf()

`Array.indexOf(searchElement, fromIndex)`

Return the index of the _first_ occurrence of an element. Case & whole-word sensitive. Returns `-1` if it can't found.

> -   `fromIndex`: (optional) index at which to begin search.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

console.log(justiceLeague.indexOf("supermann")); // -1
console.log(justiceLeague.indexOf("Flash")); // 3
```

<br>

## Test Elements

### .every()

`Array.every(callbackFn, thisArg)`

Test whether ALL elements in an array pass the conditions of the callback function. Returns a boolean.

> -   `callbackFn`: a function to execute for each element, called with the following arguments:
> -   -   `(element, index, Array)`
> -   `thisArg`: (optional) value to use as `this` during execution.

```js
const ages = [28, 33, 30, 19];
const allAdults = ages.every((age) => age >= 18);
const allOver30 = ages.every(function (age) {
    return age > 30;
});

console.log(allAdults); // true
console.log(allOver30); // false
```

<br>

## Add, Remove, & Replace Elements

### .push()

`Array.push(item1, item2, ...itemN)`

Add one or more elements to the end of an array.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

justiceLeague.push("Aquaman", "Shazam");

console.log(justiceLeague); // [ 'Superman','Batman','Wonder Woman','Flash','Green Lantern','Aquaman','Shazam' ]
```

### .pop()

`Array.pop()`

Remove a single element from the end of an array.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

justiceLeague.pop();

console.log(justiceLeague); // [ 'Superman', 'Batman', 'Wonder Woman', 'Flash', ]
```

### .unshift()

`Array.unshift(item1, item2, ...itemN)`

Add one or more elements to the beginning of an array.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

justiceLeague.unshift("Shazam");

console.log(justiceLeague); // [ 'Shazam', 'Superman', 'Batman', 'Wonder Woman', 'Flash', 'Green Lantern' ]
```

### .shift()

`Array.shift()`

Remove a single element at the beginning of an array.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

justiceLeague.shift();

console.log(justiceLeague); // [ 'Batman', 'Wonder Woman', 'Flash', 'Green Lantern' ]
```

### .splice()

**Mutate**

`Array.splice(startIndex, deleteCount, addItem1, ...addItemN)`

Remove, add, or replace elements in an array.

NOTE: This method changes the original array and may change the value of `this`.

> -   `startIndex`: zero-based index at which to begin changing array.
> -   `deleteCount`: (optional) integer indicating number of elements to remove.
> -   `addItem`: (optional) elements to add to the array, beginning from `startIndex`.

1. Remove elements starting from a given index.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

justiceLeague.splice(2, 3);

console.log(justiceLeague); // [ 'Superman', 'Batman' ]
```

2. Add elements starting from a given index.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

justiceLeague.splice(1, 0, "Shazam", "Aquaman");

console.log(justiceLeague); // [ 'Superman','Shazam','Aquaman','Batman','Wonder Woman','Flash','Green Lantern' ]
```

3. Replace elements starting from a given index.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];
const sidekicks = ["Robin", "Superboy"];

justiceLeague.splice(2, 2, ...sidekicks);
console.log(justiceLeague); // [ 'Superman', 'Batman', 'Robin', 'Superboy', 'Green Lantern' ]
```

### .slice()

**Shallow Copy**

1. `Array.slice(startIndex, stopIndex)`

2. `String.slice(start, end)`

Copy any portion an array or string and use those copied elements to create a new array.

NOTE: The original array remains unchanged.

> -   `startIndex`: (optional) inclusive.
> -   `stopIndex`: (optional) exclusive.
> -   Negative values count back from the end of the array: `startIndex + Array.length` or `stopIndex + Array.length`

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];
const teamAlpha = justiceLeague.slice(0, 3);

console.log(teamAlpha); // [ 'Superman', 'Batman', 'Wonder Woman' ]

let password = "OpenSesame";
let cipher = password.slice(0, 5);

console.log(cipher); // OpenS
```

<br>

## Combine & Create New Arrays

### .concat()

`Array1.concat(Array2).concat(...ArrayN)`

Concatenate two or more arrays.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];
const sidekicks = ["Robin", "Superboy"];
const heroes = justiceLeague.concat(sidekicks);

console.log(heroes); // [ 'Superman','Batman','Wonder Woman','Flash','Green Lantern','Robin','Superboy' ]
```

### (...) Spread Operator

1. Combine arrays inside another array.

```js
const teamA = ["Huntress", "Black Canary"];
const teamB = ["Red Tornado", "Aquaman"];
const teamAB = [...teamA, ...teamB];

console.log(teamAB); // [ 'Huntress', 'Black Canary', 'Red Tornado', 'Aquaman' ]
```

2. Pass elements to functions that require separate arguments and cannot accept arrays themselves, e.g. the `Math` object.

```js
const ages = [28, 33, 30, 19];

console.log(Math.min(ages)); // NaN
console.log(Math.min(...ages)); // 19
```

### .filter()

**Shallow Copy**

`Array.filter(callbackFn, thisArg)`

1. Return a new array with elements from the original that pass a specific condition.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];
const firstAndLast = justiceLeague.filter(function (item, index) {
    return index < 1 || index > justiceLeague.length - 2;
});

console.log(firstAndLast); // [ 'Superman', 'Green Lantern' ]
```

```js
const sidekicks = ["Robin", "Superboy", "Kid Flash", "Aqualad"];
const longNames = sidekicks.filter((name, index) => name.length > 7);

console.log(longNames); // [ 'Superboy', 'Kid Flash' ]
```

2. Determine which elements match a string with `.filter()` & `.includes()`.

```js
const justiceLeague = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];
const filterMan = justiceLeague.filter(function (name) {
    return name.includes("man");
});

console.log(filterMan); // ["Superman", "Batman", "Wonder Woman"];
```

```js
const sidekicks = ["Robin", "Superboy", "Kid Flash", "Aqualad"];
const filterEvens = sidekicks.filter((name, index) => {
    return index % 2 !== 0;
});

console.log(filterEvens); // [ 'Superboy', 'Aqualad' ]
```

### .map()

**Iterate**

-   `Array.map(callbackFn, thisArg)`
-   `Array.map(function(ArrayValue, index){})`
-   `Array.map((ArrayValue, index) => {})`

Return a new array with all original elements modified by a callback function.

```js
const ages = [28, 33, 30, 19];
const doubleAges = ages.map(function (age) {
    return `${age * 2}`;
});

console.log(doubleAges); //[ '56', '66', '60', '38' ]
```

```js
const sidekicks = ["Robin", "Superboy"];
const cities = ["Gotham", "Metropolis"];
const jurisdiction = sidekicks.map((name, index) => {
    const city = cities[index];
    return `${name}: ${city}`;
});

console.log(jurisdiction); // [ 'Robin: Gotham', 'Superboy: Metropolis' ]
```

### .split()

`Array.split(separator, limit)`

Split a string and return substrings as elements in an array.

> -   `separator`: can be `undefined`, a string, or `Symbol.split` object (e.g regex).
> -   `limit`: (optional) non-negative number of elements to be included.

```js
const alterEgos = "Bruce Wayne, Clark Kent";
const secretIdentities = alterEgos.split(",");

console.log(secretIdentities); // [ 'Bruce Wayne', ' Clark Kent' ]
```

### .join()

`Array.join(separator)`

Join array elements into a string. If you leave the separator empty, the string will be joined by commas.

```js
const secretIdentities = ["Bruce Wayne", " Clark Kent"];
const alterEgos = secretIdentities.join(",");

console.log(alterEgos); // Bruce Wayne, Clark Kent
```
