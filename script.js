const myLibrary = new Array();
let syka = "syka";

const userTitle = document.querySelector("#title");
const userAuthor = document.querySelector("#author");
const userPages = document.querySelector("#pages");
const userRead = document.querySelector("#read");
const userCreate = document.querySelector(".send-button");
const cards = document.querySelector(".cards");

userCreate.addEventListener("click", () => {
    addBookToLibrary(userTitle.value,userAuthor.value,userPages.value,userRead.checked);
    userTitle.value = "";
    userAuthor.value = "";
    userPages.value = "";
    userRead.checked = false;
});

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(this.title + " by " + this.author + "," + this.pages + "," + this.read )
    }
}

function addBookToLibrary(title,author,pages,read) {
    myLibrary.push(new Book(title,author,pages,read));
    console.table(myLibrary);
    addBookCard()
}



function addBookCard() {
    let bookCardList = ""
    myLibrary.forEach((item) => {
        bookCardList += `<div class="cards">
     <div class="book-card">
        <p>Title: ${item.title}</p>
        <p>Author: ${item.author}</p>
        <p>Pages: ${item.pages}</p>
        <p>${item.read === true ? "Is read" : "Not read"}</p>
     </div>
   </div>`
    })
    cards.innerHTML = bookCardList;
}







