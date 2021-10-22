// GENERICS

// Using constraints
function newObj<T extends string>(arg: T) {
  return `Has ${arg.length} characters.`;
}

const hey = newObj("123");

console.log(hey);

interface Lengthy {
  length: number;
}

function newObj2<T extends Lengthy>(arg: T) {
  return `Has ${arg.length} characters.`;
}

// const hey2 = newObj2(23); // will show an error because 23 doesnt have length
const hey2 = newObj2<string>("23");

console.log(hey2);
//////////////////////////////////////////////////////
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

// extractAndConvert({}, "name");

export function newObj3<T extends Record<string, unknown>>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

////////////////////////////////////////////////////////////////

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem<U>(item: T, name: U) {
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

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max", 1);
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

export {};
