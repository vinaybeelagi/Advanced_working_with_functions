// //Property flags
// let user = {
//     name: "John"
//   };
  
//   let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
//   alert( JSON.stringify(descriptor, null, 2 ) );
//   /* property descriptor:
//   {
//     "value": "John",
//     "writable": true,
//     "enumerable": true,
//     "configurable": true
//   }
//   */

//   //To change the flags, we can use Object.defineProperty.
//   let user2 = {};

// Object.defineProperty(user2, "name", {
//   value: "John"
// });

// let descriptor2 = Object.getOwnPropertyDescriptor(user2, 'name');

// alert( JSON.stringify(descriptor2, null, 2 ) );
// /*
// {
//   "value": "John",
//   "writable": false,
//   "enumerable": false,
//   "configurable": false
// }
//  */

// make user.name non-writable (can’t be reassigned) by changing writable flag
let user = { };

Object.defineProperty(user, "name", {
  value: "John",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true
});

alert(user.name); // John
user.name = "Pete"; // Error