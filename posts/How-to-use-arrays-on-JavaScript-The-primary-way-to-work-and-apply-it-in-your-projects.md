---
date: "2022-06-06"
title: "How to use arrays on JavaScript? The primary way to work and apply it in your projects."
url: "https://fl4v.io/How-to-use-arrays-on-JavaScript-The-primary-way-to-work-and-apply-it-in-your-projects"
author: "fl4viooliveira" # add the GitHub user
intro: "One JavaScript primary function is handling data that sometimes come from the backend or users interaction. Arrays are perfect for storing these multiple data values in a single variable."
category:
  - JavaScript
tags:
  - javascript
  - webdev
  - array
  - frontend
  - backend
---

One JavaScript primary function is handling **data** that sometimes come from the **backend** or **user interaction**. Arrays are perfect for storing these multiple data values in a single variable.

# How to use Array

An array is a data structure that does not follow an ordinate sequence. The elements stay isolated, and you can access the values by referring to an index number.

Following how one array looks like and how to call the values by index:

```javascript
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
```

# Post Content:

1. Creating an Array;
2. Push method;
3. forEach method;
4. pop method;
5. Interactions;
6. Converting to a string;
7. Inverting the array order;
8. sort() method;
9. Stread operator;
10. Slice method;
11. Splice method;
12. Map method;
13. Reduce method;
14. indexOf and lastIndexOf
15. Conclusion.

# Creating an Array.

Let’s create a basic array:

```javascript
let myArray = [];
```

Now let’s fill up with 2 objects, Green and Blue:

```javascript
let myArray = [{ color: "Green" }, { color: "Blue" }];

console.log(myArray);

//[{color: "Green"}, {color: "Blue"}]
```

# Push method.

```javascript
myArray.push({ color: "yellow" });

console.log(myArray);

//[{color: "Green"}, {color: "Blue"}, {color: "Yellow"}]
```

The push( ) method can be used to add a new object to the array. After the example, we have 3 objects on “myArray”.

# forEach method.

“forEach( ) calls a provided callbackFn function once for each element in an array in ascending index order.” – MDN Web Docs.

Using the above example, let’s use the forEach:

```javascript
let myArray = [{ color: "Green" }, { color: "Blue" }, { color: "Yellow" }];

myArray.forEach((item) => console.log(item));

//{color: "Green"}

//{color: "Blue"}

//{color: "Yellow"}
```

# Pop method.

It’s for remove the last item of one array.

```javascript
let myArray = [{ color: "Green" }, { color: "Blue" }, { color: "Yellow" }];
console.log(myArray);

// [{color: "Green"}, {color: "Blue"}, {color: "Yellow"}]

myArray.pop();

console.log(myArray);

//[{color: "Green"}, {color: "Blue"}]
```

# Interactions.

It’s pretty common to use interactions to work with one array.
A straightforward way to do it is using a **“for”** lace.

For example, we will create an array with 10 positions and show the value on the console for each index when executed.

```javascript
let myArray = new Array(10);
for (let i = 0; i < 10; i++) {
  console.log(myArray[i]);
}

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined
```

This return 10 x undefined because we didn’t add anything to this array, only defined 10 positions.

If we didn’t know the array size, we could use .length instead of the number of positions.

```javascript
let myArray = new Array(10);
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined

//undefined
```

Now let’s add v some value to each index.

```javascript
let myArray = new Array(10);
for (let i = 0; i < myArray.length; i++) {
  myArray[i] = i;
}

console.log(myArray);

//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

# Converting to string.

We have the method **join( )** then convert the array items on strings and concatenate all.

```javascript
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
//"Fire,Air,Water"

console.log(elements.join(""));
//"FireAirWater"

console.log(elements.join(" "));
//"Fire Air Water"

console.log(elements.join("-"));
//"Fire-Air-Water"
```

# Invert the array order.

Using the above example, let’s invert the array order using the method **.reverse( )**.

```javascript
const elements = ["Fire", "Air", "Water"];

