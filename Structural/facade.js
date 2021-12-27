var CheckOilPressure = /** @class */ (function () {
    function CheckOilPressure() {
    }
    CheckOilPressure.prototype.oilPressure = function () {
        console.log("Good oil pressure");
    };
    return CheckOilPressure;
}());
var CheckFuelLevel = /** @class */ (function () {
    function CheckFuelLevel() {
    }
    CheckFuelLevel.prototype.fuelLevel = function () {
        console.log("Good fuel level");
    };
    return CheckFuelLevel;
}());
var CheckSteamPressure = /** @class */ (function () {
    function CheckSteamPressure() {
    }
    CheckSteamPressure.prototype.steamPressure = function () {
        console.log("Good steam pressure");
    };
    return CheckSteamPressure;
}());
var StartMainEngine = /** @class */ (function () {
    function StartMainEngine() {
        this.oil = new CheckOilPressure();
        this.fuel = new CheckFuelLevel();
        this.steam = new CheckSteamPressure();
    }
    StartMainEngine.prototype.operationStart = function () {
        this.oil.oilPressure();
        this.fuel.fuelLevel();
        this.steam.steamPressure();
    };
    return StartMainEngine;
}());
var mainEngine = new StartMainEngine();
mainEngine.operationStart();
