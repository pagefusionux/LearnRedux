const redux = require('redux');

console.log('Starting redux example');


/*
 * Pure functions:
 * - always return same result given same input
 * - there are no side effects:
 *   - doesn't use variables outside of itself
 *   - doesn't change variables outside of itself
 * - can't have asynchronous requests, promises, or callbacks
 * - can't manipulate values or parameters that are passed in
 */

// example of a pure function
function add (a, b) {
  return a + b;
}

// examples of impure functions
const a = 3;
function add (b) {
  return a + b; // impure: it uses variable outside of itself (which could change)
}

let result = undefined;
function add (a, b) {
  result = a + b;
  return result; // impure: it uses variable outside of itself (which could change)
}

function add (a, b) {
  return a + b + newDate().getSeconds(); // impure: won't always get same output
}

function changeProp(obj) {
  obj.name = 'Curtis'; // impure: changes values of parameters passed in
  return obj;
}

// another way to write the above function (to make it pure)
function changeProp(obj) {
  return { // this way we return the result without changing the obj variable
    ...obj,
    name: 'Curtis'
  }
}

/*
let res = changeProp({
  name: 'Chris',
  age: 40
});
*/
let startingValue = {
  name: 'Chris',
  age: 40
};

let res = changeProp(startingValue);
console.log(startingValue);
console.log(res);

/*
* The "take-away": When you're passing objects and arrays into functions, you need to make sure that you
* aren't changing original values, but returning a new array or object instead. Make your
* functions as PURE as possible.
*
* This principle is extremely important for using Redux.
*
* */
