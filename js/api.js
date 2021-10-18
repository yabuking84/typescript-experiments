"use strict";
// GENERICS
// Using constraints
function newObj(arg) {
    return `Has ${arg.length} characters.`;
}
const hey = newObj("123");
console.log(hey);
function newObj2(arg) {
    return `Has ${arg.length} characters.`;
}
const hey2 = newObj2("asdf");
console.log(hey2);
