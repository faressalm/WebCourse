// to import some functions or classes from the module
//import {hello, goodBye } from './user.js' 
//or to import the whole module
import * as user from './user.js'

user.hl('Muhammed')
user.goodBye('Emad')
user.name('Hassan')
    // to change name of imported 
import {
    mobileName as mn,
    Mobile as m
} from './mobile.js'

mn()
let mobileNo = new m()
mobileNo.mobileNo()

// import class from module  without { }  as default and i could write any name 
import Product from './mobile.js'
// or we could import all together as:   import Product ,{ mobileName as mn, Mobile as m } from './mobile.js'

let myNameIs = new Product('Salim')
myNameIs.priceProduct()
import Product from './product.js'