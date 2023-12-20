// function with two arguments:
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) );

//function without arguments 
let sayHi = new Function(alert("hello"));
sayHi();

// way of declartions -all are same
new Function('a', 'b', 'return a + b'); // basic syntax
new Function('a,b', 'return a + b'); // comma-separated
new Function('a , b', 'return a + b'); // comma-separated with spaces
