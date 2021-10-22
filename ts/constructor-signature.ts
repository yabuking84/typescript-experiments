// class SimpleClassFactory<T> {
//   wow = "asdasd";
//   static create(T) {
//     return new T(); // compile error could not find symbol T
//   }
// }
interface hey {
  asd: new () => string;
}

class SimpleClassFactory<T> {
  wow = "cvvcvcv";
  create(type: { new (): T }) {
    return new type(); // succeeds
  }
}
const simpleClassInstance = new SimpleClassFactory();
