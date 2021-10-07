class Mobile {
    mobileNo() {
        console.log('Hello  from mobile class')
    }
}


function mobileName() {
    console.log('Hello Android from mobilejs')
}
// export the class by default  there is only one default 
export default class Product {
    constructor(name) {
        this.name = name
    }
    priceProduct() {
        console.log("Hello from product " + this.name)
    }
}

export { mobileName, Mobile }