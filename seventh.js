//Topic : Document Object Model (DOM) manipulation
//window is the global object 

console.log(window);
console.dir(window);  //is used to display an interactive list of the properties of a specified JavaScript object in the console

console.log(window.document);
console.dir(window.document);

console.log(document.body);
console.dir(document.body);

//Accessing HTML element using document methods

//1. getElementById() method . Unique / single element access
let headingObject1 = document.getElementById("heading"); //returns object
console.log(headingObject1);
console.dir(headingObject1);

//2. getElementsByClassName() method . Mutiple element access 
let headingObject2 = document.getElementsByClassName("Class-heading"); 
console.log(headingObject2);        //returns the nodeList or html collection of classes
console.dir(headingObject2);

//3. getElementsByTagName() method . Mutiple element access 
let headingObject3 = document.getElementsByTagName("button");
console.log(headingObject3);

//4. querySelector() or quesrySelectorAll() method . Mutiple element access id,classes,tag names etc allowed
let headingObject4 = document.querySelector("#heading");          //returns first element only 
console.log(headingObject4);

let headingObject5 = document.querySelectorAll(".Class-heading")       //returns all elements
console.log(headingObject5);


//Properties of DOM
//1. tagName
let temp1 = document.querySelector(".Class-heading").tagName;
console.log(temp1);

//2.innerText 
let temp2 = document.querySelector("div");
console.log(temp2.innerText)

//3.innerHTML
let temp3 = document.querySelector("div");
console.log(temp3.innerHTML)

//4.textContent
let temp4 = document.querySelector("h1");
console.log(temp4.textContent);