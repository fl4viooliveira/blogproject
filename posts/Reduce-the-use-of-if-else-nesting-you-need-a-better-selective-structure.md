---
date: "2022-06-07"
title: "Optimize the use of if-else, you need a better selective structure!"
url: "https://dev.to/akarachen/reduce-the-use-of-if-else-nesting-you-need-a-better-selective-structure-32ce" # add original post url, to adding on canonical tag.
author: "AkaraChen" # add the GitHub user
intro: "I don't know if you've ever encountered an if-else nesting like a pyramid placed horizontally:"
category:
  - JavaScript
tags:
  - javascript
  - beginners
  - codenewbie
---

I don't know if you've ever encountered an if-else nesting like a pyramid placed horizontally:

```javascript
if (true) {
}

if (true) {
}

if (true) {
  if (true) {
    if (true) {
    }
  } else {
  }
} else {
}
```

If there are too many if-else in a piece of code, the readability of the code will drop rapidly, it becomes very difficult to maintain the code later on.Next I will talk about how to remove them.

# Conditional operator

For the simpler if-else statements, they can easily be rewritten as conditional operators:

```js
// Bad 😥
if (true) {
  console.log("Congratutions!");
} else {
  console.warn("Oops, something went wrong!");
}

// Great 🥰
true
  ? console.log("Congratutions")
  : console.warn("Oops, something went wrong!");
```

Of course, at this point the difference between the two is not that great.

# Logical AND operator

If you just want to execute a function when a certain condition is met, then you can use logical AND operator:

```js
if (true) {
  alert(1);
}

// is equals to:

true && alert(1);
```

It has very strict conditions of use, only functions can be executed and no statements can be used, including "return". This doesn't make the code look more logical though, but it can be useful in certain cases.

# Table driven method

For code like the following, most of the time we will use switch instead. But it's not the best solution, and if we forget to add "break;", the code may run beyond expectations, and switch is not very elegant.

```js
// Bad 😥
const weekday = (num) => {
  if (num === 1) {
    return "Monday";
  } else if (num === 2) {
    return "Tuesday";
  } else if (num === 3) {
    return "Wednesday";
  } else if (num === 4) {
    return "Thursday";
  } else if (num === 5) {
    return "Friday";
  } else if (num === 6) {
    return "Saturday";
  } else if (num === 7) {
    return "Sunday";
  } else {
    return "Unknown";
  }
};

console.log(weekday(1)); // Monday
```

This is the time to use the table driven method:

```js
// Great 🥰
const weekday = (option) => {
  let obj = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    0: "Sunday",
  };
  return obj[option] ?? "Unknown";
};

console.log(weekday(1)); // Monday
```

Or you can use ES6's Map:

```js
// Great 🥰
const weekday = (num) => {
  const map = new Map()
    .set(1, "Monday")
    .set(2, "Tuesday")
    .set(3, "Wednesday")
    .set(4, "Thursday")
    .set(5, "Friday")
    .set(6, "Saturday")
    .set(7, "Sunday");
  return map.has(num) ? map.get(num) : "Unknown";
};

console.log(weekday(1));
```

# Array's include method

In the previous section, we discussed how to optimize one-to-one selection structures, and here we discuss how to elegantly implement one-to-many selection structures.

For example, the following script:

```js
const getContinent = (option) => {
  if (option === "China" || option === "Japan") {
    return "Asia";
  }
  if (option === "Germany" || option === "France") {
    return "Europe";
  }
};

console.log(getContinent("China"));
```

It doesn't look that bad now because I haven't added all the countries in yet. This is certainly optimizable and can be easily avoided by using Array's include method:

```js
const getContinent = (option) => {
  const Asia = ["China", "Japan"];
  const Europe = ["Germany", "Franch"];
  if (Asia.includes(option)) return "Asia";
  if (Europe.includes(option)) return "Europe";
  return "Unknown";
};

console.log(getContinent("China")); // Asia
```

After this optimization, the code will not become cluttered even if more countries are added. But it can get even better:

```js
const getContinent = (option) => {
  let [result, setResult] = ["unknown", (str) => (result = str)];
  const Asia = ["China", "Japan"];
  const Europe = ["Germany", "Franch"];
  Asia.includes(option) && setResult("Asia");
  Europe.includes(option) && setResult("Europe");
  return result;
};

console.log(getContinent("China"));
```

# Conclusion

From this article, we have learned how to reduce if-else in your code. If you think this post is helpful, please share it with your network, if you have comment, drop them anyway🙂.
