 //initialize object
 let age = 36
 let salary = 'employeeSalary'
 let person = {
     fisrName:'Essa',
     lastName:'Muhammed',
     age,
     //computed property   it but the value of salary as the key to the value
     [salary]:3000.3,
     //function
      fullName(){
        return this.fisrName +" "+ this.lastName;
         },
      //another object
      langs:{
         html:'70%',
         css: '80%',
         js: '60%'
      }
    
}


// cloon object
let personcloon = Object.assign({} ,person )
//or
let personcloon2={...person}


// to merge objects 
var secondobj = { friend1:'Muhammed', friend2:'Essa' };
var thirdobj = { country:'egypt', gender:'male' };


var mergedobj = Object.assign({},person,secondobj,thirdobj);//to merge object with other one in this object  (person,secondobj,thirdobj)
//or
var mergedobj2 = {...person, ...secondobj , ...thirdobj}


// delete attribute from an object
delete(person.age)



// to assign objects value to an other object and change attribute names
let myInfo = {age2 : 33 , salary2 : 3000} 
let {age2:ages , salary2 : salaries} = myInfo
let changedNameObject={ages,salaries}
//aswell assign values  
let{num1:number1=10,num2:number2=20 } = {num1:30}
//asign the attribute inside object which is inside object
const {fisrName,lastName,langs:{html,css,pyhton ="10%"}} =person;
/*console.log(css)
console.log(html)*/

// destructing an object
let country;
({country,...otherAttributes} = thirdobj)
/* or 
 let {country,...otherAttributes} = thirdobj*/
let destructedObj={country,otherAttributes}


