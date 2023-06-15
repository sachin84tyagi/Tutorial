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

Function Statements and Expression
/*****************************
* Function Statements and Expressions
*/
//Function Statements
function funcName(year, firstName) {}
funcName(1990, 'John');

// Function expression
let funcName = function(job, firstName) {}
funcName('teacher', 'John')

JavaScript Array
//Array Basics
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

Objects and Properties
/*****************************
* Objects and properties
*/
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);
// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
john.calcAge();
console.log(john);






Loops and iteration
/*****************************
* Loops and iteration
*/
// for loop
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}
// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
}
// continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
// Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}


Final Example – 

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];    
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i]; 
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// Do the calculations
john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);
if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
	

How JavaScript code is Executed ?
JavaScript is always hosted in some environment. And that is most typically a browser such as  Google Chrome, Firefox, Safari, etc. And on server node JS.
JavaScript engine (Such as Google's V8 engine, that is used in Google Chrome) that takes our code and executes it. A JavaScript engine is a program that executes JavaScript code.
the first thing that happens inside the engine, is that our code is parsed by a parser, which basically reads our code line by line, and checks if the syntax of the code that we gave it, is correct. So this means that the parser knows the JavaScript rules and how it has to be written in order to be correct to be valid.
then the parser produces a data structure known as the Abstract Syntax Tree, which is then translated into machine code.
So this code is no longer JavaScript code, but a code, or let's say a set of instructions, that can be executed directly by the computer's processor.
 
Execution Context
A box, A container or A wrapper which stores variables/methods and in which a piece of code is evaluated and executed.
The default is Global Execution Context. Code that is not inside any function associated with Global Object. In the browser Global object is window object.
lastName === window.lastName  //true 

Execution Context Creation Phases
This is creation phases – 
1.	Creation of the Variable Object
2.	Creation of the Scope Chain
3.	Determine value of ‘this’ variable
Creation of the Variable Object –
•	The argument object is created, containing all the arguments that were passed into function
•	Code is scanned for function declarations: for each function, a property is created in the variable Object, pointing to the function.
•	Code is scanned for variable declarations: for each variable, a property is created in the variable object and set to undefined.
Hoisting
// Lecture: Hoisting
// functions
calculateAge(1965);
function calculateAge(year) {
    console.log(2016 - year);
}
// retirement(1956);//undefined
var retirement = function(year) {
    console.log(65 - (2016 - year));
}
// variables
console.log(age);//undefined
var age = 23;
function foo() {
    console.log(age);//undefined
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

Creation of the Scope Chain/ Lexical Scope of a variable
// Lecture: Scoping
// First scoping example
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}

Determine value of ‘this’ variable
// Lecture: The this keyword
//console.log(this);
calculateAge(1985);
function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}
john.calculateAge();
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};
mike.calculateAge = john.calculateAge;
mike.calculateAge();


Execution Context Execution Phases
The code of the function that generated the current Execution Context is ran line by line.

Part 2 – JavaScript Advanced
Non Primitives/Reference Types
There are essentially two types of values in JavaScript. The first type is primitives, and the second type is objects (which also includes functions). Primitive values include simple value types such as numbers (which includes everything from integers to floats to Infinity to NaN), booleans, strings, undefined, and null (note: even though typeof null === 'object', null is a still primitive value).
Primitive values are also immutable. They can’t be changed. Of course, a variable with a primitive assigned can be reassigned. For example, when you write the code let x = 1; x++;, you've reassigned the variable x. But, you haven't mutated the primitive numeric value of 1.
Some languages, such as C, have the concept of pass-by-reference and pass-by-value. JavaScript sort of has this concept too, though, it’s inferred based on the type of data being passed around. If you ever pass a value into a function, reassigning that value will not modify the value in the calling location. However, if you modify a non-primitive value, the modified value will also be modified where it has been called from.
Primitives are copied by their value And Object are copied by their reference
 
//Value Type Example
let x = 10
let y = x
x = 20
console.log(x) // 20
console.log(y) // 10
//Reference Type Example
let x = {
    value: 10
}
let y = x
x.value = 20
console.log(x) // {value:20}
console.log(y) // {value:20}


let number = 10
function increase(number) {
    number++
}
increase(number)
console.log(number); //10

let obj = { value: 10 };
function increase(obj) {
    obj.value++
}
increase(obj)
console.log(obj); //{value: 11}

const obj1 = { name: "Intrinsic" };
const obj2 = { name: "Intrinsic" };
console.log(obj1 === obj2); // false
// Though, their .name properties ARE primitives:
console.log(obj1.name === obj2.name); // true


Primitives are copied by their value And Object are copied by their

