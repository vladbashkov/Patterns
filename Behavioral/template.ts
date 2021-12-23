abstract class AITemplate {
    public templateMethod(): void {
        this.force();
        this.intelligence();
        this.agility();
    }

    public force(): number {
        return 0;
    }

    public intelligence(): number {
        return 0;
    }

    public agility(): number {
        return 0;
    }
}

class Cleric extends AITemplate {
    force(): number {
        return 50;
    }

    intelligence(): number {
        return 90;
    }

    agility(): number {
        return 70;
    }
}

class Warrior extends AITemplate {
    force(): number {
        return 95;
    }

    intelligence(): number {
        return 60;
    }

    agility(): number {
        return 70;
    }
}

class Assassin extends AITemplate {
    force(): number {
        return 60;
    }

    intelligence(): number {
        return 75;
    }

    agility(): number {
        return 90;
    }
}

const clerik = new Cleric();
const warrior = new Warrior();
const assassin = new Assassin();

clerik.templateMethod();
console.log(``);
console.log(`Clerik`);
console.log(`Force - ${clerik.force()}`);
console.log(`Agility - ${clerik.agility()}`);
console.log(`Intelligence - ${clerik.intelligence()}`);
console.log(``);

warrior.templateMethod();
console.log(`Warrior`);
console.log(`Force - ${warrior.force()}`);
console.log(`Agility - ${warrior.agility()}`);
console.log(`Intelligence - ${warrior.intelligence()}`);
console.log(``);

assassin.templateMethod();
console.log(`Assassin`);
console.log(`Force - ${assassin.force()}`);
console.log(`Agility - ${assassin.agility()}`);
console.log(`Intelligence - ${assassin.intelligence()}`);
console.log(``);