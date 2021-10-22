var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log("Logging...");
    console.log("constructor = ", constructor);
    const p = new constructor();
    console.log("name = ", constructor.name);
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
// Decorator Factory
//////////////////////////////////////////////////////
function Logger2(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
        const p = new constructor();
    };
}
let Person2 = class Person2 {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person2 = __decorate([
    Logger2("LOGGING - PERSON")
], Person2);
const pers2 = new Person2();
console.log(pers2);
export {};
