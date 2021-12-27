interface Battle {
    move(location: [number, number]): void;
    attack?(target: string, location: [number, number]): void;
    heal?(mate: string, location: [number, number]): void;
}

class Unit implements Battle {
    private equipment: string;
    number: number;

    constructor(set: string, number: number) {
        this.equipment = set;
        this.number = number;
        console.log(`New unit ${number}`);
    }

    move(locatin: [number, number]): void {
        console.log(`Move to ${locatin}`);
    }

    attack?(target: string, location: [number, number]): void {
        console.log(`Attack ${target} at ${location}`);
    }

    heal?(mate: string, location: [number, number]): void {
        console.log(`Heal ${mate} at ${location}`);
    }
}

class UnitFactory {
    private static groups: { [set: string]: Unit } = {};

    public static getUnit(set: string, num: number) {
        let unit = UnitFactory.groups[set];

        if(!unit) {
            unit = new Unit(set, num);
            UnitFactory.groups[set] = unit;
        } else {
            unit.number = num;
            console.log(`Same unit ${unit.number}`);
        }

        return unit;
    }
}

for(let i=0; i<100; i++) {
    // new Unit(`base`, i);
    UnitFactory.getUnit(`base`, i);
}
