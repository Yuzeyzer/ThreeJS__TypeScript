var foo = function (bar) {
    // bar? = ckecks is there any value in parametr.
    // then if there any value, it checks is a value type of array of strings
    // then if input value is array of strings it's starts to work, otherwise it will throw error
    return 'Hello, ' + bar.name + ' ' + bar.age;
};
var baz = { name: 'Hatam', age: 27 };
console.log(foo(baz));
