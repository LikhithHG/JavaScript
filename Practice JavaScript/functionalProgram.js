const radius = [3, 1, 2, 4];

//call back function
const area = function(radius)
{
    return Math.PI * radius * radius;
}

//call back function
const circumference = function(radius)
{
    return 2 * Math.PI * radius;
}

//call back function
const diameter = function(radius)
{
    return 2 * radius;
}

//Higher Order function
const calculate = function(radius, logic)
{
    let output = [];
    for (let i = 0; i < radius.length; i++) 
    {
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius, area));
//Using Map function - Map in js is one of the higher order function
console.log(radius.map(area));

//The above code is same as the below one
Array.prototype.calculate = function(logic)
{
    let output = [];
    for (let i = 0; i < this.length; i++) 
    {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));


console.log(calculate(radius, circumference));

console.log(calculate(radius, diameter));