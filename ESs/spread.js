// spread operators 

//concatinate two arrays without change the other one 
let names = ['Muhammed', 'Essa', 'Hameed'];
let employeesName = [ ...names ,'Ahmed', 'Hassan'];
//make copy of array without change the orignal one  
let names2 = ['Waleed','Othman'];
let names3 = [...names];

/*in normal case if i try to copy them in this way,
this will lead to changing in orignal one by changing this array*/
let name4 = ['ali','Omer']
let names5 = name4
names5.push('Usama');

console.log(name4);
console.log(names5);
console.log('-------------');
//it may also be used in separting an string to array of letters 
let name8 = ['a','b','c', ...'Omer']
console.log(name8)