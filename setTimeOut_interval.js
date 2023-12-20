// set time out example
function sayHi(){
console.log("hello")
}
setTimeout(sayHi,1000);

// With arguments:
function sayHi(pharse,who){
    console.log(pharse +' , '+ who);
}
setTimeout(sayHi,2000,"Hello","aaru");