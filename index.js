class Book{
    constructor(title, author, ISBN, avilability = true){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.avilability = avilability;
    }
}

class Library{
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(ISBN){
        this.books = this.books.filter((book) => book.ISBN !== ISBN);
    }
    displayAvilableBook(){
        console.log("Avilable books:");
        this.books.forEach((book, index) => { 
            if(book.avilability){console.log(`${index +1}. ${book.title} by ${book.author}`)}
        });
    }
}

class ReferenceBook extends Book{
    constructor(title, author, ISBN, cartegory, avilability = true){
    super(title, author, ISBN, avilability);
    this.cartegory = cartegory;
    }
}

const library = new Library();

const book1 = new Book("A Doll's House", "Henrik Ibsen", "6769A");
const book2 = new Book("Kigogo", "Pauline Kea", "6769B");
const book3 = new ReferenceBook("Blossoms Of The Savvanah", "Henry Ole Kullet", "6769C", "Reality");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.displayAvilableBook();
console.log("\nRemoving book...");
library.removeBook("6769C");
library.displayAvilableBook();
