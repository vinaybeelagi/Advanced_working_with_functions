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