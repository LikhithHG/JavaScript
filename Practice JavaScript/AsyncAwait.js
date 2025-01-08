//Async always returs a promise
const p = new Promise((resolve, reject) => {
    //For now just resolving for understanding purpose
    resolve('Promise resolved value');
})
async function getData()
{
    return p;
}
/*
async function getData()
{
//If return type is not a promise then that will be wrapped inside the promise and returned by the async function
    return "Namaste";
}
 */

//the variable below dataPromise is a promise since getData is a async function
const dataPromise = getData();
//console.log(data);
dataPromise.then(result => console.log(result));