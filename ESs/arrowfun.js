     // zero parameter
     var sum3 =  ()=> console.log(3+2);
     sum3();
     //1 param
     var sum4 =  x  => console.log(x);
     sum4(33);
     //more than 1 param 
     var sum5 = (x,z,r=22) => console.log( x+z +r);
     sum5(2,3 );
     // for one line return 
     var number = v => v/2
     console.log(number(20));
     // for more than one line we must write return 
     var num2 = x =>{
       return x/2;
     }
     console.log(num2(20));
     

     // this ,scoop in ordinary function it return the object who called it
     function ordinary() {
         console.log(this)
     }
     ordinary()
     // this, scoop in arrow function it return the object it contained  in 
     function person(){
         this.age =0;
        setInterval(() => {
           this.age++;
           console.log(this.age) 
        }, 1000);
     }
     let a= new person()