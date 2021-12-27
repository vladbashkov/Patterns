var MargheritaPizza = /** @class */ (function () {
    function MargheritaPizza() {
        this.title = "Margherita";
        this.price = 100;
    }
    MargheritaPizza.prototype.cost = function () {
        return this.price;
    };
    MargheritaPizza.prototype.getDescription = function () {
        return "".concat(this.title, " pizza");
    };
    return MargheritaPizza;
}());
var MargheriteExtraCheese = /** @class */ (function () {
    function MargheriteExtraCheese(pizza) {
        this.title = "extra cheese";
        this.price = 15;
        this.pizzaExtra = pizza;
    }
    MargheriteExtraCheese.prototype.cost = function () {
        return this.pizzaExtra.cost() + this.price;
    };
    MargheriteExtraCheese.prototype.getDescription = function () {
        return "".concat(this.pizzaExtra.getDescription(), " ").concat(this.title);
    };
    return MargheriteExtraCheese;
}());
var MargheriteExtraMeet = /** @class */ (function () {
    function MargheriteExtraMeet(pizza) {
        this.title = "extra meet";
        this.price = 30;
        this.pizzaExtra = pizza;
    }
    MargheriteExtraMeet.prototype.cost = function () {
        return this.pizzaExtra.cost() + this.price;
    };
    MargheriteExtraMeet.prototype.getDescription = function () {
        return "".concat(this.pizzaExtra.getDescription(), " ").concat(this.title);
    };
    return MargheriteExtraMeet;
}());
var MargheritaExtraSauce = /** @class */ (function () {
    function MargheritaExtraSauce(pizza) {
        this.title = "extra sauce";
        this.price = 10;
        this.pizzaExtra = pizza;
    }
    MargheritaExtraSauce.prototype.cost = function () {
        return this.pizzaExtra.cost() + this.price;
    };
    MargheritaExtraSauce.prototype.getDescription = function () {
        return "".concat(this.pizzaExtra.getDescription(), " ").concat(this.title);
    };
    return MargheritaExtraSauce;
}());
var margherita = new MargheritaPizza();
var margheritaExtraCheese = new MargheriteExtraCheese(margherita);
console.log(margheritaExtraCheese.getDescription());
console.log(margheritaExtraCheese.cost());
var margheritaExtraMeet = new MargheriteExtraMeet(margheritaExtraCheese);
console.log(margheritaExtraMeet.getDescription());
console.log(margheritaExtraMeet.cost());
var margheritaExtraSauce = new MargheritaExtraSauce(margheritaExtraMeet);
console.log(margheritaExtraSauce.getDescription());
console.log(margheritaExtraSauce.cost());
console.log("");
console.log("Only extra meet");
var onlyExtraMeet = new MargheriteExtraMeet(margherita);
console.log(onlyExtraMeet.getDescription());
console.log(onlyExtraMeet.cost());
