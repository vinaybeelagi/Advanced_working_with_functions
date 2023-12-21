// use a wrapping function:
let user = {
    firstName:"jorge",
    sayHi() {
        console.log(`hello, ${this.firstName}`)
    }
};
// setTimeout(function(){
//     user.sayHi()    
// }, 1000);
setTimeout(() => { user.sayHi()}, 1000);

// Solution 2: bind
let user2 = {
    firstName:"vinay"
};
function func() {
    console.log(this.firstName);
}
let funcUser = func.bind(user2);
funcUser();

let user3 = {
    firstName:"aarush"
};
function func1(phrase) {
    console.log(phrase + ',' +this.firstName);
}
let funcUser3 = func1.bind(user3);
funcUser3("hello");