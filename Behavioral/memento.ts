class Memento {
    public score: number;
    public level: number;
    public health: number;

    constructor(score: number, level: number, health: number) {
        this.score = score;
        this.level = level;
        this.health = health;
    }
}

class CareTaker {
    originator1: GameCharacter;
    mementos1: Memento[];

    constructor(originator: GameCharacter) {
        this.originator1 = originator;
        this.mementos1 = [];
    }

    public save(): void {
        console.log(`Game Saved`);
        const mementor = this.originator1.memento;
        this.mementos1.push(mementor);
    }

    public restore(index: number): void {
        const memento = this.mementos1[index]
        this.originator1.memento = memento
    }
}

class GameCharacter {
    score1: number;
    level1: number;
    health1: number;

    constructor() {
        this.score1 = 0;
        this.level1 = 0;
        this.health1 = 100;
    }

    public getScore(): number {
        return this.score1;
    }

    public registerKill(): void {
        this.score1 += 100;
    }

    public getLevel(): number {
        return this.level1;
    }

    public progressToNextLevel(): void {
        this.level1 = this.level1 + 1
    }

    public getHealth(): number {
        return this.health1;
    }

    public damage(points: number): void {
        this.health1 -= points;
    }

    public status(): string {
        return (
            `Score: ${this.score1}, ` +
            `Level: ${this.level1}, ` +
            `Health: ${this.health1}`
        );
    }

    public get memento(): Memento {
        return new Memento(
            this.score1,
            this.level1,
            this.health1
        )
    }

    public set memento(value: Memento) {
        this.score1 = value.score;
        this.level1 = value.level;
        this.health1 = value.health;
    }
      
}

const Pac = new GameCharacter();
const care = new CareTaker(Pac);

console.log(``);
Pac.registerKill();
Pac.damage(5);
console.log(Pac.status());
care.save();
console.log(``);

Pac.registerKill();
Pac.damage(10);
console.log(Pac.status());
care.save();
console.log(``);

Pac.registerKill();
Pac.damage(7);
Pac.progressToNextLevel();
console.log(Pac.status());
care.save();

care.restore(0);
console.log(``);
console.log(Pac.status());
console.log(``);