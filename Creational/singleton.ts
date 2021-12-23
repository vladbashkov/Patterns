class Payment {
    private static pay: Payment;

    private constructor() {
        console.log(`This is private payment`);
    }

    public static getPayment(): Payment {
        if(!Payment.pay) {
            Payment.pay = new Payment();
        }
        return Payment.pay;
    }

    public paymentInfo() {
        console.log(`You paid 300UAH`);
    }
}

function orderPayment() {
    const order1 = Payment.getPayment();
    const order2 = Payment.getPayment();

    if (order1 === order2) {
        console.log('Singleton works, both variables contain the same content.');
    } else {
        console.log('Singleton failed, variables contain different content.');
    }
}

let myPayment = Payment.getPayment();
myPayment.paymentInfo();
orderPayment()

