//Topic : Asynchronous programming concepts

//Basic demo of what is Asynchronous programming is ...
console.log ("1");
console.log ("2");

setTimeout(() => {
    console.log ("executed after 4 second delay");
} , 4000);

console.log ("3");
console.log ("4");
console.log ("5");

//Callbacks
const hello = () => {
    console.log("Hello");
};
setTimeout(hello , 4000);   //here hello is the arrow function excuted after 4 secs

//Callback hell : program of multiple Callbacks  that difficult to understand and manage
function getData (dataId , getNextData) {
    //2s delay
    setTimeout( () => {
        console.log("data" , dataId);
        if(getNextData) {
            getNextData();
        }
    } , 2000);
}

getData(1 , () => {
   console.log("getting data 2...");
    getData(2 , () => {
        console.log("getting data 3...");
        getData(3 , () => {
            console.log("getting data 4...");
            getData(4);
        });
    });
});

//Promises in JS and Promises chaining
function getData2( dataId , getNextData) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("Data" , dataId);
            resolve("Success");
            // reject("Error..");
        } , 3000);
    });
}

let result = getData2(123);
console.log( result );

//Act as an API for data 1
function asynFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("Success");
    }, 4000);
  });
}

//Act as an API for data 2
function asynFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("Success");
    }, 4000);
  });
}

console.log("Fetching data 1...");

asynFun1()
  .then((res1) => {
    console.log("Inside the function 1");
    return asynFun2();
  })
  .then((res2) => {
    console.log("Inside the function 2");
  })
  .catch((error) => {
    console.log(error);
  });

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, ms);
  });
}

delay(1000)
  .then((result1) => {
    console.log(result1);
    return delay(2000);
  })
  .then((result2) => {
    console.log(result2);
    return delay(3000);
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.log(error);
  });

//async - await keyword keyword 

function api() {
    return new Promise((resolve , reject) => {
        setTimeout( () => {
            console.log("Weather Data");
            resolve(200);
        } , 3000);
    });
}

async function getWeatherData() {
    await api();    //1st call
    await api();    //2nd call executed after 1st one only 
}

function getData3( dataId ) {
    return new Promise( (resolve , reject) => {
        setTimeout( () => {
            console.log("Data " , dataId);
            resolve("Success");
        } , 2000);
    })
}

( async function getAllData() {
    console.log("Getting data 1...");
    await getData3(1);

    console.log("Getting data 2...");
    await getData3(2);
    
    console.log("Getting data 3...");
    await getData3(3);
    
    console.log("Getting data 4...");
    await getData3(4);
    
    console.log("Getting data 5...");
    await getData3(5);
} ) ();