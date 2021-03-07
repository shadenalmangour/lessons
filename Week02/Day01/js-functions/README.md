[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Functions

## Objectives

By the end of this, developers should be able to:

- Create and invoke functions
- Define parameters and pass arguments
- Use return values

## Preparation

1. Fork and clone this repository
1. Create a new branch, `training`, for your work and change into it.

## Functions

`Function` holds encapsulated executable code.

Basic syntax:
```js
const code = function () {}
```

### Demo: Functions

Let's write a function that will print a message for us!

```js
// define function
const printHelloWorld = function () {
  console.log('Hello World!');
}

// invoke function
printHelloWorld();

// invoke function as many times as we want
printHelloWorld();
printHelloWorld();
printHelloWorld();
printHelloWorld();
```

We can make our functions more useful by passing data into them.

```js
// define function
const printHello = function (name) {
  console.log('Hello ' + name)
}

// invoke function
printHello("World");

// invoke function as many times as we want
printHello("World");
printHello("Mike");
printHello("Sami");
printHello("Ahmad");
```

When we define a function that accepts data, we call the key word that will represent the data a `parameter`.

```js
const myFunctionName = function(parameterName){
  console.log(parameterName);
}
```

When we pass the data into our function invocation, we call it an `argument`.

```js
const myFunctionName = function(parameterName){
  console.log(parameterName);
}

// arguments can be any data type
myFunctionName(1);

// arguments can also be variables
const argument = 1;
myFunctionName(argument);
```

### Code Along: Functions

Let's create a function that will add two numbers for us and print the sum.
```js
const add = function () {
  console.log(5 + 10);
}

add();
```

Next, let's write a function that will add any two numbers for us.
```js
const add = function (num1, num2) {
  console.log(num1 + num2);
}

add(1, 10);
add(5, 20);
```

Next, let's write a function that will subtract any two numbers for us.
```js
const subtract = function (num1, num2) {
  console.log(num1 - num2);
}

add(1, 10);
add(10, 1);
```

Notice how the order matters.  The first `argument` will always be assigned to the first `parameter`.

### Demo: Return Values

In mathematics, a function maps one or more inputs to a single output.

In javascript, we also often prefer functions to return us an output instead of `console.log` the output.

```js
const five = function () {
  return 2 + 3;
}

const add = function (a, b) {
  return a + b;
}

const adder = function (a, b) {
  a + b // returns undefined, not the sum of a + b
}

const fiveSum = five(); // 5

const addSum = add(5,10); // 15

const adderSum = adder(5,10) // undefined
```

It is important to remember that `console.log` prints its argument to the
`console` (the terminal using node, the console area of the debug tools using
chrome) but does not return a value. *THIS IS A COMMON POINT OF CONFUSION* I
REPEAT, `console.log` does *not* return a value (it returns `undefined`).

### Code Along: Parameters and Arguments

When you create a function, you specify the parameters.  When you call a
function, you specify the arguments (which are the values that the parameters
are set to when your function executes).

In JavaScript, functions can be defined as taking zero or more arguments.

```js
const zero = function () {
  return 0
}

// You call this function by writing: `zero()`

const one = function (param) {
  return param
}

// You call this function by writing: `one('argumentExample')`

const three = function (param1, param2, param3) {
  return param2
}

// You call this function by writing: `three(1, 'two', false)`

// What would happen if we called this function using only one argument?

three(1) // ?
```

Let's create a function that will accept in any number and add one to it.

```js
const addOne = function (num) {
  return num + 1
}
```

Let's create a function that will accept in a first name and last name to create a full name.

```js
const fullName = function (firstName, lastName) {
  return firstName + " " + lastName
}
```

The important piece to remember is that you need the `return` keyword to return
a value. If you forget it or choose not to include it, the function still
returns something to the caller, and it will be `undefined`.

### Lab: Functions

Create a file named `functions.js`.

1.  Define a `youRock` function that accepts a string argument of a name and returns a string using that name.
```js
youRock('Sami') // 'You rock Sami!'
youRock('Ahmad') //'You rock Ahmad!'
```

2.  Define a `square` function that accepts a number argument and returns that number multipled by itself.
```js
square(2) // 4
square(3) // 9
```

3.  Define a `cube` function that accepts a number argument and returns that number raised to the third power.
```js
cube(2) // 8
cube(3) // 27
```

4.  Define a `toTheFourth` function that accepts a number argument and returns that number raised to the fourth power.
```js
toTheFourth(2) // 16
toTheFourth(3) // 81
```

#### Extra Practice

If you finish the Lab, try this challenge.

Write a function that will add, subtract, multiply or divide two numbers and return the answer 
```js
calculator(1, 2, "add") // should return 3 
calculator(1, 2, "subtract") // should return -1
calculator(1, 2, "divide") // should return .5
calculator(1, 2, "multiply") // should return 2
calculator(1, 2, "something else") // should return "calculator can only add, subtract, divide, or multiply
calculator("cat", 2, "add") // should return "calculator only accepts numbers"
```

### Lab: FizzBuzz Function

Write a function that accepts an argument of a number

If it is a multiple of 3, return “Fizz” instead of the number.

If it is a multiple of 5, return “Buzz” instead of the number.

If it is a multiple of both 3 and 5, return “FizzBuzz” instead of the number.

Otherwise, return the number

```js
fizzBuzz(3) // Fizz
fizzBuzz(15) // FizzBuzz
rainDrop(7) // 7
```

### Lab: RainDrop Function

Write a function that accepts an argument of a number

If the number contains 3 as a factor, output 'Pling'.

If the number contains 5 as a factor, output 'Plang'.

If the number contains 7 as a factor, output 'Plong'.

If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

```js
rainDrop(28) // Plong
rainDrop(1755) // PlingPlang
rainDrop(34) // 34
```

## Additional Resources

- [Functions Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [Function Basics JS Info](https://javascript.info/function-basics)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
