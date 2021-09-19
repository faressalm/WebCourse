/*
// create objects
//1
person={name:  "ahmed",
        number:"154322",
        classe: "csed", 
        call: function(){console.log("calling fares")} };
 //2 
 var cat= new Object();
 cat.name="bo2somat";
 cat.color="white";
 cat.age=1;
 document.write(cat.name+cat.age+"<br>");
 //3
 function catconstructor(age,name,color){
     this.age=age;
     this.name=name;
     this.color=color;

     //methods for this object
     this.changeCatColor=changeCatColor;
     function changeCatColor(age){
         this.age=age;
     }
 }
 emp =new catconstructor(1,"bo2somat","white");  
 emp.changeCatColor(7);
 document.write(emp.name+emp.age);     
//array
var mynamearr=["m","ali","d"]
var arr2= new Array()
arr2.push("ahmed")
document.write(arr2[0])
 // number
 var num1=new Number(2.41111);
 var num2= 123e5
 var strnum= num1.toString();
 document.write(num1.toFixed(2) + "<br>")
 document.write(num1.toPrecision(3) + "<br>")
 document.write(num2.toExponential(2) + "<br>")

//string 
var str2 = new String("fares");
var str1 = "   fAres is my name and my age is 21  "
document.write(str1[9] +" same as "+str1.charAt(9)+"<br>");
document.write(str1.indexOf("my")+"<br>");
document.write(str1.lastIndexOf("my") +"<br>");
document.write(str1.toLowerCase() +"<br>");
document.write(str1.toUpperCase() +"<br>");
document.write(str1.slice(0,8) +"<br>");
document.write(str1.trim() +"<br>");

//Math
var nummath=4
document.write( Math.sqrt(nummath) +"<br>");
document.write(Math.random() +"<br>");
document.write(Math.pow(2,4) +"<br>");
document.write(Math.floor(2.9) +"<br>");
document.write(Math.ceil(2.3) +"<br>");
document.write(Math.round(2.4)+" "+ Math.round(2.6) +"<br>");
document.write(Math.abs(-9) +"<br>");

//Date

function  showTime() {
    var myDate = new Date()
    var month,day,year,sec,min,hour;
    year=myDate.getFullYear();
    month=myDate.getMonth()+1;
    day=myDate.getDate();
    hour=myDate.getHours()
    min=check(myDate.getMinutes())
    sec=check(myDate.getSeconds())
    document.write(day+"/"+month+"/"+year+" Clock "+ hour+":"+min+":"+sec);
}
function check(par){
     if(par>=10)
     return par
     else
     return "0"+par
}

window.onload=function myload(){
    showTime();   
}

//Dom 
var itsarray =document.getElementsByClassName("content");
var tagnamearray= itsarray[0].getElementsByTagName("p");
tagnamearray[0].innerHTML= "go fares";
var justOneElement = document.getElementById("testa");
justOneElement.textContent="farosa"
justOneElement.getAttribute("class");
justOneElement.setAttribute("class","ff");
justOneElement.setAttribute("style","color: red")
//append elements 
var newA = document.createElement("a");
var newLi = document.createElement("li");
newA.innerHTML="new one";
newA.setAttribute("href","www.notion.com");
newLi.appendChild(newA);
var menuu = document.getElementsByClassName("DOM")[0].getElementsByTagName("ul")[0];
menuu.insertBefore(newLi,menuu.getElementsByTagName("li")[1]);

//remove ele from DOM
var parent = menuu;
var child = menuu.getElementsByTagName("li")[1];
parent.removeChild(child);


// Timer
var mes=document.getElementById("message");
var counter=0;
var colors =["red","blue","cyan","white"];
function showMessage(){
  mes.className="show";
  setTimeout(() => {
    mes.style.backgroundColor=colors[counter];
    counter=(counter+1)%4;
  }, 1000);

}

var timeshow =setInterval(showMessage,2000);
mes.onclick = function () {
    clearInterval(timeshow);
    mes.getElementsByTagName("p")[0].innerHTML="that the end";
    if(mes.className == "show"){
        mes.className ="colour-changer";
    }else{
        mes.className ="show";
    }
}*/

//form
var myform=  document.forms.myform;
myform.name.value;
myform.colour.value; //get form element by its name and show its value
myform.name.onfocus =function(){
    myform.name.style.border = "4px solid pink"
};
myform.name.onblur = function(){
    myform.name.style.border ="none";
}
myform.onsubmit= function () {
    if(myform.name.value ==""){
        document.getElementById("messagee").innerHTML="please enter your name";
        return false;
    }else{
        document.getElementById("messagee").innerHTML="";
        return true;
    }
}

/*for (let i = 1; i <= 6; i++) {
    
    document.write( "<h"+person.number[i-1]+ "> fares waheed <br>");
    // i can write anything that could be writen on html 
}*/
