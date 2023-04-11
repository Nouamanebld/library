let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    if (read == "yes") {
        this.read = "Read";
    } else {
        this.read = "Not Read";
    }
}

const richDad = new Book("Rich Dad", "Robert Kiyosaki", 296, "yes");
const harryPotter = new Book("Harry Potter", "Antonio Rafaello", 362, "no");

myLibrary.push(richDad);
myLibrary.push(harryPotter);

function addBookToLibrary() {
    let title = prompt("Enter the book title");
    let author = prompt("Enter the book's author");
    let pages = prompt("How long is the book?");
    let read = prompt("Have you read the book? (yes/no)");
    while ((read != "yes") && (read != "no")) {
        read = prompt("Have you read the book? (yes/no)");
    }

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    refresh();
}

function refresh() {
    const tableData = document.querySelector('tbody'); 
    tableData.innerHTML = '';
    myLibrary.map((book) => {
        const container = document.querySelector("tbody");
        const row = document.createElement("tr");
        
        const title = document.createElement("th");
        title.textContent = book.title;
        row.appendChild(title);

        const author = document.createElement("td");
        author.textContent = book.author;
        row.appendChild(author);

        const pages = document.createElement("td");
        pages.textContent = book.pages;
        row.appendChild(pages);

        const read = document.createElement("td");
        read.textContent = book.read;
        row.appendChild(read);

        const removeBook = document.createElement("input");
        removeBook.setAttribute('type', 'button');
        removeBook.setAttribute("value", "Remove Book");
        removeBook.addEventListener('click', () => {
            row.innerHTML = '';
            let index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
        });
        row.appendChild(removeBook);

        const changeRead = document.createElement("input");
        changeRead.setAttribute('type', 'button');
        changeRead.setAttribute("value", "Change Reading Status");
        changeRead.addEventListener('click', () => {
            if (book.read == "Read") {
                book.read = "Not Read";
                read.textContent = "Not Read";
            } else {
                book.read = "Read";
                read.textContent = "Read";
            }
        });
        row.appendChild(changeRead);

        container.appendChild(row);
    });
}

refresh();

const addBook = document.querySelector('.btn');
addBook.addEventListener('click', addBookToLibrary);

