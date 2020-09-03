const foo = (bar?: string[]) => {
	// bar? = ckecks is there any value in parametr.
	// then if there any value, it checks is a value type of array of strings
	// then if input value is array of strings it's starts to work, otherwise it will throw error
  return 'Hello, ' + bar;
};
let baz = ['Sasha', 'Kolya'];
console.log(foo(baz));
