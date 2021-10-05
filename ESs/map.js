 var myMap = new Map();
 myMap.set('username','Essa')
// console.log(myMap.size);

//another way of initialization 
var names = new Map([
    ['1','Muhammed'],['2','Ahmed'],['3','Yousif']
    ]);
    //  to get only values
    var namesValues = names.values();
    for (const iterator of namesValues) {
          console.log(iterator)
    }
    // to get keys only
    var namekeys = names.keys();
    for (const iterator of namekeys) {
        console.log(iterator)
    }
     // to get the whole entrie  
    var nameEntries = names.entries();
    for (const iterator of nameEntries) {
        console.log(iterator)
        //iterator[1] to get value
        //iterator[0] to get key
    }
    // foreach in map 
    names.forEach((key,value)=>{
        console.log(`${key} => ${value}`)
    })