var Payment = /** @class */ (function () {
    function Payment() {
        console.log("This is private payment");
    }
    Payment.getPayment = function () {
        if (!Payment.pay) {
            Payment.pay = new Payment();
        }
        return Payment.pay;
    };
    Payment.prototype.paymentInfo = function () {
        console.log("You paid 300UAH");
    };
    return Payment;
}());
function orderPayment() {
    var order1 = Payment.getPayment();
    var order2 = Payment.getPayment();
    if (order1 === order2) {
        console.log('Singleton works, both variables contain the same content.');
    }
    else {
        console.log('Singleton failed, variables contain different content.');
    }
}
var myPayment = Payment.getPayment();
myPayment.paymentInfo();
orderPayment();
