//  form array of caracter from a given string
let carr = Array.from("Muhammed") ;

//applay sth to all eles of array 
let arrapply = [10,20,30,56,26,90]
let newapply = Array.from(arrapply,number => number-10)

// create empty array and add given element
let arrof = Array.of(7) ;

// search for a value in a given array  in O(N)
let arrsearch =  [14,33,44,55,56,21]  ;
var findMyValue = arrsearch.find(x => x > 14);

//find the index of a given element in the array O(N)
let arrfindIndex =  [14,33,44,55,56,21]  ; 
var findMyValue = arrfindIndex.findIndex(x => x == 19);

// to make from  array another array of key and value 
let arrentries =  [14,33,44,55,56,21]  ;
var findMyValue = arrentries.entries();
// console.log(...findMyValue)
// for (const iterator of findMyValue2) {
//     console.log(iterator);   
// }


// to get the key or the values of array of entries 
let kvarray =  ['Muhammed','Osama','Ali','Ahmed' ]  ;
var myKeys = kvarray.keys();
//console.log(...myKeys)
var myValues = kvarray.values();
//console.log(...myValues)

//to change values of elements in the array
let fillall =  [1,5,2,4,6]  ;
var fillnew = fillall.fill(0)
//console.log(...fillnew)
var fillapart = fillall.fill(5,1,4 )
//console.log(...fillapart)

//swap values
var name1="Muhammed" ,name2="Ahmed";
[name1,name2]=[name2,name1]  
// console.log(name1)
// console.log(name2)

//copy values inside the array
let copyarr=['A','B','C','D','E','F']
copyarr.copyWithin(1,3,5)
//[ 'A', 'D', 'E', 'D', 'E', 'F' ]