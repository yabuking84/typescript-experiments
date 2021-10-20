function Logger<T>(constructor: T) {
  console.log("Logging...");
  console.log("constructor = ", constructor);
  const p = new constructor() as T;
  console.log("name = ", constructor.name);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);

// Decorator Factory
//////////////////////////////////////////////////////
function Logger2<T>(logString: string) {
  return function (constructor: any) {
    console.log(logString);
    console.log(constructor);
    const p = new constructor() as T;
  };
}

@Logger2<Person2>("LOGGING - PERSON")
class Person2 {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers2 = new Person2();

console.log(pers2);
