//Topic Event : Event handling in JS

//1.using simple functions 
function display(){
    console.log("Function get execute...");
}

//2. using addEventListner() method 
document.getElementById("heading").addEventListener("click", function() {
    console.log(document.getElementById("heading").innerHTML);
});

document.getElementById("para").addEventListener("dblclick" , function (evt) {
    console.log("event haddled...");
    console.log(evt);
});

//3. using arrow functions new ways 
let btn = document.querySelector("#btn");
btn.onclick = () =>{
    console.log('button clicked thorugh js ');
}

let div = document.querySelector("#div1");

div.addEventListener("click",() => {
    console.log("event 1");
})

div.addEventListener("click",() => {
    console.log("event 2");
})

const handler3 = () => {
    console.log("event 3");
}

div.addEventListener("click",handler3);

div.addEventListener("click",() => {
    console.log("event 4");
})

div.removeEventListener("click" , handler3)


//Dark to light mode 

let btn2 = document.getElementById("darkToLightSwitch");
let currMode = "light" //dark
btn2.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.body.style.backgroundColor = "#070F2B";
    }else{
        currMode = "light";
        document.body.style.backgroundColor = "#fff";
    }
    console.log(currMode);
});