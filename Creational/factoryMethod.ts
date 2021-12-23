interface Product {
    meal(): string;
    time?(): number;
}

abstract class Kitchen {
    public abstract foodMenu(): Product;

    public anounceMenu(): string {
        const product = this.foodMenu();
        return `We can cook for you ${product.meal()}! Just wait ${product.time()} minutes!`;
    }
}

class BurgerCreator extends Kitchen {
    public foodMenu(): Product {
        return new BurgerProduct();
    }
    public anounceMenu(): string {
        const product = this.foodMenu();
        return `We can cook for you ${product.meal()}!`;
    }
}

class BurgerProduct {
    public meal(): string {
        return `best burgers`;
    }
    public time(): number {
        return 5;
    }
}

class PizzaCreator extends Kitchen {
    public foodMenu(): Product {
        return new PizzaProduct();
    }
    public anounceMenu(): string {
        const product = this.foodMenu();
        return `We can cook for you ${product.meal()}!`;
    }
}

class PizzaProduct {
    public meal(): string {
        return `real italian pizza`;
    }
}

function welcome(kitchen: Kitchen) {
    console.log(`Welcome to our restaurant!`);
    console.log(kitchen.anounceMenu());
}

welcome(new BurgerCreator());
console.log('');
welcome(new PizzaCreator());

