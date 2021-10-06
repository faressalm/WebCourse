// create class
class Employee {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printInfo() {
        console.log('Name: ' + this.name + " Age: " + this.age)
    }
    //static fun
    static staticFun() {
        console.log('Hello static')
    }
}

// inheritance 
class Student extends Employee {
    studentInfo() {
        console.log(this.name+ " has " +this.age)
    }
}

// mutliple inheritance 
class User extends Student {
    // overriding a method 
    studentInfo() {
        //super to get parent characteristics  
        super.studentInfo()
        console.log("overriding Class Student")
    }
}

var user = new User("ahmed",5)
Employee.staticFun() //static fun
//user.printInfo();
//user.studentInfo();