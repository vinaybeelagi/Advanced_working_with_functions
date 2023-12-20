//“var” has no block scope
if (true) {
    var test = true;
}
console.log(test) //true

if (true) {
    let test = true;
}
console.log(test) //ReferenceError: test is not defined