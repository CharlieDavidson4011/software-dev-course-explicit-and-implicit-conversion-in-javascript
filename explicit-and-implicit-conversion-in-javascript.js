/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


//let result = "5" - 2;// Implicit conversion from string to number
//console.log("The result is: " + result); // Fix: Use explicit convertion to ensure clarity
let result = Number("5") - 2; // Explicit conversion to number
console.log("The result is: " + result); // Now it will log: The result is: 3

//let isValid = Boolean("false");// Implicit conversion from string to boolean
//console.log("Is it valid? " + isValid); // Fix: Use explicit conversion
//if (isValid) { //
//  console.log("This is valid!");
//}
let isValid = Boolean("false"); // Implicit conversion, but "false" is truthy
console.log("Is it valid? " + isValid); // Now it will log: Is it valid? true
if (isValid) {
  console.log("This is valid!"); // This will execute because "false" is truthy in JavaScript
}


//let age = "25"; //let totalAge = age + 5; // Implicit conversion from string to number
//console.log("Total Age: " + totalAge); // Fix: Convert age to a number explicitly
//age = Number(age); // Explicit conversion to number
//let totalAge = age + 5;
//console.log("Total Age: " + totalAge);
let age = "25"; // String representation of a number
let totalAge = Number(age) + 5; // Explicit conversion to number 
console.log("Total Age: " + totalAge); // Now it will log: Total Age: 30

//Implicit conversion example
let value = "";
if (value) {
  console.log("Value is truthy!"); // This will not execute because empty string is falsy
} else {
  console.log("Value is falsy!");
}

//Explicit conversion example
let input = 0;
let isActive = Boolean(input);
console.log("Is active: " + isActive); // Now it will log: Is active: false