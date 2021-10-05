let names = new Set(['Muhammed','Essa','Hameed']);
names.add('Hassan');
// console.log(names.size)

// delete spacific element
names.delete('Omer');

// Delete all the elements 
//names.clear();

// check for the presence of an element
console.log(names.has('Muhammed') ) ;

// appling function to all set elements
 function setInfo(params) {
         console.log(`${params.length} is setted`)
}
names.forEach(setInfo);

// get the entries of the set 
var nameEntries = names.entries();
 for (const iterator of nameEntries) {
    console.log(iterator)
}

// get only the values which in set are same as keys
var namesValues = names.values();
 for (const iterator of namesValues) {
    console.log(iterator)
}

// get only the keys which in set are same as values
var namesKeys = names.keys();
for (const iterator of namesKeys) {
    console.log(iterator)
}


//Delete Duplication from array 

// from array to set
let arrn=[1,2,2,3,4,1,6]
let arrToSet=new Set(arrn);
//from set to array
let setToArray= [...arrToSet];