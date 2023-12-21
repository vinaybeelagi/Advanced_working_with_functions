// // use a wrapping function:
// let user = {
//     firstName:"jorge",
//     sayHi() {
//         console.log(`hello, ${this.firstName}`)
//     }
// };
// // setTimeout(function(){
// //     user.sayHi()
// // }, 1000);
// setTimeout(() => { user.sayHi()}, 1000);

// // Solution 2: bind
// let user2 = {
//     firstName:"vinay"
// };
// function func() {
//     console.log(this.firstName);
// }
// let funcUser = func.bind(user2);
// funcUser();

// let user3 = {
//     firstName:"aarush"
// };
// function func1(phrase) {
//     console.log(phrase + ',' +this.firstName);
// }
// let funcUser3 = func1.bind(user3);
// funcUser3("hello");

// // object method
// let user4 = {
//     firstName: "walker",
//     sayHi() {
//       console.log(`Hello, ${this.firstName}!`);
//     }
//   };

//   let sayHi = user4.sayHi.bind(user4); // (*)

//   // can run it without an object
//   sayHi();
// setTimeout(sayHi,1000);

// user4 = {
//     sayHi(){console.log("another in settime out")}
// };
// //ments are passed “as is”, only this is fixed by bind
// let user5 = {
//     fName :"bhushan",
// say(phrase) {
//     console.log(`${phrase},${this.fName}!`);
// }
// }
// let say = user5.say.bind(user5);
// say("hello");
// say("bye");

// // Partial functions use bind to create a function double on its base
// function mul(a,b) {
//     return a*b;
// }
// let triple = mul.bind(null, 3);

// console.log(triple(4));
// console.log(triple(5));

// // Task-Bound function as a method
// function f() {
//     console.log( this ); // null
//   }

//   let user7 = {
//     g: f.bind(null)
//   };

//   user.g();//The answer: null.

// //   task-Second bind
// function f() {
//   console.log(this.name);
// }

// f = f.bind({ name: "marker" }).bind({ name: "Ann" });

// f();
// //The answer: John.

// //   task-Function property after bind
// function sayHi() {
//   console.log(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "John",
// });

// console.log(bound.test);
// //The answer: undefined.
// The result of bind is another object. It does not have the test property.

// task-Fix a function that loses "this"

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "jimmy",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// task-Partial application for login
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user6 = {
    name: "vinay",
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  askPassword(user6.login.bind(user6, true), user6.login.bind(user6, false));
