var Team = /** @class */ (function () {
    function Team(title) {
        this.title = title;
        this.unitsArr = [];
    }
    Team.prototype.operate = function () {
        console.log("".concat(this.title, " units operates"));
        this.unitsArr.map(function (unit) {
            unit.operate();
        });
    };
    Team.prototype.addUnit = function (newUnit) {
        var units = this.unitsArr.filter(function (unit, index) {
            return unit.title === newUnit.title;
        });
        if (units.length < 1) {
            console.log("".concat(newUnit.title, " join ").concat(this.title));
            this.unitsArr.push(newUnit);
        }
        else {
            console.log("This unit already in the team");
        }
    };
    Team.prototype.goneUnit = function (deadUnit) {
        var gones = this.unitsArr.map(function (unit, index) {
            if (unit.title === deadUnit.title) {
                return index;
            }
            ;
        });
        if (gones.length > 0) {
            console.log("".concat(deadUnit.title, " gone in actions"));
            this.unitsArr.slice(gones[0], 1);
        }
        else {
            console.log("No battle casualties");
        }
    };
    return Team;
}());
var Operators = /** @class */ (function () {
    function Operators(title) {
        this.title = title;
    }
    Operators.prototype.operate = function () {
        console.log("".concat(this.title, " unit operates"));
    };
    return Operators;
}());
var attackersTeam = new Team("Rainbow Six Attackers");
var defendersTeam = new Team("Rainbow Six Defenders");
var osa = new Operators("Osa");
var ash = new Operators("Ash");
var buck = new Operators("Buck");
attackersTeam.addUnit(osa);
attackersTeam.addUnit(ash);
attackersTeam.addUnit(buck);
console.log("");
var thorn = new Operators("Thorn");
var oryx = new Operators("Oryx");
var ela = new Operators("Ela");
defendersTeam.addUnit(thorn);
defendersTeam.addUnit(oryx);
defendersTeam.addUnit(ela);
console.log("");
attackersTeam.operate();
console.log("");
defendersTeam.operate();
console.log("");
attackersTeam.goneUnit(buck);
console.log("");
defendersTeam.goneUnit(oryx);
