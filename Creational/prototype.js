var Margherita = /** @class */ (function () {
    function Margherita(size, topping, souce) {
        this.size = size;
        this.topping = topping;
        this.souce = souce;
    }
    Margherita.prototype.clone = function () {
        return new Margherita(this.size, this.topping, this.souce);
    };
    return Margherita;
}());
var MargheritaPizza = new Margherita(30, "cheese", "ketchup");
var prototype1 = MargheritaPizza.clone();
var prototype2 = MargheritaPizza.clone();
var prototype3 = MargheritaPizza.clone();
prototype1.size = 20;
prototype1.souce = "mayo";
console.log(prototype1);
console.log("");
console.log(prototype2);
console.log("");
console.log(prototype3);
