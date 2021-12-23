var IteratorArray = /** @class */ (function () {
    function IteratorArray(el) {
        this.index = 0;
        this.elements = el;
    }
    IteratorArray.prototype.next = function () {
        return this.elements[this.index++];
    };
    IteratorArray.prototype.hasNext = function () {
        return this.index < this.elements.length;
    };
    return IteratorArray;
}());
var IteratorObject = /** @class */ (function () {
    function IteratorObject(el) {
        this.index = 0;
        this.keys = Object.keys(el);
        this.elements = el;
    }
    IteratorObject.prototype.next = function () {
        return this.elements[this.keys[this.index++]];
    };
    IteratorObject.prototype.hasNext = function () {
        return this.index < this.keys.length;
    };
    return IteratorObject;
}());
var menuArr = ["Pizza", "Sushi", "Sandwich", "Salad"];
var IteratorArrMenu = new IteratorArray(menuArr);
while (IteratorArrMenu.hasNext()) {
    console.log(IteratorArrMenu.next());
}
var menuObj = {
    Pizza: { size: 30, topping: "cheese", price: 120 },
    Sushi: { quant: 12, topping: "philadelphia", price: 160 },
    Sandwich: { size: 20, topping: "salmon", price: 80 },
    Salad: { weight: 250, topping: "feta", price: 100 }
};
var IteratorObjMenu = new IteratorObject(menuObj);
while (IteratorObjMenu.hasNext()) {
    console.log(IteratorObjMenu.next());
}
