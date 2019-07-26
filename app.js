//Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: "Book 1",
                author: "Rob Greens",
                isbn: "123"
            }
        ];
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.querySelector("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        `;

        list.appendChild(row);
    }
    static clearFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }
}
//store class

//display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
//add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
    //prevent actual submit
    e.preventDefault();


    //get form values
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    //instatiate book
    const book = new Book(title, author, isbn);

    //add book to UI
    UI.addBookToList(book);

    //clear fields
    UI.clearFields();

});
//remove a book