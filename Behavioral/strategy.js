var Abs = /** @class */ (function () {
    function Abs() {
    }
    Abs.prototype.start = function () {
        console.log("\u041F\u0440\u0435\u0441\u0441 \u043A\u0430\u0447\u0430\u0442");
    };
    return Abs;
}());
var Running = /** @class */ (function () {
    function Running() {
    }
    Running.prototype.start = function () {
        console.log("\u0411\u0435\u0433\u0438\u0442");
    };
    return Running;
}());
var HorizontalBar = /** @class */ (function () {
    function HorizontalBar() {
    }
    HorizontalBar.prototype.start = function () {
        console.log("\u0422\u0443\u0440\u043D\u0438\u043A");
    };
    return HorizontalBar;
}());
var PushUp = /** @class */ (function () {
    function PushUp() {
    }
    PushUp.prototype.start = function () {
        console.log("\u0410\u043D\u0436\u0443\u043C\u0430\u043D\u0438\u044F");
    };
    return PushUp;
}());
var Sportsman = /** @class */ (function () {
    function Sportsman(name, favoriteWorkout) {
        this.name = name;
        this.favoriteWorkout = favoriteWorkout;
    }
    Sportsman.prototype.workout = function () {
        console.log("".concat(this.name, " \u0441\u043E\u0432\u0435\u0442\u0443\u0435\u0442:"));
        this.favoriteWorkout.start();
    };
    return Sportsman;
}());
var durov;
var arr = [new Abs(), new Running(), new HorizontalBar(), new PushUp()];
arr.forEach(function (item) {
    durov = new Sportsman("\u041F\u0430\u0432\u0435\u043B \u0414\u0443\u0440\u043E\u0432", item);
    durov.workout();
});
