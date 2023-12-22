// Property getters and setters
let user = {
    name: "danish",
    surname:"kapoor",
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
console.log(user.fullName);

// Let’s fix it by adding a setter for user.fullName:
let user2 = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  user.fullName = "Alice Cooper";
  
 console.log(user2.name); // Alice
 console.log(user2.surname); // Cooper