interface PizzaMenu {
    pizzaRecomendation(): string;
}

interface SushiMenu {
    sushiRecomendation(): string;
    sushiInfo(): string;
}

interface Kitchen {
    makePizza(): PizzaMenu;
    makeSushi(): SushiMenu;
}

class ChefRecommendation implements Kitchen {
    public makePizza(): PizzaMenu {
        return new Margherita();
    }

    public makeSushi(): SushiMenu {
        return new Nigiri();
    }
}

class BestPrice implements Kitchen {
    public makePizza(): PizzaMenu {
        return new Marinara();
    }

    public makeSushi(): SushiMenu {
        return new Sashimi();
    }
}

class Margherita {
    pizzaRecomendation() {
        return `Our Chef could recommend you Margherita Pizza!`
    }
}

class Nigiri {
    sushiRecomendation() {
        return `Our Chef could recommend you Nigiri Sushi!`
    }
    sushiInfo() {
        return `With the freshest fish!`
    }
}

class Marinara {
    pizzaRecomendation() {
        return `We have the best price for Marinara Pizza!`
    }
}

class Sashimi {
    sushiRecomendation() {
        return `We have the best price for Sashimi Sushi!`
    }
    sushiInfo() {
        return `And it's still the freshest fish!`
    }
}

function menuAnounce(factory: Kitchen) {
    const firstAnounce = factory.makePizza();
    const secondAnounce = factory.makeSushi();

    console.log(firstAnounce.pizzaRecomendation());
    console.log(secondAnounce.sushiRecomendation());
    console.log(secondAnounce.sushiInfo());
}

menuAnounce(new ChefRecommendation());
console.log('');
menuAnounce(new BestPrice());

