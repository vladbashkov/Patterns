var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder() {
        this.pizza = {
            type: "",
            size: 30,
            topping: "cheese"
        };
    }
    PizzaBuilder.prototype.type = function (type) {
        this.pizza.type = type;
        return this;
    };
    PizzaBuilder.prototype.size = function (size) {
        this.pizza.size = size;
        return this;
    };
    PizzaBuilder.prototype.topping = function (topping) {
        this.pizza.topping = topping;
        return this;
    };
    PizzaBuilder.prototype.build = function () {
        return this.pizza;
    };
    return PizzaBuilder;
}());
var Margherita = new PizzaBuilder()
    .type("Margherita")
    .size(30)
    .topping("Cheese");
var Pepperoni = new PizzaBuilder()
    .type("Pepperoni")
    .size(20)
    .topping("Double cheese");
console.log(Margherita);
console.log(Pepperoni);
