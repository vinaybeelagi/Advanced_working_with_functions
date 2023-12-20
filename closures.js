// // task-Does a function pickup latest changes?
// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); //ans:"pete"

// // task-Which variables are available?
// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//       alert(name);
//     };
//   }
  
//   let name = "John";
  
//   // create a function
//   let work = makeWorker();
  
//   // call it
//   work(); //ANS:"pete"

// //   task-Are counters independent?
// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
//   let counter = makeCounter();
//   let counter2 = makeCounter();
  
//   alert( counter() ); // 0
//   alert( counter() ); // 1
  
//   alert( counter2() ); // ans:0
//   alert( counter2() ); // ans:1

// //   task - Counter object
// function counter() {
//     let count = 0;
  
//     this.up = function() {
//       return ++count;
//     };
//     this.down = function() {
//       return --count;
//     };
//   }
  
//   let counter = new Counter();
  
//   alert( counter.up() ); // ans :1
//   alert( counter.up() ); // ans :2
//   alert( counter.down() ); //ans : 1

// //   task-Function in if
// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();
// //The result is an error.The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.

// // corrected code
// let phrase = "Hello";
// let user; // Declare user outside the if block

// if (true) {
//   user = "John"; // Assign a value to user inside the if block
// }

// function sayHi() {
//   alert(`${phrase}, ${user}`);
// }

// sayHi();
// //In this corrected code, user is declared outside the if block, making it accessible in the broader scope.

// Sum with closures
// function sum (a){
//     return function(b) {
//         return a+b;
//     };
// }
// console.log(sum(4)(3));
// console.log(sum(5)(-1));

// //task- Is variable visible?
// let x = 1;

// function func() {
//   console.log(x); //ans: ReferenceError: Cannot access 'x' before initialization
//   let x = 2;
// }

// func();

//task- Filter through function-in between
function isBetween(a,b){
    return function(x) {
        return x >= a && x <=b;
    }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(isBetween(3,6)))


