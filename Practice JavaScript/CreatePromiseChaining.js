const cart = ["Shoes", "Pant", "kurta"];

//Async operaton returns promise

/* This is same as below
const promise = createOrder(cart); //Returns orderID
console.log(promise);

promise.then(function(orderId){
    //This will be called if promise is fulfilled or accepted
    console.log("Order created with order ID: " + orderId);
    //proceedToPayment(orderId);
})
.catch(function (err) {
    console.log(err.message);
}) //Used to handale if the promise is rejected or handle failure cases

*/
createOrder(cart) //Returns orderID
.then(function(orderId){
    //This will be called if promise is fulfilled or accepted
    console.log("Order created with order ID: " + orderId);
    return orderId;
    //proceedToPayment(orderId);
})
.catch(function (err) {
    //catch only proceeds with the error for the promises that are above it
    //This catch will catch all the errors of the promises that it sees above it bug not  for the promises that are below it
    //This make sures that the promise chain continues if one promise fails also
    console.log(err.message);
}) //Used to handale if the promise is rejected or handle failure cases
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err){
    console.log(err.message);
});



//Producer part
function createOrder(cart)
{
    //Constructor for creating a promise 
    // and this is having two parameters resolve and reject given by javasript
    const pr = new Promise(function(resolve, reject){
        //create order
        //validate cart
        //orderId
        if(!validateCart(cart))
        {
            const err = new Error("cart is not valid");
            reject(err);
        }
        //Logic for create order goes here
        //But here just for the understanding purpose hardcoded
        const orderId = '1234'; //Using DB calls
        if(orderId)
        {
            //Just to mimic the action of the promise to take long time we are writing set timeout
            setTimeout(function() {
                resolve(orderId);
            }, 5000);
        }
    });

    //Return the promise
    return pr;
}

function validateCart(cart)
{
    //Logic to validate cart here
    //This is for demo just creating the true inside here
    return true; //make false for reject the promise
}

function proceedToPayment(orderId)
{
    //Logic to proceed to payment here
    
    //orderId = null;
    //Just to mimic the action reject a promise and catching this error the above statement is used

    //You can write the logic for reject as like the createOrder function and work accordingly 
    //here just for understanding purpose we are directly resolving it
    return new Promise(function(resolve, reject){
    
        if(orderId)
            resolve("payment Successfull for the order with ID "+orderId);
        
        else    
            reject(new Error("No valid payment Info available"));
    })
}