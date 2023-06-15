1. ### What are the possible ways to create objects in JavaScript

   There are many ways to create objects in javascript as below

   1. **Object constructor:**

      The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

      ```javascript
      var object = new Object();
      ```

   2. **Object's create method:**

      The create method of Object creates a new object by passing the prototype object as a parameter

      ```javascript
      var object = Object.create(null);
      ```

   3. **Object literal syntax:**

      The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

      ```javascript
      var object = {
           name: "Sudheer",
           age: 34
      };

      Object literal property values can be of any data type, including array, function, and nested object.
      ```

      **Note:** This is an easiest way to create an object

   4. **Function constructor:**

      Create any function and apply the new operator to create object instances,

      ```javascript
      function Person(name) {
        this.name = name;
        this.age = 21;
      }
      var object = new Person("Sudheer");
      ```

   5. **Function constructor with prototype:**

      This is similar to function constructor but it uses prototype for their properties and methods,

      ```javascript
      function Person() {}
      Person.prototype.name = "Sudheer";
      var object = new Person();
      ```

      This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

      ```javascript
      function func() {};

      new func(x, y, z);
      ```

      **(OR)**

      ```javascript
      // Create a new instance using function prototype.
      var newInstance = Object.create(func.prototype)

      // Call the function
      var result = func.call(newInstance, x, y, z),

      // If the result is a non-null object then use it otherwise just use the new instance.
      console.log(result && typeof result === 'object' ? result : newInstance);
      ```

   6. **ES6 Class syntax:**

      ES6 introduces class feature to create the objects

      ```javascript
      class Person {
        constructor(name) {
          this.name = name;
        }
      }

      var object = new Person("Sudheer");
      ```

   7. **Singleton pattern:**

      A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.

      ```javascript
      var object = new (function () {
        this.name = "Sudheer";
      })();
      ```

      **[⬆ Back to Top](#table-of-contents)**

2. ### What is a prototype chain

   **Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

   The prototype on object instance is available through **Object.getPrototypeOf(object)** or **\_\_proto__** property whereas prototype on constructors function is available through **Object.prototype**.

   ![Screenshot](images/prototype_chain.png)

   **[⬆ Back to Top](#table-of-contents)**

3. ### What is the difference between Call, Apply and Bind

   The difference between Call, Apply and Bind can be explained with below examples,

   **Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

   ```javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
   invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
   ```

   **Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

   ```javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
   invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
   ```

   **bind:** returns a new function, allowing you to pass any number of arguments

   ```javascript
   var employee1 = { firstName: "John", lastName: "Rodson" };
   var employee2 = { firstName: "Jimmy", lastName: "Baily" };

   function invite(greeting1, greeting2) {
     console.log(
       greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
     );
   }

   var inviteEmployee1 = invite.bind(employee1);
   var inviteEmployee2 = invite.bind(employee2);
   inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
   inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
   ```

   Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for **comma** (separated list) and Apply is for **Array**.

   Whereas Bind creates a new function that will have `this` set to the first parameter passed to bind().

   **[⬆ Back to Top](#table-of-contents)**

4. ### What is JSON and its common operations

   **JSON** is a text-based data format following JavaScript object syntax, which was popularized by `Douglas Crockford`. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json

   **Parsing:** Converting a string to a native object

   ```javascript
   JSON.parse(text);
   ```

   **Stringification:** converting a native object to a string so it can be transmitted across the network

   ```javascript
   JSON.stringify(object);
   ```

   **[⬆ Back to Top](#table-of-contents)**

5. ### What is the purpose of the array slice method

   The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

   Some of the examples of this method are,

   ```javascript
   let arrayIntegers = [1, 2, 3, 4, 5];
   let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
   let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
   let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
   ```

   **Note:** Slice method won't mutate the original array but it returns the subset as a new array.

   **[⬆ Back to Top](#table-of-contents)**

6. ### What is the purpose of the array splice method

   The **splice()** method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

   Some of the examples of this method are,

   ```javascript
   let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
   let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
   let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

   let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
   let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
   let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
   ```

   **Note:** Splice method modifies the original array and returns the deleted array.

   **[⬆ Back to Top](#table-of-contents)**

7. ### What is the difference between slice and splice

   Some of the major difference in a tabular form

   | Slice                                        | Splice                                          |
   | -------------------------------------------- | ----------------------------------------------- |
   | Doesn't modify the original array(immutable) | Modifies the original array(mutable)            |
   | Returns the subset of original array         | Returns the deleted elements as array           |
   | Used to pick the elements from array         | Used to insert or delete elements to/from array |

   **[⬆ Back to Top](#table-of-contents)**

8. ### How do you compare Object and Map

   **Objects** are similar to **Maps** in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.

   1. The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
   2. The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
   3. You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
   4. A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
   5. An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
   6. A Map may perform better in scenarios involving frequent addition and removal of key pairs.

   **[⬆ Back to Top](#table-of-c
