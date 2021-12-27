interface Pizza {
    title: string;
    price: number;
    cost(): number;
    getDescription(): string;
}

class MargheritaPizza implements Pizza {
    public title: string = `Margherita`;
    public price: number = 100;
    public cost(): number {
        return this.price;
    }
    public getDescription(): string {
        return `${this.title} pizza`;
    }
}

class MargheriteExtraCheese implements MargheritaPizza {
    public title: string = `extra cheese`;
    public price: number = 15;
    private pizzaExtra: Pizza;
    
    constructor(pizza: Pizza) {
        this.pizzaExtra = pizza;
    }

    public cost(): number {
        return this.pizzaExtra.cost() + this.price;
    }

    public getDescription(): string {
        return `${this.pizzaExtra.getDescription()} ${this.title}`;
    }
}

class MargheriteExtraMeet implements MargheritaPizza {
    public title: string = `extra meet`;
    public price: number = 30;
    private pizzaExtra: Pizza;

    constructor(pizza: Pizza) {
        this.pizzaExtra = pizza;
    }

    public cost(): number {
        return this.pizzaExtra.cost() + this.price;
    }
    public getDescription(): string {
        return `${this.pizzaExtra.getDescription()} ${this.title}`;
    }
}

class MargheritaExtraSauce implements MargheritaPizza{
    public title: string = `extra sauce`;
    public price: number = 10;
    private pizzaExtra: Pizza;

    constructor(pizza: Pizza) {
        this.pizzaExtra = pizza;
    }

    public cost(): number {
        return this.pizzaExtra.cost() + this.price;
    }
    public getDescription(): string {
        return `${this.pizzaExtra.getDescription()} ${this.title}`;
    }
}

const margherita = new MargheritaPizza();
const margheritaExtraCheese = new MargheriteExtraCheese(margherita);
console.log(margheritaExtraCheese.getDescription());
console.log(margheritaExtraCheese.cost());

const margheritaExtraMeet = new MargheriteExtraMeet(margheritaExtraCheese);
console.log(margheritaExtraMeet.getDescription());
console.log(margheritaExtraMeet.cost());

const margheritaExtraSauce = new MargheritaExtraSauce(margheritaExtraMeet);
console.log(margheritaExtraSauce.getDescription());
console.log(margheritaExtraSauce.cost());

console.log(``);
console.log(`Only extra meet`);
const onlyExtraMeet = new MargheriteExtraMeet(margherita);
console.log(onlyExtraMeet.getDescription());
console.log(onlyExtraMeet.cost());
