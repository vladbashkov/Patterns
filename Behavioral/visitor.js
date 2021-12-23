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
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.voice = function () {
        console.log("Baw waw");
    };
    Dog.prototype.accept = function (operation) {
        operation.visitDog(this);
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.voice = function () {
        console.log("Meow meow");
    };
    Cat.prototype.accept = function (operation) {
        operation.visitCat(this);
    };
    return Cat;
}());
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.voice = function () {
        console.log("Moo moo");
    };
    Cow.prototype.accept = function (operation) {
        operation.visitCow(this);
    };
    return Cow;
}());
var Visitor = /** @class */ (function () {
    function Visitor() {
    }
    Visitor.prototype.visitDog = function (dog) {
        console.log("This is dog visitor");
    };
    Visitor.prototype.visitCat = function (cat) {
        console.log("This is cat visitor");
    };
    Visitor.prototype.visitCow = function (cow) {
        console.log("This is cow visitor");
    };
    return Visitor;
}());
var voiceVisitor = /** @class */ (function (_super) {
    __extends(voiceVisitor, _super);
    function voiceVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    voiceVisitor.prototype.visitDog = function (dog) {
        dog.voice();
    };
    voiceVisitor.prototype.visitCat = function (cat) {
        cat.voice();
    };
    voiceVisitor.prototype.visitCow = function (cow) {
        cow.voice();
    };
    return voiceVisitor;
}(Visitor));
var jumpVisitor = /** @class */ (function (_super) {
    __extends(jumpVisitor, _super);
    function jumpVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    jumpVisitor.prototype.visitDog = function (dog) {
        console.log("The highest jump by a dog is 191cm");
    };
    jumpVisitor.prototype.visitCat = function (cat) {
        console.log("A cat can jump about 150cm");
    };
    jumpVisitor.prototype.visitCow = function (cow) {
        console.log("Cow can not jump at all");
    };
    return jumpVisitor;
}(Visitor));
var dog = new Dog();
var cat = new Cat();
var cow = new Cow();
var voice = new voiceVisitor();
var jump = new jumpVisitor();
dog.accept(voice);
cat.accept(voice);
cow.accept(voice);
dog.accept(jump);
cat.accept(jump);
cow.accept(jump);
