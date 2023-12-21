let user = {
    firstName:"jorge",
    sayHi() {
        console.log(`hello, ${this.firstName}`)
    }
};
setTimeout(function(){
    user.sayHi()    
}, 1000);
