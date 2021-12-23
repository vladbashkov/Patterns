var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.observers = [];
    }
    Restaurant.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Restaurant.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (element) {
            return observer.name !== element.name;
        });
    };
    Restaurant.prototype.notify = function (news) {
        this.observers.forEach(function (observer) {
            observer.update(news);
        });
    };
    return Restaurant;
}());
var Observer = /** @class */ (function () {
    function Observer(name) {
        this.name = name;
        this.feed = [];
    }
    Observer.prototype.update = function (news) {
        this.feed.push(news);
        console.log("".concat(this.name, " recieved a discounts"));
    };
    Observer.prototype.showFeed = function () {
        console.log("".concat(this.name, ": ").concat(this.feed));
    };
    return Observer;
}());
var jan = new Observer("Jan");
var victoria = new Observer("Victoria");
var rest = new Restaurant();
rest.subscribe(jan);
rest.subscribe(victoria);
rest.notify("Monday pizza -50%!");
rest.unsubscribe(victoria);
rest.notify("Thuesday sushi 1+1=3!");
jan.showFeed();
victoria.showFeed();
