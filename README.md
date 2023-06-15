Part 1 – JavaScript Basics
JavaScript is a lightweight, cross-platform, object-oriented programming language. Today, JavaScript can be used in different places
•	Client-side: Used in browser
•	Server-side: Node.js, On the server
Primitive Data Type
•	Number – Floating point numbers, for decimals and integers 
•	String – Sequence of characters, used for text
•	Boolean – Logical data type that can be only true or false
•	Undefined – Data type of a variable that does not have a value yet
•	Null – Means non-existent
Variable mutation and type coercion
/*****************************
* Variable mutation and type coercion
*/
let firstName = 'John';
let age = 28;
// Type coercion
console.log(firstName + ' ' + age);
let job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
let lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);


