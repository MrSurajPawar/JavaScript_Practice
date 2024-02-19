//Topic : DOM manipulation 
//getAttribute(attr) method and setAttribute(attr,value)

let div = document.querySelector(".container");

console.log(div.getAttribute("class"));
console.log(div.setAttribute("class" , "new container"));
div.style.backgroundColor = "#00bbf0";
div.style.color = "black";
div.style.padding = "20px";
div.style.margin = "20px";
div.style.border = "5px solid black";


let newBtn = document.createElement("button");
newBtn.textContent = "Click me !"
newBtn.style.color = "back";
newBtn.style.backgroundColor = "white";

div.append(newBtn);
div.prepend(newBtn);
div.after(newBtn);
div.before(newBtn);

let heading = document.getElementById("heading");
heading.after(newBtn);

let firstHeading = document.createElement("h1");
firstHeading.innerHTML = "<i>This is first heading created using js properties</i>";
document.body.before(firstHeading);

document.querySelector(".btn").remove()
