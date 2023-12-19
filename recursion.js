function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) ); // 8

//   task-Sum all numbers till the given one
// The solution using a loop:
function sumTo(n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum +=i;
    }
    return sum;
}
console.log(sumTo(100));

// The solution using recursion:
function sumTo1(n){
    if(n==1) return n;
    return n+sumTo1(n-1);
}
console.log(sumTo1(100));

// The solution using the formula: sumTo(n) = n*(n+1)/2:
function sumTo2(n) {
    return  n*(n+1)/2;
    }
    console.log(sumTo2(100));

    // task-Calculate factorial
    function factorial(n){
        if (n==1) return n;
        return n*factorial(n-1)
    }
console.log(factorial(5));

// method-2
function factorial1(n) {
    return (n!=1) ? n*factorial(n-1) : 1;
}
console.log(factorial1(5))

// Fibonacci numbers-recursion method
function fib(n) {
    if(n <=1) return n;
    return fib(n-1) + fib (n-2);
}
console.log(fib(3));
console.log(fib(5));
