interface Visitable {
    accept(operation: Visitor): void;
}

class Dog implements Visitable {
    public voice(): void {
        console.log(`Baw waw`);
    }

    public accept(operation: Visitor): void {
        operation.visitDog(this);
    }
}

class Cat implements Visitable {
    public voice(): void {
        console.log(`Meow meow`);
    }

    public accept(operation: Visitor): void {
        operation.visitCat(this);
    }
}

class Cow implements Visitable {
    public voice(): void {
        console.log(`Moo moo`);
    }

    public accept(operation: Visitor): void {
        operation.visitCow(this);
    }
}

class Visitor {
    visitDog(dog) {
        console.log(`This is dog visitor`);
    }

    visitCat(cat) {
        console.log(`This is cat visitor`);
    }

    visitCow(cow) {
        console.log(`This is cow visitor`);
    }
}

class voiceVisitor extends Visitor {
    visitDog(dog) {
        dog.voice();
    }

    visitCat(cat) {
        cat.voice();
    }

    visitCow(cow) {
        cow.voice();
    }
}

class jumpVisitor extends Visitor {
    visitDog(dog) {
        console.log(`The highest jump by a dog is 191cm`);
    }

    visitCat(cat) {
        console.log(`A cat can jump about 150cm`);
    }

    visitCow(cow) {
        console.log(`Cow can not jump at all`);
    }
}

const dog = new Dog();
const cat = new Cat();
const cow = new Cow();
const voice = new voiceVisitor();
const jump = new jumpVisitor();

dog.accept(voice);
cat.accept(voice);
cow.accept(voice);

dog.accept(jump);
cat.accept(jump);
cow.accept(jump);