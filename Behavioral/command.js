var TV = /** @class */ (function () {
    function TV() {
        this.state = false;
    }
    TV.prototype.on = function () {
        this.state = true;
    };
    TV.prototype.off = function () {
        this.state = false;
    };
    return TV;
}());
var onTV = /** @class */ (function () {
    function onTV(television) {
        this.television = television;
    }
    onTV.prototype.execute = function () {
        this.television.on();
    };
    onTV.prototype.undo = function () {
        this.television.off();
    };
    return onTV;
}());
var offTV = /** @class */ (function () {
    function offTV(television) {
        this.television = television;
    }
    offTV.prototype.execute = function () {
        this.television.off();
    };
    offTV.prototype.undo = function () {
        this.television.on();
    };
    return offTV;
}());
var Remote = /** @class */ (function () {
    function Remote() {
    }
    Remote.prototype.setCommand = function (onCommand, offCommand) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    };
    Remote.prototype.onButtonClick = function () {
        this.onCommand.execute();
    };
    Remote.prototype.offButtonClick = function () {
        this.offCommand.execute();
    };
    return Remote;
}());
var television = new TV(), televisionOn = new onTV(television), televisionOff = new offTV(television), remote = new Remote();
remote.setCommand(televisionOn, televisionOff);
console.log("TV before remote is used: ".concat(television.state));
console.log("");
remote.onButtonClick();
console.log("TV after remote is used: ".concat(television.state));
console.log("");
remote.offButtonClick();
console.log("TV remote is used again: ".concat(television.state));
