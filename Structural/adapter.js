var getInches = /** @class */ (function () {
    function getInches() {
    }
    getInches.prototype.getInches = function (inch) {
        return inch;
    };
    return getInches;
}());
var getCentimeters = /** @class */ (function () {
    function getCentimeters() {
    }
    getCentimeters.prototype.getCentimeters = function (cm) {
        return cm;
    };
    return getCentimeters;
}());
var InchesToCentimetersAdapter = /** @class */ (function () {
    function InchesToCentimetersAdapter(inches) {
        this.inchUnit = inches;
    }
    InchesToCentimetersAdapter.prototype.getCentimeters = function (inch) {
        return this.inchUnit.getInches(inch) / 2.54;
    };
    return InchesToCentimetersAdapter;
}());
var CentimetersToInchesAdapter = /** @class */ (function () {
    function CentimetersToInchesAdapter(cm) {
        this.cmUnit = cm;
    }
    CentimetersToInchesAdapter.prototype.getInches = function (cm) {
        return this.cmUnit.getCentimeters(cm) * 2.54;
    };
    return CentimetersToInchesAdapter;
}());
var inch = new getInches();
var inchAdapter = new InchesToCentimetersAdapter(inch);
console.log(inchAdapter.getCentimeters(10));
var centimeter = new getCentimeters();
var cmAdapter = new CentimetersToInchesAdapter(centimeter);
console.log(cmAdapter.getInches(10));
