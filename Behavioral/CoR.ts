class BankAccount {
    public title: string;
    public balance: number;
    public incomer: BankAccount;
    public remainder: number;

    public payAmount(amount: number): Boolean {
        return this.balance >= amount;
    }

    public setNext(account: BankAccount): BankAccount {
        return this.incomer = account;
    }

    public payment(price: number): any {
        if(this.payAmount(price)) {
            console.log(`You paid ${price} using your ${this.title}`);
            this.remainder = this.balance - price;
            console.log(`There is ${this.remainder} left on your accaount`);
        } else if (this.incomer) {
            console.log(`Something wrong with ${this.title}`)
            this.incomer.payment(price)
        } else {
            console.log(`Not enough money on your ${this.title} account`);
        }
    }

    public show(): void {
        return console.log(this);
    }
}

class Privat extends BankAccount {
    constructor(balance: number) {
        super();
        this.title = `Privat`;
        this.balance = balance;
    }
}

class Mono extends BankAccount {
    constructor(balance: number) {
        super();
        this.title = `Mono`;
        this.balance = balance;
    }
}

class Raif extends BankAccount {
    constructor(balance: number) {
        super();
        this.title = `Raif`;
        this.balance = balance;
    }
}

const privat = new Privat(150);
const apple = new Mono(350);
const raif = new Raif(550);

privat.setNext(apple);
apple.setNext(raif);

privat.payment(450);
privat.show();