var SecuritySystem = /** @class */ (function () {
    function SecuritySystem(login) {
        this.login = login;
    }
    SecuritySystem.prototype.access = function (password) {
        this.request(password) ? this.login.access() : this.denied();
    };
    SecuritySystem.prototype.request = function (password) {
        return password === "proxy";
    };
    SecuritySystem.prototype.denied = function () {
        this.login.denied();
    };
    return SecuritySystem;
}());
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.access = function () {
        console.log("Access submit");
    };
    Login.prototype.denied = function () {
        console.log("Access denied");
    };
    return Login;
}());
var login = new SecuritySystem(new Login());
login.access("word");
login.access(12345);
login.access("proxy");
