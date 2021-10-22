class Person {
  firstName = "John";
  lastName = "Doe";
  firstLetter() {
    return this.firstName.charAt(0);
  }
}

class Factory {
  create<T>(type: new () => T): T {
    return new type();
  }
}

// const factory = new Factory();
// const person = factory.create(Person);

// console.log(JSON.stringify(person));

const p = new Person();
const p2 = new Person();

console.log(p.firstLetter());
Person.prototype.firstLetter = function () {
  return this.firstName.charAt(0) + " sdfdsf";
};
console.log(p.firstLetter());
console.log(p);
