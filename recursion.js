// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   console.log( pow(2, 3) ); // 8

// //   task-Sum all numbers till the given one
// // The solution using a loop:
// function sumTo(n){
//     let sum = 0;
//     for(let i=0;i<=n;i++){
//         sum +=i;
//     }
//     return sum;
// }
// console.log(sumTo(100));

// // The solution using recursion:
// function sumTo1(n){
//     if(n==1) return n;
//     return n+sumTo1(n-1);
// }
// console.log(sumTo1(100));

// // The solution using the formula: sumTo(n) = n*(n+1)/2:
// function sumTo2(n) {
//     return  n*(n+1)/2;
//     }
//     console.log(sumTo2(100));

//     // task-Calculate factorial
//     function factorial(n){
//         if (n==1) return n;
//         return n*factorial(n-1)
//     }
// console.log(factorial(5));

// // method-2
// function factorial1(n) {
//     return (n!=1) ? n*factorial(n-1) : 1;
// }
// console.log(factorial1(5))

// // Fibonacci numbers-recursion method
// function fib(n) {
//     if(n <=1) return n;
//     return fib(n-1) + fib (n-2);
// }
// console.log(fib(4));
// console.log(fib(5));

// // Fibonacci numbers-iteration method
// function fib1(n){
//     let a= 1;
//     let b= 1;
//     for(let i=3;i<=n;i++){
//         let c = a+b;
//         a=b;
//         b=c;
//     }
//     return b;
// }
// console.log(fib1(3));
// console.log(fib1(77));

// // task- Output a single-linked list-Loop-based solution
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
//   function printList(list){
//     console.log(list.value);
//     if (list.next){
//         printList(list.next);
//     }
//   }
//   console.log(printList(list))

// //   loop-based
// let list1 = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
//   function printList1(list1) {
//     let tmp = list1;
//      while (tmp){
//      console.log(tmp.value);
//      tmp = tmp.next;
//   }
// }
//  console.log( printList1(list1));

// Output a single-linked list in the reverse order
// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   function printReverseList(list) {
  
//     if (list.next) {
//       printReverseList(list.next);
//     }
  
//     console.log(list.value);
//   }
  
//  console.log( printReverseList(list));

//  loopbased-mehod

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printReverseList(list) {
    let arr = [];
    let tmp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
  }
  
 console.log(printReverseList(list));