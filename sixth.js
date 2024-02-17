//Functions part 2

//1. named functions with and without parameters
function myFunction1() {
  //function defination
  console.log("Hey this function");
}

myFunction1(); //function call

function myFunction2(a, b) {
  let sum = a + b;
  return sum;
}

let value = myFunction2(3, 3);
console.log(value);

//2. arrow functions : the variable will behaive like the function , in fact it become the function
const arrowFunction = (a, b) => {
  console.log("Arrow function get called");
  return a + b;
};

let sum = arrowFunction(5, 5);
console.log("the sum is " + sum);

// Program to get number of vowels present in the string
function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

let numberOfVowelPresent = countVowels("This is string aeiou");
console.log("Number of vowels " + numberOfVowelPresent);

//3. forEach() loop for an array 

const arr = ["Pune", "Delhi", "Mumbai"];

arr.forEach((val , index, arr) =>{
    console.log(val.toUpperCase(), index , arr);   //Executed for each element for an array , 'value' is array element itself
});

// Program to find the square of each element of an array using forEach loop
const numbers = [1,2,3,4,5,6];

numbers.forEach((value) => {        
   console.log("Square of this number is " +(value * value)); 
});

console.log("Other way to write this function :");

let calculateSquare = (value) => {        
    console.log("Square of this number is " +(value * value)); 
}
numbers.forEach(calculateSquare);

//map() method
let num = numbers.map((value) => {
    return value;
})
console.log(num);   //map passes new array 

//filter() method
let num1 = numbers.filter((value) =>{
    return (value % 2 === 0);
})

console.log(num1);

//reduce() method 
let num2 = numbers.reduce((previousValue , currentValue) => {
    return previousValue > currentValue ? previousValue : currentValue;
})

console.log(num2);