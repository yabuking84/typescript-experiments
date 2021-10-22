function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: any) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger('LOGGING - PERSON')
@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();

console.log(pers);

// ---

function PropertyD(target: any, propertyName: string | symbol) {
  console.log("YYYYYYY PropertyD Property decorator!");
  console.log(target);
  console.log(propertyName);
  console.log("xxxx");
}

function AccessorD(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("YYYYYYY AccessorD Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  console.log("xxxx");
}

function MethodD(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("YYYYYYY MethodD Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  console.log("xxxx");
}

function ParamD(target: any, name: string | symbol, position: number) {
  console.log("YYYYYYY ParamD Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
  console.log("xxxx");
}

class Product {
  @PropertyD
  title: string;
  private _price: number;

  @AccessorD
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @MethodD
  getPriceWithTax(@ParamD tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);

export {};
