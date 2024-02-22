//Topic : Classes and Objects

//Prototype object
const employee = {
    fullName : "Employee name is here",
    calcTax() {
        console.log("Tax rate is 10%");
    }
};

//Normal Objects
const emp1 = {
    salay : 50000,
};

const emp2 = {
    salay : 60000,
};

const emp3 = {
    salay : 70000,
};

const emp4 = {
    salay : 80000,
};

const emp5 = {
    salay : 90000,
};

//I'll create the prototype of the object emp1 which will inherit the properties and methods of the employee
emp1.__proto__ = employee;
emp2.__proto__ = employee;
emp3.__proto__ = employee;
emp4.__proto__ = employee;
emp5.__proto__ = employee;



//Classes and its objects in js .Classes act like a template  

class Car {
    constructor (brandName , milage) {
        //this method created for initialization of objects of this particular class only 
        console.log ("Constructor get created...");
        this.brand = brandName;
        this.milage = milage;
        console.log ( this.brand );
        console.log (this.milage);
    }
    start() {
        console.log ("Starting the car...!");
    }
    
    stop() {
        console.log ("Stoping the car....!");
    }
}

let fortuner = new Car("Fortuner" , 10);       //object 1 of Car ; initialized by constructor
let lexus = new Car("Lexus" , 13);          //Object 2 of Car ; initialized by constructor


//Inheritance in classes 
class Person {
    constructor (name) {
        console.log("I am " + name)
    }
    eat () {
        console.log ("Can eat");
    }
    sleep () {
        console.log ("Can sleep");
    }
    work () {
        console.log ("Person can work");
    }
}

class Engineer extends Person {
    constructor (name) {
        console.log ("we are at child constructor engineer");
        super(name);
        console.log ("we are not at child constructor engineer");
       
    }
    //Method overriding 1
    work () {
        super.eat();
        console.log("Can build things and solves problems")
    }
}

class Doctor extends Person {
    constructor (name) {
        console.log ("we are at child constructor doctor");
        super(name);
        console.log ("we are not at child constructor doctor");
    }
    //Method overriding 2
    work () {
        super.eat();
        console.log("Can treat patients")
    }
}
let e1 = new Engineer("Suraj Pawar");    //Created enigineer with same properties inherited by Person class
let doc = new Doctor("Ashik Shaikh");    