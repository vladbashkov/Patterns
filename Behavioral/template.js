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
var AIBuilder = /** @class */ (function () {
    function AIBuilder() {
    }
    AIBuilder.prototype.templateMethod = function () {
        this.force();
        this.intelligence();
        this.agility();
    };
    AIBuilder.prototype.force = function () {
        return 0;
    };
    AIBuilder.prototype.intelligence = function () {
        return 0;
    };
    AIBuilder.prototype.agility = function () {
        return 0;
    };
    return AIBuilder;
}());
var Cleric = /** @class */ (function (_super) {
    __extends(Cleric, _super);
    function Cleric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cleric.prototype.force = function () {
        return 50;
    };
    Cleric.prototype.intelligence = function () {
        return 90;
    };
    Cleric.prototype.agility = function () {
        return 70;
    };
    return Cleric;
}(AIBuilder));
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Warrior.prototype.force = function () {
        return 95;
    };
    Warrior.prototype.intelligence = function () {
        return 60;
    };
    Warrior.prototype.agility = function () {
        return 70;
    };
    return Warrior;
}(AIBuilder));
var Assassin = /** @class */ (function (_super) {
    __extends(Assassin, _super);
    function Assassin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Assassin.prototype.force = function () {
        return 60;
    };
    Assassin.prototype.intelligence = function () {
        return 75;
    };
    Assassin.prototype.agility = function () {
        return 90;
    };
    return Assassin;
}(AIBuilder));
var clerik = new Cleric();
var warrior = new Warrior();
var assassin = new Assassin();
clerik.templateMethod();
console.log("");
console.log("Clerik");
console.log("Force - ".concat(clerik.force()));
console.log("Agility - ".concat(clerik.agility()));
console.log("Intelligence - ".concat(clerik.intelligence()));
console.log("");
warrior.templateMethod();
console.log("Warrior");
console.log("Force - ".concat(warrior.force()));
console.log("Agility - ".concat(warrior.agility()));
console.log("Intelligence - ".concat(warrior.intelligence()));
console.log("");
assassin.templateMethod();
console.log("Assassin");
console.log("Force - ".concat(assassin.force()));
console.log("Agility - ".concat(assassin.agility()));
console.log("Intelligence - ".concat(assassin.intelligence()));
console.log("");
