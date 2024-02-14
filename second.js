/*Topic name : Operator and conditonal statements */ 

//Single line comment 

//1. Arithmetic operators 
let a = 5 , b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a++);
console.log(a);
console.log(--b);

// 2 . Assignment Operator 
let x = 2 , y = 3;

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log(x **= y);

  let str = "String1" ;
  let number = 1234;

  console.log(str + 1234); // String concatenation

// 3 . conditional statements using comparision operator (== , != , < , >, <=, >=) and logical operator (&& ,|| , ! ) 

let age = Number.parseInt(prompt("Enter your age :")); 
if(age <= 18){
    alert("Yours age is less");
}else if(age >= 18 && age <= 55){
    alert("Then u should drive");
}
else{
    alert("Ur age is not good enough to drive ...!");
}


let day = Number.parseInt(prompt("Enter day between 1 - 7: "));
switch(day){

    case 1 : 
            console.log("Monday");
            break;
    case 2 : 
            console.log("Tuesday");
            break;
    
    case 3 : 
            console.log("wednesday");
            break;
    case 4 : 
            console.log("thursday");
            break;
            
    case 5 : 
             console.log("Friday");
            break;
    case 6 : 
            console.log("Saturday");
            break;
    case 7 : 
            console.log("Sunday");
            break;
    default : 
            console.log("Error input");
}

//4 .Ternary operator
let number1 = 25 , number2 = 55;
console.log(number1 < number2 ? "Number1 is less" : "Number1 is greater"); 