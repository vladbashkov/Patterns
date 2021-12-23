interface State {
    order: Order;

    cancelOrder();
    verifyPayment();
    shipOrder();
}

class Order {
    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPrepared: State;
    public currentState: State;

    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPrepared = new OrderBeingPrepared(this);

        this.setState(this.paymentPendingState);
    }

    public setState(state: State) {
        this.currentState = state;
    }

    public getCurrentState(): State {
        return this.currentState;
    }
}

class CancelledOrderState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    public cancelOrder() {
        console.log(`This order is already canceled!`);
        this.order.setState(this.order.cancelledOrderState);
    }

    public verifyPayment() {
        console.log(`The order is cancelled, you cannot pay anymore.`);
    }

    public shipOrder() {
        console.log(`The order is cancelled, you cannot ship it anymore.`);
    }
}

class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log(`Cancelling your unpaid order.`);
        this.order.setState(this.order.cancelledOrderState);
    }

    verifyPayment() {
        console.log(`Payment verified! Shipping soon.`);
        this.order.setState(this.order.orderBeingPrepared);
    }

    shipOrder() {
        console.log(`Cannot ship order when payment is pending!`);
    }
}

class OrderBeingPrepared implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log(`Cancelling your order.. You will be refunded.`);
        this.order.setState(this.order.cancelledOrderState);
    }

    verifyPayment() {
        console.log(`Payment is already verified.`);
    }

    shipOrder() {
        console.log(`Shipping your order now.`);
        this.order.setState(this.order.orderShippedState);
    }
}

class OrderShippedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log(`You cannot cancel an order that has been shipped.`);
    }

    verifyPayment() {
        console.log(`Payment is already verified.`);
    }

    shipOrder() {
        console.log(`Order is already shipped`);
    }
}

const order = new Order();

order.getCurrentState().verifyPayment();
order.getCurrentState().shipOrder();
order.getCurrentState().cancelOrder();
order.getCurrentState().shipOrder();

// console.log('Order state: ' + (<any>order.getCurrentState()).constructor.name);



















// interface State {
//     name?: string;
//     next(): void;
// }

// class OrderState implements State {
//     public name: string;
//     public nextState: any;

//     constructor(name: string, nextState: any) {
//         this.name = name;
//         this.nextState = nextState;
//     }

//     public next(): void {
//         return new this.nextState();
//     }
// }

// class Payment extends OrderState {
//     constructor() {
//         super(`Payment`, Shipping);
//     }
// }

// class Shipping extends OrderState {
//     constructor() {
//         super(`Shipping`, Delivered)
//     }
// }

// class Delivered extends OrderState {
//     constructor() {
//         super(`Delivered`, Delivered);
//     }
// }

// class Order {
//     public state: any;

//     constructor() {
//         this.state = new Payment();
//     }

//     public nextState() {
//         this.state = this.state.next();
//     }

//     public cancel() {
//         this.state.name === `Payment` ? console.log(`Your order canceled`) : console.log(`Order cancel is not possible`);
//     }
// }

// const order = new Order();
// console.log(order.state.name);
// order.cancel();
// order.nextState();
// console.log(order.state.name);
// order.cancel();














































































// interface ATMState {
//     name?: string;
//     takeCash(cash: number): void;
// }

// class ATMCash implements ATMCash {
//     name: string;
//     private cashMachine: ATMMachine;
    
//     constructor(name: string, machine: ATMMachine) {
//         this.name = name;
//         this.cashMachine = machine;
//     }

//     public takeCash(cash: number): void {
//         if(this.cashMachine.cash < cash) {
//             this.cashMachine.state = this.cashMachine.noCashState();
//             console.log('Not enough cash');
//             return;
//         } else if(this.cashMachine.cash === cash) {
//             this.cashMachine.state = this.cashMachine.noCashState();
//             console.log(`No cash after cash taken`);
//         }
//         console.log(`${this.cashMachine.cash} - ${cash}`);
//         this.cashMachine.cash -= cash;
//     }
// }

// class ATMNoCash implements ATMState {
//     name: string;
//     private cashMachine: ATMMachine;
    
//     constructor(name: string, machine: ATMMachine) {
//         this.name = name;
//         this.cashMachine = machine;
//     }

//     takeCash(cash: number): void {
//         throw new Error(`ATMMachine has no cash`);
//     }
// }

// class ATMMachine {
//     public cash: number;
//     private currentState: ATMState;
//     private hasCash: ATMCash;
//     private noCash: ATMNoCash;

//     constructor(cash: number) {
//         this.cash = cash;

//         this.hasCash = new ATMCash(`Has Cash`, this);
//         this.noCash = new ATMNoCash(`No Cash`, this);
//         this.currentState = this.cash ? this.hasCash : this.noCash;
//     }

//     public set state(value: ATMState) {
//         console.log(`Current state is ${value.name}`);
//         this.currentState = value;
//     }

//     public get state() {
//         return this.currentState;
//     }

//     public takeCash(cash: number) {
//         this.currentState.takeCash(cash);
//     }

//     public hasCashState() {
//         return this.hasCashState;
//     }

//     public noCashState() {
//         return this.noCashState;
//     }
// }

// const machine = new ATMMachine(1000);
// machine.takeCash(200);
// machine.takeCash(1500);