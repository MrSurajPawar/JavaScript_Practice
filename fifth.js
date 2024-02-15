//Topic : Functions
//JavaScript functions are defined with the function keyword. You can use a function declaration or a function expression

//1 . named fucntions 
function myFunction1(a,b){
    return a + b;
}

const x = myFunction1(4,4);
console.log(x);


//2.  Anonymous function or function as expression 
const y = function (a,b){ return a+b }; 
let z = y(4,4); //now 'y' becomes function 
console.log(z);


//3. Function constructor Avoid this type of fucntoins
const a = new Function("a","b","return a+b");
let b = a(3,3);
console.log(b);


//4. Self-Invoking functions
(
    function (){
        console.log("This is self invoking functions");
        let a = 6 , b = 6;
        console.log(a+b); 
    }
)();


//5.Arrow-functions
const arrowFunction = (x,y) => {
        return x*y;
};

let temp = arrowFunction(4,4);
console.log(temp);


// Rest Parameter ...args passing array as an arguments

function sum(arr){
    for(let i in arr){
        console.log(arr[i]);
    }

    return arr;
}

let answer = [1,2,34,5,"Suraj"];
answer = sum(answer);
console.log(answer);

//this keyword 
function myFunction2(){
    return this;        //window object
}
let num = myFunction2();
console.log(num);


const myObj = {
    firstName : "Suraj",
    lastName : "Pawar",
    fullName (){
            return this;
        }
}

let num1 = myObj.fullName();
console.log(num1);