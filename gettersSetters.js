// Property getters and setters
let user = {
    name: "danish",
    surname:"kapoor",
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
console.log(user.fullName);