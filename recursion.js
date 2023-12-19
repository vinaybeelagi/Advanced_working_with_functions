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
