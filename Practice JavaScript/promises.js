//CallBack
const cart = ["Shoes", "Pant", "kurta"];

createorder(cart, function(orderId){
    proceedToPayment(orderId);
});

//Promises
const promise = createorder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
});
//promise.then(orderId => proceedToPayment(orderId));

/* Chaining promises
const promise = createorder(cart);
promise.then(function(orderId){
    return proceedToPayment(orderId);
})
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo);
})
    .then(function(paymentInfo){
        return updateWalletBalance(paymentInfo);
})
*/

/* Chaining promises using arrow functions
const promise = createorder(cart);
promise.then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(orderId));
*/