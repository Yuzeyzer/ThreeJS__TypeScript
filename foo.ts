class Grault {
  private garply: string;

  constructor(quux: Person, childs: number[]) {
    this.garply = quux.name + ' ' + quux.age + ' ' + childs;
  }

  public getGarply() {
    return this.garply;
  }
}

// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
  //Types cannot be merged and Interfaces can be merged, this is the differences
};

let baz = { name: 'Hatam', age: 27 };

let fred: Grault = new Grault(baz, [3, 2]);

document.body.innerHTML = fred.getGarply();
