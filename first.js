//String type
fullName = "Ashikh Shaikh";
hisFriendName = "Suraj Pawar";

console.log(fullName + " is the friend of " + hisFriendName);

//Number type
grade = 14;
console.log(grade);

//Boolean type
isTrueOrFalse = true ;
console.log(isTrueOrFalse);

//null and undefined 
Null = null;
Undefined = undefined;
console.log(Null);
console.log(Undefined);

//let , const , and var

//global scope variable
var google = "Google is google";

{
    //block scope variables
    const PI = 3.14;
    let apple = "Think diiferent";
    console.log(apple);
    console.log(PI); 
}

console.log(google);


//Primitive Data Types 7 
let a = 123.456;    // Number
const str = "1234";  //constant
let isBoolean = true; // boolean 
let isUndfined = undefined; // undefined
let b = null;   //null 
let x = BigInt("123456");   //BigInt 
let y = Symbol("hello...!");   //Symbol

console.log(typeof a);  
console.log(typeof str);
console.log(typeof isBoolean);
console.log(typeof isUndfined);
console.log(typeof b);
console.log(typeof x);
console.log(typeof y);

//Non - Primitive datatype - objects or object types like Arrays , Fucntions 
const Student = {
    fullName : "Rahul Jadhav",
    grade : 5 ,
    isAlive : true ,
    cgpa : 9.12,
}; 

console.log(Student["fullName"]);
Student.fullName =  "Suraj Pawar";
console.log(Student["fullName"]);
