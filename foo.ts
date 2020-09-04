// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

//Types cannot be merged and Interfaces can be merged, this is the differences

const foo = (bar?: Person) => {
  // bar? = ckecks is there any value in parametr.
  // then if there any value, it checks is a value type of array of strings
  // then if input value is array of strings it's starts to work, otherwise it will throw error
  return 'Hello, ' + bar.name + ' ' + bar.age;
};
let baz = { name: 'Hatam', age: 27 };
console.log(foo(baz));
