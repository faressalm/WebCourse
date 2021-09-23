// to pass diff number of params 
function printInfo(x,y,...args){//... should be the last param 
    let total = 0;
    for(let i of args){
        total +=i;
    }
    console.log("Total :" + total);
}
printInfo(1,2,3,4,5,6,7);
console.log('-------------------');
// we can take diff params specialy from database and resolve them 
var arrobj = ['Muhammed', 21,'Hameed','Yousif','Taha']
var[Name,Age,...Friends] = arrobj
console.log("name :" + Name);
console.log("age :" + Age);
console.log("friends names :" + Friends);

console.log('-------------------');
// to make function dynamic 
var numbers = new Function('...args','return args');
console.log(numbers(1,2,3,4));