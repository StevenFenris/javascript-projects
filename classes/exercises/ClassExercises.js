// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard) {
        this.title = title;
        this.author = author,
        this.copyright = copyright,
        this.isbn = isbn,
        this.numPages = numPages,
        this.numCheckouts = numCheckouts,
        this.timeToDiscard = timeToDiscard,
        function checkout(uses){
        this.numCheckouts += uses;
    }
};
};

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard) {
        super(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard);
        function timeToToss(currentYear) {
        if ((currentYear - this.copyright) > 5)
        this.timeToDiscard = true;
        }
    };
};

class Novel extends Book {
    constructor(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard) {
        super(title, author, copyright, isbn, numPages, numCheckouts, timeToDiscard);
        function timeToToss(){
        if (this.numCheckouts > 100) {
            this.timeToDiscard = true;
        }
    }
};
};
// Declare the objects for exercises 2 and 3 here:
sampleNovel = new Novel("High Fidelity", "Nick Hornsby", 1992, "123456789", 345, 32, false)
sampleManual = new Manual("how to carve pumpkins", "Michael Myers", "1976", "666666666666", 13, 1, false)

console.log(sampleNovel.numCheckouts);
console.log(sampleManual.timeToDiscard);


// Code exercises 4 & 5 here:
