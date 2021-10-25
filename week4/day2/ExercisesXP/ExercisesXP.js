// Exercise 1 : Function With Two Parameters
// Instructions
// Create a one line function that receives two numbers as parameters and returns the sum.

// (function (num1 ,num2) {
//     alert("the sum is  " + num1 + num2);
// })(5 ,6)


/////////////////////////////////////////////////////////////////////// ex 2

// Exercise 2 : Closure

// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// addToTen(3);

///answer : 13


////////////////////////////////////////////////////////////////////////////// ex 3

// Exercise 3 : Currying

// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)

//// answer is : 31

////////////////////////////////////////////////////////////////////////////// ex 4


// Exercise 4 : Currying

// Analyse the code below, and before executing it, predict the outcome of the last line.
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)

//// answer is : 17

//////////////////////////////////////////////////////////////////////////// ex 5



// Exercise 5 : Composing

// Analyse the code below, and before executing it, predict the outcome of the last line.
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

//// answer is : 16