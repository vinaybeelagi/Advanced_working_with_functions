// task-Does a function pickup latest changes?
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); //ans:"pete"

// task-Which variables are available?
function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); //ANS:"pete"

//   task-Are counters independent?
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // ans:0
  alert( counter2() ); // ans:1

//   task - Counter object
function counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // ans :1
  alert( counter.up() ); // ans :2
  alert( counter.down() ); //ans : 1

//   task-Function in if
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();
//The result is an error.The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.

