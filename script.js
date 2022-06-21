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
    this.hasBookRead= function(toggleButton){
                toggleButton.addEventListener('click', (e)=> {
                    console.log(toggleButton.parentNode.parentNode)
                    let index=(e.target.parentNode.parentNode.getAttribute('data-index'))
                    let toggleBoolean = document.getElementsByClassName("toggle")/*.checked ? 'true' : 'false';*/
                    // toggleBoolean=toggleButton.checked ? 'Yes' : 'No';
                    // myLibrary[index].bookRead=toggleBoolean
                    // hasReadToDisplay.textContent= `Book Read: ${myLibrary[index].bookRead=toggleBoolean}`
                })
        
    }
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

// newBookButton.addEventListener('mouseenter', () =>{
//     theForm.classList.add("showNow")
// });

formSubmit.addEventListener('mouseenter', () => {
    formSubmit.classList.add("formButtonHovered")
})
formSubmit.addEventListener('mouseleave', () => {
    formSubmit.classList.remove("formButtonHovered")
})

let titleSubMessage=document.querySelector(".titleSubMessage")
formSubmit.addEventListener("click", () => {
    let newBook= new Books(formGetBookName.value, formGetBookAuthor.value,
        formGetBookPages.value, formGetBookRead.value );
    myLibrary.push(newBook);
    newBook.index=myLibrary.indexOf(newBook)
    theForm.classList.remove("showNow")
    displayBookCards(myLibrary.indexOf(newBook))
    titleSubMessage.classList.add("hide")
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

let displayBookCards = function (index){
    let bookCard= document.createElement("div");
    let removeButton=document.createElement("button")
    removeButton.textContent="Remove Book"
    let titleToDisplay=document.createElement('h4');
    titleToDisplay.classList.add("titleToDisplay")
    let authorToDisplay=document.createElement("h4");
    let pagesToDisplay= document.createElement('h4');
    let hasReadToDisplay=document.createElement('h4')
    booksGrid.appendChild(bookCard)
    bookCard.appendChild(titleToDisplay)
    bookCard.appendChild(authorToDisplay)
    bookCard.appendChild(pagesToDisplay)
    bookCard.appendChild(hasReadToDisplay);
    bookCard.appendChild(removeButton);
    removeButton.classList.add("removeButton")
    bookCard.classList.add("bookCards")
    body.appendChild(booksGrid)
    myLibrary.forEach((item) => {
        titleToDisplay.textContent=item.bookName
        authorToDisplay.textContent= `By: ${item.bookAuthor}`;
        pagesToDisplay.textContent=`Pages: ${item.bookPages}`;
        hasReadToDisplay.textContent=`Book Read: ---`;
    });
    // bookCard.appendChild(toggleButtonContainer)
    booksGrid.classList.add("showing")
    removeBook(removeButton);
    bookCard.setAttribute("data-index", index)
    addClassToRemoveButton(removeButton)
    removeClassFromRemoveButton(removeButton)
    appendToggle(bookCard, index, hasReadToDisplay)
    // getToggleBoolean(hasReadToDisplay)
     
};

  let appendToggle= function (bookCard,index, hasReadToDisplay) {
    let toggleButtonContainer=document.createElement("div")
    let toggleButton=document.createElement("input")
    let toggleLabel=document.createElement('label')
    toggleButtonContainer.setAttribute("class", "toggleButtonContainer")
    toggleButton.setAttribute("value", "notRead")
    toggleButton.setAttribute("type","checkbox")
    toggleButton.setAttribute("class", "toggle")
    toggleButton.setAttribute("name", "toggleStatus")
    toggleButton.setAttribute("id", `toggle${index}`)
    toggleLabel.setAttribute("for", `toggle${index}`)
    toggleLabel.classList.add("toggleLabel")
    toggleButtonContainer.appendChild(toggleButton)
    toggleButtonContainer.appendChild(toggleLabel)
    bookCard.appendChild(toggleButtonContainer)
    toggleButton.addEventListener('click', (e)=> {
        console.log(toggleButton.parentNode.parentNode.classList)
        let index=(e.target.parentNode.parentNode.getAttribute('data-index'))
        let toggleBoolean = document.getElementsByClassName("toggle")/*.checked ? 'true' : 'false';*/
        toggleBoolean=toggleButton.checked ? 'Yes' : 'No';
        myLibrary[index].bookRead=toggleBoolean
        // hasReadToDisplay.textContent= `Book Read: ${myLibrary[index].bookRead=toggleBoolean}`
    })
    console.log(toggleButton.parentNode.parentNode)
    if(myLibrary[index].bookRead == "Yes")
    toggleButton.checked=true;
  }
    
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





    
    // let toggleButtons=document.querySelector(".toggle")
    //     toggleButtons.addEventListener('click', (e)=> {
    //         console.log(toggleButton.parentNode.parentNode.classList)
    //         // let index=(e.target.parentNode.parentNode.getAttribute('data-index'))
    //         // let toggleBoolean = document.getElementsByClassName("toggle")/*.checked ? 'true' : 'false';*/
    //         // toggleBoolean=toggleButton.checked ? 'Yes' : 'No';
    //         // myLibrary[index].bookRead=toggleBoolean
    //         // hasReadToDisplay.textContent= `Book Read: ${myLibrary[index].bookRead=toggleBoolean}`
    //     })

