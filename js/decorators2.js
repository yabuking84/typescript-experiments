// function Logger(logString: string) {
//   console.log("LOGGER FACTORY");
//   return function (constructor: any) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function (constructor: any) {
//     console.log("Rendering template");
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }
// // @Logger('LOGGING - PERSON')
// @Logger("LOGGING")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";
//   constructor() {
//     console.log("Creating person object...");
//   }
// }
// const pers = new Person();
// console.log(pers);
// --- ////////////////////////////////////////////////
function PropertyD(target, propertyName) {
    console.log("YYYYYYY PropertyD Property decorator!");
    console.log("target = ", target);
    console.log("propertyName = ", propertyName);
    console.log("xxxx");
}
function AccessorD(target, name, descriptor) {
    console.log("YYYYYYY AccessorD Accessor decorator!");
    console.log("target = ", target);
    console.log("name = ", name);
    console.log("descriptor = ", descriptor);
    console.log("xxxx");
}
function MethodD(target, name, descriptor) {
    console.log("YYYYYYY MethodD Method decorator!");
    console.log("target = ", target);
    console.log("name = ", name);
    console.log("descriptor = ", descriptor);
    console.log("xxxx");
}
function ParamD(target, name, position) {
    console.log("YYYYYYY ParamD Parameter decorator!");
    console.log("target = ", target);
    console.log("name = ", name);
    console.log("position = ", position);
    console.log("xxxx");
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid price - should be positive!");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    PropertyD
], Product.prototype, "title", void 0);
__decorate([
    AccessorD
], Product.prototype, "price", null);
__decorate([
    MethodD,
    __param(0, ParamD)
], Product.prototype, "getPriceWithTax", null);
const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);
export {};
