function ClassD(logString: string) {
  console.log("ClassD FACTORY");
  return function <
    T extends { new (...args: any[]): { name: string; newName?: string } }
  >(origConstructor: T) {
    console.log(logString);
    console.log(origConstructor);
    return class extends origConstructor {
      constructor(...args: any[]) {
        super();
        this.newName = "new name!";
        console.log("this.name = ", this.name);
        this.name = "SUPER NAME";
        console.log("this.name = ", this.name);
      }
    };
  };
}

@ClassD("LOGGING")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

class Person2 extends Person {
  title = "Jason";

  constructor() {
    super();
    console.log("Creating person2 object...");
  }
}

const p = new Person();
console.log(p.name);
console.log("xxxxxxxxxxxxxxxxxxxxxxx");

const p1 = new Person();
console.log(p1.name);

export {};
