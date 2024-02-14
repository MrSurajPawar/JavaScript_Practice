// /*Topic : Lops and Strings*/

let str = "Suraj";

// //1. while loop

let sum = 0;
let i = 1;
while(i<=10){
    sum = sum + i;
    i++;
}
console.log(sum);

// //2. do...while loop
let numberOfTimesPrinting = Number.parseInt(prompt("Enter the number of time to print 'Suraj' :"));
let j = 1;
do{
    console.log("Suraj" + " ");
    j++;
}while(j<=numberOfTimesPrinting);

// //3.for loop 

const car = ['Volvo' , 'BMW', 'Lambo' , 'Mercedis'];                        //declaration 1
const person = new Array("Suraj" , "Ashikh" , "Vyanakatesh" ,"Chinmay");    //declaration 2 
const car2 = ['Volvo' , 'BMW', 'Lambo' , 'Mercedis'];

for(let i = 0 ; i < car.length ; i++){
    console.log(car[i] + " ");
}

for(let k in person){       //for in 
    console.log(person[k]);
}

for(let x of car2){        //for of 
    console.log(x);
}

//4 . Strings methods 

let str1 = "Suraj";
let str2 = new String("Ashikh");
console.log((str1 == str2)? true : false);

console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.charCodeAt(0));
console.log(str1.charAt(1));
console.log(str1[0].toUpperCase());

let text = "Apple, Banana, Kiwi";

console.log(text.slice(7, 13));
console.log(text.substr(7));
console.log(text.substring(7, 13));
console.log(text.substring(7, 13));

let str3 = str1.concat(" " , str2 ," are friends");
console.log(str3);
let result = str1.repeat(5); 
console.log(result);

let text2 = "Please visit Microsoft!";
let newText = text2.replace("Microsoft", "W3Schools");
console.log(newText);


