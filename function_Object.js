// The “name” property
function sayHi() {
    console.log("Hi");
  }
  
  console.log(sayHi.name); // sayHi

//  task - Set and decrease for counter
function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }