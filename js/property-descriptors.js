"use strict";
const object1 = {};
Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});
// object1.property1 = 77; // throws an error in strict mode
console.log(object1.property1); // expected output: 42
console.log(object1); // expected output: 42

for (const key in object1) {
  const element = object1[key];
  console.log("element = " + element);
  if (Object.hasOwnProperty.call(object1, key)) {
    const element = object1[key];
    console.log("element = " + element);
  }
}
