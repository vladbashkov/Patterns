interface MakePizza {
    type: string;
    size: number;
    topping: string;
}

class PizzaBuilder {
    private readonly pizza: MakePizza;

    constructor () {
        this.pizza = {
            type: ``,
            size: 30,
            topping: `cheese`,
        }
    }

    type(type: string): PizzaBuilder {
        this.pizza.type = type;
        return this;
    }

    size(size: number): PizzaBuilder {
        this.pizza.size = size;
        return this;
    }

    topping(topping: string): PizzaBuilder {
        this.pizza.topping = topping;
        return this;
    }

    build(): MakePizza {
        return this.pizza;
    }
}

const Margherita = new PizzaBuilder()
    .type(`Margherita`)
    .size(30)
    .topping(`Cheese`)

const Pepperoni = new PizzaBuilder()
    .type(`Pepperoni`)
    .size(20)
    .topping(`Double cheese`)

console.log(Margherita);
console.log(Pepperoni);