console.log(elements);
//["Fire", "Air", "Water"]

elements.reverse();

console.log(elements);
//["Water", "Air", "Fire"]
```

# Spread operator.

You can use spread operator (…) in many ways to manipulate one array following the examples, then auto explain how the spread operator works.

```javascript
let colors = ["Green", "Blue", "Yellow"];

let colors2 = [...colors, "Purple", "Pink"];

console.log(colors);
//["Green", "Blue", "Yellow"]

console.log(colors2);
//["Green", "Blue", "Yellow", "Purple", "Pink"]
```

Now, let’s use one example creating one function to sum the array items using a spread operator:

```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
//6
```

# Slice Method.

When we need to use one part of the array, we can use the slice. You can choose where your slice starts and finish using the array index. It Will be easy to understand with the code example:

```javascript
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
//["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
//["camel", "duck"]

console.log(animals.slice(1, 5));
//["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
//["duck", "elephant"]

console.log(animals.slice(2, -1));
//["camel", "duck"]
```

# Splice Method.

This method can change the array, removing, replacing or adding elements. I will use MDN Web Docs from [mozilla.org](https://mozilla.org) examples to explain better the way that you can use splice:

```javascript
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
//["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// ["Jan", "Feb", "March", "April", "May"]
```

**_Syntax_**

- splice(start)
- splice(start, deleteCount)
- splice(start, deleteCount, item1)
- splice(start, deleteCount, item1, item2, itemN)

**_Return Value_**

- An array containing the deleted elements.
- If only one element is removed, an array if one element is returned.
- If no elements are removed, an empty array is returned.

**_Remove 0 (zero) elements before index 2, and insert “drum”_**

```javascript
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

**_Remove 0 (zero) elements before index 2, and insert “drum” and “guitar”_**

```javascript
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2, 0, "drum", "guitar");

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

**_Remove 1 element at index 3_**

```javascript
let myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
let removed = myFish.splice(3, 1);

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
```

**_Remove 1 element at index 2, and insert “trumpet”_**

```javascript
let myFish = ["angel", "clown", "drum", "sturgeon"];
let removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

**_Remove 2 elements from index 0, and insert “parrot”, “anemone” and “blue”_**

```javascript
let myFish = ["angel", "clown", "trumpet", "sturgeon"];
let removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

**_Remove 2 elements, starting from index 2_**

```javascript
let myFish = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
let removed = myFish.splice(2, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

**_Remove 1 element from index -2_**

```javascript
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

**_Remove all elements, starting from index 2_**

```javascript
let myFish = ["angel", "clown", "mandarin", "sturgeon"];
let removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```

# Map Method.

It is a very used method on JavaScript and will have an entire post to show how you can apply it.

For now, I will describe and show a simple example to you understand the basic concepts.

**map( )** creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x \* 2);

console.log(map1);
//[2, 8, 18, 32]
```

# Reduce Method.

[mozilla.org](http://mozilla.org)

The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array.

The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous step (this result is the running sum of all the previous steps) — until there are no more elements to add.

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
//output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
//output: 15
```

# indexOf and lastIndexOf

The indexOf and lastIndexOf methods will select the items on the array.

The indexOf will get the first item, and the lastIndexOf will get the last array item.

Will be clean on the following example:

```javascript
let numbers = [1, 2, 3, 4, 1, 2];
console.log(numbers.indexOf(1));
// 0

console.log(numbers.lastIndexOf(1));
// 4

console.log(numbers.indexOf(2));
// 1

console.log(numbers.lastIndexOf(2));
// 5
```

# Conclusion.

There are many more things to tell about the arrays, and this is only a central topic to start applying arrays on our projects to solve an extensive range of problems.

Don’t forget that an array is considering an object with specials behaviour on javaScript. I will show the last code example to you prove it:

```javascript
let numbers = [1,2,3,4];
console.log(typeof(numbers);

//object
```

Thank you for reading. I hope that you enjoyed it.
