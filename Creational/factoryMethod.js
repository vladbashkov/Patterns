var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Kitchen = /** @class */ (function () {
    function Kitchen() {
    }
    Kitchen.prototype.anounceMenu = function () {
        var product = this.foodMenu();
        return "We can cook for you ".concat(product.meal(), "! Just wait ").concat(product.time(), " minutes!");
    };
    return Kitchen;
}());
var BurgerCreator = /** @class */ (function (_super) {
    __extends(BurgerCreator, _super);
    function BurgerCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BurgerCreator.prototype.foodMenu = function () {
        return new BurgerProduct();
    };
    BurgerCreator.prototype.anounceMenu = function () {
        var product = this.foodMenu();
        return "We can cook for you ".concat(product.meal(), "!");
    };
    return BurgerCreator;
}(Kitchen));
var BurgerProduct = /** @class */ (function () {
    function BurgerProduct() {
    }
    BurgerProduct.prototype.meal = function () {
        return "best burgers";
    };
    BurgerProduct.prototype.time = function () {
        return 5;
    };
    return BurgerProduct;
}());
var PizzaCreator = /** @class */ (function (_super) {
    __extends(PizzaCreator, _super);
    function PizzaCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PizzaCreator.prototype.foodMenu = function () {
        return new PizzaProduct();
    };
    PizzaCreator.prototype.anounceMenu = function () {
        var product = this.foodMenu();
        return "We can cook for you ".concat(product.meal(), "!");
    };
    return PizzaCreator;
}(Kitchen));
var PizzaProduct = /** @class */ (function () {
    function PizzaProduct() {
    }
    PizzaProduct.prototype.meal = function () {
        return "real italian pizza";
    };
    return PizzaProduct;
}());
function welcome(kitchen) {
    console.log("Welcome to our restaurant!");
    console.log(kitchen.anounceMenu());
}
welcome(new BurgerCreator());
console.log('');
welcome(new PizzaCreator());
