// Functions in javacript
// 1. what is function declarations ?

// function square(num) {
//   return num * num;
// }

// 2. what is function expression ?
// const square = function (num) {
//   return num * num;
// };

// 3. what are first class Functions ?
// const square = function (num) {
//     return num * num;
//   };

// function DisplaySquare(fn) {
//     return console.log("Square is " + fn(10));
// }

// DisplaySquare(square);

// 4. What is IIFE ?
// (function square(num) {
//   console.log(num * num);
// })(5);

// // 5. IIFE - O/P Based Question
// (function (x) {
//   return (function (y) {
//     console.log(x); // 1
//   })(2);
// })(1);

// 6. Function Scope - O/P Based Question
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// 7. Function Hoisting

// functionName();
// console.log(x);

// function functionName() {
//   console.log("Hello Ankit");
// }
// var x = 5;

// 7. Function Hoisting - O/P Based Question
// var x = 21;

// var fun = function(){
//     console.log(x)
//     var x = 20;
// }

// fun();

// 8. Params and Arguments
// function multiply(...nums) {
//   // console.log(nums[0] * nums[1]);
//   console.log(nums);
// }

// var arr = [5, 6];

// multiply(...arr);

// 8. Params and Arguments - O/P Based Questions

// const fn = (a, x, y, ...numbers) => {
//   console.log(a, x, y, numbers);
// };

// fn(8, 3, 4, 3, 4, 7, 9, 2);

// 9. Callback Function

// document.addEventListener('click', function (){
//     console.log("clicked")
// })

// 10. Arrow function vs regular function

// 1 - Syntax

// function sum (num){
//     return num + num
// }

// const sum = (num) => {
//     return num + num;
// }

// 2. Implicit "return" keyword
// const square = (num) => num * num;

// 3. Arguments
// function fn(){
//     console.log(arguments);
// }

// fn(2,8, 9,2);

// const fun = () => {
//     console.log(arguments)
// }

// fun(3,0,38,23);

// 4. "This" keyword

// const user = {
//   username: "Ankit",
//   rc1: () => {
//     console.log("Subscribe to", this.username);
//   },
//   rc2() {
//     console.log("Subscribe to", this.username);
//   },
// };

// user.rc1();
// user.rc2();

// Closures in Javascript
// Lexical Scope

// Global Scope
// function localScope () {
//   //local scope
//   var name = "Ankit";
// }

// localScope();

// // name is not accesseable because of function scope only.
// console.log(name)

// Global Scope
// function subscribe() {
//   var name = "Ankit Bisen"

//   function displayName () {
//     alert(name);
//   }
//   displayName();
// }

// subscribe();

// Ex 1

// function makeFunction (num1) {
//   var name = "Chrome"
//   function displayName(num) {
//     console.log(name, num, num1, username);
//   }
//   return displayName;
// }

// two way to excute
// const myfunc = makeFunction(); // first way
// myfunc();

// var username = "ankybisen"

// makeFunction(4)(5); // second

// Closure Scope chain
// var e = 10

// function sum (a){
//  return function (b){
//     return function (c){
//       // Outer Function Scope
//       return function(d){
//         // Local scope
//         return a + b + c + d + e;
//       }
//     }
//   }
// }

// console.log(sum(1)(2)(3)(4));

// closures
// 1. what will be logged to console
// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // It is shadowing inside this scope so there is no envirmental changes outside of the scope
//     // output is 1 here;
//   }
//   console.log(count); // it will print 0;
// })();

// 2. write a function that would allow you to do this
// function createBase(num) {
//   return function (innerNum) {
//     console.log(num + innerNum);
//   };
// }

// createBase(6)(10); // 16
// createBase(6)(21); // 27

// 3. Time Optimization
// function find() {
//   let a = [];

//   for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i;
//   }

//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const clouser = find();
// console.time("6");
// clouser(6);
// console.timeEnd("6");
// console.time("50");
// clouser(50);
// console.timeEnd("50");

// 2. SetTimeout Output

// function a(){
//   for(let i = 0; i < 3; i++){
//     setTimeout(() => {
//       console.log(i)// what is logged ?
//     }, i * 1000);
//   }
// }

// a();

// 5. How Would you use a closure to create a private counter?

// function counter() {
//   var _counter = 0;

//   function add(increment) {
//     _counter += increment;
//   }

//   function retrive() {
//     return "counter =" + _counter;
//   }
//   return {
//     add,
//     retrive,
//   };
// }

// const c = counter();
// c.add(5);
// c.add(10);

// console.log(c.retrive());

// 6. Make this run only onece

// let view;

// function likeTheVideo() {
//   let called = 0;

//   return function () {
//     if( called > 0){
//       console.log("alredy subcribed")
//     }else {
//       view = "roadside coder";
//       console.log("subcribed", view);
//       called++;
//     }
//   }
// }

// let isSubcribed = likeTheVideo();
// isSubcribed();
// isSubcribed();
// isSubcribed();
// isSubcribed();

// 7. Once polyfill.

/*function once(func, context) {
  let run;

  return function () {
    if (func) {
      run = func.apply(context || this, arguments);
      func = null;
    }
    return run;
  };
}

const hello = once((a, b) => console.log("Hello Ankit", a, b));

hello(1, 3);
hello(1, 3);
*/

// Currying the javascript
// Example f(a,b) int f(a)(b);
/*
function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

console.log(f(4)(6));
*/

// Example 1. sum(2)(6)(1)
/*
function sum(a) {
  return function (b) {
    return function (c) {
      return console.log(a + b + c);
    };
  };
}

sum(2)(6)(1);
*/

/* Example 2 - 
    evaluate ("sum")(4)(2) => 6
    evaluate ("multiply")(4)(2) => 8
    evaluate ("division")(4)(2) => 2
    evaluate ("subtract")(4)(2) => 2
*/

/*
function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "division") return a / b;
      else if (operation === "subtract") return a - b;
      else return "Invalid Operation";
    };
  };
}

console.log(evaluate("subtract")(8)(2));
console.log(evaluate("multiply")(8)(2));
console.log(evaluate("division")(8)(2));
console.log(evaluate("sum")(8)(2));

or  

const mul = evaluate("multiply");
console.log(mul(8)(2));
*/

// Example 3. Infinite Currying -> sum(1)(2)(3)...(n)
/*
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(3)(3)(3)(3)());
*/

/*
// Example 4. Currying vs Partial Application

// partial application
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}
// Currying
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

const x = sum(10);
console.log(x(2, 2));
console.log(x(2, 3));

// Or

console.log(sum(10)(2, 2));
*/

/*
// Example 5. Manipulating Dom

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("heading");

updateHeader("please help me")
*/

/*
// Example 6. Curry Implementation
// conver f(6, b, c) into f(a)(b)(c)
// Problem with this example not getting proper output


function curry(func) {
  return function curriedFunc(...args) {
    // console.log(args.length, func.length);
    if (args.length >= func.length) {
      return func(args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(6)(5)(6));
*/
