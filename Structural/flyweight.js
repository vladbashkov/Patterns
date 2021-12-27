var Unit = /** @class */ (function () {
    function Unit(set, number) {
        this.equipment = set;
        this.number = number;
        console.log("New unit ".concat(number));
    }
    Unit.prototype.move = function (locatin) {
        console.log("Move to ".concat(locatin));
    };
    Unit.prototype.attack = function (target, location) {
        console.log("Attack ".concat(target, " at ").concat(location));
    };
    Unit.prototype.heal = function (mate, location) {
        console.log("Heal ".concat(mate, " at ").concat(location));
    };
    return Unit;
}());
var UnitFactory = /** @class */ (function () {
    function UnitFactory() {
    }
    UnitFactory.getUnit = function (set, num) {
        var unit = UnitFactory.groups[set];
        if (!unit) {
            unit = new Unit(set, num);
            UnitFactory.groups[set] = unit;
        }
        else {
            unit.number = num;
            console.log("same unit ".concat(unit.number));
        }
        return unit;
    };
    UnitFactory.groups = {};
    return UnitFactory;
}());
var start = Math.floor(Date.now());
for (var i = 0; i < 100; i++) {
    // new Unit(`base`, i);
    UnitFactory.getUnit("base", i);
}
var end = Math.floor(Date.now());
console.log(end - start);
