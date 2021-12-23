interface ISubject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(news: String): void;
}

interface IObserver {
    update(news: string): void;
}

class Restaurant implements ISubject {
    private observers: Observer[] = [];

    public subscribe(observer: Observer) {
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer) {
        this.observers = this.observers.filter((element)=>{
            return observer.name !== element.name;
        })
    }

    public notify(news: string) {
        this.observers.forEach(observer => {
            observer.update(news);
        })
    }
} 

class Observer implements IObserver {
    constructor(public readonly name:string) {}

    private feed: string[] = []; 

    public update(news: string): void {
        this.feed.push(news)
        console.log(`${this.name} recieved a discounts`);
    }

    public showFeed(): void {
        console.log(`${this.name}: ${this.feed}`);
    }
}

const jan = new Observer(`Jan`);
const victoria = new Observer(`Victoria`);
const rest = new Restaurant();

rest.subscribe(jan);
rest.subscribe(victoria);
rest.notify(`Monday pizza -50%!`);
rest.unsubscribe(victoria);
rest.notify(`Tuesday sushi 1+1=3!`);
jan.showFeed();
victoria.showFeed();