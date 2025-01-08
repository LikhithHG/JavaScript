//Async always returs a promise
const p1 = new Promise((resolve, reject) => {
    //For now just resolving
    setTimeout(() => { //Mimic the operation of a promise to take some time
        resolve('Promise resolved value1');
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    //For now just resolving
    setTimeout(() => { //Mimic the operation of a promise to take some time
        resolve('Promise resolved value2');
    }, 10000);
});

//Before Async and await
/*
function getData()
{
    //JS engine will not wait for promise to be resolved it moves on to print "Namaste JS" first
    p.then((res) => console.log(res));
    console.log("Namaste JS");
}

getData();
*/
//After Async await
//await is only used inside a async function

async function handlePromise() {
    console.log("Hello JS"); // This will be executed soon
    //Here JS engine will wait for promise to resolve in the below line
    const val1 = await p1;
    console.log("Namaste JS");
    console.log(val1);

    const val2 = await p2;
    console.log("Namaste JS");
    console.log(val2);
}
handlePromise();

//If there are two values for same promise then the first one will wait until promise is resolved but second will be executed soon since the promise is already resolved or rejected
//If there are two values for two different promises then the first one will wait until promise is resolved and second one depends on the time of execution of the second promise
//In both the above scenerio JS Engine appears to be waiting but its not actually.
//The async will be suspended until the await is resolsolved and call stack will not be blocked