var Grault = /** @class */ (function () {
    function Grault(quux, childs) {
        this.garply = quux.name + ' ' + quux.age + ' ' + childs;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
var baz = { name: 'Hatam', age: 27 };
var fred = new Grault(baz, [3, 2]);
document.body.innerHTML = fred.getGarply();
