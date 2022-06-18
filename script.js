//Global variables
const body= document.querySelector("body");


function Books(title, author, pages, read){
    this.bookName=title
    this.bookAuthor=author
    this.bookPages=pages
    this.bookRead=read
    this.info= function(){
        return(title + " by " + author+", " + pages +" pages"+", " + read)
    }
}

let myLibrary=[];


function addBookToLibrary(){
    let getBookName=prompt("Name of book?")
    let getBookAuthor=prompt("Who is the author?")
    let getBookPages=prompt("How many pages does it have?")
    let hasBeenRead=prompt("You read this book true or false?")
    let newBook= new Books(getBookName, getBookAuthor, getBookPages, hasBeenRead)
    myLibrary.push(newBook);
}
// addBookToLibrary();

let bookNameDisplay= myLibrary.forEach((item) => {
    let display= document.createElement("p");
    display.textContent=item.bookName;
    body.appendChild(display);

})

const newBookButton= document.querySelector(".newBook")

newBookButton.addEventListener('click', (e) =>{
    let form= document.createElement('form')
    let formGetBookName=document.createElement('input')
    let formGetBookAuthor=document.createElement('input')
    let formGetBookPages=document.createElement('input')
    let formHasRead=document.createElement('input')
    let formSubmit=document.createElement("button")
    formSubmit.setAttribute("type", "button")
    form.appendChild(formGetBookName)
    form.appendChild(formGetBookAuthor)
    form.appendChild(formGetBookPages)
    form.appendChild(formHasRead)
    form.appendChild(formSubmit)
    body.appendChild(form)
    formSubmit.addEventListener("click", () => {
        console.log(formGetBookAuthor.value)
    })

})





