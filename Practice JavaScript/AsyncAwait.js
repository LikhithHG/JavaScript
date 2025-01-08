//Async always returs a promise
const p = new Promise((resolve, reject) => {
    //For now just resolving
    resolve('Promise resolved value');
})
async function getData()
{
    return p;
}
/*
async function getData()
{
    return "Namaste";
}
 */
const dataPromise = getData();
//console.log(data);
dataPromise.then(result => console.log(result));