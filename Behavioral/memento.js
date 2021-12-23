var Memento = /** @class */ (function () {
    function Memento(score, level, health) {
        this.score = score;
        this.level = level;
        this.health = health;
    }
    return Memento;
}());
var CareTaker = /** @class */ (function () {
    function CareTaker(originator) {
        this.originator1 = originator;
        this.mementos1 = [];
    }
    CareTaker.prototype.save = function () {
        console.log("Game Saved");
        var mementor = this.originator1.memento;
        this.mementos1.push(mementor);
    };
    CareTaker.prototype.restore = function (index) {
        var memento = this.mementos1[index];
        this.originator1.memento = memento;
    };
    return CareTaker;
}());
var GameCharacter = /** @class */ (function () {
    function GameCharacter() {
        this.score1 = 0;
        this.level1 = 0;
        this.health1 = 100;
    }
    GameCharacter.prototype.getScore = function () {
        return this.score1;
    };
    GameCharacter.prototype.registerKill = function () {
        this.score1 += 100;
    };
    GameCharacter.prototype.getLevel = function () {
        return this.level1;
    };
    GameCharacter.prototype.progressToNextLevel = function () {
        this.level1 = this.level1 + 1;
    };
    GameCharacter.prototype.getHealth = function () {
        return this.health1;
    };
    GameCharacter.prototype.damage = function (points) {
        this.health1 -= points;
    };
    GameCharacter.prototype.status = function () {
        return ("Score: ".concat(this.score1, ", ") +
            "Level: ".concat(this.level1, ", ") +
            "Health: ".concat(this.health1));
    };
    Object.defineProperty(GameCharacter.prototype, "memento", {
        get: function () {
            return new Memento(this.score1, this.level1, this.health1);
        },
        set: function (value) {
            this.score1 = value.score;
            this.level1 = value.level;
            this.health1 = value.health;
        },
        enumerable: false,
        configurable: true
    });
    return GameCharacter;
}());
var Pac = new GameCharacter();
var care = new CareTaker(Pac);
console.log("");
Pac.registerKill();
Pac.damage(5);
console.log(Pac.status());
care.save();
console.log("");
Pac.registerKill();
Pac.damage(10);
console.log(Pac.status());
care.save();
console.log("");
Pac.registerKill();
Pac.damage(7);
Pac.progressToNextLevel();
console.log(Pac.status());
care.save();
care.restore(0);
console.log("");
console.log(Pac.status());
console.log("");
