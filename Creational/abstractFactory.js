var ChefRecommendation = /** @class */ (function () {
    function ChefRecommendation() {
    }
    ChefRecommendation.prototype.makePizza = function () {
        return new Margherita();
    };
    ChefRecommendation.prototype.makeSushi = function () {
        return new Nigiri();
    };
    return ChefRecommendation;
}());
var BestPrice = /** @class */ (function () {
    function BestPrice() {
    }
    BestPrice.prototype.makePizza = function () {
        return new Marinara();
    };
    BestPrice.prototype.makeSushi = function () {
        return new Sashimi();
    };
    return BestPrice;
}());
var Margherita = /** @class */ (function () {
    function Margherita() {
    }
    Margherita.prototype.pizzaRecomendation = function () {
        return "Our Chef could recommend you Margherita Pizza!";
    };
    return Margherita;
}());
var Nigiri = /** @class */ (function () {
    function Nigiri() {
    }
    Nigiri.prototype.sushiRecomendation = function () {
        return "Our Chef could recommend you Nigiri Sushi!";
    };
    Nigiri.prototype.sushiInfo = function () {
        return "With the freshest fish!";
    };
    return Nigiri;
}());
var Marinara = /** @class */ (function () {
    function Marinara() {
    }
    Marinara.prototype.pizzaRecomendation = function () {
        return "We have the best price for Marinara Pizza!";
    };
    return Marinara;
}());
var Sashimi = /** @class */ (function () {
    function Sashimi() {
    }
    Sashimi.prototype.sushiRecomendation = function () {
        return "We have the best price for Sashimi Sushi!";
    };
    Sashimi.prototype.sushiInfo = function () {
        return "And it's still the freshest fish!";
    };
    return Sashimi;
}());
function menuAnounce(factory) {
    var firstAnounce = factory.makePizza();
    var secondAnounce = factory.makeSushi();
    console.log(firstAnounce.pizzaRecomendation());
    console.log(secondAnounce.sushiRecomendation());
    console.log(secondAnounce.sushiInfo());
}
menuAnounce(new ChefRecommendation());
console.log('');
menuAnounce(new BestPrice());
