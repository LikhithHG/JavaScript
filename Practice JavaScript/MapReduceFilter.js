//Map
const arr = [5, 1, 3, 2, 6];

const double = function(value)
{
    return value * 2;
}

console.log(arr.map(double));

//This is same as above
const output = arr.map((x) => x * 2);
console.log(output);



//Filter

const odd = function(value)
{
    return value % 2;
}

function even(value)
{
    return value % 2 === 0;
}

const output1 = arr1.filter(odd);
console.log(output);
console.log(arr.filter(even));

//The below code does exactly for odd function
const output2= arr.filter((x) => x % 2);
console.log(output2);



//Reduce
//Sum 

//Normal function
function findSum(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

console.log(findSum(arr));

//Using reduce
const output3 = arr.reduce(function(acc, curr) 
{
    acc += curr;
    return acc;
    //return acc + curr;
}, 0); //Initial value for the accumulator

console.log(output3);

//Max
function findMax(arr)
{
    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] > max)
            max = arr[i];
    }
    return max;
}

console.log(findMax(arr));

//Max using the reduce
const output4 = arr.reduce(function(max, curr) 
{
    if(curr > max)
        max = curr;
    return max;
}, 0);
console.log(output4);