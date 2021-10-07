//make new promise  
let num1 = 10
let checkNum = new Promise((resolve,rejected)=>{
     if (num1 == 10) {
         resolve('Yes equal')
     }else{
         rejected('Not equal')
     }
 })

       /*checkNum.then((value)=>{
           console.log('the result is : ' + value)
       }).catch((e)=>{
           console.log('the result is : ' + e)
       })*/


// to apply function in the two cases of promise 
 let myApproved = (x)=>{
     console.log(x + "Yes")
 }

 let myDenied = (y)=>{
     console.log(y + "No")
 } 
 let twofunpromise = num =>{
     return new Promise((resolve,reject)=>{
         if (num == 12) {
             resolve("Bravo :")
         }
         reject('Sorry : ')
     })
 }

       //twofunpromise(12).then(myApproved , myDenied)

// to catch errors  
twofunpromise(12).then((value)=>{
      throw new Error() 
     console.log('the result is : ' + value)
 }).catch((e)=>{
    // throw new Error() 
     console.log('the result is : ' + e)
 })

 
// to apply certain resolve or rejected to an error 
  let resolve = (res) => {
     console.log("_".repeat(30))
     console.log("Welcome " + res)
 }
  let rejected = (res) => {
     console.log("can not connect to the "+ res)
 }

    //Promise.reject(new Error('Server')).then(resolve, rejected)
    //Promise.resolve(new Error('Server')).then(resolve, rejected)


// promise channing 
let myNum1 = ()=>{
    return new Promise((resolve,reject)=>{
        resolve('Mynum1')
    })
}

let myNum2 = ()=>{
   return new Promise((resolve,reject)=>{
       reject('Mynum2')
   })
}
let myNum3 = ()=>{
   return new Promise((resolve,reject)=>{
       resolve('Mynum3')
   })
}

myNum1().then((myNum1)=>{
   console.log(myNum1)
   return myNum2()
}).then((myNum2)=>{
   console.log(myNum2)
   return myNum3()
}).catch((e)=>{
    console.log("The server can't respond to this Error :" +e)
   return myNum3()
}).then((myNum3)=>{
   console.log(myNum3) 
})