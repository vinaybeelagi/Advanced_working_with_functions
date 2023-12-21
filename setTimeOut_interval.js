// // set time out example
// function sayHi(){
// console.log("hello")
// }
// setTimeout(sayHi,1000);

// // With arguments:
// function sayHi(pharse,who){
//     console.log(pharse +' , '+ who);
// }
// setTimeout(sayHi,2000,"Hello","aaru");

// let timerId = setTimeout(() => console.log("never happens") , 2000);
// console.log(timerId);

// clearTimeout(timerId);
// console.log(timerId);

// // set interval
// let timerId1 = setInterval(()=> console.log("test"),3000);
// setTimeout(()=>{clearInterval(timerId1)
// console.log("stop"),5000}
// );

// // task-Output every second (Using nested setTimeout):
// function printNumbers(from,to) {
//     let current = from;

//     setTimeout(function go() {
//         console.log(current);
//         if (current<to){
//             setTimeout(go,1000);
//         }
//         current++;
//     },1000)
// }
// printNumbers(5,10)

//task-Output every second Using setInterval:
function printNumbers(from,to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if(current == to) {
            clearInterval(timerId);
        }
        current++;
    },1000);
}
printNumbers(5,10);