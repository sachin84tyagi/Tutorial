1. ### Variable mutation and type coercion
```javascript
let firstName = "John";
let age = 28;
// Type coercion
console.log(firstName + " " + age);
let job, isMarried;
job = "teacher";
isMarried = false;
console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);
// Variable mutation
age = "twenty eight";
job = "driver";
console.log(firstName + " is a " + age + " year old " + job + ". Is he married? " + isMarried);
let lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);
```
2. ### Function Statements and Expression
```javascript
//Function Statements
function funcName(year, firstName) {}
funcName(1990, 'John');
// Function expression
let funcName = function(job, firstName) {}
funcName('teacher', 'John')
```