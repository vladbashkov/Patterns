interface UnitsObject {
    title: string;
    operate(): void;
}

class Team implements UnitsObject {
    title: string;
    private unitsArr: UnitsObject[];

    constructor(title: string) {
        this.title = title;
        this.unitsArr = [];
    }

    public operate(): void {
        console.log(`${this.title} units operates`);
        this.unitsArr.map((unit: UnitsObject) => {
            unit.operate();
        });
    }

    public addUnit(newUnit: UnitsObject): void {
        const units = this.unitsArr.filter((unit: UnitsObject, index) => {
            return unit.title === newUnit.title;
        });
        if(units.length < 1) {
            console.log(`${newUnit.title} join ${this.title}`);
            this.unitsArr.push(newUnit);
        } else {
            console.log(`This unit is already in the team`);
        }
    }

    public goneUnit(deadUnit: UnitsObject): void {
        const gones = this.unitsArr.map((unit: UnitsObject, index) => {
            if(unit.title === deadUnit.title) {
                return index;
            };
        });
        if(gones.length > 0) {
            console.log(`${deadUnit.title} is gone in actions`);
            this.unitsArr.slice(gones[0], 1);
        } else {
            console.log(`No battle casualties`);
        }
    }
}

class Operators implements UnitsObject {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    operate(): void {
        console.log(`${this.title} unit operates`);
    }
}

const attackersTeam = new Team(`Rainbow Six Attackers`);
const defendersTeam = new Team(`Rainbow Six Defenders`);

const osa = new Operators(`Osa`);
const ash = new Operators(`Ash`);
const buck = new Operators(`Buck`);
attackersTeam.addUnit(osa);
attackersTeam.addUnit(ash);
attackersTeam.addUnit(buck);
console.log(``);

const thorn = new Operators(`Thorn`);
const oryx = new Operators(`Oryx`);
const ela = new Operators(`Ela`);
defendersTeam.addUnit(thorn);
defendersTeam.addUnit(oryx);
defendersTeam.addUnit(ela);
console.log(``);

attackersTeam.operate();
console.log(``);

defendersTeam.operate();
console.log(``);


attackersTeam.goneUnit(buck);
console.log(``);

defendersTeam.goneUnit(oryx);