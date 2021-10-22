"use strict";
// GENERICS
Object.defineProperty(exports, "__esModule", { value: true });
exports.newObj3 = void 0;
// Using constraints
function newObj(arg) {
    return `Has ${arg.length} characters.`;
}
const hey = newObj("123");
console.log(hey);
function newObj2(arg) {
    return `Has ${arg.length} characters.`;
}
// const hey2 = newObj2(23); // will show an error because 23 doesnt have length
const hey2 = newObj2("23");
console.log(hey2);
//////////////////////////////////////////////////////
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
// extractAndConvert({}, "name");
function newObj3(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.newObj3 = newObj3;
////////////////////////////////////////////////////////////////
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item, name) {
        console.log(name);
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // -1
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max", 1);
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
