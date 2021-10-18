type hohoho = "jason" | number;

interface Yo {
  readonly name: hohoho;
  print(): void;
}

class Jo implements Yo {
  readonly name: hohoho;

  constructor(n: number) {
    this.name = n;
  }

  print() {
    console.log("print");
  }
}

const go = new Jo(4);
// console.log(go.name);
// go.setName();
// console.log(go.name);
