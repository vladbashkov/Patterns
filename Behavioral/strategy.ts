interface MakeFavorite {
    start(): void;
}

class Abs implements MakeFavorite {
    public start(): void {
        console.log(`Пресс качат`);
    }
}

class Running implements MakeFavorite {
    public start(): void {
        console.log(`Бегит`);
    }
}

class HorizontalBar implements MakeFavorite {
    public start(): void {
        console.log(`Турник`);
    }
}

class PushUp implements MakeFavorite {
    public start(): void {
        console.log(`Анжумания`);
    }
}

class Sportsman {
    public name: string;
    public favoriteWorkout: MakeFavorite;

    constructor(name: string, favoriteWorkout: MakeFavorite) {
        this.name = name;
        this.favoriteWorkout = favoriteWorkout;
    }

    public workout(): void {
        console.log(`${this.name} советует:`);
        this.favoriteWorkout.start();
    }
}

let durov: Sportsman;
const arr = [new Abs(), new Running(), new HorizontalBar(), new PushUp()];
arr.forEach(item => {
    durov = new Sportsman(`Павел Дуров`, item);
    durov.workout();
});