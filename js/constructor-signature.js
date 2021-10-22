"use strict";
class SimpleClassFactory {
    constructor() {
        this.wow = "cvvcvcv";
    }
    create(type) {
        return new type(); // succeeds
    }
}
const simpleClassInstance = new SimpleClassFactory();
