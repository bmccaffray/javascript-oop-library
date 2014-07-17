function Book(name) {
    this.name = name;
}
Book.prototype.enshelf = function(shelf){
    shelf.books.push(this);
}
Book.prototype.unshelf = function(shelf){
    var removeIndex = shelf.books.indexOf(this);
    shelf.books.splice(removeIndex, 1);
}
function Shelf(name) {
    this.name = name;
    this.books = [];
}
Shelf.prototype.shelfBookList = function(){
    var shelfBookList = "";
    for(var i = 0; i < this.books.length; i++){
        shelfBookList += this.books[i].name+"\n";
    }
    return shelfBookList
}
Shelf.prototype.addShelf = function(library){
    library.shelves.push(this);
}
function Library(name) {
    this.name = name;
    this.shelves = [];
}
Library.prototype.libraryShelfList = function(){
    var libraryShelfList = "";
    for(var i = 0; i < this.shelves.length; i++){
        libraryShelfList += this.shelves[i].name+"\n";
    }
    return libraryShelfList
}
Library.prototype.libraryBookList = function(){
    var libraryBookList = "";
    for(var i = 0; i < this.shelves.length; i++){
        for(var k = 0; k < this.shelves[i].books.length; k++){
            libraryBookList += this.shelves[i].books[k].name+"\n";
        }
    }
    return libraryBookList
}

var book1 = new Book("JavaScript Cookbook");
var book2 = new Book("Learning Python");
var book3 = new Book("Objective-C Programming");
var book4 = new Book("HTML & CSS Design");

var shelf1 = new Shelf("Computer Science");
var shelf2 = new Shelf("Web Design");

var library1 = new Library("Downtown Seattle Library");

book1.enshelf(shelf1);
book2.enshelf(shelf1);
book3.enshelf(shelf1);
book4.enshelf(shelf2);

shelf1.addShelf(library1);
shelf2.addShelf(library1);

//output

alert("Books on shelf 1:\n\n"+shelf1.shelfBookList());
book2.unshelf(shelf1);
alert("Books on shelf 1:\n\n"+shelf1.shelfBookList());

alert("Books on shelf 2:\n\n"+shelf2.shelfBookList());

alert("List of shelves:\n\n"+library1.libraryShelfList());
alert("All books in the library:\n\n"+library1.libraryBookList());
