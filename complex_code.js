/* 
   Filename: complex_code.js
   Content: Complex JavaScript Code Example
*/

// Define a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet a person
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create an instance of the Person class
const john = new Person("John", 30);
john.greet();

// Define a subclass of Person
class Programmer extends Person {
  constructor(name, age, skills) {
    super(name, age);
    this.skills = skills;
  }

  // Override greet method
  greet() {
    console.log(`Hello, I'm ${this.name}, a ${this.age}-year-old programmer with skills in ${this.skills.join(', ')}.`);
  }

  // Method to code
  code() {
    console.log(`${this.name} is coding...`);
  }
}

// Create an instance of the Programmer class
const alice = new Programmer("Alice", 25, ["JavaScript", "Python"]);
alice.greet();
alice.code();

// Define a function to calculate factorial
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const num = 5;
console.log(`The factorial of ${num} is ${factorial(num)}.`);

// Define a closure function
function outerFunction() {
  const outerVar = "I'm an outer variable.";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const innerFunc = outerFunction();
innerFunc();

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use higher-order function map to double each number
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Perform an asynchronous fetch request
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Use Promise to handle asynchronous operations
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise fulfilled!");
  }, 2000);
});

promise.then(result => console.log(result));

// Generate a random number between a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Random number between 1 and 100: ${getRandomNumber(1, 100)}`);

// ... More code here ... (over 200 lines long)