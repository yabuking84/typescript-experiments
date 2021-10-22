var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ClassD(logString) {
    console.log("ClassD FACTORY");
    return function (origConstructor) {
        console.log(logString);
        console.log(origConstructor);
        return class extends origConstructor {
            constructor(...args) {
                super();
                this.newName = "new name!";
                console.log("this.name = ", this.name);
                this.name = "SUPER NAME";
                console.log("this.name = ", this.name);
            }
        };
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    ClassD("LOGGING")
], Person);
class Person2 extends Person {
    constructor() {
        super();
        this.title = "Jason";
        console.log("Creating person2 object...");
    }
}
const p = new Person();
console.log(p.name);
console.log("xxxxxxxxxxxxxxxxxxxxxxx");
const p1 = new Person();
console.log(p1.name);
export {};
