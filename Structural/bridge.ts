abstract class Commander {
    executeObject: Execute;

    constructor(executeObject: Execute) {
        this.executeObject = executeObject;
    }

    public order(): void {
        this.executeObject.operate();
    }
}

class ArchersCommander extends Commander {
    public order(): void {
        console.log(`Archers Commander made order:`);
        super.order();
    }
}

class KnightsCommander extends Commander {
    public order(): void {
        console.log(`Knights Commander made order:`);
        super.order();
    }
}

class CavalrysCommander extends Commander {
    public order(): void {
        console.log(`Cavalry's Commander made order:`);
        super.order();
    }
}

interface Execute {
    operate(): void;
}

class Archer implements Execute {
    operate(): void {
        console.log(`Shoot`);
    }
}

class Knight implements Execute {
    operate(): void {
        console.log(`Defend`);
    }
}

class Cavalry implements Execute {
    operate(): void {
        console.log(`Attack`);
    }
}

const archerCommander = new ArchersCommander(new Archer());
const knightCommander = new KnightsCommander(new Knight());
const cavalryCommander = new CavalrysCommander(new Cavalry());

archerCommander.order();
console.log(``);
knightCommander.order();
console.log(``);
cavalryCommander.order();