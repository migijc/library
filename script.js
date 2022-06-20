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
    this.index=null;
};

let myLibrary=[];

let formGetBookName=document.querySelector('#bookName');
let formGetBookAuthor=document.querySelector('#bookAuthor');
let formGetBookPages=document.querySelector("#pages")
let formGetBookRead=document.querySelector("#read")
let formSubmit=document.querySelector(".addBook");
const newBookButton= document.querySelector(".newBook");
const theForm= document.querySelector(".theForm")
newBookButton.addEventListener('click', () =>{
    theForm.classList.add("showNow")
});

formSubmit.addEventListener('mouseenter', () => {
    formSubmit.classList.add("formButtonHovered")
})
formSubmit.addEventListener('mouseleave', () => {
    formSubmit.classList.remove("formButtonHovered")
})

formSubmit.addEventListener("click", () => {
    let newBook= new Books(formGetBookName.value, formGetBookAuthor.value,
        formGetBookPages.value, formGetBookRead.value );
    myLibrary.push(newBook);
    newBook.index=myLibrary.indexOf(newBook)
    theForm.classList.remove("showNow")
    displayBookNames(myLibrary.indexOf(newBook))
});

let booksGrid= document.createElement("div");



let removeBook= function(button){
    button.addEventListener("click", (e) => {
    let bookToRemove=e.target.parentNode;
    let indexToRemove=bookToRemove.getAttribute("data-index")
    myLibrary.splice([indexToRemove])
    booksGrid.removeChild(e.target.parentNode)
    })
}


let displayBookNames = function (index){
    let bookCard= document.createElement("div");
    let removeButton=document.createElement("button")
    removeButton.textContent="Remove Book"
    let toggleButton=document.createElement("input")
    let titleToDisplay=document.createElement('h4');
    titleToDisplay.classList.add("titleToDisplay")
    let toggleLabel=document.createElement('label')
    toggleLabel.setAttribute("for", "toggleStatus")
    toggleButton.setAttribute("value", "notRead")
    toggleButton.setAttribute("type","checkbox")
    toggleButton.setAttribute("class", "toggle")
    toggleButton.setAttribute("name", "toggleStatus")
    toggleButton.setAttribute("id", "toggleStatus")
    let toggleButtonContainer=document.createElement("div")
    toggleButtonContainer.setAttribute("class", "toggleButtonContainer")
    toggleButtonContainer.appendChild(toggleButton)
    toggleButtonContainer.appendChild(toggleLabel)
    toggleLabel.textContent="read status"
    let authorToDisplay=document.createElement("h4");
    let pagesToDisplay= document.createElement('h4');
    let hasReadToDisplay=document.createElement('h4')
    removeButton.classList.add("removeButton")
    bookCard.classList.add("bookCards")
    body.appendChild(booksGrid)
    let bookNameDisplay= myLibrary.forEach((item) => {
        titleToDisplay.textContent=item.bookName
        authorToDisplay.textContent= `By: ${item.bookAuthor}`;
        pagesToDisplay.textContent=`Pages: ${item.bookPages}`;
        hasReadToDisplay.textContent=`Book Read: ${item.bookRead}`;
    });
        booksGrid.classList.add("showing")
        booksGrid.appendChild(bookCard)
        bookCard.appendChild(titleToDisplay)
        bookCard.appendChild(authorToDisplay)
        bookCard.appendChild(pagesToDisplay)
        bookCard.appendChild(hasReadToDisplay);
        bookCard.appendChild(removeButton);
        bookCard.appendChild(toggleButtonContainer)
        removeBook(removeButton);
        bookCard.setAttribute("data-index", index)
        addClassToRemoveButton(removeButton)
        removeClassFromRemoveButton(removeButton)
        getToggleBoolean(toggleButton,hasReadToDisplay)
};




let addClassToRemoveButton=function(button){
button.addEventListener('mouseenter', () => {
    button.classList.add("removeButtonHovered")
})
}

let removeClassFromRemoveButton=function(button){
    button.addEventListener('mouseleave', () => {
        button.classList.remove("removeButtonHovered")
    })
    }


let toggleBoolean = document.getElementsByClassName("toggle").checked ? 'true' : 'false';

let getToggleBoolean= function (toggleButton,hasReadToDisplay){
    toggleButton.addEventListener('click', (e)=> {
        let index=(e.target.parentNode.parentNode.getAttribute('data-index'))
        toggleBoolean=toggleButton.checked ? 'Yes' : 'No';
        myLibrary[index].bookRead=toggleBoolean
        hasReadToDisplay.textContent= `Book Read: ${myLibrary[index].bookRead=toggleBoolean}`
        console.log(toggleBoolean)
    })
}
