class ChatRoom {
    public sender: string;

    public sendMessage(user: User, message: string): void {
        this.sender = user.getName();

        return console.log(`[${this.sender}]:${message}`);
    }
}

class User {
    public name: string;
    public chat: ChatRoom;

    constructor(name: string, chat: ChatRoom) {
        this.name = name;
        this.chat = chat;
    }

    public getName(): string {
        return this.name;
    }

    public send(msg: string): any {
        this.chat.sendMessage(this, msg);
    }
}

const chatRoom = new ChatRoom();
const jessica = new User(`Jessica Wane`, chatRoom);
const brad = new User(`Brad Collins`, chatRoom);

jessica.send(`Hello, do you need any help with your order?`);
brad.send(`Good morning, yes!`)



