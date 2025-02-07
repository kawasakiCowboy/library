const myLibrary = new Array();

const userTitle = document.querySelector("#title");
const userAuthor = document.querySelector("#author");
const userPages = document.querySelector("#pages");
const userRead = document.querySelector("#read");
const userCreate = document.querySelector(".send-button");
const cards = document.querySelector(".cards");
const errorField = document.querySelector(".error");


userCreate.addEventListener("click", () => {
    if (!userTitle.checkValidity()) {
        userTitle.reportValidity();
        return
    }
    if (!userAuthor.checkValidity()) {
        userAuthor.reportValidity();
        return
    }
    if (!userPages.checkValidity()) {
        userPages.reportValidity();
        return
    }
    addBookToLibrary(userTitle.value,userAuthor.value,userPages.value,userRead.checked);
    // userTitle.value = "";
    // userAuthor.value = "";
    // userPages.value = "";
    userRead.checked = false;
});

class Book {
    constructor(title,author,pages,read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        console.log(this.title + " by " + this.author + "," + this.pages + "," + this.read )
    }
}

function addBookToLibrary(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read));
    updateCards()
}


function updateCards() {
    let bookCardList = ""
    myLibrary.forEach((item) => {
        bookCardList += `
        <div class="book-card" ">
        <p">Title: ${item.title}</p>
        <p>Author: ${item.author}</p>
        <p>Pages: ${item.pages}</p>
        <p>${item.read === true ? "Is read" : "Not read"}</p>
        <div class="card-buttons" id="${item.title}">
        <input type="button" class="change-status" value="Change status">
        <input type="button" class="delete" value="Delete">
      </div>
        </div>`
    })
    cards.innerHTML = bookCardList;
    let deleteButton = document.querySelectorAll(".delete")
    deleteButton.forEach(button => button.addEventListener("click", (e) => {
        myLibrary.splice((myLibrary.findIndex((item) => item.title === e.target.closest("div").id)),1);
        console.log(e.target.closest("div").id)
        updateCards();
    }))
    let changeStatusButton = document.querySelectorAll(".change-status");
    changeStatusButton.forEach(button => button.addEventListener("click", (e) => {
        let currentBook = (myLibrary[myLibrary.findIndex((item) => item.title === e.target.closest("div").id)]);
        currentBook.read = !currentBook.read;
        updateCards();
    }))
}









