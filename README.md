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
2. ### JavaScript Array
```javascript
const arr = ['A', 'B', 'C']
console.log(arr.length)//3 
console.log(arr[0])//A
console.log(arr[arr.length-1])//C
arr.push('D')//push method - will add element in the last - 'D', ['A', 'B', 'C', 'D']
arr.pop() //pop method - will remove last element - 'D', ['A', 'B', 'C']
arr.shift()//shift method - will remove first element -'A', ['B', 'C']
arr.unshift('A')//unshift method - will add element at first place. 'A', ['A', 'B', 'C']
//splice(start, deleteCount, item1, item2, ...itemN)
arr.splice(0, 1, 'Aa','Bb','Cc')//A, Will delete element at 0 index and will and new Item 'Aa' at 0 index.
//Original Array - ['Aa', 'Bb', 'Cc', 'B', 'C']
arr.splice(1, 2)// ['Bb', 'Cc']. Original Array - ['Aa', 'B', 'C']
arr.splice(0,1,'A') //['Aa'] Original Array - ['A', 'B', 'C']
arr.indexOf('D')//-1 Original Array - ['A', 'B', 'C']
arr.indexOf('C')//2 Original Array - ['A', 'B', 'C']
arr.join('-')//join method - will convert array to sting 'A-B-C'. It does not affect Original Array - ['A', 'B', 'C']
arr.slice(1)// ['B', 'C']
arr.slice(2, 3)// ['C']
arr.slice(-2)// ['B', 'C']
const arr2 = ['X', 'Y', 'Z']
arr.concat(arr2)//Concate 2 array
```
