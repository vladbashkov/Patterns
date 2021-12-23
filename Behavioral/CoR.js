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
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.payAmount = function (amount) {
        return this.balance >= amount;
    };
    BankAccount.prototype.setNext = function (account) {
        return this.incomer = account;
    };
    BankAccount.prototype.payment = function (price) {
        if (this.payAmount(price)) {
            console.log("You paid ".concat(price, " using your ").concat(this.title));
            this.remainder = this.balance - price;
            console.log("There is ".concat(this.remainder, " left on your accaount"));
        }
        else if (this.incomer) {
            console.log("Something wrong with ".concat(this.title));
            this.incomer.payment(price);
        }
        else {
            console.log("Not enough money on your ".concat(this.title, " account"));
        }
    };
    BankAccount.prototype.show = function () {
        return console.log(this);
    };
    return BankAccount;
}());
var Privat = /** @class */ (function (_super) {
    __extends(Privat, _super);
    function Privat(balance) {
        var _this = _super.call(this) || this;
        _this.title = "Privat";
        _this.balance = balance;
        return _this;
    }
    return Privat;
}(BankAccount));
var Mono = /** @class */ (function (_super) {
    __extends(Mono, _super);
    function Mono(balance) {
        var _this = _super.call(this) || this;
        _this.title = "Mono";
        _this.balance = balance;
        return _this;
    }
    return Mono;
}(BankAccount));
var Raif = /** @class */ (function (_super) {
    __extends(Raif, _super);
    function Raif(balance) {
        var _this = _super.call(this) || this;
        _this.title = "Raif";
        _this.balance = balance;
        return _this;
    }
    return Raif;
}(BankAccount));
var privat = new Privat(150);
var apple = new Mono(350);
var raif = new Raif(550);
privat.setNext(apple);
apple.setNext(raif);
privat.payment(450);
privat.show();
