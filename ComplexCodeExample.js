/*
Filename: ComplexCodeExample.js
Description: A complex and elaborate JavaScript code demonstrating advanced techniques and concepts.
*/

// Class declaration for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Class declaration for a Book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getAuthor() {
    return this.author;
  }
}

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Array of books
const books = [
  new Book("Book 1", "Author 1", 2010),
  new Book("Book 2", "Author 2", 2015),
  new Book("Book 3", "Author 3", 2020),
  new Book("Book 4", "Author 4", 2005),
  new Book("Book 5", "Author 5", 2013)
];

// Object representing a library
const library = {
  name: "Public Library",
  address: "123 Main St",
  books: books,
  visitors: [],

  addVisitor(visitor) {
    this.visitors.push(visitor);
    console.log(`${visitor.name} has been added as a visitor.`);
  },

  listAvailableBooks() {
    console.log("Available books in the library:");
    this.books.forEach(book => {
      console.log(`- ${book.title} by ${book.author}`);
    });
  }
};

// Testing the code
const john = new Person("John", 25);
john.introduce();

const bookCount = library.books.length;
const randomIndex = getRandomNumber(0, bookCount - 1);
const randomBook = library.books[randomIndex];
console.log(`Randomly selected book: ${randomBook.title}`);

library.addVisitor(john);
library.listAvailableBooks();
