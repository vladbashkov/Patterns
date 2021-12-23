var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
    }
    ChatRoom.prototype.sendMessage = function (user, message) {
        this.sender = user.getName();
        return console.log("[".concat(this.sender, "]:").concat(message));
    };
    return ChatRoom;
}());
var User = /** @class */ (function () {
    function User(name, chat) {
        this.name = name;
        this.chat = chat;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.send = function (msg) {
        this.chat.sendMessage(this, msg);
    };
    return User;
}());
var chatRoom = new ChatRoom();
var jessica = new User("Jessica Wane", chatRoom);
var brad = new User("Brad Collins", chatRoom);
jessica.send("Hello, do you need any help with your order?");
brad.send("Good morning, yes!");
