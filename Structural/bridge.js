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
var Commander = /** @class */ (function () {
    function Commander(executeObject) {
        this.executeObject = executeObject;
    }
    Commander.prototype.order = function () {
        this.executeObject.operate();
    };
    return Commander;
}());
var ArchersCommander = /** @class */ (function (_super) {
    __extends(ArchersCommander, _super);
    function ArchersCommander() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArchersCommander.prototype.order = function () {
        console.log("Archers Commander made order:");
        _super.prototype.order.call(this);
    };
    return ArchersCommander;
}(Commander));
var KnightsCommander = /** @class */ (function (_super) {
    __extends(KnightsCommander, _super);
    function KnightsCommander() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KnightsCommander.prototype.order = function () {
        console.log("Knights Commander made order:");
        _super.prototype.order.call(this);
    };
    return KnightsCommander;
}(Commander));
var CavalrysCommander = /** @class */ (function (_super) {
    __extends(CavalrysCommander, _super);
    function CavalrysCommander() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CavalrysCommander.prototype.order = function () {
        console.log("Cavalry's Commander made order:");
        _super.prototype.order.call(this);
    };
    return CavalrysCommander;
}(Commander));
var Archer = /** @class */ (function () {
    function Archer() {
    }
    Archer.prototype.operate = function () {
        console.log("Shoot");
    };
    return Archer;
}());
var Knight = /** @class */ (function () {
    function Knight() {
    }
    Knight.prototype.operate = function () {
        console.log("Defend");
    };
    return Knight;
}());
var Cavalry = /** @class */ (function () {
    function Cavalry() {
    }
    Cavalry.prototype.operate = function () {
        console.log("Attack");
    };
    return Cavalry;
}());
var archerCommander = new ArchersCommander(new Archer());
var knightCommander = new KnightsCommander(new Knight());
var cavalryCommander = new CavalrysCommander(new Cavalry());
archerCommander.order();
console.log("");
knightCommander.order();
console.log("");
cavalryCommander.order();
