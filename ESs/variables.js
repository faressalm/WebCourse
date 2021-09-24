/*
var
-Function scope
- Can be Redeclared
- Undefined when accessing a variable befor it's Declaretion

let
- Block scope
- cannot be Redeclared
- referenceError when accessing avariable befor it's Declaretion
- Does not Create properties in the window object

-const
- Block scope
- cannot be Redeclared
- referenceError when accessing avariable befor it's Declaretion
- Does not Create properties in the window object

*/

//the convention is to write const name in uppercase letters
const  SETTING = {
    name: 'osama',
    age: 5
};
//I can change the values of this objects attributes but not the object
Object.freeze(SETTING);//to stop obj attribute changing 


let age = 20;
function sum(){
    let age = 33;
    console.log("age inside function : " + age);
}
sum();
console.log("age outside function : " + age);

