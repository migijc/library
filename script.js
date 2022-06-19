//Global variables
const body= document.querySelector("body");


function Books(title, author, pages, read){
    this.bookName=title;
    this.bookAuthor=author;
    this.bookPages=pages;
    this.bookRead=read;
    this.info= function(){
        return(title + " by " + author+", " + pages +" pages"+", " + read);
    };
};

let myLibrary=[];


function addBookToLibrary(){
    let getBookName=prompt("Name of book?");
    let getBookAuthor=prompt("Who is the author?");
    let getBookPages=prompt("How many pages does it have?");
    let hasBeenRead=prompt("You read this book true or false?");
    let newBook= new Books(getBookName, getBookAuthor, getBookPages, hasBeenRead);
    myLibrary.push(newBook);
};
let formGetBookName=document.querySelector('#bookName');
let formGetBookAuthor=document.querySelector('#bookAuthor');
let formSubmit=document.querySelector(".addBook");
const newBookButton= document.querySelector(".newBook");
const theForm= document.querySelector(".theForm")
newBookButton.addEventListener('click', () =>{
    theForm.classList.add("showNow")
});

formSubmit.addEventListener("click", () => {
    let newBook= new Books(formGetBookName.value, formGetBookAuthor.value);
    myLibrary.push(newBook);
    theForm.classList.remove("showNow")
    displayBookNames()
});

let booksGrid= document.createElement("div");

let displayBookNames = function (){
    let bookCard= document.createElement("div");
    let titleToDisplay=document.createElement('h4');
    titleToDisplay.classList.add("titleToDisplay")
    let authorToDisplay=document.createElement("h4");
    let pagesToDisplay= document.createElement('h4');
    let hasReadToDisplay=document.createElement('h4')
    bookCard.classList.add("bookCards")
    body.appendChild(booksGrid)
    let bookNameDisplay= myLibrary.forEach((item) => {
        titleToDisplay.textContent=item.bookName
        authorToDisplay.textContent= `By: ${item.bookAuthor}`;
        pagesToDisplay.textContent=`Pages: ${item.bookPages}`;
        hasReadToDisplay.textContent=item.bookRead;
    });
    // booksGrid.appendChild(titleToDisplay)
    // booksGrid.appendChild(authorToDisplay)
    // booksGrid.appendChild(pagesToDisplay)
    // booksGrid.appendChild(hasReadToDisplay)
        booksGrid.classList.add("showing")
        booksGrid.appendChild(bookCard)
        bookCard.appendChild(titleToDisplay)
        bookCard.appendChild(authorToDisplay)
        bookCard.appendChild(pagesToDisplay)
        bookCard.appendChild(hasReadToDisplay);

};




