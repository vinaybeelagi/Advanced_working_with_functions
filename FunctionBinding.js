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