//Example of Promise APIs
//Promises may be API calls as well
const p1 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P1 success"), 3000);
    setTimeout(() => reject("P1 Fail"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P2 success"), 1000);
    setTimeout(() => reject("P2 Fail"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P3 success"), 2000);
    setTimeout(() => reject("P3 Fail"), 2000);
})

/*
Promise.all([p1, p2, p3]).then(res => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
});


Promise.allSettled([p1, p2, p3]).then(res => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
});


Promise.race([p1, p2, p3]).then(res => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
});
*/
Promise.any([p1, p2, p3]).then(res => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
    //Way to see the aggregate errors as returned as an array
    console.log(err.errors);
});