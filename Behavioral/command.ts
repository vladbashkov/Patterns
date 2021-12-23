interface Command {
    execute(): any;
    undo(): any;
}

class TV {
    state: Boolean = false;

    on(): Boolean {
        return this.state = true;
    }

    off(): Boolean {
        return this.state = false;
    }
}

class onTV implements Command {
    television: TV;

    constructor(television: TV) {
        this.television = television;
    }

    execute(): Boolean {
        return this.television.on();
    }

    undo(): Boolean {
        return this.television.off();
    }
}

class offTV implements Command {
    television: TV;

    constructor(television: TV) {
        this.television = television;
    }

    execute(): Boolean {
        return this.television.off();
    }

    undo(): Boolean {
        return this.television.on();
    }
}

class Remote {
    onCommand: Command;
    offCommand: Command;

    setCommand(onCommand: Command, offCommand: Command) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    }

    onButtonClick(): Boolean {
        return this.onCommand.execute();
    }
    
    offButtonClick(): Boolean {
        return this.offCommand.execute();
    }
}

let television = new TV(),
    televisionOn = new onTV(television),
    televisionOff = new offTV(television),
    remote = new Remote();

remote.setCommand(televisionOn, televisionOff);

console.log(`TV before remote is used: ${television.state}`);
console.log(``);
remote.onButtonClick();
console.log(`TV after remote is used: ${television.state}`);
console.log(``);
remote.offButtonClick();
console.log(`TV remote is used again: ${television.state}`);