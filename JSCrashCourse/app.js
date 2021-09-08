// create objects
//1
person={name:  "ahmed",
        number:"154322",
        class: "csed" };
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
/*for (let i = 1; i <= 6; i++) {
    
    document.write( "<h"+person.number[i-1]+ "> fares waheed <br>");
    // i can write anything that could be writen on html 
}*/
