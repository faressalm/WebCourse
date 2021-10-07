//  create symbol (unique and immutable )
const newSymboL = Symbol("t");
const newSymboL2 = Symbol("t");
newSymboL === newSymboL2 // false

// hide details from iterator
const myobj = {
        username: "ahmed",
        website: "elsl.com",
        [newSymboL]: "this is hidden from iterator"
    }
    // iterate throw this object 
    /*for (const item of Object.entries(myobj)) {
        console.log(item)
    }
    console.log("-".repeat(30) + '\n', Object.getOwnPropertyNames(myobj))
    console.log("-".repeat(30) + '\n', Object.keys(myobj));
    console.log("-".repeat(30) + '\n', Object.getOwnPropertySymbols(myobj))
    console.log("-".repeat(30) + '\n', JSON.stringify(myobj))*/

//to get back a symbol 
const mf = Symbol.for("testing"); // symbol not exist , create it
const mf2 = Symbol.for("testing"); // symbol is existm , return it
mf === mf2 // true

// get the value of the symbol 
Symbol.keyFor(mf)

// symbol can't be  to change it same as Symbol.for
mf.description

//Symbols used to get the itertor of iterable data type
let myarr = [1, 2, 3]
let mynamestr = "fares"
    //console.log(myarr[Symbol.iterator], mynamestr[Symbol.iterator]);