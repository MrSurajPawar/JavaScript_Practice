//Arrays in JS : arrays in js are special types of OBJECTS and hence they also have properties and methods .
//Arrays are a special kind of objects, with numbered indexes.

const arr1 = [1,2,3,4,5];    //this is an array 
const arr2 = ["Suraj" , "Chinmay" , "Rahul" ,"Ashik"];  //this is also array 
const arr3 = new Array ("ABC" , 2, "XYZ" , 5);  //not recommended practice but this also array

for(let i in arr1){
    console.log(arr1[i]);
}

for(let i in arr2){
    console.log(arr2[i]);
}

for(let i of arr3){
    console.log(i);
}

//Properties and methods in array : array.propert , array.method()
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.push("Lemon"));
console.log(fruits.toString());
console.log(fruits.at(4));
console.log(fruits.join(" - "));
console.log(fruits.pop());
console.log(fruits.push("Kiwie"));
console.log(fruits.shift());
console.log(fruits.unshift("Lemon"));
console.log(fruits);


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus" , "Eva"];

const myChildren = myGirls.concat(myBoys);  
console.log(myChildren);
console.log(myChildren.sort());
console.log(myChildren.reverse());