abstract class AITemplate {
    public sumForce: number = 50;
    public sumIntelligence: number = 50;
    public sumAgility: number = 50;
    public templateMethod(): void {
        this.force();
        this.intelligence();
        this.agility();
    }

    public force(points: number = 0): number {
        return this.sumForce + points;
    }

    public intelligence(points: number = 0): number {
        return this.sumIntelligence + points;
    }

    public agility(points: number = 0): number {
        return this.sumAgility + points;
    }
}

class Cleric extends AITemplate {
    force(points: number = 0): number {
        return this.sumForce;
    }

    intelligence(points: number = 0): number {
        return this.sumIntelligence + points;
    }

    agility(points: number = 0): number {
        return this.sumAgility + points;
    }
}

class Warrior extends AITemplate {
    force(points: number = 0): number {
        return this.sumForce + points;
    }

    intelligence(points: number = 0): number {
        return this.sumIntelligence + points;
    }

    agility(points: number = 0): number {
        return this.sumAgility + points;
    }
}

class Assassin extends AITemplate {
    force(points: number = 0): number {
        return this.sumForce + points;
    }

    intelligence(points: number = 0): number {
        return this.sumIntelligence + points;
    }

    agility(points: number = 0): number {
        return this.sumAgility + points;
    }
}

const clerik = new Cleric();
const warrior = new Warrior();
const assassin = new Assassin();

clerik.templateMethod();
console.log(``);
console.log(`Clerik`);
console.log(`Force - ${clerik.force()}`);
console.log(`Agility - ${clerik.agility(20)}`);
console.log(`Intelligence - ${clerik.intelligence(40)}`);
console.log(``);

warrior.templateMethod();
console.log(`Warrior`);
console.log(`Force - ${warrior.force(45)}`);
console.log(`Agility - ${warrior.agility(20)}`);
console.log(`Intelligence - ${warrior.intelligence(10)}`);
console.log(``);

assassin.templateMethod();
console.log(`Assassin`);
console.log(`Force - ${assassin.force(10)}`);
console.log(`Agility - ${assassin.agility(40)}`);
console.log(`Intelligence - ${assassin.intelligence(25)}`);
console.log(``);