let readlineSync = require("readline-sync");

let num1 = readlineSync.question("Enter 1st number - ");
let num2 = readlineSync.question("Enter 2nd number - ");

function gcd(num1, num2)
{
if (num2 == 0)
    return num1;
return gcd(num2, num1%num2);
}   
console.log(gcd(num1,num2))