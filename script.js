function Books(title, author, pages, read){
    this.bookName=title
    this.bookAuthor=author
    this.bookPages=pages
    this.bookRead=read
    this.info= function(){
        return(title + " by " + author+", " + pages +" pages"+", " + read)
    }
}

let newBook= new Books("Hello World", "miguel Gil", 350, "not read")