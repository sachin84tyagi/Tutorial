3. ### What is the difference between Call, Apply and Bind

   Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

The prototype on object instance is available through Object.getPrototypeOf(object) or **proto** property whereas prototype on constructors function is available through Object.prototype.

Variable mutation and type coercion

```javascript
let firstName = "John";
let age = 28;
// Type coercion
console.log(firstName + " " + age);
let job, isMarried;
job = "teacher";
isMarried = false;
console.log(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);
// Variable mutation
age = "twenty eight";
job = "driver";
alert(
  firstName +
    " is a " +
    age +
    " year old " +
    job +
    ". Is he married? " +
    isMarried
);
let lastName = prompt("What is his last Name?");
console.log(firstName + " " + lastName);
```
