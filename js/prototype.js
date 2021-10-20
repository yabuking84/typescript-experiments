function Animal1() {
  this.name = "rover";
  this.setName = function (name) {
    this.name = name;
  };
  this.showName = function () {
    console.log("Animal1 " + this.name);
  };
}
function Animal2() {
  this.name = "rover";
}
Animal2.prototype.setName = function (name) {
  this.name = name;
};
Animal2.prototype.showName = function (name) {
  console.log("Animal2 " + this.name);
};

const hey = new Animal2();
hey.setName("hey");
hey.showName();
// hey.showName = function () {
//   console.log("Animal2 hey xxxxx " + this.name);
// };
// hey.showName();
console.log("XXXXXXXXXXXXXXXx");

const hey2 = new Animal2();
hey2.setName("hey2");
hey2.showName();

Animal2.prototype.showName = function (name) {
  console.log("new ==== " + this.name);
};

console.log("vvvvvvvvvvvvvv");
hey.showName();
hey2.showName();
