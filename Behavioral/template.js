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
var AITemplate = /** @class */ (function () {
    function AITemplate() {
        this.sumForce = 50;
        this.sumIntelligence = 50;
        this.sumAgility = 50;
    }
    AITemplate.prototype.templateMethod = function () {
        this.force();
        this.intelligence();
        this.agility();
    };
    AITemplate.prototype.force = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumForce + points;
    };
    AITemplate.prototype.intelligence = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumIntelligence + points;
    };
    AITemplate.prototype.agility = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumAgility + points;
    };
    return AITemplate;
}());
var Cleric = /** @class */ (function (_super) {
    __extends(Cleric, _super);
    function Cleric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cleric.prototype.force = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumForce;
    };
    Cleric.prototype.intelligence = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumIntelligence + points;
    };
    Cleric.prototype.agility = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumAgility + points;
    };
    return Cleric;
}(AITemplate));
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Warrior.prototype.force = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumForce + points;
    };
    Warrior.prototype.intelligence = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumIntelligence + points;
    };
    Warrior.prototype.agility = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumAgility + points;
    };
    return Warrior;
}(AITemplate));
var Assassin = /** @class */ (function (_super) {
    __extends(Assassin, _super);
    function Assassin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Assassin.prototype.force = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumForce + points;
    };
    Assassin.prototype.intelligence = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumIntelligence + points;
    };
    Assassin.prototype.agility = function (points) {
        if (points === void 0) { points = 0; }
        return this.sumAgility + points;
    };
    return Assassin;
}(AITemplate));
var clerik = new Cleric();
var warrior = new Warrior();
var assassin = new Assassin();
clerik.templateMethod();
console.log("");
console.log("Clerik");
console.log("Force - ".concat(clerik.force()));
console.log("Agility - ".concat(clerik.agility(20)));
console.log("Intelligence - ".concat(clerik.intelligence(40)));
console.log("");
warrior.templateMethod();
console.log("Warrior");
console.log("Force - ".concat(warrior.force(45)));
console.log("Agility - ".concat(warrior.agility(20)));
console.log("Intelligence - ".concat(warrior.intelligence(10)));
console.log("");
assassin.templateMethod();
console.log("Assassin");
console.log("Force - ".concat(assassin.force(10)));
console.log("Agility - ".concat(assassin.agility(40)));
console.log("Intelligence - ".concat(assassin.intelligence(25)));
console.log("");
