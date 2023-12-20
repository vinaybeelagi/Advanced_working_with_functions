// function with two arguments:
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) );

//function without arguments 
let sayHi = new Function(alert("hello"));
sayHi();