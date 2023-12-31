// //“var” has no block scope
// if (true) {
//     var test = true;
// }
// console.log(test) //true

// if (true) {
//     let test = true;
// }
// console.log(test) //ReferenceError: test is not defined

// function sayHi() {
//     if (true) {
//       var phrase = "Hello";
//     }
  
//     console.log(phrase); // works
//   }
  
//   sayHi();
//   console.log(phrase); // ReferenceError: phrase is not defined

//   //The declaration is processed at the start of function execution (“hoisted”), but the assignment always works at the place where it appears. 

//   function sayHi() {
//     var phrase; // declaration works at the start...
  
//     console.log(phrase); // undefined
  
//     phrase = "Hello"; // ...assignment - when the execution reaches it.
//   }
  
//   sayHi();

//   IIFE
(function (){
    var message = "hello";
    console.log(message);
})();// Function Expression is created and immediately called

// Ways to create IIFE
(function(){
    console.log("Parentheses around the function");
})();

(function () {
    console.log("Parentheses around the whole thing");
} ());

!function() {
    console.log("Bitwise NOT operator starts the expression")
}();

+function() {
    console.log("Unary plus starts the expression");
}();