class Margherita {
    constructor(size: number, topping: string, souce: string) {
        this.size = size;
        this.topping = topping;
        this.souce = souce;
    }
    
    public size: number;
    public topping: string;
    public souce: string;

    public clone() {
        return new Margherita(this.size, this.topping, this.souce);
    }
}

const MargheritaPizza = new Margherita(30, `cheese`, `ketchup`);

const prototype1 = MargheritaPizza.clone();
const prototype2 = MargheritaPizza.clone();
const prototype3 = MargheritaPizza.clone();

prototype1.size = 20;
prototype1.souce= `mayo`;

console.log(prototype1);
console.log(``);
console.log(prototype2);
console.log(``);
console.log(prototype3);